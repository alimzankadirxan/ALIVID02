import { Phone } from "lucide-react";
import { defaultWhatsappText, telHref, whatsappHref } from "@/config/site";

export function MobileDock() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#050608]/92 p-3 backdrop-blur-xl md:hidden">
      <a
        href={telHref()}
        className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 text-sm font-medium"
      >
        <Phone size={16} />
        Позвонить
      </a>
      <a
        href={whatsappHref(defaultWhatsappText)}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 items-center justify-center rounded-full bg-accent text-sm font-medium"
      >
        WhatsApp
      </a>
    </div>
  );
}
