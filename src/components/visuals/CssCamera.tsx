export function CssCamera() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[12%] rounded-full border border-accent/25" />
      <div className="absolute inset-[22%] rounded-full border border-accent-2/20" />
      <div className="absolute top-1/2 left-1/2 h-40 w-56 -translate-x-1/2 -translate-y-[58%] rounded-[28px] border border-white/10 bg-[#121821] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute top-1/2 left-[18%] h-16 w-16 -translate-y-1/2 rounded-full bg-[#0b1016] ring-4 ring-accent/40" />
        <div className="absolute top-1/2 left-[22%] h-9 w-9 -translate-y-1/2 rounded-full bg-[#1685FF]/30 shadow-[0_0_30px_#1685FF]" />
        <div className="absolute top-6 right-8 h-2 w-2 rounded-full bg-red-500" />
      </div>
      <div className="absolute bottom-[18%] left-1/2 h-16 w-4 -translate-x-1/2 rounded-b-full bg-[#1a222c]" />
    </div>
  );
}
