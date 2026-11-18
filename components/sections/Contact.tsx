import { ArrowUpRight } from "lucide-react";
import { site, type ContactContent } from "@/lib/content";
import { waLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Contact({ contact, waMessage }: { contact: ContactContent; waMessage: string }) {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="section">
      <div className="shell">
        <div className="border-t border-line pt-5 text-center">
          <p className="eyebrow text-muted">
            <span className="text-accent">{contact.number}</span>
            <span aria-hidden="true"> / </span>
            Kontak
          </p>
        </div>

        <div className="cta-glow mt-10 px-5 py-14 sm:px-10 sm:py-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="eyebrow flex items-center gap-2 text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {site.availability}
            </p>

            <h2 id="kontak-title" className="h2 mt-6 text-fg">
              {contact.heading.first}{" "}
              <span className="text-accent">{contact.heading.second}</span>
            </h2>

            <p className="lead mt-6 text-pretty">{contact.support}</p>

            <div className="mt-12">
              <p className="eyebrow text-muted">WhatsApp</p>
              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 text-2xl font-light tracking-[-0.03em] text-fg transition-colors duration-300 hover:text-accent sm:text-3xl"
              >
                {site.whatsapp.display}
                <ArrowUpRight
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.25}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <Button
              href={waLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              arrow="up-right"
              className="mt-6"
            >
              Chat Admin
            </Button>

            <p className="caption mt-4 text-muted">
              Ingin memesan? Klik Chat Admin, pesan Anda langsung terkirim ke WhatsApp.
            </p>
          </div>

          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 border-t border-line pt-8">
            <p className="eyebrow text-muted">Ikuti studio</p>
            <SocialLinks variant="chips" className="justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
