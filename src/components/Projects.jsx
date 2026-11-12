import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Code2, 
  Brain, 
  ArrowUpRight, 
  CheckCircle,
  Eye,
  Sparkles,
  Info
} from 'lucide-react';
import { Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { label: 'ALL', value: 'ALL' },
    { label: 'AI/ML', value: 'AI/ML' },
    { label: 'WEB DEVELOPMENT', value: 'WEB DEVELOPMENT' },
    { label: 'JAVA', value: 'JAVA' },
    { label: 'PYTHON', value: 'PYTHON' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.categoryFilter === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            My Projects
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Exploring Ideas. Developing Solutions. Building Through Technology.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-blue scale-105'
                  : 'bg-surface border border-white/10 text-textMuted hover:text-white hover:border-primary/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden relative border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              
              {/* Project Card Header / Thumbnail Graphic */}
              <div className="relative h-48 bg-gradient-to-br from-[#121829] via-surfaceLight to-[#080B12] p-5 flex flex-col justify-between border-b border-white/10 overflow-hidden">
                {/* Futuristic ambient shapes */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-surface to-transparent pointer-events-none" />

                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-[11px] font-mono font-semibold text-accentCyan">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-md bg-secondary/20 border border-secondary/40 text-[10px] font-mono text-purple-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="z-10">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-textMuted mt-1 line-clamp-1 italic">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Problem Statement snippet */}
                <div className="p-3 rounded-xl bg-surfaceLight/50 border border-white/5 text-xs text-textMuted">
                  <strong className="text-amber-400 font-mono block mb-1">Problem Statement:</strong>
                  <p className="line-clamp-2">{project.problemStatement}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-textLight leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* My Contribution snippet */}
                <div className="text-xs text-textMuted border-t border-white/5 pt-3">
                  <strong className="text-primary font-mono block mb-1">My Contribution:</strong>
                  <p className="line-clamp-2">{project.myContribution}</p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-surfaceLight border border-white/5 text-[10px] font-mono text-textMuted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-surfaceLight border border-white/5 text-[10px] font-mono text-accentCyan">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Actions & Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface border border-white/10 text-textMuted hover:text-white hover:border-primary/50 transition-colors"
                      title="GitHub Repo"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface border border-white/10 text-textMuted hover:text-white hover:border-accentCyan/50 transition-colors"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 text-xs font-medium text-white transition-all hover:shadow-glow-blue/40"
                  >
                    <span>Details</span>
                    <Eye className="w-3.5 h-3.5 text-primary" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
