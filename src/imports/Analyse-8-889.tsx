import clsx from "clsx";
import svgPaths from "./svg-3x6pzbtzk8";
import imgImage4 from "figma:asset/57c23d68c4b0531e32c601a9f7b3c8eda99af39f.png";
import imgContent from "figma:asset/1915696f7adc1399bd6605453faae433b7c87c03.png";

function TopSectionBookmarkSearchBackgroundImage() {
  return (
    <div className="relative shadow-[1px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 size-[28px]">
      <div className="absolute inset-[10.71%_8.19%_9.17%_10.71%]" data-name="Ellipse 7 (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7071 22.4321">
          <path clipRule="evenodd" d={svgPaths.p1a3caf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Ellipse 7 (Stroke)" />
        </svg>
      </div>
    </div>
  );
}
type LiveBackgroundImageAndTextProps = {
  text: string;
};

function LiveBackgroundImageAndText({ text }: LiveBackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[#e6436d] content-stretch flex h-[8px] items-center justify-center px-[3.522px] py-[0.783px] right-[-7.04px] rounded-[27px] top-0">
      <p className="font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[6px] text-center text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type NotificationBackgroundImageProps = {
  additionalClassNames?: string;
};

function NotificationBackgroundImage({ additionalClassNames = "" }: NotificationBackgroundImageProps) {
  return (
    <div className={clsx("absolute size-[8px] top-0", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <circle cx="4" cy="4" fill="var(--fill-0, #EB4D60)" id="Notification" r="4" />
      </svg>
    </div>
  );
}
type SectionChooseProps = {
  className?: string;
  label?: string;
  live?: boolean;
  notification?: boolean;
  showLine?: boolean;
  state?: boolean;
};

function SectionChoose({ className, label = "Label", live = true, notification = true, showLine = true, state = true }: SectionChooseProps) {
  const isNotState = !state;
  const isState = state;
  return (
    <div className={className || `relative ${isNotState ? "h-[31px]" : ""}`}>
      <div className="flex flex-col items-center size-full">
        <div className={`content-stretch flex flex-col gap-[5px] items-center relative ${isNotState ? "h-full" : ""}`}>
          {isState && <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap">{label}</p>}
          {isState && showLine && <div className="bg-white h-[4px] shrink-0 w-[29px]" data-name="Line" />}
          {isState && notification && <NotificationBackgroundImage additionalClassNames="right-[-4px]" />}
          {isState && live && <LiveBackgroundImageAndText text="LIVE" />}
          {isNotState && <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[22px] not-italic opacity-70 relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap">{label}</p>}
          {isNotState && notification && <NotificationBackgroundImage additionalClassNames="right-[-3.5px]" />}
          {isNotState && live && <LiveBackgroundImageAndText text="LIVE" />}
        </div>
      </div>
    </div>
  );
}
type SectionChoose1Props = {
  className?: string;
  label?: string;
  live?: boolean;
  notification?: boolean;
  showLine?: boolean;
  state?: boolean;
};

function SectionChoose1({ className, label = "Label", live = true, notification = true, showLine = true, state = false }: SectionChoose1Props) {
  const isNotState = !state;
  const isState = state;
  return (
    <div className={className || `relative ${isNotState ? "h-[31px]" : ""}`}>
      <div className="flex flex-col items-center size-full">
        <div className={`content-stretch flex flex-col gap-[5px] items-center relative ${isNotState ? "h-full" : ""}`}>
          {isState && <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap">{label}</p>}
          {isState && showLine && <div className="bg-white h-[4px] shrink-0 w-[29px]" data-name="Line" />}
          {isState && notification && <NotificationBackgroundImage additionalClassNames="right-[-4px]" />}
          {isState && live && <LiveBackgroundImageAndText text="LIVE" />}
          {isNotState && <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[22px] not-italic opacity-70 relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap">{label}</p>}
          {isNotState && notification && <NotificationBackgroundImage additionalClassNames="right-[-3.5px]" />}
          {isNotState && live && <LiveBackgroundImageAndText text="LIVE" />}
        </div>
      </div>
    </div>
  );
}
type TopSectionProps = {
  className?: string;
  page?: "Home" | "Friends";
};

function TopSection({ className, page = "Home" }: TopSectionProps) {
  const isFriends = page === "Friends";
  const isHome = page === "Home";
  return (
    <div className={className || "h-[36px] relative w-[393px]"}>
      <div className={`flex size-full ${isFriends ? "flex-row items-center" : "content-stretch items-start justify-between px-[14px] relative"}`}>
        {isHome && (
          <div className="relative shadow-[1px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 size-[28px]" data-name="LIVE">
            <div className="absolute inset-[7.14%_10.41%_7.14%_10.71%]" data-name="LIVE">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.084 23.9999">
                <path d={svgPaths.p1608d400} fill="var(--fill-0, white)" id="LIVE" />
              </svg>
            </div>
          </div>
        )}
        <div className={`relative ${isFriends ? "content-stretch flex items-center justify-between px-[14px] size-full" : "h-full shrink-0"}`}>
          {isHome && (
            <div className="content-stretch flex gap-[15px] h-full items-start pt-[5px] relative">
              <SectionChoose1 className="h-[31px] relative shrink-0" label="Following" notification={false} />
              <SectionChoose1 className="relative shrink-0" label="For you" live={false} notification={false} state />
            </div>
          )}
          {isFriends && (
            <>
              <div className="relative shadow-[1px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 size-[24px]" data-name="Add friends">
                <div className="absolute inset-[4.17%_8.85%_4.17%_4.17%]" data-name="Union">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8753 22">
                    <g id="Union">
                      <path clipRule="evenodd" d={svgPaths.p2b4ec970} fill="var(--fill-0, white)" fillRule="evenodd" />
                      <path d={svgPaths.p3214e400} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p1ae84400} fill="var(--fill-0, white)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="h-full relative shrink-0">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex h-full items-center justify-center pt-[5px] relative">
                    <SectionChoose className="relative shrink-0" label="Friends" live={false} notification={false} showLine={false} />
                  </div>
                </div>
              </div>
              <TopSectionBookmarkSearchBackgroundImage />
            </>
          )}
        </div>
        {isHome && <TopSectionBookmarkSearchBackgroundImage />}
      </div>
    </div>
  );
}

export default function Analyse() {
  return (
    <div className="bg-white relative size-full" data-name="analyse">
      <div className="absolute h-[874px] left-0 top-0 w-[403.863px]" data-name="image 4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage4} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[787.831px] left-1/2 top-0 w-[402px]" data-name="Content">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContent} />
      </div>
      <div className="-translate-x-1/2 absolute h-[48px] left-[calc(50%-0.5px)] top-0 w-[393px]" data-name="Status Bar">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[14px] pl-[27px] pr-[26px] pt-[18px] relative size-full">
            <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-center text-white tracking-[-0.408px] w-[80px]" style={{ fontFeatureSettings: "'case'" }}>
              9:41
            </p>
            <div className="h-[13px] relative shrink-0 w-[79.528px]" data-name="Icons">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.5281 13">
                <g id="Icons">
                  <path d={svgPaths.p1318c00} fill="var(--fill-0, white)" id="Cellular Connection" />
                  <path d={svgPaths.p1630ec80} fill="var(--fill-0, white)" id="Wifi" />
                  <g id="Battery">
                    <rect height="12" id="Border" opacity="0.35" rx="3" stroke="var(--stroke-0, white)" width="24" x="52.7" y="0.5" />
                    <path d={svgPaths.p2db7c400} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
                    <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="1.33333" width="21" x="54.2" y="2" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[86.752px] left-[6.65px] top-[641.65px] w-[70.35px]" />
      <div className="absolute content-stretch flex flex-col gap-[3px] items-center left-[16.82px] top-[651.03px] w-[50px]">
        <div className="aspect-[58/58] relative rounded-[50px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(19, 30, 60) 100%)" }}>
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
              <div className="relative shrink-0 size-[32px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Icon">
                    <path d={svgPaths.p14260600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path d="M12 16L14.8 18.8L20 13.6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-center w-full">Trustly</p>
      </div>
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[20px] items-center justify-center left-0 overflow-clip p-[20px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[402px]" data-name="Container">
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="relative rounded-[16px] shrink-0 size-[48px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(26, 64, 171) 100%)" }}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
              <div className="relative shrink-0 size-[28px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <g id="Icon">
                    <path d={svgPaths.p3fdfc672} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="h-[25px] relative shrink-0 w-[155.297px]" data-name="Heading 2">
                  <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[25px] left-0 not-italic text-[#0f172a] text-[20px] top-[-0.5px] tracking-[-0.4492px] whitespace-nowrap">Analyse terminée</p>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Crédits 9/10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[160px]">
              {/* Ellipse 1 background supprimée (doublon) */}
            </div>
            <div className="col-1 content-stretch flex flex-col gap-[16px] h-[69.333px] items-center justify-center leading-[24px] ml-[57.33px] mt-[45.33px] not-italic py-[7px] relative row-1 tracking-[-0.3125px] w-[45.333px] whitespace-nowrap">
              <p className="font-['Satoshi:Bold',sans-serif] relative shrink-0 text-[#f97316] text-[46px]">50</p>
              <p className="font-['Satoshi:Medium',sans-serif] relative shrink-0 text-[#fc8f43] text-[16px]">sur 100</p>
            </div>
          </div>
          <div className="col-1 flex items-center justify-center ml-[6.06px] mt-[6px] relative row-1 size-[147.993px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="relative size-[147.993px]">
                <div className="absolute inset-[45.95%_-4.05%_-4.05%_-4.05%]">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(157.493deg, rgba(255, 247, 237, 0.6) 0%, rgba(254, 242, 242, 0.6) 100%)" }}>
          <div aria-hidden="true" className="absolute border border-[#ffedd4] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
            <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="bg-[#f97316] relative rounded-[20px] shrink-0 size-[24px]" data-name="Container">
                  <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[calc(50%-5.5px)] not-italic text-[14px] text-white top-[calc(50%-10px)] tracking-[-0.1504px] whitespace-nowrap">C</p>
                </div>
                <p className="font-['Satoshi:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.4395px] whitespace-nowrap">Fiabilité modérée</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="content-stretch flex h-[69px] items-center justify-center relative shrink-0 w-[295px]" data-name="Paragraph">
                  <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[295px]">Ce contenu présente des éléments vérifiables mais nécessite une vérification approfondie avant partage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#014bed] h-[56px] relative rounded-[18px] shrink-0 to-[#1b40aa] w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[14px] items-center justify-center px-[104.945px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="open_in_new">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="open_in_new">
                    <mask height="20" id="mask0_1_1444" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                    </mask>
                    <g mask="url(#mask0_1_1444)">
                      <path d={svgPaths.p11d5a180} fill="var(--fill-0, white)" id="open_in_new_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px] whitespace-nowrap">Ouvrir dans Trustly</p>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bg-[#e5e7eb] h-[4px] left-1/2 rounded-[16777200px] top-[9.25px] w-[100px]" data-name="Container" />
      </div>
      <TopSection className="absolute h-[36px] left-0 top-[56px] w-[393px]" />
    </div>
  );
}