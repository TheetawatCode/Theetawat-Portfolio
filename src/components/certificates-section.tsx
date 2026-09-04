import { Award, CalendarDays, ExternalLink, ShieldCheck } from "lucide-react";

import { certificates, profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function CertificatesSection() {
  return (
    <section className="section-space certificates-section" id="certificates">
      <div className="site-shell">
        <SectionHeading
          eyebrow="03 / Certificates"
          title="Credentials that support how I learn and build."
          description="A record of focused learning across AI, development, data, and modern tools — with room to grow as new credentials are earned."
        />

        <div className="certificates-toolbar">
          <p><strong>{certificates.length}</strong> verified learning credentials</p>
          <a className="certificate-profile-link" href={`${profile.linkedin}details/certifications/`} target="_blank" rel="noreferrer">
            View on LinkedIn <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.id}>
              <div className="certificate-card-topline">
                <span className="certificate-icon" aria-hidden="true"><Award size={19} /></span>
                <span className="certificate-issuer"><ShieldCheck size={15} aria-hidden="true" /> {certificate.issuer}</span>
              </div>
              <h3>{certificate.title}</h3>
              <div className="certificate-meta">
                <span><CalendarDays size={15} aria-hidden="true" /> Issued {certificate.issued}</span>
                {certificate.credentialId ? <span className="credential-id">ID {certificate.credentialId}</span> : null}
              </div>
              {certificate.skills?.length ? (
                <ul className="certificate-skills" aria-label="Skills">
                  {certificate.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              ) : <span className="certificate-foundation">Learning foundation</span>}
              {certificate.credentialUrl ? (
                <a className="certificate-verify-link" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                  Verify credential <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
