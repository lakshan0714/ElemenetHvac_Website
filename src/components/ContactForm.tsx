"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { contactFormSchema } from "@/lib/contact-schema";
import { trackEvent } from "@/lib/analytics";
import { CheckCircle, AlertTriangle } from "@/components/ui/icons";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-ink-100 bg-white px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-300 focus-visible:outline-2 focus-visible:outline-accent-500";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);

  const handleFocusOnce = () => {
    if (!started) {
      setStarted(true);
      trackEvent("estimate_form_started");
    }
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    // Captured before the first `await` — `event.currentTarget` is nulled
    // out by the browser once the synchronous event phase ends.
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      trackEvent("estimate_form_submitted");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-ink-100 bg-ink-50 p-10 text-center">
        <CheckCircle className="h-10 w-10 text-accent-600" />
        <h3 className="text-xl font-bold text-brand-950">Request Received</h3>
        <p className="max-w-sm text-base text-ink-500">
          Thanks for reaching out — a member of our team will contact you shortly. For
          urgent issues, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFocusOnce}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Honeypot — hidden from real users, catches simple bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-base font-semibold text-brand-950"
        >
          Full Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
        {errors.name && <p className="mt-1 text-base text-red-600">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-base font-semibold text-brand-950"
          >
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
          {errors.phone && <p className="mt-1 text-base text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-base font-semibold text-brand-950"
          >
            Email Address
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
          {errors.email && <p className="mt-1 text-base text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-base font-semibold text-brand-950"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-base text-red-600">{errors.service}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="preferredWhen"
          className="mb-1.5 block text-base font-semibold text-brand-950"
        >
          Preferred Date/Time <span className="font-normal text-ink-300">(optional)</span>
        </label>
        <input
          id="preferredWhen"
          name="preferredWhen"
          type="text"
          placeholder="e.g. Weekday mornings"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-base font-semibold text-brand-950"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClasses}
          placeholder="Tell us what's going on..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-red-50 px-4 py-3 text-base text-red-700">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          Something went wrong submitting your request. Please try again or call us
          directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request Service"}
      </button>

      <p className="text-base text-ink-300">
        We respect your privacy. Your information is only used to respond to your request
        and is never sold or shared.
      </p>
    </form>
  );
}
