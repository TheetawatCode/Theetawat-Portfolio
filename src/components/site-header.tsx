"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight, FileText, Menu } from "lucide-react";

import { navItems, profile } from "@/data/portfolio";

export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => header.current?.toggleAttribute("data-scrolled", window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className="site-header" ref={header}>
      <div className="site-shell flex h-18 items-center justify-between">
        <Link className="brand-mark" href="/#top">
          <span>TP</span>
          <span className="hidden sm:block">Theetawat Premsawat</span>
          <span className="sr-only"> — portfolio home</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className="nav-link" href={`/${item.href}`} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="button button-small hidden sm:inline-flex" href={profile.resume} target="_blank" rel="noreferrer">
            <FileText size={16} aria-hidden="true" />
            Resume
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
                <Link href={`/${item.href}`} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
