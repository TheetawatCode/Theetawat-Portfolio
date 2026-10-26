"use client";

import { useEffect } from "react";

/** Progressive enhancement: server-rendered content stays visible without JavaScript. */
export function MotionEnhancements() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compact = window.matchMedia("(max-width: 639px)");
    const animations = new Set<Animation>();
    const observed = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;

    function animate(element: HTMLElement, delay = 0, hero = false) {
      element.removeAttribute("data-motion-pending");
      if (preference.matches || !element.getClientRects().length) return;
      // Keep the largest text visible from its first paint; only translate it.
      const primaryCopy = hero && element.matches("h1, .hero-layout .mt-8");
      const keyframes: Keyframe[] = [
        { translate: `0 ${compact.matches ? 10 : 16}px` },
        { translate: "0 0" },
      ];
      if (!primaryCopy) {
        keyframes[0].opacity = hero ? 0.35 : 0;
        keyframes[1].opacity = 1;
      }
      const animation = element.animate(
        keyframes,
        { duration: compact.matches ? 380 : 500, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
      );
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
      animation.oncancel = () => animations.delete(animation);
    }

    function stopMotion() {
      observer?.disconnect();
      observed.forEach(element => element.removeAttribute("data-motion-pending"));
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }

    function onPreferenceChange() {
      if (preference.matches) stopMotion();
    }

    // A keyboard jump must never leave the focused control inside hidden content.
    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>("[data-motion-pending]");
      if (element) {
        element.removeAttribute("data-motion-pending");
        observer?.unobserve(element);
      }
    }

    if (!preference.matches && "IntersectionObserver" in window && "animate" in Element.prototype) {
      const hero = document.querySelector(".hero-layout");
      if (hero && window.scrollY < 80) {
        const intro = hero.firstElementChild;
        const pieces = [...(intro?.children ?? []), ...hero.querySelectorAll(".hero-console")];
        pieces.forEach((element, index) => animate(element as HTMLElement, Math.min(index * 55, 220), true));
      }

      observer = new IntersectionObserver(entries => {
        const entering = entries.filter(entry => entry.isIntersecting);
        entering.forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          animate(element, compact.matches ? 0 : Math.min(index * 65, 130));
          observer?.unobserve(element);
        });
      }, { threshold: 0.04, rootMargin: "0px 0px 24px 0px" });

      document.querySelectorAll<HTMLElement>(
        ".section-heading, .featured-project, .skill-card, .learning-skills, .timeline-item, .training-card, .certificates-toolbar, .certificates-grid-selected > .certificate-card, .about-card, .contact-card, .section-action",
      ).forEach(element => {
        // Preserve content above the viewport after anchor navigation or scroll restoration.
        if (element.getBoundingClientRect().bottom <= 0) return;
        observed.add(element);
        element.setAttribute("data-motion-pending", "");
        observer?.observe(element);
      });
    }

    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      stopMotion();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}
