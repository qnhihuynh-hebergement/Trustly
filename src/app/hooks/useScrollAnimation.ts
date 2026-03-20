/**
 * useScrollAnimation
 * ──────────────────
 * Observes all elements with `.scroll-reveal*` classes inside
 * a given container (or the whole document) and adds `.is-visible`
 * when they cross the visibility threshold.
 *
 * Respects `prefers-reduced-motion` by skipping animations entirely.
 *
 * @param containerRef  Optional ref to a scrollable container.
 *                      Defaults to viewport observation.
 * @param threshold     0–1. Fraction of element visible before trigger.
 *                      Default: 0.2 (20%).
 * @param rootMargin    CSS margin for the observation root.
 */

import { useEffect, RefObject } from "react";

const ANIMATED_CLASSES = [
  ".scroll-reveal",
  ".scroll-reveal-fade",
  ".scroll-reveal-scale",
  ".scroll-reveal-right",
].join(", ");

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(
  containerRef?: RefObject<HTMLElement | null>,
  { threshold = 0.2, rootMargin = "0px" }: Options = {}
) {
  useEffect(() => {
    // ── Respect prefers-reduced-motion ───────────────────────
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      // Reveal everything immediately — no animation
      const all = document.querySelectorAll(ANIMATED_CLASSES);
      all.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // ── Build observer ────────────────────────────────────────
    const root = containerRef?.current ?? null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Unobserve after reveal (one-shot animation)
            observer.unobserve(entry.target);
          }
        });
      },
      { root, threshold, rootMargin }
    );

    // ── Query inside the container (or document) ─────────────
    const scope = containerRef?.current ?? document;
    const elements = scope.querySelectorAll(ANIMATED_CLASSES);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  // Re-run only if container reference identity changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef?.current, threshold, rootMargin]);
}
