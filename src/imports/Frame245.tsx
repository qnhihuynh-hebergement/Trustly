import { Link, useLocation } from "react-router";
import svgPaths from "./svg-06edoy02xq";

/** Pure tab bar — 104px tall. The floating panel (input + button) is
 *  managed by WithFooterLayout directly to avoid overflow-clip issues. */
export default function TabBar() {
  const location = useLocation();
  const isHome = location.pathname === "/dashboard";

  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="TabBar">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ borderTop: "1px solid #e5e7eb" }}
      />
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[20px] px-[30px] relative w-full">
        <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full">

          {/* Accueil */}
          <Link
            to="/dashboard"
            className="h-[44px] flex flex-col gap-[4px] items-center relative shrink-0 w-[42px] no-underline"
          >
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2">
                  <div className="absolute inset-[-11.11%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                      <path d={svgPaths.p3ff7f900} stroke={isHome ? "#2563EB" : "#99A1AF"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]">
                  <div className="absolute inset-[-5.26%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.9995">
                      <path d={svgPaths.p282f8f00} stroke={isHome ? "#2563EB" : "#99A1AF"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-[42px]">
              <p
                className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[21px] not-italic text-[12px] text-center top-px whitespace-nowrap"
                style={{ color: isHome ? "#2563EB" : "#99A1AF" }}
              >
                Accueil
              </p>
            </div>
          </Link>

          {/* Ressources */}
          <div className="h-[44px] flex flex-col gap-[4px] items-center relative shrink-0 w-[62px] cursor-default">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <mask height="24" id="mask_book_tb" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                  <rect fill="#D9D9D9" height="24" width="24" />
                </mask>
                <g mask="url(#mask_book_tb)">
                  <path d={svgPaths.p2c293680} fill="#99A1AF" />
                </g>
              </svg>
            </div>
            <div className="h-[16px] relative shrink-0 w-[62px]">
              <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[31px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">
                Ressources
              </p>
            </div>
          </div>

          {/* Historique */}
          <Link
            to="/dashboard"
            className="h-[44px] flex flex-col gap-[4px] items-center relative shrink-0 w-[60px] no-underline"
          >
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute inset-[8.33%]">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path d={svgPaths.pb60700} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4">
                  <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00022 10.0002">
                      <path d="M1 1V7L5 9" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-[60px]">
              <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[30px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">
                Historique
              </p>
            </div>
          </Link>

          {/* Profil */}
          <div className="h-[44px] flex flex-col gap-[4px] items-center relative shrink-0 w-[30px] cursor-default">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]">
                  <div className="absolute inset-[-16.67%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                      <path d={svgPaths.p11b86180} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]">
                  <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                      <path d={svgPaths.pb08b100} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-[30px]">
              <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[15px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">
                Profil
              </p>
            </div>
          </div>

        </div>
        {/* Home indicator */}
        <div className="-translate-x-1/2 absolute bg-black h-[4px] left-1/2 rounded-[16777200px] top-[90.25px] w-[100px]" />
      </div>
    </div>
  );
}
