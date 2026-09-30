"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Boxes } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="projects" eyebrow="// build_log" title="Projects">
      <div className="space-y-6">
        {projects.map((p, idx) => {
          const open = openIdx === idx;
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass glass-hover overflow-hidden p-6 sm:p-7"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-lg border border-white/10 bg-white/5 p-2 text-emerald">
                  <Boxes className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-100">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                </div>
              </div>

              {/* Tech tags — monospace, emerald per design system */}
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-xs text-emerald"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpenIdx(open ? null : idx)}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-emerald"
                aria-expanded={open}
              >
                {open ? "Hide details" : "View details"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>

              {open && (
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {p.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
