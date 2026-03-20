/**
 * PageTransition
 * ──────────────
 * Wraps each page with:
 *   1. A CSS mount-animation (slide-up + scale-in via `.page-enter`)
 *   2. An Intersection Observer that triggers `.scroll-reveal*` classes
 *      for any elements nested inside this page.
 *
 * Usage:
 *   <PageTransition>
 *     <MyFigmaComponent />
 *   </PageTransition>
 */

import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Activate scroll-reveal observer scoped to this page
  useScrollAnimation(ref, { threshold: 0.15, rootMargin: "0px 0px -20px 0px" });

  return (
    <div
      ref={ref}
      className={`relative size-full page-enter ${className}`}
    >
      {children}
    </div>
  );
}
