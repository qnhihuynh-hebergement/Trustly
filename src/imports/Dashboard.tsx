import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router";
import svgPaths from "./svg-hqthpi7l2n";
import CreditsCard from "./Frame252-2001-67";
import HistoryHeader from "./Container-2001-34";
import Background from "./Background";

// ── SVG icon helpers (from Container-2001-41) ─────────────────
function LinkIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 8.5H3.5C2.83696 8.5 2.20107 8.23661 1.73223 7.76777C1.26339 7.29893 1 6.66304 1 6C1 5.33696 1.26339 4.70107 1.73223 4.23223C2.20107 3.76339 2.83696 3.5 3.5 3.5H4.5" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 3.5H8.5C9.16304 3.5 9.79893 3.76339 10.2678 4.23223C10.7366 4.70107 11 5.33696 11 6C11 6.66304 10.7366 7.29893 10.2678 7.76777C9.79893 8.23661 9.16304 8.5 8.5 8.5H7.5" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6H8" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2001_50)">
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_50">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ── HistoryCard component (based on Container-2001-41 design) ───
type HistoryCardProps = {
  title: string;
  url: string;
  badge: string;
  badgeColor: string;
  score: number;
  barFillColor: string;
  barBgColor: string;
  barWidthPercent: number;
  time: string;
  onClick?: () => void;
};

function HistoryCard({ title, url, badge, badgeColor, score, barFillColor, barBgColor, barWidthPercent, time, onClick }: HistoryCardProps) {
  return (
    <div
      className="bg-[rgba(252,252,252,0.5)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] w-full"
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : undefined}
    >
      <div aria-hidden="true" className="absolute border border-white border-solid inset-0 pointer-events-none rounded-[16px]" />

      {/* Row 1: title + url + badge */}
      <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full">
        <div className="flex-[308.125_0_0] h-[40px] min-h-px min-w-px relative">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="h-[20px] relative shrink-0 w-full">
              <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#0f172a] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">{title}</p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
              <LinkIcon />
              <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap overflow-hidden text-ellipsis">{url}</p>
            </div>
          </div>
        </div>
        {/* Badge */}
        <div
          className="relative shrink-0 rounded-[10px] size-[28px]"
          style={{ backgroundColor: badgeColor }}
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[8.5px] not-italic text-[14px] text-white top-[4px] tracking-[-0.1504px] whitespace-nowrap">{badge}</p>
          </div>
        </div>
      </div>

      {/* Row 2: score + bar + time */}
      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full">
        <div className="h-[24px] relative shrink-0 w-[154.766px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="h-[24px] relative shrink-0 w-[50.766px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172a] text-[14px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{score}/100</p>
              </div>
            </div>
            {/* Progress bar */}
            <div className="flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[16777200px]" style={{ backgroundColor: barBgColor }}>
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full" style={{ paddingRight: `${100 - barWidthPercent}%` }}>
                  <div
                    className="h-[8px] rounded-[16777200px] shrink-0"
                    style={{ backgroundColor: barFillColor, width: `${barWidthPercent}px` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Time */}
        <div className="relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center relative">
            <ClockIcon />
            <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── History items data ────────────────────────────────────────
const HISTORY_ITEMS: HistoryCardProps[] = [
  {
    title: "Vidéo sur le changement climatique",
    url: "Insta.app/post/abc123",
    badge: "D",
    badgeColor: "#f97316",
    score: 50,
    barFillColor: "#f97316",
    barBgColor: "rgba(249,115,22,0.1)",
    barWidthPercent: 50,
    time: "Il y a 2h",
  },
  {
    title: "Article d'actualité Cnews",
    url: "https://www.cnews.fr/france/2026...",
    badge: "B",
    badgeColor: "#84cc16",
    score: 73,
    barFillColor: "#84cc16",
    barBgColor: "rgba(132,204,22,0.1)",
    barWidthPercent: 73,
    time: "Il y a 3j",
  },
  {
    title: "Vidéo sur le changement climatique",
    url: "Tiktok.app/post/changement/climatique",
    badge: "C",
    badgeColor: "#eecf02",
    score: 30,
    barFillColor: "#eecf02",
    barBgColor: "rgba(238,207,2,0.1)",
    barWidthPercent: 30,
    time: "Il y a 4j",
  },
  {
    title: "Résultats d'une étude sur la santé",
    url: "Tiktok.app/post/changement/climatique",
    badge: "A",
    badgeColor: "#84cc16",
    score: 100,
    barFillColor: "#84cc16",
    barBgColor: "rgba(132,204,22,0.1)",
    barWidthPercent: 100,
    time: "Il y a 5j",
  },
  {
    title: "Vidéo sur le changement climatique",
    url: "Insta.app/post/abc123",
    badge: "D",
    badgeColor: "#f97316",
    score: 50,
    barFillColor: "#f97316",
    barBgColor: "rgba(249,115,22,0.1)",
    barWidthPercent: 50,
    time: "Il y a 2h",
  },
  {
    title: "Article d'actualité Cnews",
    url: "https://www.cnews.fr/france/2026...",
    badge: "B",
    badgeColor: "#84cc16",
    score: 73,
    barFillColor: "#84cc16",
    barBgColor: "rgba(132,204,22,0.1)",
    barWidthPercent: 73,
    time: "Il y a 3j",
  },
  {
    title: "Vidéo sur le changement climatique",
    url: "Tiktok.app/post/changement/climatique",
    badge: "C",
    badgeColor: "#eecf02",
    score: 30,
    barFillColor: "#eecf02",
    barBgColor: "rgba(238,207,2,0.1)",
    barWidthPercent: 30,
    time: "Il y a 4j",
  },
  {
    title: "Résultats d'une étude sur la santé",
    url: "Tiktok.app/post/changement/climatique",
    badge: "A",
    badgeColor: "#84cc16",
    score: 100,
    barFillColor: "#84cc16",
    barBgColor: "rgba(132,204,22,0.1)",
    barWidthPercent: 100,
    time: "Il y a 5j",
  },
];

// ── Main Dashboard component ──────────────────────────────────
export default function Dashboard() {
  const [showCredits, setShowCredits] = useState(true);
  const { footerH } = useOutletContext<{ footerH: number }>();
  const navigate = useNavigate();

  return (
    <div className="bg-white relative size-full" data-name="dashboard">

      {/* Fixed background blobs from Figma */}
      <div className="absolute inset-0 pointer-events-none">
        <Background />
      </div>

      {/* Status Bar */}
      <div className="-translate-x-1/2 absolute h-[48px] left-[calc(50%-0.5px)] top-0 w-[393px] z-10" data-name="Status Bar">
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

      {/* Main content — single unified scroll */}
      <div
        className="absolute left-0 right-0 overflow-y-auto"
        style={{
          top: "48px",
          bottom: `${footerH}px`,
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        <div className="flex flex-col gap-[24px] px-[20px] pt-[52px] pb-[12px]">

          {/* ── Frame: Greeting (sans fond) ───────────────────── */}
          <div className="w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <p className="font-['Satoshi:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f172a] text-[32px] tracking-[0.0703px] whitespace-nowrap">👋 Bonjour,</p>
                <div className="bg-[rgba(37,99,235,0.06)] content-stretch flex items-center justify-center px-[15px] py-[4px] relative rounded-[14px]">
                  <div aria-hidden="true" className="absolute border-[#2563eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Crédits 9/10</p>
                </div>
              </div>
              <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[16px] tracking-[-0.1504px] whitespace-nowrap">Vérifiez la fiabilité de vos contenus</p>
            </div>
          </div>

          {/* ── Frame: Credits upgrade card ───────────────────── */}
          {showCredits && (
            <div className="relative shrink-0 w-full" style={{ height: "104px" }}>
              <CreditsCard onClose={() => setShowCredits(false)} />
            </div>
          )}

          {/* ── Frame: Historique (sans fond) ─────────────────── */}
          <div className="w-full">
            {/* History header */}
            <div className="mb-[16px]">
              <HistoryHeader />
            </div>
            {/* Content cards */}
            <div className="flex flex-col gap-[10px]">
              {HISTORY_ITEMS.map((item, index) => (
                <HistoryCard
                  key={index}
                  {...item}
                  onClick={
                    item.title === "Vidéo sur le changement climatique"
                      ? () => navigate("/resultat")
                      : undefined
                  }
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}