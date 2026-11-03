"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !line.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="method" ref={root} className="relative z-10 px-5 py-28 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">WORKFLOW</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">Как мы работаем</h2>
        </Reveal>
        <div className="relative mt-14 pl-10">
          <div className="absolute top-0 bottom-0 left-2 w-px bg-white/10" />
          <div
            ref={line}
            className="absolute top-0 left-2 h-full w-px origin-top bg-accent shadow-[0_0_12px_#1685FF]"
          />
          <ol className="space-y-10">
            {processSteps.map((step) => (
              <Reveal key={step.id}>
                <li className="relative">
                  <span className="absolute top-1 -left-10 h-3 w-3 rounded-full bg-accent" />
                  <p className="font-mono text-xs text-accent-2">{step.id}</p>
                  <h3 className="font-display mt-1 text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">{step.text}</p>
                  <Mini visual={step.visual} />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Mini({ visual }: { visual: string }) {
  return (
    <svg viewBox="0 0 160 36" className="mt-3 h-8 w-40 text-accent-2" aria-hidden>
      {visual === "consult" && <path d="M8 28 L40 8 L90 20 L150 6" fill="none" stroke="currentColor" />}
      {visual === "survey" && <circle cx="80" cy="18" r="12" fill="none" stroke="currentColor" />}
      {visual === "design" && <rect x="20" y="6" width="120" height="24" fill="none" stroke="currentColor" />}
      {visual === "approve" && <path d="M40 20 H120" stroke="currentColor" />}
      {visual === "install" && <path d="M20 28 L80 8 L140 28" fill="none" stroke="currentColor" />}
      {visual === "tune" && <circle cx="80" cy="18" r="6" fill="currentColor" />}
      {visual === "demo" && <rect x="50" y="6" width="60" height="24" rx="4" fill="none" stroke="currentColor" />}
      {visual === "handoff" && <path d="M30 18 H130 M120 10 L130 18 L120 26" fill="none" stroke="currentColor" />}
    </svg>
  );
}
