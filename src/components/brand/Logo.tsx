import { cn } from "@/lib/cn";

export function Logo({
  className,
  wordmark = true,
}: {
  className?: string;
  wordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 36 36" className="h-8 w-8" aria-hidden>
        <rect width="36" height="36" rx="9" fill="#0C1016" />
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="8"
          fill="none"
          stroke="#1685FF"
          strokeOpacity="0.45"
        />
        <circle cx="18" cy="16" r="7.2" fill="none" stroke="#7EC8FF" strokeWidth="1.2" />
        <circle cx="18" cy="16" r="3.1" fill="none" stroke="#1685FF" strokeWidth="1.6" />
        <circle cx="18" cy="16" r="1.1" fill="#1685FF" />
        <path
          d="M10 27.5 L18 10.5 L26 27.5"
          fill="none"
          stroke="white"
          strokeWidth="1.35"
          strokeLinejoin="round"
          opacity="0.92"
        />
        <path d="M13.4 23.2h9.2" stroke="#1685FF" strokeWidth="1.2" />
      </svg>
      {wordmark ? (
        <span className="font-display text-[15px] font-semibold tracking-[0.28em] text-white">
          ALIVID
        </span>
      ) : null}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return <Logo className={className} wordmark={false} />;
}
