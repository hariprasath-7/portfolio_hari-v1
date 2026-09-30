# Portfolio Transformation — 3D AI/ML Developer Theme

## 🎯 Goal
Transform the existing portfolio UI into a modern, interactive 3D AI/ML engineer showcase while preserving existing project data, social links, and bio content.

## 🎨 Design System & Aesthetic Guidelines
- **Theme:** Dark obsidian & high-dimensional neural network (`#070A0F`, `#0B0F17`).
- **Accent Palette:** Emerald Glow (`#10B981`), Cyber Cyan (`#06B6D4`), Subtle Neural Blue (`#3B82F6`).
- **Borders & Surfaces:** Frosted glass effect (`backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl`).
- **Typography:** Crisp white headings (`text-slate-100`), tight tracking (`tracking-tight`), monospace tags for tech stacks (`font-mono text-emerald-400`).
- **No Generic AI Styles:** Strictly avoid high-saturation purple/violet gradients (`bg-slate-900`, `purple-600`).

## 🛠️ Tech Stack Guidelines
- **3D Engine:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations:** Framer Motion, GSAP
- **Icons:** `lucide-react`
- Wrap all 3D canvas components with `'use client'` and React `Suspense` fallbacks to prevent hydration issues.