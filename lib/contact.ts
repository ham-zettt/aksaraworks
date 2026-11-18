export type ContactValues = {
  name: string;
  contact: string;
  service: string;
  pkg: string;
  message: string;
};

export type ContactField = keyof ContactValues;

export type ContactErrors = Partial<Record<Exclude<ContactField, "pkg">, string>>;

export const emptyContactValues: ContactValues = {
  name: "",
  contact: "",
  service: "",
  pkg: "",
  message: "",
};

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Tulis nama Anda minimal 2 karakter.";
  }

  const contactValue = values.contact.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contactValue);
  const digits = contactValue.replace(/\D/g, "");
  const isPhone = digits.length >= 8 && digits.length <= 15;

  if (!contactValue) {
    errors.contact = "Isi email atau nomor WhatsApp Anda.";
  } else if (!isEmail && !isPhone) {
    errors.contact = "Masukkan email atau nomor WhatsApp yang valid.";
  }

  if (!values.service) {
    errors.service = "Pilih jenis layanan yang Anda butuhkan.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Ceritakan kebutuhan Anda minimal 10 karakter.";
  }

  return errors;
}

export function buildWhatsAppMessage(
  values: ContactValues,
  options: { intro: string; packageName: string },
) {
  return [
    options.intro,
    "",
    `Nama: ${values.name.trim()}`,
    `Kontak: ${values.contact.trim()}`,
    `Layanan: ${values.service}`,
    `Paket: ${options.packageName}`,
    `Pesan: ${values.message.trim()}`,
  ].join("\n");
}
