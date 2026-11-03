"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WordReveal } from "@/components/ui/Reveal";
import { CssCamera } from "@/components/visuals/CssCamera";
import { site, telHref, whatsappHref, defaultWhatsappText } from "@/config/site";
import { useFlags } from "@/hooks/use-flags";
import type { CameraDrive } from "@/components/three/IPCamera";

gsap.registerPlugin(ScrollTrigger);

const CameraCanvas = dynamic(
  () => import("@/components/three/CameraCanvas").then((m) => m.CameraCanvas),
  { ssr: false },
);

const labels = [
  { at: 0.2, title: "360° визуализация", sub: "Демонстрация концепции обзора" },
  { at: 0.42, title: "Intelligent Monitoring", sub: "Сценарий наблюдения, не характеристика модели" },
  { at: 0.64, title: "Network Connected", sub: "Камера как узел сети объекта" },
  { at: 0.84, title: "Security System", sub: "Часть инженерной системы, не изолированное устройство" },
];

export function HeroExperience() {
  const flags = useFlags();
  const pin = useRef<HTMLElement>(null);
  const drive = useRef<CameraDrive>({ progress: 0.08, mx: 0, my: 0 });
  const labelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!pin.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pin.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate: (self) => {
          drive.current.progress = self.progress;
          labels.forEach((label, index) => {
            const node = labelRefs.current[index];
            if (!node) return;
            const active = self.progress > label.at - 0.08 && self.progress < label.at + 0.18;
            node.style.opacity = flags.reduced ? "1" : active ? "1" : "0.18";
            node.style.transform = `translateY(${active ? "0px" : "10px"})`;
          });
        },
      });
    }, pin);

    const onMove = (event: PointerEvent) => {
      if (flags.coarse || flags.reduced) return;
      drive.current.mx = (event.clientX / window.innerWidth - 0.5) * 2;
      drive.current.my = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, [flags.coarse, flags.reduced]);

  const use3d = flags.ready && !flags.mobile && !flags.reduced;

  return (
    <section ref={pin} className="relative">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {use3d ? <CameraCanvas drive={drive} /> : <CssCamera />}
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 pt-28 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-xl">
            <p className="font-display text-xs tracking-[0.42em] text-accent-2/80">
              ALIVID
            </p>
            <p className="mt-2 text-[11px] tracking-[0.34em] text-white/40">
              SECURITY ENGINEERING
            </p>
            <WordReveal
              text="ИНЖЕНЕРНЫЕ СИСТЕМЫ БЕЗОПАСНОСТИ НОВОГО УРОВНЯ."
              className="mt-7 text-[34px] leading-[1.05] text-white sm:text-5xl lg:text-[56px]"
            />
            <p className="mt-6 max-w-md text-base leading-7 text-white/60">{site.description}</p>
            <p className="mt-5 text-sm text-white/45">
              {site.experienceYears} лет практического опыта. {site.region}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="#lead">Рассчитать стоимость</MagneticButton>
              <MagneticButton
                href={whatsappHref(defaultWhatsappText)}
                variant="ghost"
                target="_blank"
                rel="noreferrer"
              >
                Связаться с инженером
              </MagneticButton>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-[520px]">
            <div className="absolute top-4 right-0 hidden flex-col gap-4 lg:flex">
              {labels.map((label, index) => (
                <div
                  key={label.title}
                  ref={(node) => {
                    labelRefs.current[index] = node;
                  }}
                  className="glass max-w-[240px] rounded-2xl px-4 py-3 transition-all duration-500"
                >
                  <p className="text-[11px] tracking-[0.22em] text-accent-2">{label.title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/50">{label.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[220vh]" />
      <div className="sr-only">
        <a href={telHref()}>{site.phoneDisplay}</a>
      </div>
    </section>
  );
}
