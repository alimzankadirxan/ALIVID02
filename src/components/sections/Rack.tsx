"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Rack() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      const layers = el.querySelectorAll<HTMLElement>("[data-layer]");
      gsap.fromTo(
        layers,
        { y: (i) => (i - 2) * -48, opacity: 0.35 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "center 45%",
            scrub: 0.8,
          },
        },
      );
      gsap.to(el.querySelectorAll("[data-led]"), {
        opacity: 1,
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "center 60%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">EXPLODED VIEW</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">
            Отдельные компоненты. Единая система.
          </h2>
          <p className="mt-5 max-w-md text-white/55">
            Корпус, полки, видеорегистратор, коммутатор и патч-корды собираются в рабочий шкаф.
            Индикаторы на визуализации демонстрационные.
          </p>
        </Reveal>
        <div className="relative mx-auto h-[520px] w-full max-w-md [perspective:1200px]">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto flex h-full w-[230px] flex-col justify-center gap-3 [transform:rotateY(-18deg)_rotateX(8deg)]">
            <div
              data-layer
              className="h-10 rounded-t-xl border border-white/15 bg-[#1a222c] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
            <div data-layer className="h-6 rounded border border-white/10 bg-[#151c24]" />
            <div
              data-layer
              className="flex h-16 items-center justify-between rounded-lg border border-accent/40 bg-[#121922] px-4"
            >
              <span className="text-[10px] tracking-[0.2em] text-white/50">NVR</span>
              <span className="flex gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <i key={i} data-led className="block h-2 w-2 rounded-full bg-accent opacity-30" />
                ))}
              </span>
            </div>
            <div
              data-layer
              className="flex h-14 items-center justify-between rounded-lg border border-white/12 bg-[#121922] px-4"
            >
              <span className="text-[10px] tracking-[0.2em] text-white/50">SWITCH</span>
              <span className="flex gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <i
                    key={i}
                    data-led
                    className="block h-2 w-2 rounded-full bg-emerald-400 opacity-30"
                  />
                ))}
              </span>
            </div>
            <div data-layer className="grid grid-cols-6 gap-1 rounded-lg border border-white/10 p-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-8 rounded-sm bg-gradient-to-b from-blue-300/40 to-blue-700/50" />
              ))}
            </div>
            <div
              data-layer
              className="rounded-xl border border-white/12 bg-black/40 p-3 font-mono text-[10px] text-accent-2"
            >
              <p>SYSTEM STATUS</p>
              <p>PORTS: ACTIVE</p>
              <p>RECORDING: READY</p>
            </div>
            <div
              data-layer
              className="h-8 rounded-b-xl border border-white/15 bg-[#1a222c]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
