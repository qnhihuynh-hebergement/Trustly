import imgFlatCylinder5 from "figma:asset/5a43be7056436aae265135c35affe71d4bba4ec9.png";
import imgRectangle17 from "figma:asset/28f71536a2de8dc6762aa9ca58541e6918376a56.png";

export default function FlatCylinder() {
  return (
    <div className="relative size-full" data-name="Flat Cylinder 5">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlatCylinder5} />
      <div className="absolute contents inset-0" data-name="Mask Group">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[77.451px_77.733px] mix-blend-hard-light" style={{ backgroundImage: "linear-gradient(132.468deg, rgba(37, 99, 235, 0.86) 15.354%, rgb(16, 120, 185) 87.95%)", maskImage: `url('${imgRectangle17}')` }} />
      </div>
    </div>
  );
}