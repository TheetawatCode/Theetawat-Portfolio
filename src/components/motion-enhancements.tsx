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
    const railCleanup: Array<() => void> = [];

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
      railCleanup.forEach(fn => fn());
      document.querySelectorAll<HTMLElement>("[data-rail]").forEach(rail => { rail.dataset.rail = "drawn"; });
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

      // Timeline rail: starts collapsed only when JS can draw it; CSS ignores this under reduced motion.
      const rails = document.querySelectorAll<HTMLElement>("[data-timeline]");
      const railObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.rail = "drawn";
          railObserver.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      rails.forEach(rail => {
        if (rail.getBoundingClientRect().top < 0) return;
        rail.dataset.rail = "pending";
        railObserver.observe(rail);
        railCleanup.push(() => railObserver.disconnect());
      });

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

    // Cursor spotlight on cards: only for a precise pointer, and never when motion is reduced.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    function onPointerMove(event: PointerEvent) {
      if (preference.matches || !finePointer.matches || !(event.target instanceof Element)) return;
      const card = event.target.closest<HTMLElement>(".skill-card, .featured-project, .project-card, .certificate-card, .timeline-card, .earlier-list > li, .education-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    }

    // Hero depth: the console leans a few degrees toward the cursor and the glows drift the other way.
    const heroSection = document.querySelector<HTMLElement>(".hero-section");
    let heroFrame = 0;
    function setHeroDepth(x: number, y: number) {
      if (!heroSection) return;
      heroSection.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
      heroSection.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      heroSection.style.setProperty("--orb-x", `${(-x * 28).toFixed(1)}px`);
      heroSection.style.setProperty("--orb-y", `${(-y * 28).toFixed(1)}px`);
    }
    function onHeroMove(event: PointerEvent) {
      if (preference.matches || !finePointer.matches || !heroSection || heroFrame) return;
      heroFrame = requestAnimationFrame(() => {
        heroFrame = 0;
        const rect = heroSection.getBoundingClientRect();
        setHeroDepth((event.clientX - rect.left) / rect.width - 0.5, (event.clientY - rect.top) / rect.height - 0.5);
      });
    }
    function onHeroLeave() {
      setHeroDepth(0, 0);
    }
    heroSection?.addEventListener("pointermove", onHeroMove, { passive: true });
    heroSection?.addEventListener("pointerleave", onHeroLeave);

    // About photo: glass card that tilts toward the cursor while a light sheen follows it.
    const portrait = document.querySelector<HTMLElement>(".profile-frame");
    let portraitFrame = 0;
    function onPortraitMove(event: PointerEvent) {
      if (preference.matches || !finePointer.matches || !portrait || portraitFrame) return;
      portraitFrame = requestAnimationFrame(() => {
        portraitFrame = 0;
        const rect = portrait.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        portrait.style.setProperty("--ry", `${((x - 0.5) * 5).toFixed(2)}deg`);
        portrait.style.setProperty("--rx", `${((0.5 - y) * 4).toFixed(2)}deg`);
        portrait.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
        portrait.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
      });
    }
    function onPortraitLeave() {
      if (!portrait) return;
      ["--rx", "--ry", "--gx", "--gy"].forEach(name => portrait.style.removeProperty(name));
    }
    portrait?.addEventListener("pointermove", onPortraitMove, { passive: true });
    portrait?.addEventListener("pointerleave", onPortraitLeave);

    // Contact: the corner glow eases part of the way toward the cursor.
    const contactCard = document.querySelector<HTMLElement>(".contact-card");
    let contactFrame = 0;
    function onContactMove(event: PointerEvent) {
      if (preference.matches || !finePointer.matches || !contactCard || contactFrame) return;
      contactFrame = requestAnimationFrame(() => {
        contactFrame = 0;
        const rect = contactCard.getBoundingClientRect();
        // The glow's resting centre sits near the top-right corner (see .contact-card::before);
        // it stays in the right half so it never sits behind the headline.
        const dx = Math.max((event.clientX - rect.left - (rect.width - 80)) * 0.5, rect.width * 0.55 - (rect.width - 80));
        const dy = (event.clientY - rect.top - 48) * 0.5;
        contactCard.style.setProperty("--cx", `${dx.toFixed(1)}px`);
        contactCard.style.setProperty("--cy", `${dy.toFixed(1)}px`);
      });
    }
    function onContactLeave() {
      contactCard?.style.removeProperty("--cx");
      contactCard?.style.removeProperty("--cy");
    }
    contactCard?.addEventListener("pointermove", onContactMove, { passive: true });
    contactCard?.addEventListener("pointerleave", onContactLeave);

    // Proof numbers count up once; the server-rendered final value stays if motion is reduced.
    let countFrame = 0;
    const counters = [...document.querySelectorAll<HTMLElement>(".hero-proof [data-count]")];
    if (!preference.matches && counters.length && window.scrollY < 80) {
      const start = performance.now();
      counters.forEach(counter => { counter.style.minWidth = `${counter.textContent?.length ?? 1}ch`; });
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        const eased = 1 - (1 - progress) ** 3;
        counters.forEach(counter => {
          const target = Number(counter.dataset.count);
          counter.textContent = `${Math.round(target * eased)}${progress === 1 ? counter.dataset.suffix ?? "" : ""}`;
        });
        if (progress < 1) countFrame = requestAnimationFrame(tick);
      };
      countFrame = requestAnimationFrame(tick);
    }

    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      stopMotion();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("pointermove", onPointerMove);
      heroSection?.removeEventListener("pointermove", onHeroMove);
      heroSection?.removeEventListener("pointerleave", onHeroLeave);
      portrait?.removeEventListener("pointermove", onPortraitMove);
      portrait?.removeEventListener("pointerleave", onPortraitLeave);
      cancelAnimationFrame(portraitFrame);
      contactCard?.removeEventListener("pointermove", onContactMove);
      contactCard?.removeEventListener("pointerleave", onContactLeave);
      cancelAnimationFrame(contactFrame);
      cancelAnimationFrame(heroFrame);
      cancelAnimationFrame(countFrame);
      counters.forEach(counter => {
        counter.textContent = `${counter.dataset.count}${counter.dataset.suffix ?? ""}`;
      });
    };
  }, []);

  return null;
}
