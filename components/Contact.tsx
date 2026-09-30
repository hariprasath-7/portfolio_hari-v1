import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="// connect" title="Get in Touch">
      <div className="glass p-8 text-center">
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">
          Open to backend and AI/ML engineering opportunities. Got a role in
          mind or just want to talk shop? My inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-[#05121b] transition-colors hover:bg-emerald/90"
        >
          <Mail className="h-4 w-4" />
          Say hello
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-emerald"
          >
            <Mail className="h-4 w-4 text-emerald" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
          >
            <Phone className="h-4 w-4 text-cyan" />
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-emerald"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
