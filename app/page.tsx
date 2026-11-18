import { home } from "@/lib/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Divisions } from "@/components/sections/Divisions";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div data-accent="home" className="flex flex-1 flex-col">
      <Navbar
        brand={home.name}
        role={home.role}
        nav={home.nav}
        brandHref="/"
        current="home"
      />

      <main id="main" tabIndex={-1} className="flex-1">
        <Hero hero={home.hero} />
        <About about={home.about} />
        <Divisions heading={home.services.heading} />
        <Contact contact={home.contact} waMessage={home.waMessage} />
      </main>

      <Footer
        brand={home.name}
        role={home.role}
        menu={home.contact.menu}
        current="home"
      />
      <FloatingWhatsApp message={home.waMessage} />
    </div>
  );
}
