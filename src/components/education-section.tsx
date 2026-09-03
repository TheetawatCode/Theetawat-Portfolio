import { BookOpen, GraduationCap } from "lucide-react";

import { education } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  return (
    <section className="section-space bg-soft" id="education">
      <div className="site-shell">
        <SectionHeading
          eyebrow="05 / Education"
          title="Where analytical thinking became part of how I work."
        />
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={26} aria-hidden="true" /></div>
          <div>
            <p className="eyebrow">{education.duration}</p>
            <h3>{education.title}</h3>
            <p className="mt-2 text-slate-600">{education.major}</p>
            <div className="education-thesis">
              <BookOpen size={18} aria-hidden="true" />
              <p>{education.description}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
