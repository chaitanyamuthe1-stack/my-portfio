import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  AlertCircle, 
  Lightbulb, 
  Sparkles 
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d121f] border border-primary/40 shadow-2xl shadow-primary/20 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-white hover:border-primary/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-mono font-semibold text-accentCyan">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-xs font-mono text-purple-300">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-textLight font-medium mb-6 italic">
          "{project.tagline}"
        </p>

        {/* Technologies Pills */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-textMuted block mb-2 font-semibold">
            Technologies & Frameworks:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-surfaceLight border border-white/10 text-xs font-mono text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Statement Box */}
        <div className="mb-6 p-4 rounded-2xl bg-surfaceLight/60 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-semibold">
            <AlertCircle className="w-4 h-4" />
            <span>Problem Statement</span>
          </div>
          <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Project Description & Architecture */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-accentCyan uppercase tracking-wider font-semibold">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span>Architectural Overview</span>
          </div>
          <p className="text-xs sm:text-sm text-textLight leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* My Contribution */}
        <div className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20">
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-1 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>My Engineering Contribution</span>
          </div>
          <p className="text-xs sm:text-sm text-textLight leading-relaxed">
            {project.myContribution}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-textMuted block mb-3 font-semibold">
            Key Features & System Capabilities:
          </span>
          <div className="space-y-2.5">
            {project.features.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accentCyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-textMuted">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons in Modal */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-white/10 hover:border-primary/50 text-xs sm:text-sm font-semibold text-white transition-all shadow-sm"
          >
            <Github className="w-4 h-4 text-primary" />
            <span>View GitHub Repository</span>
          </a>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-xs sm:text-sm font-semibold text-white shadow-glow-blue transition-all hover:scale-[1.02]"
          >
            <span>Launch Live Demo / Docs</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-mono text-textMuted hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
