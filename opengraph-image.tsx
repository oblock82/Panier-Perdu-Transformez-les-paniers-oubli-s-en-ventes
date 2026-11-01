import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Panier Perdu : relancez vos paniers abandonnés";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#FAF7F2",
          color: "#14213D",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 40, color: "#E4572E", fontWeight: 700 }}>
          Panier Perdu
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
          7 paniers sur 10 sont abandonnés. Relancez-les.
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 36 }}>
          Deux relances automatiques. 29 € par mois, sans engagement.
        </div>
      </div>
    ),
    { ...size },
  );
}
