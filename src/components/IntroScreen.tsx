import { useEffect, useState } from "react";
import { KargoLogo } from "@/components/KargoLogo";

export function IntroScreen() {
  const [stage, setStage] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("out"), 2200);
    const t2 = setTimeout(() => setStage("gone"), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-700 ease-out ${
        stage === "out" ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={stage === "out"}
    >
      {/* radial glow */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 60%)",
        }}
      />

      {/* concentric pulsing rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-primary/40"
            style={{
              width: 180 + i * 90,
              height: 180 + i * 90,
              animation: `intro-ring 2.2s ${i * 0.25}s ease-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        <div
          className="relative"
          style={{ animation: "intro-pop 1.1s cubic-bezier(.2,.8,.2,1) both" }}
        >
          <KargoLogo size={140} />
        </div>

        <div
          className="mt-6 overflow-hidden"
          style={{ animation: "intro-fade-up 0.8s 0.5s both" }}
        >
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-foreground text-center">
            KARGOBRIDGE
          </h1>
          <p className="mt-2 text-center text-[11px] md:text-xs tracking-[0.4em] text-primary font-medium">
            LOGISTICS&nbsp;&nbsp;PVT&nbsp;&nbsp;LTD
          </p>
        </div>

        {/* loader bar */}
        <div
          className="mt-8 h-px w-48 overflow-hidden bg-primary/15"
          style={{ animation: "intro-fade-up 0.6s 0.8s both" }}
        >
          <span
            className="block h-full bg-primary"
            style={{ animation: "intro-bar 1.6s 0.9s cubic-bezier(.65,0,.35,1) forwards" }}
          />
        </div>

        <p
          className="mt-4 text-[10px] tracking-[0.35em] text-muted-foreground"
          style={{ animation: "intro-fade-up 0.6s 1s both" }}
        >
          A BRIDGE TO CONNECT ENDS
        </p>
      </div>

      <style>{`
        @keyframes intro-pop {
          0% { opacity: 0; transform: scale(.6) rotate(-8deg); filter: blur(6px); }
          60% { opacity: 1; transform: scale(1.04) rotate(0); filter: blur(0); }
          100% { transform: scale(1); }
        }
        @keyframes intro-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes intro-bar {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes intro-ring {
          0% { opacity: .55; transform: scale(.6); }
          100% { opacity: 0; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
