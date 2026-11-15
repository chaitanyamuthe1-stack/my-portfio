import { ArrowUp, Mail } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Github, Linkedin } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

const socialItems = [
  { id: "github", label: "GitHub", Icon: Github, external: true },
  { id: "linkedin", label: "LinkedIn", Icon: Linkedin, external: true },
  { id: "email", label: "Email", Icon: Mail, external: false },
];

export default function Footer({ navItems }) {
  const { personal } = portfolioData;
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#05070d] px-4 py-10 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md">
            <a
              href="#home"
              aria-label={`${personal.fullName}, back to home`}
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary p-px shadow-glow-blue">
                <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#080b12] text-sm font-bold tracking-wide text-white">
                  CM
                </span>
              </span>
              <span>
                <span className="block text-sm font-semibold tracking-wide text-white">
                  {personal.fullName}
                </span>
                <span className="mt-0.5 block text-xs text-textMuted">
                  AI &amp; ML Engineering Student
                </span>
              </span>
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {socialItems.map(({ id, label, Icon, external }) => {
                const value = personal.socialLinks[id];
                const href = value
                  ? id === "email"
                    ? `mailto:${value}`
                    : value
                  : undefined;
                const className =
                  "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-textMuted transition hover:border-primary/40 hover:bg-primary/10 hover:text-white";

                return href ? (
                  <a
                    key={id}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className={className}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ) : (
                  <span
                    key={id}
                    aria-label={`${label} link not provided`}
                    title={`${label} link not provided`}
                    className={`${className} cursor-default opacity-60`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-textMuted">
              Quick navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex min-h-11 items-center py-2 text-xs text-textMuted transition hover:text-accentCyan"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-4 border-t border-white/[0.08] pt-5 text-xs text-textMuted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {personal.fullName}. All rights reserved.</p>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? "auto" : "smooth",
              })
            }
            className="inline-flex min-h-11 w-fit items-center gap-2 py-2 text-textMuted transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentCyan"
          >
            Back to top <ArrowUp size={14} className="text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}
