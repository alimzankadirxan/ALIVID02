"use client";

import { useState } from "react";
import { portfolio, portfolioFilters } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioArt } from "@/components/visuals/PortfolioArt";
import { X } from "lucide-react";

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("Все");
  const [open, setOpen] = useState<string | null>(null);
  const items = portfolio.filter((item) => filter === "Все" || item.category === filter);
  const current = portfolio.find((item) => item.id === open);

  return (
    <section id="work" className="relative z-10 px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">PORTFOLIO</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">Галерея систем</h2>
          <p className="mt-4 max-w-xl text-white/50">
            Пока нет фотографий объектов, здесь демонстрационные кадры. Они не выдаются за
            выполненные проекты ALIVID.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {portfolioFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm ${
                filter === item ? "bg-accent text-white" : "border border-white/10 text-white/60"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpen(item.id)}
              className="overflow-hidden rounded-[24px] border border-white/8 text-left"
            >
              <div className="aspect-[16/10]">
                <PortfolioArt id={item.id} />
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[0.2em] text-accent-2">{item.category}</p>
                <h3 className="mt-2 text-lg">{item.title}</h3>
                <p className="mt-1 text-xs text-amber-200/70">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {current ? (
        <div
          className="fixed inset-0 z-[75] grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal
          aria-label={current.title}
        >
          <button
            type="button"
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-white/20"
            onClick={() => setOpen(null)}
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c1016]">
            <div className="grid gap-0 md:grid-cols-2">
              <div>
                <p className="px-4 pt-4 text-[10px] tracking-[0.2em] text-white/40">ДО</p>
                <PortfolioArt id={current.id} />
              </div>
              <div>
                <p className="px-4 pt-4 text-[10px] tracking-[0.2em] text-white/40">ПОСЛЕ</p>
                <div className="opacity-90">
                  <PortfolioArt id={current.id} />
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl">{current.title}</h3>
              <p className="mt-2 text-sm text-amber-200/80">{current.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
