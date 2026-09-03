import { ArrowUpRight, FileText, Menu } from "lucide-react";

import { navItems, profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell flex h-18 items-center justify-between">
        <a className="brand-mark" href="#top" aria-label="Back to top">
          <span>TP</span>
          <span className="hidden sm:block">Theetawat Premsawat</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="button button-small hidden sm:inline-flex" href={profile.resume} target="_blank" rel="noreferrer">
            <FileText size={16} aria-hidden="true" />
            Resume
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <details className="mobile-menu lg:hidden">
            <summary aria-label="Open navigation menu">
              <Menu size={20} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
