/**
 * RootLayout
 * ──────────
 * Responsive phone-frame container:
 *
 *  ≤ 768px  (mobile)  → fills the entire screen (w:100%, h:100dvh)
 *  769–1024 (tablet)  → centered 402×874 frame, rounded, shadow
 *  ≥ 1025px (desktop) → same frame + decorative dark background
 *
 * All CSS breakpoints are defined in /src/styles/animations.css
 */

import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="layout-outer">
      <div className="layout-phone relative">
        <Outlet />
      </div>
    </div>
  );
}