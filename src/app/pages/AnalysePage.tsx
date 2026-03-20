import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Analyse from "../../imports/Analyse-8-889";
import PageTransition from "../components/PageTransition";

// ── Constantes ────────────────────────────────────────────────
const RADIUS = 74;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TARGET = 50;
const DURATION = 2800;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// ── AnimatedScore — copie exacte de ResultatDanalyse ─────────
function AnimatedScore() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / DURATION, 1);
      setProgress(Math.round(easeOutCubic(t) * TARGET));
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const dashOffset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <div className="relative shrink-0 size-[160px]">
      <svg width="160" height="160" viewBox="0 0 160 160" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id="analyseGradient" gradientUnits="userSpaceOnUse" x1="154" y1="80" x2="6" y2="80">
            <stop stopColor="#F97316" />
            <stop offset="1" stopColor="#FF7E5D" />
          </linearGradient>
        </defs>
        {/* Piste de fond */}
        <circle cx="80" cy="80" r={RADIUS} fill="none" stroke="#F97316" strokeOpacity="0.1" strokeWidth="12" />
        {/* Arc animé */}
        <circle
          cx="80" cy="80" r={RADIUS}
          fill="none"
          stroke="url(#analyseGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          style={{ transform: "rotate(-90deg)", transformOrigin: "80px 80px", transition: "stroke-dashoffset 0.05s linear" }}
        />
      </svg>
    </div>
  );
}

export default function AnalysePage() {
  return (
    <PageTransition>
      <div className="relative size-full">
        <Analyse />

        {/* Overlay animé — couvre le cercle statique du Figma */}
        <div
          className="absolute z-10"
          style={{
            bottom: "275px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <AnimatedScore />
        </div>

        {/* Lien transparent sur le bouton "Ouvrir dans Trustly" */}
        <Link
          to="/resultat"
          className="absolute z-10"
          style={{
            bottom: "20px",
            left: "20px",
            right: "20px",
            height: "56px",
            borderRadius: "18px",
          }}
          aria-label="Ouvrir dans Trustly"
        />
      </div>
    </PageTransition>
  );
}