import clsx from "clsx";
import svgPaths from "./svg-711lkhhe4z";
import imgFlatCylinder5 from "figma:asset/5a43be7056436aae265135c35affe71d4bba4ec9.png";
import imgRectangle17 from "figma:asset/28f71536a2de8dc6762aa9ca58541e6918376a56.png";
import imgRectangle18 from "figma:asset/d83d7c39c27844c0ad3fd37ee0fd81c6f0e525a7.png";
import imgRectangle19 from "figma:asset/3d86e8b4c130b11683d6e08957738d429aae9600.png";

function ContainerBackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(132,204,22,0.1)] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[16777200px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(252,252,252,0.5)] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(252,252,252,0.5)] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24px] relative shrink-0 w-[154.766px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}
type ButtonBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  return (
    <div className={clsx("h-[44px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">{children}</div>
    </div>
  );
}

function IconBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[308.125_0_0] h-[40px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage4Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage4Props>) {
  return (
    <div className={clsx("flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[16777200px]", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[52.805px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndText5Props = {
  text: string;
};

function ContainerBackgroundImageAndText5({ text }: ContainerBackgroundImageAndText5Props) {
  return (
    <BackgroundImage additionalClassNames="bg-[#84cc16] rounded-[10px] size-[28px]">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[calc(50%-5px)] not-italic text-[14px] text-white top-[calc(50%-10px)] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}

function ContainerBackgroundImage3() {
  return (
    <BackgroundImage1>
      <HeadingBackgroundImageAndText text="Résultats d’une étude sur la santé" />
      <ParagraphBackgroundImage text="Tiktok.app/post/" text1="changement" text2="/" text3="climatique" />
    </BackgroundImage1>
  );
}
type ContainerBackgroundImageAndText4Props = {
  text: string;
};

function ContainerBackgroundImageAndText4({ text }: ContainerBackgroundImageAndText4Props) {
  return (
    <BackgroundImage additionalClassNames="bg-[#eecf02] rounded-[10px] size-[28px]">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[8.5px] not-italic text-[14px] text-white top-[4px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}

function ContainerBackgroundImage2() {
  return (
    <BackgroundImage1>
      <HeadingBackgroundImageAndText text="Vidéo sur le changement climatique" />
      <ParagraphBackgroundImage text="Tiktok.app/post/" text1="changement" text2="/" text3="climatique" />
    </BackgroundImage1>
  );
}
type ParagraphBackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function ParagraphBackgroundImage({ text, text1, text2, text3 }: ParagraphBackgroundImageProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <IconBackgroundImage />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">
        <span className="leading-[16px]">{text}</span>
        <span className="leading-[16px]">{text1}</span>
        <span className="leading-[16px]">{text2}</span>
        <span className="leading-[16px]">{text3}</span>
      </p>
    </div>
  );
}
type ContainerBackgroundImageAndText3Props = {
  text: string;
};

function ContainerBackgroundImageAndText3({ text }: ContainerBackgroundImageAndText3Props) {
  return (
    <BackgroundImage additionalClassNames="bg-[#c0cc16] rounded-[10px] size-[28px]">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[calc(50%-4.5px)] not-italic text-[14px] text-white top-[calc(50%-10px)] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}

function ContainerBackgroundImage1() {
  return (
    <BackgroundImage1>
      <HeadingBackgroundImageAndText text="Article d’actualité Cnews" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <IconBackgroundImage />
        <a className="block font-['Satoshi:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap" href="https://www.cnews.fr/france/2026-03-18/municipales-2026-66-des-francais-desapprouvent-les-alliances-entre-lfi-et-le-ps">
          <p className="cursor-pointer leading-[16px]">{`https://www.cnews.fr/france/2026...`}</p>
        </a>
      </div>
    </BackgroundImage1>
  );
}
type ContainerBackgroundImageAndText2Props = {
  text: string;
};

function ContainerBackgroundImageAndText2({ text }: ContainerBackgroundImageAndText2Props) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center relative">
        <BackgroundImage2>
          <g clipPath="url(#clip0_1_1620)" id="Icon">
            <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1_1620">
              <rect fill="white" height="12" width="12" />
            </clipPath>
          </defs>
        </BackgroundImage2>
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <BackgroundImage additionalClassNames="h-[24px] w-[50.766px]">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172a] text-[14px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <BackgroundImage additionalClassNames="bg-[#f97316] rounded-[10px] size-[28px]">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[8.5px] not-italic text-[14px] text-white top-[4px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}

function ContainerBackgroundImage() {
  return (
    <BackgroundImage1>
      <HeadingBackgroundImageAndText text="Vidéo sur le changement climatique" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <IconBackgroundImage />
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{"Insta.app/post/abc123"}</p>
      </div>
    </BackgroundImage1>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage2>
      <g id="Icon">
        <path d={svgPaths.p618ec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p3d927f00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 6H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </BackgroundImage2>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172a] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function EnvoyerUnLien() {
  return (
    <div className="bg-[#f4f4f4] relative size-full" data-name="envoyer un lien">
      <div className="absolute bottom-0 content-stretch flex flex-col gap-[18px] items-center left-0 w-[402px]">
        <div className="absolute bg-gradient-to-b bottom-[104px] from-[rgba(244,244,244,0)] h-[74px] left-0 to-[#f4f4f4] to-[104.78%] w-[402px]" />
        <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[362px]">
          <div className="backdrop-blur-[8.05px] bg-[rgba(240,245,255,0.8)] h-[56px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(37,99,235,0.7)] border-solid inset-[-1px] pointer-events-none rounded-[19px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[14px] items-center px-[18px] relative size-full">
                <BackgroundImage3>
                  <g id="Icon">
                    <path d={svgPaths.p4d1b700} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                    <path d={svgPaths.pf865380} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                    <path d="M6.66667 10H13.3333" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
                  </g>
                </BackgroundImage3>
                <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(37,99,235,0.7)] text-center tracking-[-0.3125px] whitespace-nowrap">Coller un url...</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#014bed] h-[56px] relative rounded-[18px] shrink-0 to-[#1b40aa] w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[14px] items-center justify-center px-[14px] relative size-full">
                <BackgroundImage4>
                  <g id="avg_pace">
                    <mask height="24" id="mask0_1_1609" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                    </mask>
                    <g mask="url(#mask0_1_1609)">
                      <path d={svgPaths.p28da9700} fill="var(--fill-0, white)" id="avg_pace_2" />
                    </g>
                  </g>
                </BackgroundImage4>
                <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px] whitespace-nowrap">Lancer l’analyse</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f9f9f9] relative shrink-0 w-full" data-name="Screen5Dashboard">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pb-[40px] pt-[20px] px-[30px] relative w-full">
            <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ButtonBackgroundImage additionalClassNames="w-[42.102px]">
                <IconBackgroundImage1>
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
                </IconBackgroundImage1>
                <BackgroundImage additionalClassNames="h-[16px] w-[42.102px]">
                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[21.5px] not-italic text-[#2563eb] text-[12px] text-center top-px whitespace-nowrap">Accueil</p>
                </BackgroundImage>
              </ButtonBackgroundImage>
              <ButtonBackgroundImage additionalClassNames="w-[61.484px]">
                <BackgroundImage4>
                  <g id="book_4">
                    <mask height="24" id="mask0_1_1554" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                    </mask>
                    <g mask="url(#mask0_1_1554)">
                      <path d={svgPaths.p2c293680} fill="var(--fill-0, #99A1AF)" id="book_4_2" />
                    </g>
                  </g>
                </BackgroundImage4>
                <BackgroundImage additionalClassNames="h-[16px] w-[61.484px]">
                  <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[31.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">Ressources</p>
                </BackgroundImage>
              </ButtonBackgroundImage>
              <ButtonBackgroundImage additionalClassNames="w-[59.82px]">
                <IconBackgroundImage1>
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
                </IconBackgroundImage1>
                <BackgroundImage additionalClassNames="h-[16px] w-[59.82px]">
                  <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[30px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">Historique</p>
                </BackgroundImage>
              </ButtonBackgroundImage>
              <ButtonBackgroundImage additionalClassNames="w-[30.461px]">
                <IconBackgroundImage1>
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
                </IconBackgroundImage1>
                <BackgroundImage additionalClassNames="h-[16px] w-[30.461px]">
                  <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[15.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">Profil</p>
                </BackgroundImage>
              </ButtonBackgroundImage>
            </div>
            <div className="-translate-x-1/2 absolute bg-black h-[4px] left-1/2 rounded-[16777200px] top-[90.25px] w-[100px]" data-name="Container" />
          </div>
        </div>
      </div>
      <div className="absolute h-[1029.315px] left-[-272.19px] top-[-153.32px] w-[912.349px]" data-name="background">
        <div className="absolute inset-[-7.67%_-12.65%_-11.21%_-12.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1143.15 1223.71">
            <g id="background">
              <g filter="url(#filter0_f_1_1597)" id="Ellipse 3">
                <ellipse cx="381.796" cy="778.103" fill="var(--fill-0, #2563EB)" fillOpacity="0.08" rx="266.396" ry="330.207" />
              </g>
              <g filter="url(#filter1_f_1_1597)" id="Ellipse 5">
                <ellipse cx="865.67" cy="855.212" fill="var(--fill-0, #2563EB)" fillOpacity="0.08" rx="162.079" ry="200.903" />
              </g>
              <g filter="url(#filter2_f_1_1597)" id="Ellipse 4">
                <ellipse cx="755.162" cy="345.342" fill="var(--fill-0, #2563EB)" fillOpacity="0.06" rx="186.971" ry="231.757" transform="rotate(-12.3343 755.162 345.342)" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="891.214" id="filter0_f_1_1597" width="763.592" x="0" y="332.496">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1597" stdDeviation="57.7" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="632.605" id="filter1_f_1_1597" width="554.958" x="588.191" y="538.91">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1597" stdDeviation="57.7" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="690.684" id="filter2_f_1_1597" width="609.386" x="450.469" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1597" stdDeviation="57.7" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[596px] items-start left-[20px] top-[100px] w-[362px]">
        <div className="content-stretch flex flex-col gap-[10px] h-[438px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[362px]">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <p className="font-['Satoshi:Medium',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f172a] text-[32px] tracking-[0.0703px] whitespace-nowrap">👋 Bonjour,</p>
                <div className="bg-[rgba(37,99,235,0.8)] content-stretch flex items-center justify-center px-[15px] py-[4px] relative rounded-[14px] shrink-0">
                  <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px] whitespace-nowrap">Crédits 9/10</p>
                </div>
              </div>
              <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[16px] tracking-[-0.1504px] whitespace-nowrap">Vérifiez la fiabilité de vos contenus</p>
            </div>
            <div className="bg-gradient-to-b from-[rgba(37,99,235,0.14)] relative rounded-[23px] shrink-0 to-[rgba(37,99,235,0.01)] w-full">
              <div aria-hidden="true" className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none rounded-[23px]" />
              <div className="content-stretch flex items-start justify-between p-[16px] relative w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <p className="font-['Satoshi:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.4395px] whitespace-nowrap">Besoin de plus de crédits ?</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="font-['Satoshi:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.4395px] whitespace-nowrap whitespace-pre">
                      <p className="mb-0">Essayez Trustly Pro pour obtenir</p>
                      <p>{` jusqu’a 100 crédits par jour `}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[73.796px] items-center justify-center left-[212.5px] top-[36px] w-[73.367px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                  <div className="flex-none rotate-[20.99deg]">
                    <div className="h-[57.329px] relative w-[56.584px]" data-name="Flat Cylinder 5">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder5} />
                      <div className="absolute contents inset-0" data-name="Mask Group">
                        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
                        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[67.691px] items-center justify-center left-[281px] top-[15.31px] w-[67.227px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                  <div className="flex-none rotate-[-25.83deg]">
                    <div className="h-[51px] relative w-[50px]" data-name="Flat Cylinder 6">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder5} />
                      <div className="absolute contents inset-0" data-name="Mask Group">
                        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle18}')` }} />
                        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle18}')` }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[59.948px] items-center justify-center left-[233.5px] top-[-16.95px] w-[59.829px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                  <div className="flex-none rotate-[40.15deg]">
                    <div className="h-[43px] relative w-[42px]" data-name="Flat Cylinder 7">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder5} />
                      <div className="absolute contents inset-0" data-name="Mask Group">
                        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle19}')` }} />
                        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle19}')` }} />
                      </div>
                    </div>
                  </div>
                </div>
                <BackgroundImage3>
                  <g data-figma-bg-blur-radius="4" id="material-symbols:close-rounded">
                    <rect fill="var(--fill-0, white)" fillOpacity="0.6" height="20" rx="7" width="20" />
                    <path d={svgPaths.p3de09900} fill="var(--fill-0, black)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="bgblur_0_1_1579_clip_path" transform="translate(4 4)">
                      <rect height="20" rx="7" width="20" />
                    </clipPath>
                  </defs>
                </BackgroundImage3>
              </div>
            </div>
            <div className="content-stretch flex h-[30px] items-center justify-between shrink-0 sticky top-0 w-full" data-name="Container">
              <BackgroundImage additionalClassNames="h-[30px] w-[92.625px]">
                <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[30px] left-0 not-italic text-[#0f172a] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Historique</p>
              </BackgroundImage>
              <BackgroundImage additionalClassNames="h-[20px] w-[56.375px]">
                <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[28.5px] not-italic text-[#2563eb] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Voir tout</p>
              </BackgroundImage>
            </div>
          </div>
          <ContainerBackgroundImage6>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage />
              <ContainerBackgroundImageAndText text="D" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="50/100" />
                <ContainerBackgroundImage4 additionalClassNames="bg-[rgba(249,115,22,0.1)]">
                  <div className="bg-[#f97316] h-[8px] rounded-[16777200px] shrink-0 w-[48px]" data-name="Container" />
                </ContainerBackgroundImage4>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 2h" />
            </div>
          </ContainerBackgroundImage6>
          <ContainerBackgroundImage6>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage1 />
              <ContainerBackgroundImageAndText3 text="B" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="73/100" />
                <ContainerBackgroundImage4 additionalClassNames="bg-[rgba(132,204,22,0.1)]">
                  <div className="bg-[#c0cc16] h-[8px] rounded-[16777200px] shrink-0 w-[73px]" data-name="Container" />
                </ContainerBackgroundImage4>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 3j" />
            </div>
          </ContainerBackgroundImage6>
          <ContainerBackgroundImage7>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage2 />
              <ContainerBackgroundImageAndText4 text="C" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="30/100" />
                <ContainerBackgroundImage4 additionalClassNames="bg-[rgba(238,207,2,0.1)]">
                  <div className="bg-[#eecf02] h-[8px] rounded-[16777200px] shrink-0 w-[31px]" data-name="Container" />
                </ContainerBackgroundImage4>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 4j" />
            </div>
          </ContainerBackgroundImage7>
          <ContainerBackgroundImage7>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage3 />
              <ContainerBackgroundImageAndText5 text="A" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="100/100" />
                <ContainerBackgroundImage8>
                  <div className="bg-[#84cc16] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />
                </ContainerBackgroundImage8>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 5j" />
            </div>
          </ContainerBackgroundImage7>
          <ContainerBackgroundImage6>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage />
              <ContainerBackgroundImageAndText text="D" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="50/100" />
                <ContainerBackgroundImage4 additionalClassNames="bg-[rgba(249,115,22,0.1)]">
                  <div className="bg-[#f97316] h-[8px] rounded-[16777200px] shrink-0 w-[48px]" data-name="Container" />
                </ContainerBackgroundImage4>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 2h" />
            </div>
          </ContainerBackgroundImage6>
          <ContainerBackgroundImage6>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage1 />
              <ContainerBackgroundImageAndText3 text="B" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="73/100" />
                <ContainerBackgroundImage4 additionalClassNames="bg-[rgba(132,204,22,0.1)]">
                  <div className="bg-[#c0cc16] h-[8px] rounded-[16777200px] shrink-0 w-[73px]" data-name="Container" />
                </ContainerBackgroundImage4>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 3j" />
            </div>
          </ContainerBackgroundImage6>
          <ContainerBackgroundImage7>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage2 />
              <ContainerBackgroundImageAndText4 text="C" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="30/100" />
                <ContainerBackgroundImage4 additionalClassNames="bg-[rgba(238,207,2,0.1)]">
                  <div className="bg-[#eecf02] h-[8px] rounded-[16777200px] shrink-0 w-[31px]" data-name="Container" />
                </ContainerBackgroundImage4>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 4j" />
            </div>
          </ContainerBackgroundImage7>
          <ContainerBackgroundImage7>
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage3 />
              <ContainerBackgroundImageAndText5 text="A" />
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage5>
                <ContainerBackgroundImageAndText1 text="100/100" />
                <ContainerBackgroundImage8>
                  <div className="bg-[#84cc16] h-[8px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />
                </ContainerBackgroundImage8>
              </ContainerBackgroundImage5>
              <ContainerBackgroundImageAndText2 text="Il y a 5j" />
            </div>
          </ContainerBackgroundImage7>
        </div>
      </div>
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
    </div>
  );
}