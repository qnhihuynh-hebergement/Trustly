import svgPaths from "./svg-3gz17qfc1a";

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172a] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Vidéo sur le changement climatique</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p618ec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d927f00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <Icon />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Insta.app/post/abc123</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[308.125_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f97316] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[8.5px] not-italic text-[14px] text-white top-[4px] tracking-[-0.1504px] whitespace-nowrap">D</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172a] text-[14px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">50/100</p>
      </div>
    </div>
  );
}

function Container8() {
  return <div className="bg-[#f97316] h-[8px] rounded-[16777200px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-[rgba(249,115,22,0.1)] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[52.805px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[154.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2001_50)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
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

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center relative">
        <Icon1 />
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Il y a 2h</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container9 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(252,252,252,0.5)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container1 />
      <Container4 />
    </div>
  );
}