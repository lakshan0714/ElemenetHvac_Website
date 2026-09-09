"use client";

import { useRef } from "react";
import { reviews } from "@/lib/reviews";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";

export function ReviewSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Homeowners Say"
            align="left"
          />
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll reviews left"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-100 bg-white text-brand-950 hover:bg-ink-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll reviews right"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-100 bg-white text-brand-950 hover:bg-ink-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
