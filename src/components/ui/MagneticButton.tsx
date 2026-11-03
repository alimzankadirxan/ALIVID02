"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  target?: string;
  rel?: string;
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={(event) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        const node = ref.current;
        if (!node) return;
        const box = node.getBoundingClientRect();
        const x = event.clientX - box.left - box.width / 2;
        const y = event.clientY - box.top - box.height / 2;
        node.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
      }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-[transform,background,border-color,box-shadow] duration-300 will-change-transform",
        variant === "primary" &&
          "bg-accent text-white shadow-[0_0_32px_rgba(22,133,255,0.28)] hover:bg-[#2b91ff]",
        variant === "ghost" &&
          "border border-white/15 bg-white/0 text-white hover:border-accent/60 hover:bg-white/5",
        className,
      )}
    >
      {children}
    </a>
  );
}
