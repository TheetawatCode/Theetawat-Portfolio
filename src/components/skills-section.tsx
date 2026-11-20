import { Braces, Database, Layers3, Orbit } from "lucide-react";

import { currentlyLearningSkills, skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

const icons = [Braces, Database, Orbit, Layers3];

export function SkillsSection() {
  return (
    <section className="section-space" id="skills">
      <div className="site-shell">
        <SectionHeading
          eyebrow="02 / Skills"
          title="Skills for building reliable, well-tested web applications."
          description="Technologies and tools shaped by my projects, training, and professional work."
        />

        <p className="skills-legend"><span aria-hidden="true" /> Core stack</p>
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <span><Icon size={19} aria-hidden="true" /></span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {[...(group.core ?? []), ...group.items.filter((skill) => !group.core?.includes(skill))].map((skill) => <li className={group.core?.includes(skill) ? "skill-core" : undefined} key={skill}>{skill}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="learning-skills" aria-label="Currently learning">
          <span>Currently learning</span>
          <ul>{currentlyLearningSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
