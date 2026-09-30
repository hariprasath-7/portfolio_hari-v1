"use client";

import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

// 3D canvas is client-only and lazily loaded so it never blocks first paint / hydration.
const NeuralParticleCore = lazy(() => import("./NeuralParticleCore"));

const COMMAND = "model.load('hari-prasath') → status: online";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [show3D, setShow3D] = useState(false);
  const canvasWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, []);

  // Only mount the WebGL scene once its container scrolls into view.
  useEffect(() => {
    const el = canvasWrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow3D(true),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="top" className="relative py-16 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.05fr]">
        {/* Left: identity — name & bio preserved verbatim */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-5 font-mono text-sm text-emerald">
            <span className="text-muted">$ </span>
            {typed}
            <span className="animate-blink text-cyan">▋</span>
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-100 sm:text-5xl">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-xl font-semibold tracking-tight text-emerald sm:text-2xl">
            {profile.title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-[#05121b] transition-colors hover:bg-emerald/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass glass-hover inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-200"
            >
              <Mail className="h-4 w-4 text-cyan" />
              Contact
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-emerald"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-cyan"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right: 3D Neural Particle Core — the focal element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative"
        >
          {/* layered glow behind the core */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(16,185,129,0.22), transparent 62%)",
            }}
          />

          <div
            ref={canvasWrap}
            className="glass relative aspect-square w-full overflow-hidden"
          >
            <Suspense fallback={<CoreFallback />}>
              {show3D ? <NeuralParticleCore /> : <CoreFallback />}
            </Suspense>

            {/* HUD frame — corner ticks drawn as borders, not chrome imagery */}
            <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-emerald/40" />
            <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-emerald/40" />
            <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-emerald/40" />
            <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-emerald/40" />

            {/* telemetry readouts */}
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_6px_var(--color-emerald)]" />
              status: online
            </div>
            <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted">
              neural_core · 2.6k neurons · 90 synapses
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-28 w-28 animate-pulse rounded-full border border-emerald/30 bg-emerald/10 blur-md" />
    </div>
  );
}
