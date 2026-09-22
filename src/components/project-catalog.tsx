"use client";
import { useRef, useState } from "react";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "./project-card";

const filters = [{ label: "All", status: "All" }, { label: "Live", status: "Live" }, { label: "In Progress", status: "In Progress" }, { label: "Explorations", status: "Prototype" }] as const;
type Filter = (typeof filters)[number]["status"];
const pageSize = 6;

export function ProjectCatalog({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const grid = useRef<HTMLDivElement>(null);
  const available = projects.filter(p => p.status !== "Coming Soon");
  const filtered = available.filter(p => filter === "All" || p.status === filter);
  const ideas = projects.filter(p => p.status === "Coming Soon");
  function showMore() {
    const nextIndex = visibleCount;
    setVisibleCount(count => count + pageSize);
    requestAnimationFrame(() => grid.current?.querySelectorAll<HTMLElement>("[data-project-result]")[nextIndex]?.focus());
  }
  return <>
    <div className="project-filters" role="group" aria-label="Filter projects by status">{filters.map(({ label, status }) => <button key={status} type="button" aria-pressed={filter === status} aria-controls="project-results" onClick={() => { setFilter(status); setVisibleCount(pageSize); }}>{label} <span>{status === "All" ? available.length : available.filter(p => p.status === status).length}</span></button>)}</div>
    <p className="catalog-count" role="status">Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} projects · {filters.find(f => f.status === filter)?.label}</p>
    <div className="other-projects" id="project-results" ref={grid}>{filtered.slice(0, visibleCount).map(project => <div key={project.id} data-project-result tabIndex={-1}><ProjectCard project={project} /></div>)}</div>
    {filtered.length === 0 && <p className="catalog-empty">No projects in this category yet. Explore another category.</p>}
    {visibleCount < filtered.length && <div className="section-action"><button className="button" type="button" onClick={showMore}>Show more projects ({filtered.length - visibleCount} remaining)</button></div>}
    {ideas.length > 0 && <details className="content-disclosure roadmap-disclosure"><summary>Ideas in the pipeline <span>{ideas.length} planned projects</span></summary><p className="catalog-count">Early ideas, before active development. These are not completed products.</p><div className="roadmap-list">{ideas.map((project, index) => <article key={project.id}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div></details>}
  </>;
}
