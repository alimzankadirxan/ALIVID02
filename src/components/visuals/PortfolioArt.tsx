export function PortfolioArt({ id }: { id: string }) {
  const hue = { p1: 210, p2: 200, p3: 222, p4: 195, p5: 215, p6: 205 }[id] ?? 210;
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full">
      <rect width="800" height="500" fill={`hsl(${hue} 20% 8%)`} />
      <rect x="60" y="50" width="680" height="360" fill="none" stroke="#2a3c50" />
      <path d="M60 410 L220 250 L360 330 L520 180 L740 410" fill="none" stroke="#1685FF" strokeWidth="2" />
      <circle cx="640" cy="90" r="18" fill="none" stroke="#7EC8FF" />
      <circle cx="640" cy="90" r="6" fill="#1685FF" />
      <text x="80" y="460" fill="#7EC8FF" fontSize="14" fontFamily="monospace">
        DEMO FRAME · NOT AN ALIVID PROJECT
      </text>
    </svg>
  );
}
