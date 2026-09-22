import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return <section className="section-space projects-section" id="projects">
    <div className="projects-glow" aria-hidden="true" />
    <div className="site-shell relative">
      <SectionHeading eyebrow="01 / Selected Projects" title="Selected work. Practical ideas, brought to life." description="A closer look at what I build, from commerce to service operations." />
      <div className="featured-projects">{projects.filter(p => p.featured).slice(0, 3).map(project => <ProjectCard key={project.id} project={project} featured />)}</div>
      <div className="section-action"><p>More shipped work, works in progress, and interface explorations.</p><Link className="button button-primary" href="/projects">View all projects ↗</Link></div>
    </div>
  </section>;
}
