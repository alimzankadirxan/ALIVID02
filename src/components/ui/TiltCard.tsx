"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-200 will-change-transform", className)}
      onMouseMove={(event) => {
        if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) {
          return;
        }
        const node = ref.current;
        if (!node) return;
        const box = node.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width;
        const y = (event.clientY - box.top) / box.height;
        node.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
      }}
    >
      {children}
    </div>
  );
}
