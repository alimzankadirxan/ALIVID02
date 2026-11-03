"use client";

import { Logo } from "@/components/brand/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { defaultWhatsappText, site, telHref, whatsappHref } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/8 bg-[#0c1016] px-6 py-16 md:px-16">
        <Reveal>
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="absolute inset-[-24px] animate-pulse rounded-full bg-accent/20 blur-2xl" />
              <Logo className="relative scale-125" />
            </div>
          </div>
          <h2 className="font-display text-center text-4xl leading-tight font-semibold sm:text-6xl">
            Ваш объект. Наша инженерная система.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-white/55">
            Расскажите о задаче. Мы подберём техническое решение и подготовим индивидуальную смету.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 max-w-xl space-y-2 text-center text-white/70">
          <p className="font-display tracking-[0.3em]">ALIVID</p>
          <p>{site.founder}</p>
          <p>{site.region}</p>
          <p>Телефон: {site.phoneDisplay}</p>
          <p>WhatsApp: {site.phoneDisplay}</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <MagneticButton href={telHref()}>Позвонить</MagneticButton>
          <MagneticButton
            href={whatsappHref(defaultWhatsappText)}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
          >
            Написать в WhatsApp
          </MagneticButton>
          <MagneticButton href="#lead" variant="ghost">
            Оставить заявку
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
