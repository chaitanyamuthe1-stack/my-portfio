import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers3,
  Lightbulb,
  X,
} from "lucide-react";

export default function ProjectDetailsModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#03050a]/80 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="glass-panel relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-primary/25 bg-[#0b1020] shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.08] bg-[#0b1020]/90 px-5 py-4 backdrop-blur-xl sm:px-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accentCyan">
                Project details
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-textMuted transition hover:border-primary/40 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              <div className="relative mb-6 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_70%_10%,rgba(55,125,255,0.22),transparent_55%),linear-gradient(145deg,#141c30,#090d18_70%,#17102b)]">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} project thumbnail`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Layers3
                      size={42}
                      strokeWidth={1.2}
                      className="text-accentCyan/75"
                    />
                  </div>
                )}
                <span className="absolute bottom-4 left-4 rounded-full border border-accentCyan/20 bg-[#080b12]/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-accentCyan backdrop-blur">
                  {project.category}
                </span>
              </div>

              <h2
                id="project-modal-title"
                className="text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                {project.title}
              </h2>
              {project.overview && (
                <p className="mt-3 leading-7 text-textMuted">
                  {project.overview}
                </p>
              )}

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <DetailBlock
                  title="Problem statement"
                  icon={<Lightbulb size={16} />}
                  value={project.problemStatement}
                />
                <DetailBlock
                  title="My contribution"
                  icon={<Layers3 size={16} />}
                  value={project.contribution}
                />
              </div>

              {project.features?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-white">
                    Main features
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm leading-5 text-textLight"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-white">
                    Technologies used
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-lg border border-primary/15 bg-primary/[0.06] px-3 py-1.5 text-xs text-textLight"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(project.githubUrl || project.liveDemoUrl) && (
                <div className="mt-7 flex flex-wrap gap-3 border-t border-white/[0.08] pt-5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white transition hover:border-primary/40 hover:bg-primary/10"
                    >
                      <Github size={16} /> GitHub repository{" "}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-accentCyan/20 bg-accentCyan/[0.05] px-4 py-2.5 text-sm text-white transition hover:border-accentCyan/45 hover:bg-accentCyan/10"
                    >
                      <ExternalLink size={15} /> Live demo{" "}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailBlock({ title, icon, value }) {
  if (!value) return null;

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
        <span className="text-accentCyan">{icon}</span>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-textMuted">{value}</p>
    </div>
  );
}
