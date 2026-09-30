# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is **technical recruiters and engineering hiring managers** evaluating Hari Prasath S for a full-time AI/ML or backend engineering role. They arrive from a resume link, LinkedIn, or GitHub, often skimming many candidates quickly, and need to confirm depth and credibility fast. Success is that they shortlist Hari or reach out to him.

## Product Purpose

A single-page personal portfolio that presents Hari Prasath S as an AI/ML & backend engineer and converts a recruiter's visit into contact or a shortlist decision. It exists to consolidate his bio, skills, real projects, experience, and contact channels into one credible, memorable surface stronger than a resume alone.

## Positioning

Hari's differentiator is hands-on, production-oriented AI/ML *backend* engineering — not model research and not front-end. Concretely: building LLM-integrated systems (RAG pipelines, agent workflows via LangGraph, hybrid semantic + keyword vector search) on scalable FastAPI/Flask microservices, containerized with Docker and backed by SQL/NoSQL (PostgreSQL, pgvector, Redis). The evidence is the Shopora AI shopping assistant and a from-scratch microservices e-commerce system, not just coursework.

## Operating Context

- Visited mostly on desktop by recruiters mid-screening, but must hold up on mobile (shared links, phones).
- Read alongside, or immediately after, Hari's resume, LinkedIn, and GitHub — the portfolio should reinforce and link out to those, not contradict them.
- Fast, skim-first evaluation: hierarchy and scanability matter as much as depth.

## Capabilities and Constraints

- Static, data-driven single page. All content is sourced from `lib/data.ts` (profile/bio, skills, projects, experience, education, certifications, contact links).
- Sections: Hero, About, Skills, Projects, Experience, Education, Certifications, Contact, plus a terminal-style header and footer.
- Stack is already established by the codebase (Next.js 15, React 19, Tailwind v4, Three.js / react-three-fiber, Framer Motion, lucide-react) — no stack decision is open.
- **Certifications list is currently empty** and must not be fabricated; it stays empty until Hari supplies real entries.
- Contact facts are real and final: email `hariprasathai07@gmail.com`, phone `6369940694`, LinkedIn and GitHub at `hariprasathai`.

## Evidence on Hand

Content in `lib/data.ts` is confirmed real and final: bio/summary, skills, the two projects (Shopora AI assistant; FastAPI microservices e-commerce system), the Magizh Technologies experience, and education. Treat these as locked product truth — do not invent additional projects, metrics, employers, or credentials.

**Not yet available (planned by Hari, do not fabricate until provided):**
- Downloadable **resume/CV** file.
- **Project repository links** (GitHub URLs for Shopora and the microservices system).
- **Deployed/live demo link(s)** for the projects.

Design work should leave clearly-labeled, wired-up slots for these three so they drop in when Hari delivers them, but must not display placeholder URLs or invented demos in the meantime.

## Product Principles

1. **Credibility over decoration** — every claim shown must trace to real content in `lib/data.ts`; nothing invented to fill space.
2. **Skim-first for recruiters** — the positioning and strongest proof (Shopora, microservices, LLM/RAG depth) must land in the first viewport and survive a 20-second scan.
3. **Backend/AI depth is the story** — foreground production engineering (FastAPI, microservices, Docker, RAG, LangGraph), not generic "AI" flourish.
4. **Link out, don't dead-end** — resume, GitHub, LinkedIn, and live demos are the conversion paths; keep them prominent and functional.
5. **Honest about gaps** — empty sections (certifications) and pending assets are handled gracefully, never faked.

## Accessibility & Inclusion

No specific standard was mandated. Baseline: legible contrast, keyboard-navigable links, and content that remains fully readable if 3D/motion fails or is reduced (respect `prefers-reduced-motion`), since the stack leans on Three.js and Framer Motion.
