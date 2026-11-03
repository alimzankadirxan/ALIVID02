"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 200 : 1600;
    const hide = window.setTimeout(() => setVisible(false), delay);
    const remove = window.setTimeout(() => setGone(true), delay + 700);
    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] grid place-items-center bg-[#050608] transition-opacity duration-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute inset-[-40px] rounded-full bg-accent/10 blur-3xl" />
        <Logo className="relative scale-125" />
        <div className="relative h-[2px] w-40 overflow-hidden bg-white/10">
          <span className="absolute inset-y-0 w-1/2 animate-[load_1.2s_ease_infinite] bg-accent" />
        </div>
        <p className="relative font-display text-[11px] tracking-[0.42em] text-white/50">
          SECURITY ENGINEERING
        </p>
      </div>
      <style>{`
        @keyframes load {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </div>
  );
}
