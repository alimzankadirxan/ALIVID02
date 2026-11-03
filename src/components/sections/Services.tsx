"use client";

import Link from "next/link";
import { services } from "@/config/services";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceArt } from "@/components/visuals/ServiceArt";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section className="relative z-10 px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">CAPABILITIES</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">
            Инженерные направления
          </h2>
        </Reveal>
        <div className="mt-12 space-y-6">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <TiltCard>
                <article className="group grid overflow-hidden rounded-[28px] border border-white/8 bg-[#111820] md:grid-cols-[1.2fr_0.8fr]">
                  <div className="relative min-h-[220px] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <ServiceArt visual={service.visual} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_80px_rgba(22,133,255,0.35)] transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-col justify-between p-7 md:p-10">
                    <div>
                      <p className="font-mono text-xs text-white/30">0{index + 1}</p>
                      <h3 className="font-display mt-3 text-2xl">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/55">{service.short}</p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm text-accent-2"
                    >
                      Подробнее <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
