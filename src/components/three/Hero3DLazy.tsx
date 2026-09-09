"use client";

import dynamic from "next/dynamic";

const Hero3DCanvas = dynamic(
  () => import("./Hero3DCanvas").then((mod) => mod.Hero3DCanvas),
  { ssr: false },
);

export function Hero3DLazy() {
  return <Hero3DCanvas />;
}
