import type { Faq } from "@/lib/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "@/components/ui/icons";

export function FAQSection({
  faqs,
  id = "faq",
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  id?: string;
  title?: string;
}) {
  return (
    <section id={id} className="bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title={title} />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-ink-100 bg-white px-5 py-4 open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-950 marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-ink-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-base leading-relaxed text-ink-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
