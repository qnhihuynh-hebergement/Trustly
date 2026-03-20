import svgPaths from "./svg-xywsky91iz";
import FlatCylinder5 from "./FlatCylinder5";
import FlatCylinder6 from "./FlatCylinder6";
import FlatCylinder7 from "./FlatCylinder7";

type FrameProps = { onClose?: () => void };

export default function Frame({ onClose }: FrameProps) {
  return (
    <div
      className="content-stretch flex items-start justify-between p-[16px] relative size-full"
      style={{
        background: "linear-gradient(to bottom, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.01) 100%)",
        borderRadius: "23px",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none"
        style={{ borderRadius: "23px" }}
      />

      {/* Text content */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 z-10">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.4395px] whitespace-nowrap">
          Besoin de plus de crédits ?
        </p>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.4395px] whitespace-nowrap">
            Essayez Trustly Pro pour obtenir
          </p>
          <p className="font-['Satoshi:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.4395px] whitespace-nowrap">
            {`jusqu'a 100 crédits par jour`}
          </p>
        </div>
      </div>

      {/* Cylinders decorative group */}
      <div className="absolute overflow-hidden" style={{ left: "180px", top: "0px", right: "36px", bottom: "0px" }}>

        {/* Flat Cylinder 5 — large, rotated */}
        <div
          className="absolute"
          style={{ left: "32px", top: "22px", width: "57px", height: "57px", transform: "rotate(21deg)" }}
        >
          <FlatCylinder5 />
        </div>

        {/* Flat Cylinder 6 — medium, rotated opposite */}
        <div
          className="absolute"
          style={{ left: "100px", top: "5px", width: "51px", height: "51px", transform: "rotate(-26deg)" }}
        >
          <FlatCylinder6 />
        </div>

        {/* Flat Cylinder 7 — small, tilted */}
        <div
          className="absolute"
          style={{ left: "52px", top: "-8px", width: "43px", height: "43px", transform: "rotate(40deg)" }}
        >
          <FlatCylinder7 />
        </div>
      </div>

      {/* Close (×) button */}
      <div
        className="relative shrink-0 size-[20px] cursor-pointer z-10"
        onClick={onClose}
        data-name="material-symbols:close-rounded"
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="material-symbols:close-rounded">
            <rect fill="white" fillOpacity="0.7" height="20" rx="7" width="20" />
            <path d={svgPaths.p3de09900} fill="black" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}
