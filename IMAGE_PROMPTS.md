# Image Generation Prompts

Every image on the site is currently a placeholder block. Use these prompts with an
image generator (e.g. OpenAI's image tools) to create matching photos, then save each
file at the exact path listed and swap the corresponding `PlaceholderImage` for a real
`next/image` `<Image>` (or ask me to do the swap once the files exist).

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

## After generating

1. Save files at the exact paths above under `public/`.
2. Let me know (or do it yourself) — each `PlaceholderImage` usage gets swapped for
   `next/image`'s `<Image>` with the matching `src`/`alt`/`sizes`, which is a small,
   mechanical change once the files exist.
