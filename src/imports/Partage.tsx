import clsx from "clsx";
import svgPaths from "./svg-kyfcwffesg";

// Images remplacées : les imports figma:asset ne fonctionnent pas hors de Figma Make
const imgAlbumArt = "https://placehold.co/24x24/181818/white?text=🎵";
const imgContent = "https://placehold.co/393x852/000000/white?text=Content";
const imgNavIconLabelAvatar = "https://placehold.co/48x48/333333/white?text=👤";
const imgNavIconLabelAvatar1 = "https://placehold.co/48x48/333333/white?text=👤";
const imgImage4 = "https://placehold.co/402x334/111111/white?text=Video";

function PartageNavIconLabelBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[45px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-px items-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Frame9SidebarIconLabelBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[45px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

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
            <TopSectionBookmarkSearchBackgroundImage />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Partage() {
  return (
    <div className="relative bg-black min-h-screen w-[393px] mx-auto overflow-hidden">
      <div className="relative">
        {/* Content image background */}
        <img
          alt="Content"
          className="absolute block w-full"
          src={imgContent}
        />

        {/* Sidebar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2" data-name="Sidebar">
          <div className="flex flex-col items-center justify-center">
            <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative">
              <div className="h-[57px] relative shrink-0 w-[48px]" data-name="Avatar + follow">
                <div className="absolute inset-[0_0_15.79%_0]" data-name="Nav Icon + Label/Avatar">
                  <img alt="" className="absolute block max-w-none size-full" height="48" src={imgNavIconLabelAvatar} width="48" />
                  <img alt="" className="absolute block max-w-none size-full" height="48" src={imgNavIconLabelAvatar1} width="48" />
                </div>
                <div className="absolute bottom-0 left-1/4 right-1/4 top-[57.89%]" data-name="Follow Button">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" fill="var(--fill-0, #FE2C55)" id="Ellipse 6" r="12" />
                  </svg>
                  <div className="absolute inset-[29.17%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                      <path d={svgPaths.p3ac6b280} fill="var(--fill-0, white)" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <Frame9SidebarIconLabelBackgroundImage>
                <div className="relative shadow-[1px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 size-[30px]" data-name="Like">
                  <div className="absolute inset-[6.67%_3.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
                      <path d={svgPaths.p22d71000} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">250,5K</p>
              </Frame9SidebarIconLabelBackgroundImage>
              <Frame9SidebarIconLabelBackgroundImage>
                <div className="relative shadow-[1px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 size-[30px]" data-name="Bookmark">
                  <div className="absolute inset-[6.67%_3.33%_7.33%_6.67%]" data-name="Subtract">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 25.8013">
                      <path clipRule="evenodd" d={svgPaths.p2f84ce00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">100K</p>
              </Frame9SidebarIconLabelBackgroundImage>
              <Frame9SidebarIconLabelBackgroundImage>
                <div className="relative shadow-[1px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 size-[30px]">
                  <div className="absolute inset-[10%_13.33%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
                      <path d={svgPaths.p347ef980} fill="var(--fill-0, white)" id="Rectangle 9" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">89K</p>
              </Frame9SidebarIconLabelBackgroundImage>
              <Frame9SidebarIconLabelBackgroundImage>
                <div className="relative shadow-[1px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 size-[30px]">
                  <div className="absolute inset-[6.67%_6.39%_9.41%_6.67%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.084 25.1756">
                      <path d={svgPaths.p10e09e00} fill="var(--fill-0, white)" id="Union" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">132,5K</p>
              </Frame9SidebarIconLabelBackgroundImage>
              <div className="relative shrink-0 size-[40px]" data-name="📀 Audio Track">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" fill="url(#paint0_linear_1_1718)" id="Disk" r="20" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1718" x1="20" x2="20" y1="0" y2="40">
                      <stop stopColor="#505050" />
                      <stop offset="0.5" stopColor="#181818" />
                      <stop offset="1" stopColor="#505050" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-[20%]" data-name="Album Art">
                  <img alt="" className="absolute block max-w-none size-full" height="24" src={imgAlbumArt} width="24" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TopSection className="absolute h-[36px] left-0 top-[56px] w-[393px]" />

        {/* Status Bar */}
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

        {/* Image 4 + Trustly button */}
        <div className="absolute contents left-[0.05px] top-[628.95px]">
          <div className="absolute h-[260.335px] left-[0.05px] rounded-[12px] top-[628.95px] w-[401.799px]" data-name="image 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-[334.01%] left-0 max-w-none top-[-234.01%] w-full" src={imgImage4} />
            </div>
          </div>
          <div className="absolute bg-white h-[85.642px] left-[4.52px] top-[660.27px] w-[69.449px]" />
          <div className="absolute content-stretch flex flex-col gap-[3px] h-[67.129px] items-center left-[14.26px] top-[665.19px] w-[49.36px]">
            <div className="content-stretch flex items-center justify-center px-[10px] relative rounded-[54px] shrink-0 size-[50px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(26, 64, 171) 100%)" }}>
              <div className="relative shrink-0 size-[28px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <g id="Icon">
                    <path d={svgPaths.p1b228440} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">Trustly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
