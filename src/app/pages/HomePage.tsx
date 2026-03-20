import { Link } from "react-router";
import Home from "../../imports/Home";
import PageTransition from "../components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="relative size-full">
        <Home />
        {/* Lien transparent positionné sur l'icône "Share" du sidebar TikTok */}
        <Link
          to="/partage"
          className="absolute z-10"
          style={{ bottom: "148px", right: "8px", width: "48px", height: "50px" }}
          aria-label="Partager"
        />
      </div>
    </PageTransition>
  );
}