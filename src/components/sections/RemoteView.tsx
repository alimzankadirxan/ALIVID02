"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const cams = ["Вход", "Периметр", "Парковка", "Коридор"];

export function RemoteView() {
  const [cam, setCam] = useState(0);
  const [mode, setMode] = useState<"live" | "archive">("live");

  useEffect(() => {
    const id = window.setInterval(() => {
      setCam((v) => (v + 1) % cams.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-accent-2/80">REMOTE ACCESS</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-5xl">
            Контроль объекта там, где вам удобно
          </h2>
          <p className="mt-5 max-w-md text-white/55">
            Интерфейс на экране — собственная демонстрация ALIVID. Это не копия приложения
            конкретного производителя.
          </p>
        </Reveal>
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-[42px] border border-white/12 bg-[#090c10] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-[32px] bg-[#0c1016]">
              <div className="flex items-center justify-between px-5 pt-5 text-[10px] tracking-[0.2em] text-white/40">
                <span>ALIVID VIEW</span>
                <span>DEMO</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-1 px-3">
                {cams.map((name, i) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setCam(i);
                      setMode("live");
                    }}
                    className={`relative aspect-video overflow-hidden rounded-lg ${
                      cam === i ? "ring-1 ring-accent" : "opacity-70"
                    }`}
                  >
                    <Feed index={i} active={cam === i && mode === "live"} />
                    <span className="absolute bottom-1 left-1 text-[9px] text-white/80">{name}</span>
                  </button>
                ))}
              </div>
              <div className="p-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setMode("live")}
                    className={`rounded-full px-3 py-1 text-[11px] ${
                      mode === "live" ? "bg-accent" : "bg-white/5"
                    }`}
                  >
                    Live
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("archive")}
                    className={`rounded-full px-3 py-1 text-[11px] ${
                      mode === "archive" ? "bg-accent" : "bg-white/5"
                    }`}
                  >
                    Архив
                  </button>
                </div>
                <div className="mt-3 aspect-video overflow-hidden rounded-xl">
                  {mode === "live" ? (
                    <Feed index={cam} active />
                  ) : (
                    <div className="flex h-full items-end gap-1 bg-[#07090d] p-3">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <span
                          key={i}
                          className="flex-1 rounded-sm bg-accent/40"
                          style={{ height: `${20 + ((i * 17) % 70)}%` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feed({ index, active }: { index: number; active?: boolean }) {
  return (
    <div
      className="h-full w-full"
      style={{
        background: `linear-gradient(135deg, hsl(${210 + index * 12} 30% ${active ? 16 : 12}%), #050608)`,
      }}
    >
      <div className="h-full w-full opacity-40 [background-image:linear-gradient(90deg,transparent_0,rgba(126,200,255,.12)_50%,transparent_100%)] [background-size:200%_100%] animate-[slide_3s_linear_infinite]" />
      <style>{`
        @keyframes slide {
          from { background-position: 0 0; }
          to { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
