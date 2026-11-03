import { Logo } from "@/components/brand/Logo";
import { site, telHref, whatsappHref, defaultWhatsappText } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">{site.tagline}</p>
        </div>
        <div className="space-y-1 text-sm text-white/50">
          <p>{site.founder}</p>
          <p>{site.region}</p>
          <p>
            <a className="hover:text-white" href={telHref()}>
              {site.phoneDisplay}
            </a>
            {" · "}
            <a
              className="hover:text-white"
              href={whatsappHref(defaultWhatsappText)}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-white/30">
        © {new Date().getFullYear()} ALIVID. Инженерные системы безопасности. Караганда.
      </p>
    </footer>
  );
}
