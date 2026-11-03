import { whyItems } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";

export function Why() {
  return (
    <section className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">Почему ALIVID</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="rounded-3xl border border-white/8 bg-[#0c1016] p-6">
                <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
                  <circle cx="24" cy="24" r="18" fill="none" stroke="#1685FF" />
                  <path d="M16 24 L22 30 L33 18" fill="none" stroke="#7EC8FF" strokeWidth="2" />
                </svg>
                <h3 className="font-display mt-5 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
