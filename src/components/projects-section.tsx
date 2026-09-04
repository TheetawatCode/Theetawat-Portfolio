import Image from "next/image";
import { ArrowUpRight, CodeXml } from "lucide-react";

import { projects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

function ProjectLinks({ githubLink, liveDemo }: { githubLink?: string; liveDemo?: string }) {
  if (!githubLink && !liveDemo) {
    return <span className="project-unavailable">Details coming soon</span>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {githubLink ? (
        <a className="project-link" href={githubLink} target="_blank" rel="noreferrer">
          <CodeXml size={16} aria-hidden="true" /> Code
        </a>
      ) : null}
      {liveDemo ? (
        <a className="project-link project-link-primary" href={liveDemo} target="_blank" rel="noreferrer">
          Live site <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card" key={project.id}>
      {project.image ? (
        <div className="project-card-image">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
            {project.status}
          </span>
        </div>
      ) : null}
      <div className="project-card-copy">
        {!project.image ? (
          <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
            {project.status}
          </span>
        ) : null}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <ProjectLinks githubLink={project.githubLink} liveDemo={project.liveDemo} />
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const activeProjects = projects.filter((project) => !project.featured && project.status === "Active");
  const inProgressProjects = projects.filter((project) => project.status === "In Progress");
  const roadmapProjects = projects.filter((project) => project.status === "Coming Soon");

  return (
    <section className="section-space projects-section" id="projects">
      <div className="projects-glow" aria-hidden="true" />
      <div className="site-shell relative">
        <SectionHeading
          eyebrow="01 / Projects"
          title="Selected work, built to learn and create value."
          description="A collection of web experiences exploring modern interfaces, scalable foundations, and practical product thinking."
        />

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <article className="featured-project" key={project.id}>
              <div className="project-visual">
                <div className="browser-bar" aria-hidden="true">
                  <div><span /><span /><span /></div>
                  <p>{project.liveDemo?.replace("https://", "").replace(/\/$/, "")}</p>
                </div>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ) : null}
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-copy">
                <div className="flex items-center justify-between gap-4">
                  <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
                    {project.status}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[.18em] text-slate-400">Featured</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-list">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <ProjectLinks githubLink={project.githubLink} liveDemo={project.liveDemo} />
              </div>
            </article>
          ))}
        </div>

        <div className="project-groups">
          <div className="project-group">
            <h3 className="project-group-title">Active Projects</h3>
            <div className="other-projects">{activeProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          </div>

          <div className="project-group">
            <h3 className="project-group-title">In Progress</h3>
            <div className="other-projects">{inProgressProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          </div>

          <div className="roadmap-block">
            <div className="project-group-heading">
              <p className="eyebrow">Coming soon</p>
              <h3>Ideas in the pipeline</h3>
            </div>
            <div className="roadmap-list">
              {roadmapProjects.map((project, index) => (
                <article key={project.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
