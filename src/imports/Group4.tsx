import svgPaths from "./svg-bxdd77d8vq";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute contents left-0 top-0">
        <div className="absolute left-0 size-[160px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
            <circle cx="80" cy="80" id="Ellipse 1" r="74" stroke="var(--stroke-0, #F97316)" strokeOpacity="0.1" strokeWidth="12" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] h-[69.333px] items-center justify-center leading-[24px] left-1/2 not-italic py-[7px] top-1/2 tracking-[-0.3125px] w-[45.333px] whitespace-nowrap">
          <p className="font-['Satoshi:Bold',sans-serif] relative shrink-0 text-[#f97316] text-[46px]">50</p>
          <p className="font-['Satoshi:Medium',sans-serif] relative shrink-0 text-[#fc8f43] text-[16px]">sur 100</p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[6.06px] size-[147.993px] top-[6px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[147.993px]">
            <div className="absolute inset-[45.95%_-4.05%_-4.05%_-4.05%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.993 85.9965">
                <path d={svgPaths.p4c63e80} id="Ellipse 3" stroke="url(#paint0_linear_8_76)" strokeLinecap="round" strokeWidth="12" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_76" x1="153.993" x2="6" y1="6" y2="6">
                    <stop stopColor="#F97316" />
                    <stop offset="1" stopColor="#FF7E5D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}