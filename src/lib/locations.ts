// Service area data. This ships with a single placeholder entry so the
// location-page template can be verified end-to-end. Add one entry per
// city/town genuinely serviced — avoid creating low-quality doorway pages
// for areas that aren't actually served.

export interface ServiceLocation {
  slug: string;
  name: string;
  state: string;
  blurb: string;
}

export const locations: ServiceLocation[] = [
  {
    slug: "add-your-city",
    name: "[Add Your City]",
    state: "[State]",
    blurb:
      "Replace this entry with a real city or town in your service area. Duplicate this file's structure for each additional location page.",
  },
];

export function getLocationBySlug(slug: string): ServiceLocation | undefined {
  return locations.find((location) => location.slug === slug);
}
