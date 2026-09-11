import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function Phone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 4h3.2l1.4 4.3-2 1.6a12.5 12.5 0 0 0 5.5 5.5l1.6-2 4.3 1.4V18a2 2 0 0 1-2.1 2C10.6 19.6 4.4 13.4 4 7.1A2 2 0 0 1 4.5 4Z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg {...base({ ...props, fill: "currentColor", stroke: "none" })}>
      <path d="M12 2.5 14.9 8.6 21.5 9.6 16.8 14.2 17.9 20.8 12 17.6 6.1 20.8 7.2 14.2 2.5 9.6 9.1 8.6 12 2.5Z" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v5.5c0 4.6 3 8 7 9.5 4-1.5 7-4.9 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function Snowflake(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11" />
      <path d="M12 5 9.7 6.8M12 5l2.3 1.8M12 19l-2.3-1.8M12 19l2.3-1.8" />
    </svg>
  );
}

export function Flame(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 22c4 0 6.5-2.7 6.5-6.2 0-3-1.8-4.7-3-6.6-.4 1.7-1.3 2.7-2.3 3.3.2-2.4-.5-5-3-7.5-.4 3-1.7 4.7-3.3 6.4C5.5 12.7 5 14 5 15.8 5 19.3 8 22 12 22Z" />
    </svg>
  );
}

export function Wind(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 12.5h15a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M3 17h9a2 2 0 1 1-2 2" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg {...base({ ...props, fill: "currentColor", stroke: "none" })}>
      <path d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.1H9.3v2.8h2.4V21h2.8Z" />
    </svg>
  );
}

export function Award(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8.5" r="5" />
      <path d="M8.5 12.8 7 21l5-2.5 5 2.5-1.5-8.2" />
    </svg>
  );
}

export function Wrench(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.3 2.4 2.4 4.6-5" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 6.5 7.5 6 7.5-6" />
    </svg>
  );
}

export function AlertTriangle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4 3 20h18L12 4Z" />
      <path d="M12 10.5v4M12 17h.01" />
    </svg>
  );
}

export function DollarSign(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5v19M16.5 6.8c-.6-1-2-1.8-4-1.8-2.6 0-4.5 1.4-4.5 3.4 0 4.4 8.5 2.4 8.5 6.6 0 2-2 3.4-4.5 3.4-2.2 0-3.7-1-4.3-2" />
    </svg>
  );
}

export function Droplet(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" />
    </svg>
  );
}

export function Home(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5h12V10" />
      <path d="M10 19.5v-6h4v6" />
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M11 3.5 12.3 8l4.5 1.3-4.5 1.3L11 15l-1.3-4.4L5.2 9.3l4.5-1.3L11 3.5Z" />
      <path d="M18 15l.7 2.3 2.3.7-2.3.7L18 21l-.7-2.3-2.3-.7 2.3-.7L18 15Z" />
    </svg>
  );
}
