import imgFlatCylinder7 from "figma:asset/5a43be7056436aae265135c35affe71d4bba4ec9.png";
import imgRectangle17 from "figma:asset/3d86e8b4c130b11683d6e08957738d429aae9600.png";

export default function FlatCylinder() {
  return (
    <div className="relative size-full" data-name="Flat Cylinder 7">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder7} />
      <div className="absolute contents inset-0" data-name="Mask Group">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light bg-[#000000]" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
      </div>
    </div>
  );
}