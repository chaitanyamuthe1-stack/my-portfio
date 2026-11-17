import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import SectionTitle from "../components/SectionTitle";
import { projectCategories, projects } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "ALL"
        ? projects
        : projects.filter(
            (project) => project.category === activeCategory,
          ),
    [activeCategory],
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-surface/20 px-4 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Selected work"
          title="Featured Projects"
          description="Turning Knowledge Into Practical Solutions."
          icon={<FolderGit2 size={16} />}
        />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 rounded-full border px-4 py-2 text-[10px] font-semibold tracking-[0.08em] transition sm:text-xs ${
                  isActive
                    ? "border-primary/45 bg-gradient-to-r from-primary/20 to-secondary/20 text-white shadow-[0_0_24px_rgba(55,125,255,0.12)]"
                    : "border-white/10 bg-white/[0.025] text-textMuted hover:border-primary/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1020]/55 px-6 py-14 text-center sm:py-16"
          >
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/[0.1] blur-[70px]"
            />
            <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 to-secondary/10 text-accentCyan">
              <FolderGit2 size={25} strokeWidth={1.5} />
            </div>
            <p className="relative mt-5 text-lg font-medium text-white sm:text-xl">
              My projects will be showcased here soon.
            </p>
            <p className="relative mt-2 text-sm text-textMuted">
              {activeCategory === "ALL"
                ? "Check back soon for project updates."
                : `No ${activeCategory} projects have been added yet.`}
            </p>
          </motion.div>
        )}
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
