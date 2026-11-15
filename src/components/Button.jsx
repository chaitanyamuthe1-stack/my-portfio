export default function Button({
  as: Element = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const styles =
    variant === "secondary"
      ? "border border-white/15 bg-white/5 text-white hover:border-primary/50 hover:bg-primary/10"
      : "bg-gradient-to-r from-primary to-secondary text-white shadow-glow-blue hover:-translate-y-0.5";

  return (
    <Element
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
