"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, FileText, Menu } from "lucide-react";

import { navItems, profile } from "@/data/portfolio";

export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  const header = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string>();
  const nav = useRef<HTMLElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => header.current?.toggleAttribute("data-scrolled", window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Mark the section in the middle of the viewport; only the homepage has these anchors.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(`#${visible.target.id}`);
      else if (window.scrollY < window.innerHeight / 2) setActive(undefined);
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  // Slide one highlight between nav items instead of repainting each item's background.
  useEffect(() => {
    const place = () => {
      const link = nav.current?.querySelector<HTMLElement>('[aria-current="location"]');
      const marker = indicator.current;
      if (!marker) return;
      marker.toggleAttribute("data-visible", Boolean(link));
      if (link) {
        marker.style.width = `${link.offsetWidth}px`;
        marker.style.height = `${link.offsetHeight}px`;
        marker.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop}px)`;
      }
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  return (
    <header className="site-header" ref={header}>
      <a className="skip-link" href="#top" onClick={(event) => {
        const main = document.querySelector("main");
        if (!main) return;
        event.preventDefault();
        main.tabIndex = -1;
        main.focus();
      }}>Skip to content</a>
      <div className="site-shell flex h-18 items-center justify-between">
        <Link className="brand-mark" href="/#top">
          <span>TP</span>
          <span className="hidden min-[360px]:block sm:hidden">Theetawat</span>
          <span className="hidden sm:block">Theetawat Premsawat</span>
          <span className="sr-only"> — portfolio home</span>
        </Link>

        <nav className="primary-nav hidden items-center gap-1 lg:flex" aria-label="Primary navigation" ref={nav}>
          <span className="nav-indicator" ref={indicator} aria-hidden="true" />
          {navItems.map((item) => (
            <Link className="nav-link" href={`/${item.href}`} key={item.href} aria-current={active === item.href ? "location" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="button button-small hidden sm:inline-flex" href={profile.resume} target="_blank" rel="noreferrer">
            <FileText size={16} aria-hidden="true" />
            Resume <span className="file-tag">PDF</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <details className="mobile-menu lg:hidden" ref={menu} onKeyDown={(event) => {
            if (event.key === "Escape" && menu.current) {
              menu.current.open = false;
              menu.current.querySelector("summary")?.focus();
            }
          }}>
            <summary aria-label="Open navigation menu">
              <Menu size={20} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation" onClick={(event) => {
              if ((event.target as HTMLElement).closest("a") && menu.current) menu.current.open = false;
            }}>
              {navItems.map((item) => (
                <Link href={`/${item.href}`} key={item.href} aria-current={active === item.href ? "location" : undefined}>
                  {item.label}
                </Link>
              ))}
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume (PDF)</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
