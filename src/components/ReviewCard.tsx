import type { Review } from "@/lib/reviews";
import { Star } from "@/components/ui/icons";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[300px] shrink-0 snap-start flex-col justify-between rounded-lg border border-ink-100 bg-white p-6 shadow-soft sm:w-[340px]">
      <div>
        <div className="flex items-center gap-0.5 text-accent-500">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4" />
          ))}
        </div>
        <blockquote className="mt-4 text-sm leading-relaxed text-ink-700">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-6 border-t border-ink-100 pt-4">
        <p className="text-sm font-bold text-brand-950">{review.name}</p>
        <p className="text-xs text-ink-500">
          {review.location} · {review.serviceType}
        </p>
      </figcaption>
    </figure>
  );
}
