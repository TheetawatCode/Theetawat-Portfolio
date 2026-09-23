import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const project = projects.find((item) => item.id === "serviceops-desk")!;

export const metadata: Metadata = {
  title: "ServiceOps Desk Case Study | Theetawat Premsawat",
  description: "How I designed and built a role-aware service operations demo with clear job ownership and SLA visibility.",
};

const decisions = [
  { number: "01", title: "One workflow, three focused views", description: "Staff submit and follow their own requests; Technicians work assigned jobs; Managers assign work, monitor SLA risk, and close resolved jobs. Each role sees the same persisted workflow through a relevant interface." },
  { number: "02", title: "Make urgency readable", description: "The dashboard and job queue use explicit status and SLA labels, filters, and an attention area so that priority is visible without relying on color alone." },
  { number: "03", title: "Enforce permissions on the server", description: "Unavailable controls are hidden in the UI, but job mutations also validate the active demo identity and allowed state transitions on the server. Prisma writes job changes and activity records atomically." },
];

export default function ServiceOpsCaseStudyPage() {
  return <><SiteHeader /><main id="top" className="case-study-page">
    <div className="site-shell case-study-shell">
      <Link href="/#projects" className="catalog-back">← Back to selected projects</Link>
      <div className="case-study-intro">
        <div><p className="eyebrow">Selected project / Case study</p><h1>ServiceOps Desk</h1><p className="case-study-lede">A service operations workspace that makes job ownership, progress, and SLA risk easier to follow.</p></div>
        <p className="case-study-disclosure">Self-initiated portfolio project · Demo with seeded users and service jobs, not a client engagement.</p>
      </div>
      <div className="case-study-meta" aria-label="Project details"><div><span>Role</span><strong>Design & full-stack development</strong></div><div><span>Focus</span><strong>Role-aware workflows · Responsive UI</strong></div><div><span>Stack</span><strong>{project.technologies.join(" · ")}</strong></div></div>
      <div className="case-study-hero-image"><Image src={project.image!} alt="ServiceOps Desk project interface mockup" fill priority sizes="(max-width: 1180px) 100vw, 1180px" className="object-contain" /></div>
      <div className="case-study-actions"><a className="button button-primary" href={project.liveDemo} target="_blank" rel="noreferrer">Try the live demo <ArrowUpRight size={17} aria-hidden="true" /></a><a className="button" href={project.githubLink} target="_blank" rel="noreferrer"><CodeXml size={17} aria-hidden="true" /> View source and tests</a></div>
      <div className="case-study-content">
        <section className="case-study-section"><p className="eyebrow">The premise</p><h2>From scattered requests to a traceable workflow.</h2><p>Operational requests can be hard to track when ownership, deadlines, and updates live across chats or spreadsheets. I used that scenario as the design brief for a portfolio-scale application: let someone submit a job, let a manager assign it, let a technician resolve it, and make the full journey visible.</p><p>This is a simulated problem, not a claim about a real customer or measured business outcome.</p></section>
        <section className="case-study-section"><p className="eyebrow">What I built</p><h2>Decisions behind the interface.</h2><div className="case-study-decisions">{decisions.map((decision) => <article key={decision.number}><span>{decision.number}</span><h3>{decision.title}</h3><p>{decision.description}</p></article>)}</div></section>
        <section className="case-study-section"><p className="eyebrow">Validation</p><h2>Tested across the critical journey.</h2><p>Vitest covers role and SLA rules, validation, allowed and rejected state transitions, and related UI behavior. Playwright exercises the Staff → Manager → Technician → Manager flow, along with accessibility and mobile checks. These tests support the demo’s core behavior; they are not exhaustive production coverage.</p></section>
        <section className="case-study-section case-study-limits"><p className="eyebrow">Scope & limitations</p><h2>A reviewable demo, not production software.</h2><p>The role switcher uses seeded identities rather than production authentication or account management. The deployed app uses seeded job data. A real organization would need production sessions, stronger operational security, tenant isolation, and additional validation before using it for live service work.</p></section>
      </div>
      <div className="case-study-bottom"><p>Want to see the implementation in context?</p><div><a href={project.liveDemo} target="_blank" rel="noreferrer">Open live demo ↗</a><a href={project.githubLink} target="_blank" rel="noreferrer">Explore the repository ↗</a></div></div>
      <Link href="/projects" className="catalog-back">← Explore all projects</Link>
    </div>
  </main><SiteFooter /></>;
}
