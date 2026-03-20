import svgPaths from "./svg-ydb8m0c552";
import imgGroup61 from "figma:asset/86d1f5e0eaec262002952b47e1eea00b444d6289.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="font-['Satoshi:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.4395px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">Essayez Trustly Pro pour obtenir</p>
        <p>{` jusqu’a 100 crédits par jour `}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.4395px] whitespace-nowrap">Besoin de plus de crédits ?</p>
      <Frame1 />
    </div>
  );
}

function MaterialSymbolsCloseRounded({ onClose }: { onClose?: () => void }) {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer" data-name="material-symbols:close-rounded" onClick={onClose}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g data-figma-bg-blur-radius="4" id="material-symbols:close-rounded">
          <rect fill="var(--fill-0, white)" fillOpacity="0.7" height="20" rx="7" width="20" />
          <path d={svgPaths.p3de09900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="bgblur_0_2001_86_clip_path" transform="translate(4 4)">
            <rect height="20" rx="7" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(37,99,235,0.1)] items-start justify-between p-[16px] relative rounded-[23px] size-full to-[rgba(37,99,235,0.01)] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[rgba(37,99,235,0.1)] border-solid inset-0 pointer-events-none rounded-[23px]" />
      <div className="absolute h-[132px] left-[204px] top-[-23px] w-[142px] pointer-events-none" data-name="Group 6 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgGroup61} />
      </div>
      <Frame2 />
      <MaterialSymbolsCloseRounded onClose={onClose} />
    </div>
  );
}