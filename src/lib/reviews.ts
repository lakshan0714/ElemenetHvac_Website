// Sample/dummy reviews used to design the review carousel. Replace every
// entry with real, permissioned customer reviews (e.g. from Google Business
// Profile) before this site goes live — do not present these as real.

export interface Review {
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  serviceType: string;
  quote: string;
}

export const reviews: Review[] = [
  {
    name: "Mike R.",
    location: "Central PA",
    rating: 5,
    serviceType: "Furnace Repair",
    quote:
      "Our furnace quit on the coldest night of the year and they had someone out fast. Straightforward pricing, no upsell games — just got it fixed right.",
  },
  {
    name: "Dana W.",
    location: "Central PA",
    rating: 5,
    serviceType: "AC Installation",
    quote:
      "You could tell the crew actually knew what they were doing. Clean install, walked us through the new thermostat, and left the place spotless.",
  },
  {
    name: "Tom H.",
    location: "Central PA",
    rating: 5,
    serviceType: "HVAC Maintenance",
    quote:
      "Been on their maintenance plan for two seasons now. Appreciate that they're upfront and don't try to sell you stuff you don't need.",
  },
  {
    name: "Lauren K.",
    location: "Central PA",
    rating: 5,
    serviceType: "Emergency HVAC Service",
    quote:
      "Called at 10pm with no heat and a technician actually picked up and talked me through it before coming out first thing. Really appreciated that.",
  },
  {
    name: "Greg S.",
    location: "Central PA",
    rating: 5,
    serviceType: "Heat Pump Services",
    quote:
      "As a veteran myself, I liked knowing I was supporting a veteran-owned crew. Work was disciplined and exactly on schedule.",
  },
  {
    name: "Patricia N.",
    location: "Central PA",
    rating: 5,
    serviceType: "Ductwork Services",
    quote:
      "Found and fixed a duct leak that two other companies missed. Explained everything in plain English before doing any work.",
  },
];
