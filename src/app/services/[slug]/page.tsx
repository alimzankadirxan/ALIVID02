import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Lead } from "@/components/sections/Lead";
import { ServiceArt } from "@/components/visuals/ServiceArt";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getService, services } from "@/config/services";
import { defaultWhatsappText, whatsappHref } from "@/config/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="relative z-10 pt-28">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <Link href="/#systems" className="text-sm text-white/40">
              ← Все направления
            </Link>
            <h1 className="font-display mt-6 text-4xl sm:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/#lead">Рассчитать стоимость</MagneticButton>
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
          <div className="overflow-hidden rounded-[28px] border border-white/8">
            <ServiceArt visual={service.visual} />
          </div>
        </section>
        <Lead />
      </main>
      <Footer />
    </>
  );
}
