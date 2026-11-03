import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050608",
          color: "white",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 10, color: "#7EC8FF" }}>ALIVID</div>
        <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
          Инженерные системы безопасности
        </div>
        <div style={{ fontSize: 28, color: "#8b95a5" }}>
          Караганда и область · Видеонаблюдение · Доступ · Сети
        </div>
      </div>
    ),
    size,
  );
}
