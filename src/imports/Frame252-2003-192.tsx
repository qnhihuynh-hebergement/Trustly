import svgPaths from "./svg-b5fxz4dwuu";
import imgFlatCylinder5 from "figma:asset/5a43be7056436aae265135c35affe71d4bba4ec9.png";
import imgRectangle17 from "figma:asset/deddaede91d10397828b0e8af55dc43386e05b6e.png";
import imgRectangle18 from "figma:asset/3f3147b9b57e51c3621d17ac372f6bd153ecba10.png";
import imgRectangle19 from "figma:asset/3c2d8600c9fd8a03462dc9b66ebc476bb3e57492.png";

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
      <p className="font-['Satoshi:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.4395px] whitespace-nowrap">Besoin de plus de crédits ?</p>
      <Frame1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle18}')` }} />
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle18}')` }} />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle19}')` }} />
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle19}')` }} />
    </div>
  );
}

function MaterialSymbolsCloseRounded() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:close-rounded">
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

export default function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(37,99,235,0.1)] items-start justify-between p-[16px] relative rounded-[23px] size-full to-[rgba(37,99,235,0.01)]">
      <div aria-hidden="true" className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none rounded-[23px]" />
      <Frame2 />
      <div className="absolute flex h-[73.796px] items-center justify-center left-[212.5px] top-[36px] w-[73.367px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.99deg]">
          <div className="h-[57.329px] relative w-[56.584px]" data-name="Flat Cylinder 5">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder5} />
            <MaskGroup />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[67.691px] items-center justify-center left-[281px] top-[15.31px] w-[67.227px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-25.83deg]">
          <div className="h-[51px] relative w-[50px]" data-name="Flat Cylinder 6">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder5} />
            <MaskGroup1 />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[59.948px] items-center justify-center left-[233.5px] top-[-16.95px] w-[59.829px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[40.15deg]">
          <div className="h-[43px] relative w-[42px]" data-name="Flat Cylinder 7">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder5} />
            <MaskGroup2 />
          </div>
        </div>
      </div>
      <MaterialSymbolsCloseRounded />
    </div>
  );
}