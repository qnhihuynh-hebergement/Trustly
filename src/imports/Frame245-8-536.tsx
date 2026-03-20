import clsx from "clsx";
import svgPaths from "./svg-wh31e6u8c9";
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx("h-[44px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">{children}</div>
    </div>
  );
}
type TextProps = {
  additionalClassNames?: string;
};

function Text({ children, additionalClassNames = "" }: React.PropsWithChildren<TextProps>) {
  return (
    <div className={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative size-full">
      <div className="absolute bg-gradient-to-b bottom-[104px] from-[rgba(244,244,244,0)] h-[74px] left-0 to-[#f4f4f4] to-[104.78%] w-[402px]" />
      <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[362px]">
        <div className="backdrop-blur-[8.05px] bg-[rgba(240,245,255,0.8)] h-[56px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[rgba(37,99,235,0.7)] border-solid inset-[-1px] pointer-events-none rounded-[19px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[14px] items-center px-[18px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon">
                    <path d={svgPaths.p4d1b700} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                    <path d={svgPaths.pf865380} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                    <path d="M6.66667 10H13.3333" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(37,99,235,0.7)] text-center tracking-[-0.3125px] whitespace-nowrap">Coller un url...</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#014bed] h-[56px] relative rounded-[18px] shrink-0 to-[#1b40aa] w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[14px] items-center justify-center px-[14px] relative size-full">
              <Wrapper>
                <g id="avg_pace">
                  <mask height="24" id="mask0_1_1609" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                  </mask>
                  <g mask="url(#mask0_1_1609)">
                    <path d={svgPaths.p28da9700} fill="var(--fill-0, white)" id="avg_pace_2" />
                  </g>
                </g>
              </Wrapper>
              <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px] whitespace-nowrap">Lancer l’analyse</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] relative shrink-0 w-full" data-name="Screen5Dashboard">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start pb-[40px] pt-[20px] px-[30px] relative w-full">
          <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
            <Button additionalClassNames="w-[42.102px]">
              <Icon>
                <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
                  <div className="absolute inset-[-11.11%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                      <path d={svgPaths.p3ff7f900} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.26%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.9995">
                      <path d={svgPaths.p282f8f00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </Icon>
              <Text additionalClassNames="w-[42.102px]">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[21.5px] not-italic text-[#2563eb] text-[12px] text-center top-px whitespace-nowrap">Accueil</p>
              </Text>
            </Button>
            <Button additionalClassNames="w-[61.484px]">
              <Wrapper>
                <g id="book_4">
                  <mask height="24" id="mask0_1_1554" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                  </mask>
                  <g mask="url(#mask0_1_1554)">
                    <path d={svgPaths.p2c293680} fill="var(--fill-0, #99A1AF)" id="book_4_2" />
                  </g>
                </g>
              </Wrapper>
              <Text additionalClassNames="w-[61.484px]">
                <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[31.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">Ressources</p>
              </Text>
            </Button>
            <Button additionalClassNames="w-[59.82px]">
              <Icon>
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00022 10.0002">
                      <path d="M1 1V7L5 9" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </Icon>
              <Text additionalClassNames="w-[59.82px]">
                <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[30px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">Historique</p>
              </Text>
            </Button>
            <Button additionalClassNames="w-[30.461px]">
              <Icon>
                <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                      <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                      <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </Icon>
              <Text additionalClassNames="w-[30.461px]">
                <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[15.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">Profil</p>
              </Text>
            </Button>
          </div>
          <div className="-translate-x-1/2 absolute bg-black h-[4px] left-1/2 rounded-[16777200px] top-[90.25px] w-[100px]" data-name="Container" />
        </div>
      </div>
    </div>
  );
}