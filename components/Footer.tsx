import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-4 text-center sm:px-6">
        <p className="text-xs text-muted">
          Built with <span className="text-emerald">Next.js</span> ·{" "}
          <span className="text-cyan">Three.js</span> ·{" "}
          <span className="text-slate-300">Tailwind</span>
        </p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
