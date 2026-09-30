import Section from "./Section";
import { modelRegistry, latentSpace, responsibilities } from "@/lib/data";
import type { ModelStatus } from "@/lib/data";

const STATUS: Record<ModelStatus, { label: string; color: string }> = {
  production: { label: "production", color: "var(--color-emerald)" },
  staging: { label: "staging", color: "var(--color-cyan)" },
  experimental: { label: "experimental", color: "var(--color-neural)" },
};

function TensorMeter({ value, color }: { value: number; color: string }) {
  return (
    <div
      className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/8"
      role="meter"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${value}%`,
          backgroundColor: color,
          boxShadow: `0 0 10px -1px ${color}`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// model_registry" title="Skills">
      {/* Model Registry — core competencies as versioned, deployable models */}
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-slate-300">
          Model Registry
        </h3>
        <span className="font-mono text-xs text-muted">
          {modelRegistry.length} deployed
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {modelRegistry.map((m) => {
          const s = STATUS[m.status];
          return (
            <div key={m.id} className="glass glass-hover p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-100">
                    {m.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-muted">
                    {m.cluster}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs tabular-nums text-slate-200">
                  {m.metric.toFixed(1)}
                </span>
              </div>

              <TensorMeter value={m.metric} color={s.color} />

              <div className="mt-3 flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: s.color, boxShadow: `0 0 6px ${s.color}` }}
                />
                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: s.color }}
                >
                  {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Latent space — capability clusters */}
      <div className="mb-4 mt-12 flex items-baseline justify-between">
        <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-slate-300">
          Latent Space
        </h3>
        <span className="font-mono text-xs text-muted">
          {latentSpace.length} clusters
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {latentSpace.map((group) => (
          <div key={group.cluster} className="glass p-5">
            <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald">
              {group.cluster}
            </h4>
            <ul className="flex flex-wrap gap-2">
              {group.dims.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass mt-6 p-6">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald">
          Key roles &amp; responsibilities
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {responsibilities.map((r, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
