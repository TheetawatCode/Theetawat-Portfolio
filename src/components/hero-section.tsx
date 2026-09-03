import { ArrowDown, ArrowUpRight, CodeXml, ContactRound, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="site-shell relative grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div className="max-w-3xl">
          <div className="availability-pill">
            <span aria-hidden="true" />
            Open to opportunities
          </div>
          <p className="hero-kicker">Hello, I&apos;m {profile.nickname}.</p>
          <h1>
            I build digital products that <span>perform, adapt, and scale.</span>
          </h1>
          <div className="mt-8 max-w-2xl space-y-3 text-lg leading-8 text-slate-600">
            {profile.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a className="button button-primary" href="#projects">
              View projects <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a className="button" href={`mailto:${profile.email}`}>
              Let&apos;s work together <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
            <span className="mr-2 hidden sm:inline">Find me on</span>
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <CodeXml size={18} aria-hidden="true" />
            </a>
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <ContactRound size={18} aria-hidden="true" />
            </a>
            <a className="social-link" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-console" aria-label="Developer profile summary">
          <div className="console-topbar">
            <div className="flex gap-1.5" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span>profile.ts</span>
            <span className="text-blue-400">●</span>
          </div>
          <div className="console-code" aria-hidden="true">
            <p><i>01</i><span className="text-blue-300">const</span> developer = &#123;</p>
            <p><i>02</i>&nbsp;&nbsp;name: <span className="text-cyan-300">&quot;{profile.name}&quot;</span>,</p>
            <p><i>03</i>&nbsp;&nbsp;role: <span className="text-cyan-300">&quot;{profile.role}&quot;</span>,</p>
            <p><i>04</i>&nbsp;&nbsp;focus: [</p>
            <p><i>05</i>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">&quot;Web experiences&quot;</span>,</p>
            <p><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">&quot;Scalable systems&quot;</span>,</p>
            <p><i>07</i>&nbsp;&nbsp;],</p>
            <p><i>08</i>&nbsp;&nbsp;learning: <span className="text-cyan-300">true</span>,</p>
            <p><i>09</i>&#125;;</p>
          </div>
          <div className="console-status">
            <span><b>main</b> — ready to collaborate</span>
            <span>UTF-8</span>
          </div>
        </div>
      </div>
    </section>
  );
}
