"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

const checks = [
  "Проверка соединений",
  "Проверка видеосигнала",
  "Проверка записи",
  "Проверка сетевого подключения",
  "Проверка удалённого доступа",
];

export function Diagnostics() {
  const root = useRef<HTMLElement>(null);
  const [done, setDone] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        once: true,
        onEnter: () => {
          if (reduced) {
            setActive(checks.length);
            setDone(true);
            return;
          }
          checks.forEach((_, i) => {
            window.setTimeout(() => setActive(i), i * 700);
          });
          window.setTimeout(() => setDone(true), checks.length * 700 + 200);
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">SYSTEM CHECK</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">
            Диагностика перед сдачей
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            Все статусы — демонстрационная анимация, не настоящая диагностика оборудования.
          </p>
        </Reveal>
        <div className="relative mt-12 overflow-hidden rounded-[28px] border border-white/8 bg-[#0c1016] p-6 md:p-10">
          <div className="scanline pointer-events-none absolute inset-x-0 h-24 animate-[scan_2.4s_ease-in-out_infinite]" />
          <ul className="space-y-4">
            {checks.map((item, i) => {
              const on = active >= i;
              return (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 px-5 py-4"
                >
                  <span className={on ? "text-white" : "text-white/40"}>{item}</span>
                  <span
                    className={`font-mono text-xs tracking-[0.2em] ${
                      on ? "text-emerald-400" : "text-white/25"
                    }`}
                  >
                    {on ? "OK" : "WAIT"}
                  </span>
                </li>
              );
            })}
          </ul>
          <p
            className={`mt-8 font-display text-xl tracking-[0.18em] ${
              done ? "text-accent-2" : "text-white/20"
            }`}
          >
            SYSTEM CHECK COMPLETE
          </p>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          15% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
