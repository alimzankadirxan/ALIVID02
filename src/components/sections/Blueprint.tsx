"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Blueprint() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll("[data-draw]");
      const rooms = el.querySelectorAll("[data-room]");
      const cams = el.querySelectorAll("[data-cam]");
      const views = el.querySelectorAll("[data-view]");
      const cables = el.querySelectorAll("[data-cable]");
      const server = el.querySelector("[data-server]");
      const panel = el.querySelector("[data-panel]");

      gsap.set(lines, { strokeDashoffset: 1 });
      gsap.set([rooms, cams, views, cables, server, panel], { opacity: reduced ? 1 : 0 });

      if (reduced) {
        gsap.set(lines, { strokeDashoffset: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.8,
        },
      });
      tl.to(lines, { strokeDashoffset: 0, duration: 1.2, stagger: 0.08 }, 0)
        .to(rooms, { opacity: 0.18, duration: 0.4, stagger: 0.05 }, 0.35)
        .to(cams, { opacity: 1, duration: 0.3, stagger: 0.05 }, 0.55)
        .to(views, { opacity: 0.55, duration: 0.4, stagger: 0.04 }, 0.7)
        .to(cables, { opacity: 1, duration: 0.5, stagger: 0.05 }, 0.9)
        .to(server, { opacity: 1, duration: 0.35 }, 1.1)
        .to(panel, { opacity: 1, duration: 0.3 }, 1.2);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="systems" ref={root} className="relative z-10 px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">SYSTEM DESIGN</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight font-semibold sm:text-5xl">
            Как ALIVID проектирует систему
          </h2>
          <p className="mt-4 max-w-xl text-white/55">
            Пустой чертёж наполняется стенами, камерами, кабельными трассами и серверным узлом.
            Это демонстрационная визуализация, а не показатели работающего оборудования.
          </p>
        </Reveal>
        <div className="relative mt-12 overflow-hidden rounded-[28px] border border-white/8 bg-[#0c1016]">
          <svg viewBox="0 0 1200 640" className="h-auto w-full">
            <rect width="1200" height="640" fill="#0c1016" />
            <g fill="none" stroke="#1d2a38" strokeWidth="1">
              {Array.from({ length: 24 }).map((_, i) => (
                <path key={`v${i}`} d={`M${80 + i * 44} 40 V600`} />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <path key={`h${i}`} d={`M40 ${50 + i * 40} H1160`} />
              ))}
            </g>
            <g
              data-draw
              pathLength={1}
              stroke="#7EC8FF"
              strokeWidth="1.6"
              fill="none"
              strokeDasharray={1}
              strokeDashoffset={1}
            >
              <path d="M140 120 H860 V500 H140 Z" />
              <path d="M140 120 H520 V280 H140 Z" />
              <path d="M520 120 H860 V280" />
              <path d="M140 280 H860" />
              <path d="M340 280 V500" />
              <path d="M620 280 V500" />
              <path d="M140 390 H340" />
            </g>
            <rect data-room x="150" y="130" width="360" height="140" fill="#1685FF" />
            <rect data-room x="530" y="130" width="320" height="140" fill="#1685FF" />
            <rect data-room x="150" y="290" width="180" height="200" fill="#1685FF" />
            <rect data-room x="350" y="290" width="260" height="200" fill="#1685FF" />
            <rect data-room x="630" y="290" width="220" height="200" fill="#1685FF" />
            {[
              [170, 140],
              [500, 140],
              [830, 140],
              [170, 470],
              [500, 300],
              [830, 470],
              [340, 300],
              [700, 300],
            ].map(([x, y], i) => (
              <g key={i} data-cam>
                <circle cx={x} cy={y} r="7" fill="#1685FF" />
                <circle cx={x} cy={y} r="12" fill="none" stroke="#7EC8FF" />
              </g>
            ))}
            <g data-view fill="#1685FF" fillOpacity="0.18" stroke="#7EC8FF" strokeOpacity="0.5">
              <polygon points="170,140 250,190 210,250" />
              <polygon points="500,140 560,210 470,230" />
              <polygon points="830,140 760,210 800,260" />
              <polygon points="170,470 250,430 230,390" />
              <polygon points="500,300 560,360 470,380" />
              <polygon points="830,470 760,420 800,380" />
              <polygon points="340,300 400,360 310,390" />
              <polygon points="700,300 760,350 680,380" />
            </g>
            <g data-cable fill="none" stroke="#1685FF" strokeWidth="1.4">
              <path d="M170 140 C170 220, 930 180, 980 250" />
              <path d="M500 140 C500 210, 940 210, 980 250" />
              <path d="M830 140 C860 190, 960 220, 980 250" />
              <path d="M170 470 C400 470, 940 360, 980 250" />
              <path d="M500 300 C640 300, 940 280, 980 250" />
              <path d="M830 470 C900 400, 960 300, 980 250" />
              <path d="M340 300 C500 250, 940 250, 980 250" />
              <path d="M700 300 C820 280, 950 260, 980 250" />
            </g>
            <g data-server>
              <rect x="950" y="210" width="90" height="120" rx="6" fill="#111820" stroke="#7EC8FF" />
              <rect x="962" y="226" width="66" height="10" rx="2" fill="#1685FF" opacity="0.8" />
              <rect x="962" y="244" width="66" height="10" rx="2" fill="#243040" />
              <rect x="962" y="262" width="66" height="10" rx="2" fill="#243040" />
              <circle cx="974" cy="300" r="3" fill="#4ade80" />
              <circle cx="988" cy="300" r="3" fill="#1685FF" />
            </g>
          </svg>
          <aside
            data-panel
            className="absolute top-5 right-5 w-[210px] rounded-2xl border border-white/10 bg-black/50 p-4 font-mono text-[11px] leading-6 text-accent-2"
          >
            <p className="tracking-[0.24em] text-white/70">SYSTEM DESIGN</p>
            <p>CAMERAS: 08</p>
            <p>NETWORK: CONNECTED</p>
            <p>SERVER: ONLINE</p>
            <p>SIGNAL: STABLE</p>
            <p className="mt-2 text-[10px] text-white/35">Демонстрационные статусы</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
