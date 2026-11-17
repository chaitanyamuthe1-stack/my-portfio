import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderKanban, Github } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel glass-panel-hover project-card group flex h-full flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-[radial-gradient(ellipse_at_70%_15%,rgba(55,125,255,0.2),transparent_55%),linear-gradient(145deg,#141c30,#090d18_70%,#17102b)]">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} project thumbnail`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div
            role="img"
            aria-label={`${project.title} thumbnail placeholder`}
            className="flex h-full flex-col items-center justify-center gap-3 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-accentCyan shadow-[0_0_40px_rgba(55,125,255,0.14)]">
              <FolderKanban size={25} strokeWidth={1.5} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-textMuted">
              Project preview
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-accentCyan/20 bg-[#080b12]/75 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-accentCyan backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-6 text-white transition-colors group-hover:text-accentCyan">
          {project.title}
        </h3>
        {project.overview && (
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-textMuted">
            {project.overview}
          </p>
        )}

        {project.technologies?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <li
                key={technology}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] text-textLight"
              >
                {technology}
              </li>
            ))}
            {project.technologies.length > 4 && (
              <li className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] text-accentCyan">
                +{project.technologies.length - 4}
              </li>
            )}
          </ul>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-textMuted transition hover:border-primary/40 hover:text-white"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-textMuted transition hover:border-accentCyan/40 hover:text-accentCyan"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
          <Button
            type="button"
            variant="secondary"
            className="!px-3.5 !py-2 !text-xs"
            onClick={() => onViewDetails(project)}
          >
            Project details <ArrowUpRight size={14} />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
