import { BookOpen, GraduationCap } from "lucide-react";

import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <div className="education-summary" id="education">
        <h3 className="eyebrow">Education</h3>
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={26} aria-hidden="true" /></div>
          <div>
            <p className="eyebrow">{education.duration}</p>
            <h4>{education.title}</h4>
            <p className="mt-2 text-slate-600">{education.major}</p>
            <div className="education-thesis">
              <BookOpen size={18} aria-hidden="true" />
              <p>{education.description}</p>
            </div>
          </div>
        </article>
    </div>
  );
}
