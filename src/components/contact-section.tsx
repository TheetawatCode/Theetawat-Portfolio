import { ArrowUpRight, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="site-shell">
        <div className="contact-card">
          <div>
            <p className="eyebrow eyebrow-invert">07 / Contact</p>
            <h2>Have a project or opportunity in mind?</h2>
            <p>I&apos;m open to collaborating with teams that care about thoughtful products and meaningful outcomes.</p>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>
              <span><Mail size={18} aria-hidden="true" /> Email me</span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <p>{profile.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
