import type { Service } from "@/config/services";

export function ServiceArt({ visual }: { visual: Service["visual"] }) {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden>
      <rect width="640" height="360" fill="#0c1016" />
      <g opacity="0.35" stroke="#1e2d3d" fill="none">
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={i} d={`M0 ${i * 36} H640`} />
        ))}
      </g>
      {visual === "cctv" && <CctvArt />}
      {visual === "ip" && <IpArt />}
      {visual === "intercom" && <IntercomArt />}
      {visual === "barrier" && <BarrierArt />}
      {visual === "turnstile" && <TurnstileArt />}
      {visual === "face" && <FaceArt />}
      {visual === "access" && <AccessArt />}
      {visual === "lan" && <LanArt />}
      {visual === "cable" && <CableArt />}
      {visual === "service" && <ServiceArtInner />}
    </svg>
  );
}

function CctvArt() {
  return (
    <g fill="none" stroke="#7EC8FF">
      <rect x="80" y="70" width="280" height="180" stroke="#243140" />
      <circle cx="430" cy="140" r="46" stroke="#1685FF" strokeWidth="3" />
      <circle cx="430" cy="140" r="18" fill="#1685FF" stroke="none" />
      <path d="M430 186 L430 250 L520 250" />
      <polygon points="476,140 610,80 610,220" fill="#1685FF" fillOpacity="0.12" />
    </g>
  );
}

function IpArt() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <rect x="180" y="90" width="280" height="160" rx="18" strokeWidth="2" />
      <circle cx="320" cy="170" r="42" stroke="#1685FF" strokeWidth="3" />
      <path d="M80 170 H180 M460 170 H560" />
      <circle cx="80" cy="170" r="8" fill="#1685FF" stroke="none" />
      <circle cx="560" cy="170" r="8" fill="#1685FF" stroke="none" />
    </g>
  );
}

function IntercomArt() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <rect x="250" y="50" width="140" height="260" rx="18" />
      <circle cx="320" cy="120" r="28" stroke="#1685FF" />
      <rect x="280" y="180" width="80" height="18" rx="4" />
      <rect x="292" y="220" width="56" height="40" rx="6" fill="#1685FF" fillOpacity="0.3" />
    </g>
  );
}

function BarrierArt() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <rect x="150" y="180" width="70" height="110" />
      <path d="M220 200 H540" stroke="#1685FF" strokeWidth="8" />
      <circle cx="185" cy="165" r="10" fill="#1685FF" stroke="none" />
    </g>
  );
}

function TurnstileArt() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <rect x="220" y="80" width="40" height="200" />
      <rect x="380" y="80" width="40" height="200" />
      <path d="M260 180 H380" stroke="#1685FF" strokeWidth="3" />
      <circle cx="320" cy="180" r="16" />
    </g>
  );
}

function FaceArt() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <rect x="230" y="60" width="180" height="240" rx="16" />
      <ellipse cx="320" cy="150" rx="40" ry="50" stroke="#1685FF" />
      <path d="M300 150 H310 M330 150 H340 M300 180 Q320 196 340 180" />
      <rect x="250" y="70" width="20" height="20" />
      <rect x="370" y="70" width="20" height="20" />
    </g>
  );
}

function AccessArt() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <rect x="160" y="80" width="140" height="220" rx="8" />
      <rect x="340" y="80" width="140" height="220" rx="8" />
      <circle cx="230" cy="160" r="18" stroke="#1685FF" />
      <rect x="390" y="150" width="40" height="24" rx="4" fill="#1685FF" fillOpacity="0.35" />
    </g>
  );
}

function LanArt() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <rect x="270" y="140" width="100" height="70" rx="8" stroke="#1685FF" />
      <path d="M320 140 V80 M320 210 V280 M270 175 H180 M370 175 H460" />
      <circle cx="320" cy="80" r="10" fill="#1685FF" stroke="none" />
      <circle cx="320" cy="280" r="10" fill="#1685FF" stroke="none" />
      <circle cx="180" cy="175" r="10" fill="#1685FF" stroke="none" />
      <circle cx="460" cy="175" r="10" fill="#1685FF" stroke="none" />
    </g>
  );
}

function CableArt() {
  return (
    <g stroke="#1685FF" fill="none">
      <path d="M80 80 C200 80, 200 280, 360 280 C500 280, 500 120, 620 120" strokeWidth="3" />
      <path d="M80 140 C240 140, 240 220, 400 220 C520 220, 540 180, 620 180" stroke="#7EC8FF" />
    </g>
  );
}

function ServiceArtInner() {
  return (
    <g stroke="#7EC8FF" fill="none">
      <circle cx="320" cy="170" r="70" stroke="#1685FF" />
      <path d="M320 120 V170 L355 195" />
      <path d="M210 170 H250 M390 170 H430" />
    </g>
  );
}
