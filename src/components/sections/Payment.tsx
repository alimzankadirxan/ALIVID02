"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Payment() {
  return (
    <section className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">PAYMENT</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">
            Прозрачная оплата
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            Стоимость определяется индивидуально после оценки объекта. Цены на сайте не публикуем.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-[28px] border border-white/8 bg-[#111820] p-8 md:p-10">
              <p className="text-xs tracking-[0.28em] text-white/40">ОБОРУДОВАНИЕ</p>
              <h3 className="font-display mt-6 text-4xl">100%</h3>
              <p className="mt-3 text-white/55">Предоплата за оборудование до закупки комплекта.</p>
              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/8">
                <div className="h-full w-full bg-accent" />
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="rounded-[28px] border border-white/8 bg-[#111820] p-8 md:p-10">
              <p className="text-xs tracking-[0.28em] text-white/40">МОНТАЖНЫЕ РАБОТЫ</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-4xl">50%</h3>
                  <p className="mt-2 text-sm text-white/55">Перед началом монтажа.</p>
                </div>
                <div>
                  <h3 className="font-display text-4xl">50%</h3>
                  <p className="mt-2 text-sm text-white/55">
                    После установки, настройки и проверки.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex h-2 overflow-hidden rounded-full bg-white/8">
                <div className="w-1/2 bg-accent" />
                <div className="w-1/2 bg-accent-2/70" />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
