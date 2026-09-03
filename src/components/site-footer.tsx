import { ArrowUp, CodeXml, ContactRound, Mail } from "lucide-react";

import { navItems, profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <nav aria-label="Footer navigation">
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><CodeXml size={17} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ContactRound size={17} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
            <a href="#top" aria-label="Back to top"><ArrowUp size={17} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
