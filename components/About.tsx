import Section from "./Section";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="// readme" title="About">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="glass p-6 md:col-span-3">
          <p className="text-sm leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Currently a Python Backend Developer — I like taking systems from
            prototype to production: clean APIs, services split from monoliths,
            and LLMs wired into real workflows.
          </p>
        </div>

        <div className="glass p-5 md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald">
            /stats
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-muted">class</dt>
              <dd className="text-slate-200">Backend / AI Engineer</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted">focus</dt>
              <dd className="text-cyan">Microservices · LLM</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted">base</dt>
              <dd className="text-slate-200">Coimbatore, IN</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted">status</dt>
              <dd className="text-emerald">open to work</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
