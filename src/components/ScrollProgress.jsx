import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const showButtonRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (currentScroll) => {
    const shouldShow = currentScroll > 400;
    if (shouldShow !== showButtonRef.current) {
      showButtonRef.current = shouldShow;
      setShowBackToTop(shouldShow);
    }
  });
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextValue = Math.round(progress * 100);
    setProgressValue((currentValue) =>
      currentValue === nextValue ? currentValue : nextValue,
    );
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <motion.div
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressValue}
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-accentCyan to-secondary shadow-glow-blue"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 8, scale: 0.96 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            className="group fixed bottom-6 right-6 z-40 rounded-2xl border border-primary/40 bg-surface/90 p-3 text-white shadow-glow-blue backdrop-blur-md transition-colors hover:bg-surfaceLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentCyan"
            aria-label="Back to top"
            title="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
