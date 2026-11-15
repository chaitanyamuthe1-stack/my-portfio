import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection, navItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/80 py-3 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Chaitanya Muthe, home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary p-px">
            <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-background font-bold text-white">
              CM
            </span>
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            CHAITANYA MUTHE
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navItems.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <a
                key={id}
                href={href}
                aria-current={activeSection === id ? "page" : undefined}
                className={`isolate relative rounded-full px-3 py-2 text-xs transition ${
                  activeSection === id
                    ? "text-white"
                    : "text-textMuted hover:bg-white/5 hover:text-white"
                }`}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="active-navigation-indicator"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.22,
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentCyan xl:hidden"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, height: 0, y: -6 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, y: prefersReducedMotion ? 0 : -6 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="overflow-hidden border-t border-white/[0.06] xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-8">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  aria-current={activeSection === href.slice(1) ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm transition ${
                    activeSection === href.slice(1)
                      ? "bg-primary/15 text-white"
                      : "text-textLight hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
