import { Braces, Database, Layers3, Orbit } from "lucide-react";

import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

const icons = [Braces, Layers3, Database, Orbit];

export function SkillsSection() {
  return (
    <section className="section-space" id="skills">
      <div className="site-shell">
        <SectionHeading
          eyebrow="02 / Skills"
          title="Tools I use to turn ideas into reliable products."
          description="A growing toolkit across frontend, backend, databases, product design, and modern development workflows."
        />

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
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
