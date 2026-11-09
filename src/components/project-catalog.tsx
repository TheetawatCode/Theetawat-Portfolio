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
  const filtered = projects.filter(p => filter === "All" || p.status === filter);
  function showMore() {
    const nextIndex = visibleCount;
    setVisibleCount(count => count + pageSize);
    requestAnimationFrame(() => grid.current?.querySelectorAll<HTMLElement>("[data-project-result]")[nextIndex]?.focus());
  }
  return <>
    <div className="project-filters" role="group" aria-label="Filter projects by status">{filters.map(({ label, status }) => <button key={status} type="button" aria-pressed={filter === status} aria-controls="project-results" onClick={() => { setFilter(status); setVisibleCount(pageSize); }}>{label} <span>{status === "All" ? projects.length : projects.filter(p => p.status === status).length}</span></button>)}</div>
    <p className="catalog-count" role="status">Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} projects · {filters.find(f => f.status === filter)?.label}</p>
    <div className="other-projects" id="project-results" ref={grid}>{filtered.slice(0, visibleCount).map(project => <div key={project.id} data-project-result tabIndex={-1}><ProjectCard project={project} /></div>)}</div>
    {filtered.length === 0 && <p className="catalog-empty">No projects in this category yet. Explore another category.</p>}
    {visibleCount < filtered.length && <div className="section-action"><button className="button" type="button" onClick={showMore}>Show more projects ({filtered.length - visibleCount} remaining)</button></div>}  </>;
}
