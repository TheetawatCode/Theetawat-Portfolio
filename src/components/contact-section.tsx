import { ArrowUpRight, ContactRound, FileText, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="site-shell">
        <div className="contact-card">
          <div>
            <p className="eyebrow eyebrow-invert">06 / Contact</p>
            <h2>Open to new roles. Let&apos;s talk.</h2>
            <p>I&apos;m looking for a developer role on a team that builds reliable, well-tested web applications, where I can contribute and keep learning.</p>
            <ul className="contact-facts" aria-label="Work preferences">
              <li><span>Work mode</span> On-site · Hybrid · Remote</li>
              <li><span>Location</span> Bangkok · Nonthaburi</li>
            </ul>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>
              <span><Mail size={18} aria-hidden="true" /> Email me</span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <p>{profile.email}</p>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <ContactRound size={16} aria-hidden="true" /> LinkedIn
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer">
                <FileText size={16} aria-hidden="true" /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
