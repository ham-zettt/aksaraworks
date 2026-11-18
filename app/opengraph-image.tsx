import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "AKSARA — Studio Layanan Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#F9F9F9",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: -0.5 }}>{site.name}</div>
          <div style={{ width: 7, height: 7, borderRadius: 9999, background: "#E85002" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ fontSize: 96, fontWeight: 300, lineHeight: 0.92, letterSpacing: -4 }}>
            Satu studio,
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: -4,
              color: "#E85002",
            }}
          >
            empat keahlian.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            letterSpacing: 2.4,
            color: "#A7A7A7",
            borderTop: "1px solid rgba(249,249,249,0.13)",
            paddingTop: 24,
          }}
        >
          <span>WEBSITE · LOGO &amp; BRANDING · PENULISAN · OLAH DATA</span>
          <span>PAMEKASAN, JAWA TIMUR</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
