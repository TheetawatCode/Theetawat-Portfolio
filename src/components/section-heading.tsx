type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, description, invert = false }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className={`eyebrow ${invert ? "eyebrow-invert" : ""}`}>{eyebrow}</p>
      <div className="section-heading-copy">
        <h2 className={invert ? "text-white" : "text-ink"}>{title}</h2>
        {description ? (
          <p className={invert ? "text-slate-300" : "text-muted"}>{description}</p>
        ) : null}
      </div>
    </div>
  );
}
