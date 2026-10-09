import { BookOpen, GraduationCap } from "lucide-react";

import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <div className="education-summary" id="education">
        <h3 className="eyebrow">Education</h3>
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={26} aria-hidden="true" /></div>
          <div className="education-content">
            <h4>{education.degree}</h4>
            <p className="education-university">{education.university}</p>
            <p className="education-duration">{education.duration}</p>
            <dl className="education-fields">
              <div><dt>Major</dt><dd>{education.major}</dd></div>
              <div><dt>Minor</dt><dd>{education.minor}</dd></div>
            </dl>
            <div className="education-thesis">
              <BookOpen size={18} aria-hidden="true" />
              <div>
                <h5>Undergraduate Thesis</h5>
                <p>{education.thesis}</p>
              </div>
            </div>
          </div>
        </article>
    </div>
  );
}
