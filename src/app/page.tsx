import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroExperience } from "@/components/sections/HeroExperience";
import { Blueprint } from "@/components/sections/Blueprint";
import { Cables } from "@/components/sections/Cables";
import { Rack } from "@/components/sections/Rack";
import { Diagnostics } from "@/components/sections/Diagnostics";
import { RemoteView } from "@/components/sections/RemoteView";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Deliverables } from "@/components/sections/Deliverables";
import { Payment } from "@/components/sections/Payment";
import { Why } from "@/components/sections/Why";
import { Portfolio } from "@/components/sections/Portfolio";
import { Lead } from "@/components/sections/Lead";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroExperience />
        <Blueprint />
        <Cables />
        <Rack />
        <Diagnostics />
        <RemoteView />
        <Services />
        <Process />
        <Deliverables />
        <Payment />
        <Why />
        <Portfolio />
        <Lead />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
