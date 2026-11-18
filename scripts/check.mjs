// Self-check for the contact form logic. Run with: npm run check
import assert from "node:assert/strict";
import {
  buildWhatsAppMessage,
  emptyContactValues,
  validateContact,
} from "../lib/contact.ts";

const valid = {
  name: "Budi Santoso",
  contact: "0812 3456 7890",
  service: "Website UMKM",
  pkg: "bisnis",
  message: "Saya butuh website untuk toko roti di Bandung.",
};

assert.deepEqual(validateContact(emptyContactValues), {
  name: "Tulis nama Anda minimal 2 karakter.",
  contact: "Isi email atau nomor WhatsApp Anda.",
  service: "Pilih jenis layanan yang Anda butuhkan.",
  message: "Ceritakan kebutuhan Anda minimal 10 karakter.",
});

assert.deepEqual(validateContact(valid), {});
assert.deepEqual(validateContact({ ...valid, contact: "budi@email.com" }), {});
assert.ok(validateContact({ ...valid, contact: "bukan kontak" }).contact);
assert.ok(validateContact({ ...valid, contact: "123" }).contact);
assert.ok(validateContact({ ...valid, message: "pendek" }).message);

const message = buildWhatsAppMessage(valid, {
  intro: "Halo ASOY DEV",
  packageName: "Bisnis",
});
assert.match(message, /^Halo ASOY DEV/);
assert.match(message, /Nama: Budi Santoso/);
assert.match(message, /Paket: Bisnis/);
assert.match(message, /Layanan: Website UMKM/);

console.log("contact form checks passed");
