import { Link } from "react-router";
import Partage from "../../imports/Partage";
import BackButton from "../components/BackButton";
import PageTransition from "../components/PageTransition";

export default function PartagePage() {
  return (
    <PageTransition>
      <div className="relative size-full">
        <BackButton />
        <Partage />
        {/* Lien transparent positionné sur la section Trustly */}
        <Link
          to="/analyse"
          className="absolute z-10"
          style={{ top: "650px", left: "4px", width: "76px", height: "92px" }}
          aria-label="Analyser avec Trustly"
        />
      </div>
    </PageTransition>
  );
}