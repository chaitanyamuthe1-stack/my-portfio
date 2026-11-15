import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { portfolioData } from "../data/portfolioData";

const categoryIcons = {
  programming: Code2,
  aiml: BrainCircuit,
  web: PanelsTopLeft,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Technical profile"
          title="Skills & Areas of Interest"
          description="An honest snapshot of my programming background, current knowledge, and areas I’m interested in exploring."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skills.categories.map((category, categoryIndex) => {
            const CategoryIcon = categoryIcons[category.id] || Code2;

            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel rounded-3xl p-5 sm:p-7"
                aria-labelledby={`skill-category-${category.id}`}
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 to-secondary/10 text-accentCyan">
                    <CategoryIcon size={21} strokeWidth={1.7} />
                  </span>
                  <div className="pt-0.5">
                    <h3
                      id={`skill-category-${category.id}`}
                      className="text-lg font-semibold text-white sm:text-xl"
                    >
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-textMuted sm:text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {category.skills.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-5 text-sm text-textMuted">
                    No verified {category.name.toLowerCase()} listed yet.
                  </p>
                )}
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
