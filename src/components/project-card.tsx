import Image from "next/image";
import { ArrowUpRight, CodeXml } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Heading = featured ? "h3" : "h2";
  return <article className={featured ? "featured-project" : "project-card"}>
    {project.image && <div className={featured ? "project-visual" : "project-card-image"}>
      <Image src={project.image} alt={`${project.title} project preview`} fill sizes={featured ? "(max-width: 899px) 100vw, 50vw" : "(max-width: 767px) 100vw, 50vw"} className="object-contain" />
    </div>}
    <div className={featured ? "project-copy" : "project-card-copy"}>
      <div className="project-badges"><span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status === "Prototype" ? "Exploration" : project.status}</span>{project.featured && <span className="project-featured-label">Selected work</span>}</div>
      <Heading>{project.title}</Heading>
      {project.role && <p className="project-role">{project.role}</p>}
      <p>{project.description}</p>
      <ul className="tech-list" aria-label="Technologies">{(featured ? project.technologies.slice(0, 4) : project.technologies).map(t => <li key={t}>{t}</li>)}</ul>
      {(project.liveDemo || project.githubLink) && <div className="project-actions">
        {project.liveDemo && <a className="project-link project-link-primary" href={project.liveDemo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`}>Live site <ArrowUpRight size={16} aria-hidden="true" /></a>}
        {project.githubLink && <a className="project-link" href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}><CodeXml size={16} aria-hidden="true" /> Code</a>}
      </div>}
      {!featured && project.nextMilestone && <p className="project-unavailable">Next: {project.nextMilestone}</p>}
      {!featured && !project.liveDemo && !project.githubLink && <p className="project-unavailable">{project.status === "Prototype" ? "Concept preview" : "Preview — public demo not yet available"}</p>}
    </div>
  </article>;
}
