# Image Generation Prompts

Every photo currently on the site (`public/images/`) is a free-license stock photo
from [Pexels](https://www.pexels.com/license/) — generic technicians and scenes, not
your actual team or trucks. The Pexels License permits free commercial use and
modification with no attribution required, so they're safe to use as-is, but they
aren't unique to your brand. See **Current stock photos** below for exactly which
photo is used where, and use the prompts in this file whenever you want to replace one
with a custom, on-brand photo (real photography of your team, or AI-generated to match
your brand).

To replace an image: generate/obtain the new photo, save it over the existing file at
the same path (or a new path + update the `src` in `src/lib/services.ts` /
`src/components/Hero.tsx` / `src/components/Financing.tsx`), and you're done — no
other code changes needed.

All prompts share a consistent visual style — a technician in a clean dark navy
uniform, warm natural lighting, shallow depth of field, editorial/commercial
photography quality, no visible text or logos — so the finished photos read as one
cohesive shoot even though they're generated separately.

## Hero — `public/images/hero-technician.jpg`

Aspect ratio: 4:5 (portrait)

> Professional commercial photography: a confident HVAC technician in a clean dark
> navy uniform standing beside an outdoor air conditioning condenser unit at a modern
> suburban home, mid-repair with a tool in hand, warm late-afternoon sunlight,
> shallow depth of field, high resolution, editorial quality, no visible text, logos,
> or brand names, portrait 4:5 aspect ratio.

## Financing — `public/images/financing.jpg`

Aspect ratio: 4:3

> Professional commercial photography: a homeowner and an HVAC technician standing in
> a bright living room reviewing a tablet or paperwork together, friendly and
> reassuring interaction, natural window light, shallow depth of field, high
> resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect
> ratio.

## Why Choose Us — `public/images/why-choose-us-home.jpg`

Aspect ratio: 4:5 (portrait)

> Professional real estate photography: an attractive two-story suburban home
> exterior at dusk with warm golden-hour lighting, well-maintained lawn and
> landscaping, driveway leading to the garage, cozy illuminated windows. Clean
> modern craftsman-style architecture, inviting curb appeal, shot on DSLR,
> shallow depth of field, high resolution, no visible text, logos, house
> numbers, or people, portrait 4:5 aspect ratio.

## Service pages — `public/images/services/<slug>.jpg`

Aspect ratio: 4:3. These prompts also live in `src/lib/services.ts` on each service's
`image.prompt` field.

| Service                 | File                          | Prompt                                                                                                                                                                        |
| ----------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC Repair               | `ac-repair.jpg`               | A focused HVAC technician kneeling beside an outdoor air conditioning condenser unit in a suburban backyard, using a multimeter to diagnose the system, tool bag open nearby. |
| AC Installation         | `ac-installation.jpg`         | Two HVAC technicians carefully installing a new outdoor air conditioning condenser unit on a concrete pad beside a house, one leveling the unit.                              |
| AC Replacement          | `ac-replacement.jpg`          | An HVAC technician removing an old outdoor air conditioner unit from a concrete pad while a new energy-efficient unit waits nearby in a suburban backyard.                    |
| Heating Repair          | `heating-repair.jpg`          | An HVAC technician inspecting an indoor furnace unit in a home utility room or basement, using a flashlight and hand tools.                                                   |
| Furnace Repair          | `furnace-repair.jpg`          | Close-up of an HVAC technician's hands adjusting the internal components of an open furnace unit, tools laid out on a cloth nearby.                                           |
| Furnace Installation    | `furnace-installation.jpg`    | An HVAC technician installing a new furnace unit in a clean home basement or utility closet, ductwork visible.                                                                |
| Heat Pump Services      | `heat-pump-services.jpg`      | An HVAC technician servicing an outdoor heat pump unit with a light dusting of frost, checking a pressure gauge.                                                              |
| HVAC Installation       | `hvac-installation.jpg`       | Two HVAC technicians installing a complete residential HVAC system, indoor air handler and outdoor condenser unit both visible.                                               |
| HVAC Replacement        | `hvac-replacement.jpg`        | An HVAC technician standing next to a newly installed modern HVAC outdoor unit, clipboard in hand reviewing a completed installation checklist.                               |
| HVAC Maintenance        | `hvac-maintenance.jpg`        | An HVAC technician performing a seasonal maintenance tune-up on an outdoor condenser unit, cleaning the coils.                                                                |
| Emergency HVAC Service  | `emergency-hvac.jpg`          | An HVAC technician arriving at a home's front door at dusk with a tool bag, service van with warm headlights visible in the driveway.                                         |
| Indoor Air Quality      | `indoor-air-quality.jpg`      | An HVAC technician installing a whole-home air purifier or humidifier unit next to a furnace in a clean, bright utility room.                                                 |
| Ductwork Services       | `ductwork-services.jpg`       | An HVAC technician inspecting exposed ductwork in a home attic or basement using a flashlight, sealing a duct joint with tape.                                                |
| Thermostat Installation | `thermostat-installation.jpg` | Close-up of an HVAC technician mounting a modern smart thermostat on a wall in a bright hallway.                                                                              |
| Commercial HVAC         | `commercial-hvac.jpg`         | An HVAC technician on a rooftop servicing a large commercial HVAC unit, business park or city skyline in the background.                                                      |

Each row's short description is the scenario only — combine it with the shared style
line at the top of this doc (or just copy the full prompt straight from
`src/lib/services.ts`) for the complete prompt.

## Current stock photos (Pexels, free license, no attribution required)

| File                                   | Source                                                                                                                 |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `hero-technician.jpg`                  | Custom AI-generated photo (replaced the Pexels stock photo) — matches the hero prompt above.                           |
| `financing.jpg`                        | [pexels.com/photo/8439647](https://www.pexels.com/photo/people-having-conversation-8439647/)                           |
| `services/ac-repair.jpg`               | [pexels.com/photo/5463575](https://www.pexels.com/photo/man-checking-an-air-conditioner-5463575/)                      |
| `services/ac-installation.jpg`         | [pexels.com/photo/5463581](https://www.pexels.com/photo/man-drilling-an-aircon-casing-5463581/)                        |
| `services/ac-replacement.jpg`          | [pexels.com/photo/5463580](https://www.pexels.com/photo/man-repairing-an-aircon-5463580/)                              |
| `services/heating-repair.jpg`          | [pexels.com/photo/7859953](https://www.pexels.com/photo/plumber-repairing-power-source-7859953/)                       |
| `services/furnace-repair.jpg`          | [pexels.com/photo/34938439](https://www.pexels.com/photo/technician-repairing-heating-system-in-workshop-34938439/)    |
| `services/furnace-installation.jpg`    | [pexels.com/photo/34938442](https://www.pexels.com/photo/technician-maintaining-heating-system-in-workshop-34938442/)  |
| `services/heat-pump-services.jpg`      | [pexels.com/photo/38067323](https://www.pexels.com/photo/modern-heat-pump-outside-new-building-38067323/)              |
| `services/hvac-installation.jpg`       | [pexels.com/photo/6471913](https://www.pexels.com/photo/man-repairing-cables-in-a-car-6471913/)                        |
| `services/hvac-replacement.jpg`        | [pexels.com/photo/7347538](https://www.pexels.com/photo/man-in-gray-t-shirt-fixing-the-aircon-7347538/)                |
| `services/hvac-maintenance.jpg`        | [pexels.com/photo/32588555](https://www.pexels.com/photo/technician-performing-air-conditioning-maintenance-32588555/) |
| `services/emergency-hvac.jpg`          | [pexels.com/photo/6471911](https://www.pexels.com/photo/man-with-tools-at-work-6471911/)                               |
| `services/indoor-air-quality.jpg`      | [pexels.com/photo/36861984](https://www.pexels.com/photo/modern-air-purifier-in-repair-workshop-36861984/)             |
| `services/ductwork-services.jpg`       | [pexels.com/photo/8297856](https://www.pexels.com/photo/an-air-duct-of-a-building-8297856/)                            |
| `services/thermostat-installation.jpg` | [pexels.com/photo/34558052](https://www.pexels.com/photo/man-adjusting-thermostat-in-modern-home-interior-34558052/)   |
| `services/commercial-hvac.jpg`         | [pexels.com/photo/5463587](https://www.pexels.com/photo/repairman-repairing-a-air-conditioner-5463587/)                |

A few (hero, AC repair, financing, HVAC installation, HVAC replacement, HVAC
maintenance, emergency, ductwork, thermostat) show a real technician; a few (heat pump,
furnace) show equipment/workshop scenes since a closer topical match with a person
wasn't available for free. All read as generic/stock rather than depicting Element
HVAC's actual team — replace with real photos of your team and trucks whenever you're
ready for a more authentic, differentiated look.

## After generating a replacement

1. Save the new file at the same path under `public/` (or a new path + update the
   `src` reference).
2. That's it — no other code changes needed, since every image is a `next/image`
   `<Image>` already wired to these paths.
