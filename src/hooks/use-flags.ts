"use client";

import { useEffect, useState } from "react";

export function useFlags() {
  const [flags, setFlags] = useState({
    reduced: false,
    mobile: false,
    coarse: false,
    ready: false,
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 768px)");
    const coarse = window.matchMedia("(pointer: coarse)");

    const apply = () =>
      setFlags({
        reduced: reduced.matches,
        mobile: mobile.matches,
        coarse: coarse.matches,
        ready: true,
      });

    apply();
    reduced.addEventListener("change", apply);
    mobile.addEventListener("change", apply);
    coarse.addEventListener("change", apply);
    return () => {
      reduced.removeEventListener("change", apply);
      mobile.removeEventListener("change", apply);
      coarse.removeEventListener("change", apply);
    };
  }, []);

  return flags;
}
