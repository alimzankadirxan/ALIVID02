"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { nav, site, telHref, whatsappHref, defaultWhatsappText } from "@/config/site";
import { Menu, X } from "lucide-react";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ${
        solid ? "bg-[#050608]/80 backdrop-blur-xl border-b border-white/6" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="ALIVID">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <MagneticButton href={telHref()} variant="ghost" className="px-4 py-2 text-xs">
            {site.phoneDisplay}
          </MagneticButton>
          <MagneticButton href={whatsappHref(defaultWhatsappText)} target="_blank" rel="noreferrer">
            WhatsApp
          </MagneticButton>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/8 bg-[#050608]/95 px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white/80"
              >
                {item.label}
              </a>
            ))}
            <a href={telHref()} className="text-accent">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
