import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="// work_history" title="Experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={job.company}
            className="glass glass-hover p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-slate-100">
                {job.role}{" "}
                <span className="text-cyan">@ {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {job.points.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
