import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

import { navItems, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <nav aria-label="Footer navigation">
            {navItems.map((item) => <Link href={`/${item.href}`} key={item.href}>{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={17} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={17} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
            <a href="#top" aria-label="Back to top"><ArrowUp size={17} /></a>
          </div>
        </div>
        <p className="footer-colophon">
          Built with Next.js &amp; TypeScript · Checked in CI ·{" "}
          <a href="https://github.com/TheetawatCode/Theetawat-Portfolio" target="_blank" rel="noreferrer">Source on GitHub</a>
        </p>
      </div>
    </footer>
  );
}
