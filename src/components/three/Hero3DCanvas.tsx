"use client";

import { Suspense, useState } from "react";
import { FanScene } from "./FanScene";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

interface CapabilityState {
  ready: boolean;
  reduceMotion: boolean;
}

// This component is only ever mounted on the client (via a dynamic import
// with ssr:false), so it's safe to resolve these browser-only checks once,
// synchronously, in the initial state rather than via an effect.
function getInitialCapabilities(): CapabilityState {
  const isSmallViewport = window.innerWidth < 1024;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return {
    reduceMotion: prefersReduced,
    ready: !isSmallViewport && hasWebGL(),
  };
}

export function Hero3DCanvas() {
  const [{ ready, reduceMotion }] = useState(getInitialCapabilities);

  if (!ready) return null;

  return (
    <div
      className="h-full w-full animate-fade-up opacity-0"
      style={{ animationDelay: "150ms" }}
    >
      <Suspense fallback={null}>
        <FanScene reduceMotion={reduceMotion} />
      </Suspense>
    </div>
  );
}
