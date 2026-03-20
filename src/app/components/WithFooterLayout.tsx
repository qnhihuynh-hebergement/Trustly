import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import svgPaths from "../../imports/svg-06edoy02xq";
import TabBar from "../../imports/Frame245";

// Footer tab bar height (fixed)
const TAB_H = 104;
// Distance from footer bottom to floating button bottom (Figma gap-18)
const GAP = 18;
// Button height
const BTN_H = 56;
// Bottom offset for the scroll containers: tab bar + gap + button
export const FOOTER_SCROLL_H = TAB_H + GAP + BTN_H; // 178px

export type FooterContext = { footerH: number };

export default function WithFooterLayout() {
  const [showInput, setShowInput] = useState(false);
  const [url, setUrl] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset on navigation
  useEffect(() => {
    setShowInput(false);
    setUrl("");
  }, [location.pathname]);

  // Focus input when it opens
  useEffect(() => {
    if (showInput) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setUrl("");
    }
  }, [showInput]);

  const handleButtonClick = () => {
    if (showInput && url.trim()) {
      // Has URL → navigate
      navigate("/resultat");
      setShowInput(false);
    } else if (!showInput) {
      // Open input
      setShowInput(true);
    }
    // If showInput && no url → do nothing (button is visually disabled)
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && url.trim()) {
      navigate("/resultat");
      setShowInput(false);
    }
  };

  // Button state:
  //  - !showInput         → blue (normal) — clicking opens input
  //  - showInput && !url  → gray (disabled)
  //  - showInput && url   → blue (normal) — clicking navigates
  const btnEnabled = !showInput || !!url.trim();
  const btnBg = btnEnabled
    ? "linear-gradient(90deg, #014bed, #1b40aa)"
    : "rgba(37,99,235,0.25)";

  // Floating panel: anchored at bottom = TAB_H + GAP = 122px
  const PANEL_BOTTOM = TAB_H + GAP;

  return (
    <div className="relative size-full">

      {/* ── Tap-outside overlay: covers page area above tab bar ── */}
      {showInput && (
        <div
          className="absolute z-40"
          style={{ top: 0, left: 0, right: 0, bottom: `${TAB_H}px` }}
          onClick={() => setShowInput(false)}
        />
      )}

      {/* ── Page content (scroll container bottom offset = 178px) ── */}
      <Outlet context={{ footerH: FOOTER_SCROLL_H } satisfies FooterContext} />

      {/* ── Gradient fade: transparent → tab-bar color ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: `${TAB_H}px`,
          height: "74px",
          left: 0,
          right: 0,
          zIndex: 45,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #f9f9f9 100%)",
        }}
      />

      {/* ── Floating panel: input + button ── */}
      <div
        className="absolute flex flex-col bg-[#00000000]"
        style={{
          bottom: `${PANEL_BOTTOM}px`,
          left: "50%",
          transform: "translateX(-50%)",
          width: "362px",
          zIndex: 50,
        }}
      >
        {/* URL input — slides in/out above the button */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: showInput ? "56px" : "0px",
            marginBottom: showInput ? "11px" : "0px",
            transition:
              "max-height 0.28s cubic-bezier(0.4, 0, 0.2, 1), margin-bottom 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className="h-[56px] relative w-full"
            style={{
              backdropFilter: "blur(8.05px)",
              WebkitBackdropFilter: "blur(8.05px)",
              background: "rgba(225,234,255,0.85)",
              borderRadius: "18px",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(37,99,235,0.7)] border-solid inset-0 pointer-events-none"
              style={{ borderRadius: "18px" }}
            />
            <div className="flex flex-row items-center size-full px-[18px] gap-[14px]">
              {/* Link icon */}
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p4d1b700} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                  <path d={svgPaths.pf865380} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                  <path d="M6.66667 10H13.3333" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                </svg>
              </div>

              <input
                ref={inputRef}
                type="url"
                inputMode="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Coller un url..."
                className="flex-1 bg-transparent outline-none font-['Satoshi:Medium',sans-serif] text-[16px] tracking-[-0.3125px]"
                style={{
                  color: "rgba(37,99,235,0.9)",
                  WebkitAppearance: "none",
                  border: "none",
                  caretColor: "#2563EB",
                }}
              />

              {/* Clear button */}
              {url.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setUrl("");
                    inputRef.current?.focus();
                  }}
                  className="flex items-center justify-center rounded-full shrink-0 size-[20px]"
                  style={{
                    background: "rgba(37,99,235,0.12)",
                    border: "none",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Lancer l'analyse button */}
        <button
          onClick={handleButtonClick}
          className="h-[56px] w-full border-0 cursor-pointer"
          style={{
            background: btnBg,
            transition: "background 0.2s ease",
            WebkitTapHighlightColor: "transparent",
            borderRadius: "18px",
          }}
        >
          <div className="flex flex-row items-center justify-center size-full gap-[14px]">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <mask height="24" id="mask_avgpace_wfl" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                  <rect fill="#D9D9D9" height="24" width="24" />
                </mask>
                <g mask="url(#mask_avgpace_wfl)">
                  <path d={svgPaths.p28da9700} fill="white" />
                </g>
              </svg>
            </div>
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-center text-white tracking-[-0.3125px] whitespace-nowrap">
              Lancer l'analyse
            </p>
          </div>
        </button>
      </div>

      {/* ── Tab bar (104px) ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: `${TAB_H}px`, zIndex: 50 }}
      >
        <TabBar />
      </div>

    </div>
  );
}