import { Award, CalendarDays, ExternalLink } from "lucide-react";

import { certificates, profile, type Certificate } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
            <article className="certificate-card" key={certificate.id}>
              <div className="certificate-card-topline">
                <span className="certificate-icon" aria-hidden="true"><Award size={19} /></span>
                <span className="certificate-issuer">{certificate.issuer}</span>
              </div>
              <h3>{certificate.title}</h3>
              <div className="certificate-meta">
                <span><CalendarDays size={15} aria-hidden="true" /> Issued {certificate.issued}</span>
                {certificate.expires ? <span><CalendarDays size={15} aria-hidden="true" /> Expires {certificate.expires}</span> : null}
              </div>
              <div className="certificate-identity" aria-hidden={!certificate.credentialId || undefined}>
                {certificate.credentialId ? <span className="credential-id">Credential ID {certificate.credentialId}</span> : null}
              </div>
              {certificate.skills?.length ? (
                <ul className="certificate-skills" aria-label="Skills">
                  {certificate.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              ) : <span className="certificate-foundation">Learning foundation</span>}
              <div className="certificate-footer">
              {certificate.credentialUrl ? (
                <a className="certificate-verify-link" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                  Verify credential <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
              </div>
            </article>
  );
}

export function CertificatesSection() {
  const selected = certificates.filter(c => c.selected).slice(0, 3);
  const remaining = certificates.filter(c => !selected.some(item => item.id === c.id));
  return (
    <section className="section-space certificates-section" id="certificates">
      <div className="site-shell">
        <SectionHeading
          eyebrow="04 / Certificates"
          title="Selected learning credentials."
          description="Focused learning in development, data, and AI-assisted workflows."
        />

        <div className="certificates-toolbar">
          <p><strong>{certificates.length}</strong> learning credentials</p>
          <a className="certificate-profile-link" href={`${profile.linkedin}details/certifications/`} target="_blank" rel="noreferrer">
            View on LinkedIn <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="certificates-grid certificates-grid-selected">
          {selected.map((certificate) => (
            <CertificateCard certificate={certificate} key={certificate.id} />
          ))}
        </div>
        {remaining.length > 0 && <details className="content-disclosure"><summary>View all {certificates.length} credentials <span>{remaining.length} more</span></summary><div className="certificates-grid">{remaining.map(certificate => <CertificateCard certificate={certificate} key={certificate.id} />)}</div></details>}
      </div>
    </section>
  );
}
