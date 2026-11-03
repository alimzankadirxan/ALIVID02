"use client";

import { useEffect, useRef } from "react";
import { useFlags } from "@/hooks/use-flags";

export function CustomCursor() {
  const flags = useFlags();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flags.ready || flags.coarse || flags.mobile) return;
    document.documentElement.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(loop);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [flags]);

  if (!flags.ready || flags.coarse || flags.mobile) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[80] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[80] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 shadow-[0_0_18px_rgba(22,133,255,0.35)]"
      />
    </>
  );
}
