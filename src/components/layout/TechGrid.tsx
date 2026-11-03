export function TechGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#050608]" />
      <div className="tech-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(22,133,255,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(126,200,255,0.08),transparent_28%)]" />
    </div>
  );
}
