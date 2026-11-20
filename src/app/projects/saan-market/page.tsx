import type { Metadata } from "next";
import styles from "./case-study.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const project = projects.find((item) => item.id === "saan-market")!;

export const metadata: Metadata = {
  title: "Saan Market Case Study | Theetawat Premsawat",
  description: "How I kept money and cart data precise in a frontend storefront showcase: integer satang pricing, sanitized persisted state, and a tested quality gate.",
};

const decisions = [
  { number: "01", title: "Money as integers, not decimals", description: "Every price is stored as integer satang and only converted to Thai baht at the display boundary. The formatter throws on a non-integer amount, so a rounding mistake fails loudly instead of showing a wrong total. Cart totals are derived from the product data, not stored separately." },
  { number: "02", title: "Cart data that cannot go stale or corrupt", description: "The persisted cart keeps only variant IDs and quantities. On load, malformed entries are dropped, duplicates are merged, and quantities are clamped to 1–10. A line whose variant no longer exists is kept as an unavailable line instead of crashing the page. If browser storage is blocked, the in-memory cart still works." },
  { number: "03", title: "Predictable discovery", description: "Shop filters and sorting are read from the URL and normalized, so unknown values fall back to safe defaults and repeated values use the first. Search trims, normalizes and length-limits the query, then ranks matches by field with a stable tie order, so a shared link always shows the same results." },
];

export default function SaanMarketCaseStudyPage() {
  return <><SiteHeader /><main id="top" className={`case-study-page ${styles.page}`}>
    <div className="site-shell case-study-shell">
      <Link href="/#projects" className="catalog-back">← Back to selected projects</Link>
      <div className="case-study-intro">
        <div><p className="eyebrow">Selected project / Case study</p><h1>Saan Market</h1><p className="case-study-lede">A frontend storefront showcase built around one question: can a shopping UI stay exact with money and data?</p></div>
        <p className="case-study-disclosure">Self-initiated portfolio project · Fictional store with local product data, not a real retailer.</p>
      </div>
      <div className="case-study-meta" aria-label="Project details"><div><span>Role</span><strong>Frontend development</strong></div><div><span>Focus</span><strong>Money and data precision · Accessibility</strong></div><div><span>Stack</span><strong>{project.technologies.join(" · ")}</strong></div></div>
      <div className="case-study-hero-image"><Image src={project.image!} alt="Saan Market storefront interface mockup" fill priority sizes="(max-width: 1180px) 100vw, 1180px" className="object-contain" /></div>
      <div className="case-study-actions"><a className="button button-primary" href={project.liveDemo} target="_blank" rel="noreferrer">Try the live demo <ArrowUpRight size={17} aria-hidden="true" /></a><a className="button" href={project.githubLink} target="_blank" rel="noreferrer"><CodeXml size={17} aria-hidden="true" /> View source and tests</a></div>
      <div className="case-study-content">
        <section className="case-study-section"><p className="eyebrow">The premise</p><h2>A storefront is a small system of numbers.</h2><p>Prices, quantities and totals are where a shopping interface loses trust fastest. I treated Saan Market as a chance to build the full browse, cart and checkout journey for Thai home goods while keeping those numbers exact and the stored data safe to reload.</p><p>It is a fictional store and a frontend showcase: the aim is to show careful engineering habits, not to claim a real retail operation or measured business results.</p></section>
        <section className="case-study-section"><p className="eyebrow">What I built</p><h2>Decisions behind the numbers.</h2><div className="case-study-decisions">{decisions.map((decision) => <article key={decision.number}><span>{decision.number}</span><h3>{decision.title}</h3><p>{decision.description}</p></article>)}</div></section>
        <section className="case-study-section"><p className="eyebrow">Validation</p><h2>Tested, then gated in CI.</h2><p>32 Vitest cases across 14 test files cover money formatting (including rejecting non-integer values), cart merging, quantity limits, recovery from malformed saved data, stale variants, catalog query normalization, search ranking, and key component behavior. The checkout tests assert linked inline errors with focus moving to the first invalid field, and a polite announcement on completion. A GitHub Actions workflow runs tests, lint, typecheck and a production build on every push and pull request. Keyboard and responsive checks were done manually rather than with automated browser tests.</p></section>
        <section className="case-study-section case-study-limits"><p className="eyebrow">Scope & limitations</p><h2>A reviewable showcase, not a retail system.</h2><p>Checkout is simulated: no payment is processed and no customer data is stored. There is no backend, database, account system or inventory integration. Products are typed local fixtures, and the cart lives in the browser&apos;s local storage, so it is per device and not authoritative. A real store would need server-side pricing, payments, order storage and stronger operational security.</p></section>
      </div>
      <div className="case-study-bottom"><p>Want to see the implementation in context?</p><div><a href={project.liveDemo} target="_blank" rel="noreferrer">Open live demo ↗</a><a href={project.githubLink} target="_blank" rel="noreferrer">Explore the repository ↗</a></div></div>
      <Link href="/projects" className="catalog-back">← Explore all projects</Link>
    </div>
  </main><SiteFooter /></>;
}
