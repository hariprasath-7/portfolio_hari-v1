import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" eyebrow="// credentials" title="Education">
      <div className="space-y-4">
        {education.map((e) => (
          <article
            key={e.degree}
            className="glass glass-hover flex flex-wrap items-baseline justify-between gap-2 p-6"
          >
            <div>
              <h3 className="text-base font-semibold text-slate-100">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted">{e.institution}</p>
              <p className="mt-1 text-xs text-cyan">{e.detail}</p>
            </div>
            <span className="font-mono text-xs text-muted">{e.period}</span>
          </article>
        ))}
      </div>
    </Section>
  );
}
