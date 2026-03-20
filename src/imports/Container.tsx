import clsx from "clsx";
import svgPaths from "./svg-j8qp5hb363";
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(252,252,252,0.5)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
        <div className="flex-[308.125_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
              <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172a] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Vidéo sur le changement climatique</p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Paragraph">
              <Icon>
                <g id="Icon">
                  <path d={svgPaths.p618ec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3d927f00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 6H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </Icon>
              <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Insta.app/post/abc123</p>
            </div>
          </div>
        </div>
        <Container1 additionalClassNames="bg-[#f97316] rounded-[10px] size-[28px]">
          <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[8.5px] not-italic text-[14px] text-white top-[4px] tracking-[-0.1504px] whitespace-nowrap">D</p>
        </Container1>
      </div>
      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
        <div className="h-[24px] relative shrink-0 w-[154.766px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <Container1 additionalClassNames="h-[24px] w-[50.766px]">
              <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172a] text-[14px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">50/100</p>
            </Container1>
            <div className="bg-[rgba(249,115,22,0.1)] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Container">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[52.805px] relative size-full">
                  <div className="bg-[#f97316] h-[8px] rounded-[16777200px] shrink-0 w-[48px]" data-name="Container" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center relative">
            <Icon>
              <g clipPath="url(#clip0_1_1620)" id="Icon">
                <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_1620">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </Icon>
            <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Il y a 2h</p>
          </div>
        </div>
      </div>
    </div>
  );
}