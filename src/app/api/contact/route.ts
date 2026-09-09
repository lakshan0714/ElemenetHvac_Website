import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

// Simple in-memory rate limit. This resets whenever the server process
// restarts and is per-instance only — sufficient as a first line of
// defense, but for production at scale replace with a durable store
// (e.g. Redis / Upstash) or rate limiting at the edge/WAF layer.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

// TODO: wire up real email/CRM delivery (e.g. Resend, SendGrid, or a CRM
// webhook) before launch. This currently only validates and logs the lead
// server-side so the form can be exercised end-to-end.
async function deliverLead(data: Record<string, unknown>) {
  console.log("[contact] new lead received", data);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Please check the form for errors.", issues: result.error.flatten() },
      { status: 400 },
    );
  }

  if (result.data.company) {
    // Honeypot tripped — silently accept without processing.
    return NextResponse.json({ success: true });
  }

  await deliverLead(result.data);

  return NextResponse.json({ success: true });
}
