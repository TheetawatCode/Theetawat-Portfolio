import { ImageResponse } from "next/og";

import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role} portfolio`;
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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #f7f9fc 55%, #dbeafe 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#0b1f3a",
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            TP
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#526174" }}>Portfolio</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#2563eb" }}>{profile.role}</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#526174" }}>React · Next.js · TypeScript · PostgreSQL</div>
      </div>
    ),
    size,
  );
}
