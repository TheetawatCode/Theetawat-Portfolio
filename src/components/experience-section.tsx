import Link from "next/link";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import { experiences, projects, type Experience } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

// Short entries show in full; longer ones keep two points visible (three for the operations card) and fold the rest.
function visibleCount(experience: Experience) {
  if (experience.description.length <= 3) return experience.description.length;
  return experience.kind === "operations" ? 3 : 2;
}

// Project names in timeline bullets link to their case studies, connecting the history to the evidence.
const caseStudies = projects.filter((project) => project.caseStudy);
const caseStudyPattern = new RegExp(`(${caseStudies.map((project) => project.title).join("|")})`);

function withCaseStudyLinks(text: string) {
  if (!caseStudies.length) return text;
  return text.split(caseStudyPattern).map((part, index) => {
    const project = caseStudies.find((item) => item.title === part);
    return project ? <Link className="experience-project-link" href={project.caseStudy!} key={index}>{part}</Link> : part;
  });
}

function ExperienceDetails({ experience }: { experience: Experience }) {
  return (
    <>
      <ul>
        {experience.description.slice(0, visibleCount(experience)).map((item) => <li key={item}>{withCaseStudyLinks(item)}</li>)}
      </ul>
      {experience.description.length > visibleCount(experience) ? (
        <details className="experience-details">
          <summary>View {experience.description.length - visibleCount(experience)} more details</summary>
          <ul>
            {experience.description.slice(visibleCount(experience)).map((item) => <li key={item}>{withCaseStudyLinks(item)}</li>)}
          </ul>
        </details>
      ) : null}
    </>
  );
}

// Consecutive training entries from the same provider share one timeline step as parallel tracks.
function groupTimeline(items: Experience[]) {
  return items.reduce<Experience[][]>((groups, item) => {
    const last = groups.at(-1);
    if (item.kind === "training" && last?.[0].kind === "training" && last[0].company === item.company) last.push(item);
    else groups.push([item]);
    return groups;
  }, []);
}

export function ExperienceSection() {
  const timeline = groupTimeline(experiences.filter(item => item.kind === "work" || item.kind === "training"));
  const operations = experiences.filter(item => item.kind === "operations");
  const earlier = experiences.filter(item => item.kind === "earlier");

  return (
    <section className="section-space experience-section" id="experience">
      <div className="site-shell">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Experience across development and operations."
          description="From economics and business operations to hands-on software development, each role has strengthened how I communicate, solve problems, and build."
          invert
        />

        <div role="group" aria-labelledby="work-experience-heading">
          <h3 className="experience-group-heading" id="work-experience-heading">Development Experience</h3>
          <div className="timeline" data-timeline>
          {timeline.map((group, index) => {
            const [experience] = group;
            return (
              <article className="timeline-item" key={`${experience.company}-${experience.title}`}>
                <div className="timeline-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span>
                      {experience.kind === "training"
                        ? <GraduationCap size={16} aria-hidden="true" />
                        : <BriefcaseBusiness size={16} aria-hidden="true" />} {experience.company}
                    </span>
                    <time>{experience.duration}</time>
                  </div>
                  {group.length > 1 ? (
                    <>
                      <h4>Full-Stack Developer Bootcamp</h4>
                      <div className="training-tracks">
                        {group.map((track) => (
                          <section className="training-track" key={track.title}>
                            <h5>{track.title}</h5>
                            <ExperienceDetails experience={track} />
                          </section>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h4>{experience.title}</h4>
                      <ExperienceDetails experience={experience} />
                    </>
                  )}
                </div>
              </article>
            );
          })}
          </div>
        </div>

        {operations.length > 0 ? (
          <div className="operations-experience" role="group" aria-labelledby="operations-experience-heading">
            <h3 className="experience-group-heading" id="operations-experience-heading">Business operations</h3>
            <p className="operations-intro">An ongoing role I hold alongside my development work, built on budgeting, cost control, and customer insight.</p>
            {operations.map((experience) => (
              <article className="timeline-card operations-card" key={`${experience.company}-${experience.title}`}>
                <div className="timeline-meta">
                  <span><BriefcaseBusiness size={16} aria-hidden="true" /> {experience.company}</span>
                  <time>{experience.duration}</time>
                </div>
                <h4>{experience.title}</h4>
                <ExperienceDetails experience={experience} />
              </article>
            ))}
          </div>
        ) : null}

        {earlier.length > 0 ? (
          <div className="earlier-experience" role="group" aria-labelledby="earlier-experience-heading">
            <h3 className="experience-group-heading" id="earlier-experience-heading">Earlier experience</h3>
            <ul className="earlier-list">
              {earlier.map((experience) => (
                <li key={`${experience.company}-${experience.title}`}>
                  <div className="earlier-head">
                    <strong>{experience.title}</strong>
                    <time>{experience.duration}</time>
                  </div>
                  <p className="earlier-company">{experience.company}</p>
                  <ul className="earlier-points">
                    {experience.description.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {experience.description.length > 3 ? (
                    <details className="experience-details">
                      <summary>View {experience.description.length - 3} more details</summary>
                      <ul className="earlier-points">
                        {experience.description.slice(3).map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </details>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
