import { BriefcaseBusiness } from "lucide-react";

import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section className="section-space experience-section" id="experience">
      <div className="site-shell">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Experience in delivery and development."
          description="From business operations to hands-on software development, each role has strengthened how I communicate, solve problems, and build."
          invert
        />

        <div className="timeline">
          {[...experiences.filter(item => item.kind === "work"), ...experiences.filter(item => item.kind === "training")].map((experience, index) => (
            <article className="timeline-item" key={`${experience.company}-${experience.title}`}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span><BriefcaseBusiness size={16} aria-hidden="true" /> {experience.company}</span>
                  <time>{experience.duration}</time>
                </div>
                <p className="experience-kind">{experience.kind === "training" ? "Technical training" : "Professional experience"}</p>
                <h3>{experience.title}</h3>
                <ul>
                  {experience.description.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
                </ul>
                {experience.description.length > 2 ? (
                  <details className="experience-details">
                    <summary>View {experience.description.length - 2} more details</summary>
                    <ul>
                      {experience.description.slice(2).map((item) => <li key={item}>{item}</li>)}
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
