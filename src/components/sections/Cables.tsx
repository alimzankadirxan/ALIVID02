"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Cables() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const paths = el.querySelectorAll<SVGPathElement>("[data-run]");
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = reduced ? "0" : `${length}`;
      });
      if (reduced) return;
      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 65%",
          end: "bottom 60%",
          scrub: 0.7,
        },
      });
      gsap.to(el.querySelectorAll("[data-pulse]"), {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "center 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display max-w-3xl text-3xl font-semibold sm:text-5xl">
            Каждый элемент системы должен работать как единая инфраструктура
          </h2>
        </Reveal>
        <div className="mt-12 overflow-hidden rounded-[28px] border border-white/8 bg-[#0c1016] p-4 md:p-8">
          <svg viewBox="0 0 1100 420" className="h-auto w-full">
            <rect x="40" y="70" width="420" height="280" rx="8" fill="#141c26" stroke="#2a3a4c" />
            <rect x="70" y="100" width="90" height="50" fill="#1b2633" />
            <rect x="180" y="100" width="90" height="50" fill="#1b2633" />
            <rect x="290" y="100" width="90" height="50" fill="#1b2633" />
            {[
              [90, 90],
              [220, 90],
              [350, 90],
              [90, 220],
              [350, 220],
            ].map(([x, y], i) => (
              <g key={i}>
                <rect x={x} y={y} width="28" height="16" rx="3" fill="#111820" stroke="#7EC8FF" />
                <circle cx={x + 14} cy={y + 8} r="3" fill="#1685FF" />
              </g>
            ))}
            <g>
              <rect x="820" y="130" width="180" height="210" rx="10" fill="#111820" stroke="#7EC8FF" />
              <rect x="838" y="150" width="144" height="18" rx="3" fill="#1685FF" opacity="0.85" />
              <rect x="838" y="178" width="144" height="18" rx="3" fill="#1e2a38" />
              <rect x="838" y="206" width="144" height="18" rx="3" fill="#1e2a38" />
              {Array.from({ length: 8 }).map((_, i) => (
                <circle key={i} cx={852 + i * 16} cy={250} r="3" fill={i % 2 ? "#4ade80" : "#1685FF"} />
              ))}
              <text x="910" y="310" textAnchor="middle" fill="#7EC8FF" fontSize="11">
                SERVER RACK
              </text>
            </g>
            <path
              data-run
              d="M104 106 C200 106, 520 160, 820 170"
              fill="none"
              stroke="#1685FF"
              strokeWidth="2"
            />
            <path
              data-run
              d="M234 106 C300 140, 600 190, 820 190"
              fill="none"
              stroke="#7EC8FF"
              strokeWidth="2"
            />
            <path
              data-run
              d="M364 106 C430 150, 640 210, 820 210"
              fill="none"
              stroke="#1685FF"
              strokeWidth="2"
            />
            <path
              data-run
              d="M104 228 C280 260, 620 240, 820 230"
              fill="none"
              stroke="#4AA6FF"
              strokeWidth="2"
            />
            <path
              data-run
              d="M364 228 C500 270, 700 250, 820 248"
              fill="none"
              stroke="#7EC8FF"
              strokeWidth="2"
            />
            {[
              [300, 130],
              [480, 170],
              [640, 200],
              [740, 220],
            ].map(([x, y], i) => (
              <circle
                key={i}
                data-pulse
                cx={x}
                cy={y}
                r="5"
                fill="#7EC8FF"
                className="opacity-0"
              >
                <animate
                  attributeName="r"
                  values="4;8;4"
                  dur="1.6s"
                  repeatCount="indefinite"
                  begin={`${i * 0.2}s`}
                />
              </circle>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
