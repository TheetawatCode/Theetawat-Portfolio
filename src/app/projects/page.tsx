import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ProjectCatalog } from "@/components/project-catalog";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Projects | Theetawat Premsawat", description: "Explore shipped projects, works in progress, and interface explorations by Theetawat Premsawat." };

export default function ProjectsPage() {
  return <><SiteHeader /><main id="top" className="section-space catalog-page"><div className="site-shell">
    <Link href="/#projects" className="catalog-back">← Back to portfolio</Link>
    <div className="catalog-heading"><p className="eyebrow">Project collection</p><h1>Work, experiments, and what comes next.</h1><p>Explore by status. Live projects have a public experience to try; explorations showcase ideas and interface concepts.</p></div>
    <ProjectCatalog projects={projects} />
  </div></main><SiteFooter /></>;
}
