import type { Branch } from "@/lib/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Works } from "@/components/sections/Works";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export function BranchPage({ branch }: { branch: Branch }) {
  return (
    <div data-accent={branch.key} className="flex flex-1 flex-col">
      <Navbar
        brand={branch.name}
        role={branch.role}
        nav={branch.nav}
        brandHref={branch.path}
        current={branch.key}
      />

      <main id="main" tabIndex={-1} className="flex-1">
        <Hero hero={branch.hero} />
        <Marquee items={branch.services.map((service) => service.title)} />
        <About about={branch.about} />
        <Services heading={branch.servicesHeading} services={branch.services} />
        <Process
          heading={branch.process.heading}
          steps={branch.process.steps}
          note={branch.process.note}
        />
        <Works heading={branch.works.heading} items={branch.works.items} />
        <Pricing
          heading={branch.pricing.heading}
          items={branch.pricing.items}
          note={branch.pricing.note}
        />
        <Faq heading={branch.faq.heading} items={branch.faq.items} />
        <Contact contact={branch.contact} waMessage={branch.waMessage} />
      </main>

      <Footer
        brand={branch.name}
        role={branch.role}
        menu={branch.contact.menu}
        current={branch.key}
      />
      <FloatingWhatsApp message={branch.waMessage} />
    </div>
  );
}
