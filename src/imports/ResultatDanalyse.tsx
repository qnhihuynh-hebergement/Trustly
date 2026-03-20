import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-f12enuumms";
import Background from "./Background";

// ── Constantes loader ─────────────────────────────────────────
const RADIUS = 74;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TARGET = 50;
const DURATION = 2800;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// ── Loader animé (remplace Group4 statique) ───────────────────
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
          <linearGradient id="resultatGradient" gradientUnits="userSpaceOnUse" x1="154" y1="80" x2="6" y2="80">
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
          stroke="url(#resultatGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          style={{ transform: "rotate(-90deg)", transformOrigin: "80px 80px", transition: "stroke-dashoffset 0.05s linear" }}
        />
      </svg>
      {/* Score centré */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <span style={{ fontFamily: "'Satoshi:Bold', sans-serif", fontSize: "46px", color: "#f97316", lineHeight: 1, letterSpacing: "-0.3125px" }}>
          {progress}
        </span>
        <span style={{ fontFamily: "'Satoshi:Medium', sans-serif", fontSize: "16px", color: "#fc8f43", letterSpacing: "-0.3125px" }}>
          sur 100
        </span>
      </div>
    </div>
  );
}

// ── Chevron animé : fermé = pointe à droite, ouvert = pointe en bas ──
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      style={{
        transform: open ? "rotate(0deg)" : "rotate(-90deg)",
        transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        flexShrink: 0,
      }}
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#4A5565"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div
      style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}
      className="flex items-center justify-center relative shrink-0 size-[24px]"
    >
      {children}
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

type ContainerText1Props = { text: string };
function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="h-[16px] relative shrink-0 w-[87.328px]">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[43.67px] not-italic text-[#0f172a] text-[12px] text-center top-px whitespace-nowrap">{text}</p>
    </div>
  );
}

type ContainerTextProps = { text: string };
function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.328px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[44.54px] not-italic text-[#0f172a] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}

type Text3Props = { text: string };
function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
      <div className="relative shrink-0 size-[20px]" data-name="octicon:dash-24">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1.25px] left-[calc(50%-0.25px)] top-[calc(50%-0.38px)] w-[7.5px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.25">
            <path d={svgPaths.p957d380} fill="var(--fill-0, #FF6900)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

type Text2Props = { text: string };
function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
      <div className="relative shrink-0 size-[20px]" data-name="material-symbols:check-small-rounded">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[7.146px] left-[calc(50%-0.35px)] top-[calc(50%-0.43px)] w-[9.292px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29167 7.14583">
            <path d={svgPaths.p3945bd00} fill="var(--fill-0, #10B981)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

type Text1Props = { text: string };
function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
      <div className="relative shrink-0 size-[20px]" data-name="material-symbols:close-rounded">
        <Vector />
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.25px)] size-[7.5px] top-[calc(50%-0.25px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
        <path d={svgPaths.p27d7ad80} fill="var(--fill-0, #FB2C36)" id="Vector" />
      </svg>
    </div>
  );
}

function MaterialSymbolsArrowBackIosRounded({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="material-symbols:arrow-back-ios-rounded">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[7px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
          <path d={svgPaths.p1a68b900} fill="var(--fill-0, #4A5565)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

// ── Expandable card: Signaux détectés (open by default) ──────
function CardSignaux({ className }: { className?: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={className || "bg-[rgba(252,252,252,0.3)] relative rounded-[16px] w-[362px]"}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className={`content-stretch flex flex-col items-start justify-center p-[20px] relative w-full ${open ? "gap-[8px]" : ""}`}>
        <button
          onClick={() => setOpen(!open)}
          className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer bg-transparent border-0 p-0 text-left"
        >
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[16px] tracking-[-0.1504px] whitespace-nowrap">Signaux détéctés</p>
          <Chevron open={open} />
        </button>
        {open && (
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <Text3 text="Sources partiellement vérifiables" />
            <Text2 text="Contexte manquant pour validation complète" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[-0.1504px] whitespace-nowrap">Vérification croisée fortement recommandée</p>
              <div className="relative shrink-0 size-[20px]">
                <Vector />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Expandable card: Analyse du média (closed by default) ────
function CardMedia({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className || "bg-[rgba(252,252,252,0.3)] relative rounded-[16px] w-[362px]"}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className={`content-stretch flex flex-col items-start justify-center p-[20px] relative w-full ${open ? "gap-[8px]" : ""}`}>
        <button
          onClick={() => setOpen(!open)}
          className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer bg-transparent border-0 p-0 text-left"
        >
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[16px] tracking-[-0.1504px] whitespace-nowrap">{`Analyse du média (image / vidéo)`}</p>
          <Chevron open={open} />
        </button>
        {open && (
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <Text3 text="image potentiellement modifiée" />
            <Text3 text="incohérences visuelles détectées" />
            <Text3 text="image sortie de son contexte" />
            <Text1 text="vidéo recyclée d'un événement ancien" />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Expandable card: Crédibilité de la source (closed by default) ──
function CardCredibilite({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className || "bg-[rgba(252,252,252,0.3)] relative rounded-[16px] w-[362px]"}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className={`content-stretch flex flex-col items-start justify-center p-[20px] relative w-full ${open ? "gap-[8px]" : ""}`}>
        <button
          onClick={() => setOpen(!open)}
          className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer bg-transparent border-0 p-0 text-left"
        >
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[16px] tracking-[-0.1504px] whitespace-nowrap">Crédibilité de la source</p>
          <Chevron open={open} />
        </button>
        {open && (
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <Text1 text="Historique de publication" />
            <Text2 text="Réputation de l'auteur" />
            <Text3 text="Références externes" />
            <Text2 text="L'auteur possède un expertise dans le domaine" />
            <Text1 text="Cohérences des faits" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultatDanalyse() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative size-full" data-name="résultat d'analyse">

      {/* Background from Figma — replaces old inline blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <Background />
      </div>

      {/* Status Bar */}
      <div className="-translate-x-1/2 absolute h-[48px] left-[calc(50%-0.5px)] top-0 w-[393px]" data-name="Status Bar">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[14px] pl-[27px] pr-[26px] pt-[18px] relative size-full">
            <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.408px] w-[80px]" style={{ fontFeatureSettings: "'case'" }}>
              9:41
            </p>
            <div className="h-[13px] relative shrink-0 w-[79.528px]" data-name="Icons">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.5281 13">
                <g id="Icons">
                  <path d={svgPaths.p1318c00} fill="var(--fill-0, black)" id="Cellular Connection" />
                  <path d={svgPaths.p1630ec80} fill="var(--fill-0, black)" id="Wifi" />
                  <g id="Battery">
                    <rect height="12" id="Border" opacity="0.35" rx="3" stroke="var(--stroke-0, black)" width="24" x="52.7" y="0.5" />
                    <path d={svgPaths.p2db7c400} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                    <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="1.33333" width="21" x="54.2" y="2" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content — starts below status bar */}
      <div
        className="absolute left-0 right-0 overflow-y-auto"
        style={{ top: "48px", bottom: "0px", transition: "bottom 0.25s cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <div className="flex flex-col gap-[24px] items-center px-[15px] pt-[33px] pb-[24px]">

          {/* Header: back button + title */}
          <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-[53px] items-center relative shrink-0 w-full">
              <div
                className="bg-[#f9f9f9] relative rounded-[12px] shrink-0 size-[36px] cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div className="relative shrink-0 size-[18px]">
                    <div className="absolute inset-[18.44%_16.67%_18.38%_18.44%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5741 15.1635">
                        <path d={svgPaths.p8d01e00} fill="var(--fill-0, black)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Satoshi:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.4492px] whitespace-nowrap">Résultat de l'analyse</p>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0">
              <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333a44] text-[16px] tracking-[-0.1504px] whitespace-nowrap">Vidéo sur le changement climatique</p>
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                <div className="relative shrink-0 size-[12px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <g id="Icon">
                      <path d={svgPaths.p618ec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3d927f00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 6H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.1504px] whitespace-nowrap">{`social.app/post/abc123`}</p>
              </div>
            </div>
          </div>

          {/* Score loader — nouveau design Group4 */}
          <div className="relative shrink-0 size-[160px]">
            <AnimatedScore />
          </div>

          {/* Fiabilité badge */}
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
            <div className="bg-[#f97316] relative rounded-[20px] shrink-0 size-[24px]">
              <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[calc(50%-5.5px)] not-italic text-[14px] text-white top-[calc(50%-10px)] tracking-[-0.1504px] whitespace-nowrap">C</p>
            </div>
            <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f97316] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Fiabilité modérée</p>
          </div>

          {/* Stats row */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="bg-[rgba(252,252,252,0.5)] content-stretch flex flex-col gap-[4px] items-center justify-center relative rounded-[16px] shrink-0 size-[100px]">
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Icon>
                <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </Icon>
              <ContainerText text="3/5" />
              <ContainerText1 text="Sources" />
            </div>
            <div className="bg-[rgba(252,252,252,0.5)] content-stretch flex flex-col gap-[4px] items-center justify-center relative rounded-[16px] shrink-0 size-[100px]">
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Icon>
                <path d={svgPaths.p1b851600} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M12 9V13" id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </Icon>
              <ContainerText text="45%" />
              <ContainerText1 text="Contexte" />
            </div>
            <div className="bg-[rgba(252,252,252,0.5)] content-stretch flex flex-col gap-[4px] items-center justify-center relative rounded-[16px] shrink-0 size-[100px]">
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Icon>
                <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 9L9 15" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M9 9L15 15" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </Icon>
              <ContainerText text="2" />
              <div className="h-[16px] relative shrink-0 w-[87.328px]">
                <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[44.17px] not-italic text-[#0f172a] text-[12px] text-center top-px whitespace-nowrap">Alertes</p>
              </div>
            </div>
          </div>

          {/* Expandable cards */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <CardSignaux className="bg-[rgba(252,252,252,0.3)] relative rounded-[16px] w-full" />
            <CardMedia className="bg-[rgba(252,252,252,0.3)] relative rounded-[16px] w-full" />
            <CardCredibilite className="bg-[rgba(252,252,252,0.3)] relative rounded-[16px] w-full" />
          </div>

        </div>
      </div>
    </div>
  );
}