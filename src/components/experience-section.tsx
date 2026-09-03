import { BriefcaseBusiness } from "lucide-react";

import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section className="section-space experience-section" id="experience">
      <div className="site-shell">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Experience shaped by learning, delivery, and adaptability."
          description="From business operations to hands-on software development, each role has strengthened how I communicate, solve problems, and build."
          invert
        />

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={`${experience.company}-${experience.title}`}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span><BriefcaseBusiness size={16} aria-hidden="true" /> {experience.company}</span>
                  <time>{experience.duration}</time>
                </div>
                <h3>{experience.title}</h3>
                <ul>
                  {experience.description.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                </ul>
                {experience.description.length > 3 ? (
                  <details className="experience-details">
                    <summary>View {experience.description.length - 3} more details</summary>
                    <ul>
                      {experience.description.slice(3).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </details>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
