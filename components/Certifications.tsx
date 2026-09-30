import { Award, Inbox } from "lucide-react";
import Section from "./Section";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="// achievements" title="Certifications">
      {certifications.length > 0 ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <li
              key={i}
              className="glass glass-hover flex items-center gap-3 p-4 text-sm text-slate-200"
            >
              <Award className="h-4 w-4 shrink-0 text-emerald" />
              {c}
            </li>
          ))}
        </ul>
      ) : (
        <div className="glass flex items-center gap-3 border-dashed p-6 text-sm text-muted">
          <Inbox className="h-4 w-4 shrink-0 text-emerald" />
          <span>
            No entries yet — add them in{" "}
            <code className="font-mono text-cyan">lib/data.ts</code> under{" "}
            <code className="font-mono text-cyan">certifications</code>.
          </span>
        </div>
      )}
    </Section>
  );
}
