import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

import { profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section className="section-space bg-soft" id="about">
      <div className="site-shell">
        <SectionHeading
          eyebrow="04 / About"
          title="A thoughtful builder with a business-aware foundation."
          description="My path into development brings together technical curiosity, organization, and a practical understanding of how people and businesses work."
        />

        <div className="about-card">
          <div className="profile-frame">
            <Image
              src="/images/profile.PNG"
              alt="Theetawat Premsawat"
              width={720}
              height={720}
              sizes="(max-width: 768px) 80vw, 360px"
              className="h-full w-full object-cover"
              priority
            />
            <div className="profile-caption">
              <span>{profile.name}</span>
              <span>{profile.role}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <p className="mt-6 text-base text-slate-600">
              Have a question or want to work together?{" "}
              <a className="font-semibold text-blue-700 hover:text-blue-900" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-primary" href={profile.resume} target="_blank" rel="noreferrer">
                <Download size={17} aria-hidden="true" /> Download resume
              </a>
              <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
