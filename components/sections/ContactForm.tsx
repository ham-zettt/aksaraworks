"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { branches, PACKAGE_EVENT } from "@/lib/content";
import {
  buildWhatsAppMessage,
  emptyContactValues,
  validateContact,
  type ContactField,
  type ContactValues,
  type ContactErrors,
} from "@/lib/contact";
import { waLink } from "@/lib/utils";
import { CornerBrackets } from "@/components/ui/CornerBrackets";

const labelClass = "eyebrow block text-muted";
const dev = branches.dev;

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [waHref, setWaHref] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPackage = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (dev.pricing.items.some((item) => item.id === id)) {
        setValues((current) => ({ ...current, pkg: id }));
        setSent(false);
      }
    };

    window.addEventListener(PACKAGE_EVENT, onPackage);
    return () => window.removeEventListener(PACKAGE_EVENT, onPackage);
  }, []);

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (field === "pkg") return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setSent(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const packageName =
      dev.pricing.items.find((item) => item.id === values.pkg)?.name ?? "Belum menentukan";
    const href = waLink(
      buildWhatsAppMessage(values, { intro: dev.waMessage, packageName }),
    );
    setWaHref(href);
    setSent(true);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const errorCount = Object.keys(errors).length;

  return (
    <div className="relative border border-line bg-black/70 p-5 sm:p-7">
      <CornerBrackets className="text-fg/20" />

      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <p className="eyebrow text-muted">
          <span className="text-accent">Formulir</span> / Proyek Baru
        </p>
        <p className="eyebrow hidden text-muted sm:block">Respon maks. 24 jam</p>
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="nama" className={labelClass}>
              Nama
            </label>
            <input
              id="nama"
              name="nama"
              autoComplete="name"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "nama-error" : undefined}
              placeholder="Nama Anda"
              className="form-field mt-2"
            />
            {errors.name && (
              <p id="nama-error" className="mt-1.5 text-[11px] text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="kontak-input" className={labelClass}>
              Email / WhatsApp
            </label>
            <input
              id="kontak-input"
              name="kontak"
              autoComplete="email"
              value={values.contact}
              onChange={(event) => update("contact", event.target.value)}
              aria-invalid={errors.contact ? true : undefined}
              aria-describedby={errors.contact ? "kontak-input-error" : undefined}
              placeholder="nama@email.com atau 08xx"
              className="form-field mt-2"
            />
            {errors.contact && (
              <p id="kontak-input-error" className="mt-1.5 text-[11px] text-red-400">
                {errors.contact}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="layanan-input" className={labelClass}>
              Jenis Layanan
            </label>
            <div className="relative mt-2">
              <select
                id="layanan-input"
                name="layanan"
                value={values.service}
                onChange={(event) => update("service", event.target.value)}
                aria-invalid={errors.service ? true : undefined}
                aria-describedby={errors.service ? "layanan-input-error" : undefined}
                className="form-field appearance-none pr-10"
              >
                <option value="">Pilih layanan</option>
                {dev.services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                size={15}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
              />
            </div>
            {errors.service && (
              <p id="layanan-input-error" className="mt-1.5 text-[11px] text-red-400">
                {errors.service}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="paket" className={labelClass}>
              Paket
            </label>
            <div className="relative mt-2">
              <select
                id="paket"
                name="paket"
                value={values.pkg}
                onChange={(event) => update("pkg", event.target.value)}
                className="form-field appearance-none pr-10"
              >
                <option value="">Belum menentukan</option>
                {dev.pricing.items.map((tier) => (
                  <option key={tier.id} value={tier.id}>
                    {tier.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                size={15}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="pesan" className={labelClass}>
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={4}
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "pesan-error" : undefined}
              placeholder="Ceritakan usaha Anda, tujuan website, dan perkiraan waktu peluncuran."
              className="form-field mt-2 resize-y"
            />
            {errors.message && (
              <p id="pesan-error" className="mt-1.5 text-[11px] text-red-400">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        {errorCount > 0 && (
          <div
            ref={summaryRef}
            role="alert"
            tabIndex={-1}
            className="mt-5 border border-red-400/30 bg-red-500/[0.06] px-4 py-3 text-xs text-red-300"
          >
            Ada {errorCount} kolom yang perlu diperiksa sebelum pesan dikirim.
          </div>
        )}

        {sent && waHref && (
          <p className="mt-5 text-xs leading-relaxed text-accent" role="status">
            Pesan sudah disiapkan. Jika WhatsApp tidak terbuka otomatis,{" "}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/50 underline-offset-4 hover:text-fg"
            >
              buka tautan ini
            </a>
            .
          </p>
        )}

        <button type="submit" className="btn-solid group mt-6 w-full">
          Kirim via WhatsApp
          <MessageCircle
            aria-hidden="true"
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </button>

        <p className="caption mt-3 text-center text-muted">
          Anda akan diarahkan ke WhatsApp dengan pesan yang sudah terisi.
        </p>
      </form>
    </div>
  );
}
