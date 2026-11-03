import { deliverables } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";

export function Deliverables() {
  return (
    <section id="result" className="relative z-10 px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display max-w-4xl text-3xl leading-tight font-semibold sm:text-5xl">
            Мы не просто устанавливаем оборудование. Мы передаём готовую к эксплуатации систему.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {deliverables.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="min-h-[220px] rounded-[28px] border border-white/8 bg-[#111820] p-8">
                <p className="font-mono text-xs text-white/30">0{index + 1}</p>
                <h3 className="font-display mt-5 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
