export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <div className="mb-9">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-emerald">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
