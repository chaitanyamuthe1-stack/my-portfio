export default function SectionTitle({
  eyebrow,
  title,
  description,
  icon,
  centered = false,
}) {
  return (
    <div className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accentCyan">
          {icon}
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-textMuted">{description}</p>
      )}
    </div>
  );
}
