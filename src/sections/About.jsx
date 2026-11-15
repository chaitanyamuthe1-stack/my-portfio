import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { portfolioData } from "../data/portfolioData";

const highlightIcons = {
  GraduationCap,
  Cpu,
  Sparkles,
};

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const { personal, about } = portfolioData;

  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-primary/[0.06] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="A little about me"
          title={about.heading}
          description={about.subheading}
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-9"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-secondary/[0.09] blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-accentCyan">
                <BookOpen size={21} />
              </div>
              <div className="space-y-4 text-sm leading-7 text-textMuted sm:text-base">
                {about.bioParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
                {personal.programmingLanguages.map((language) => (
                  <span
                    key={language}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1.5 text-xs font-medium text-textLight"
                  >
                    <Code2 size={13} className="text-accentCyan" />
                    {language}
                  </span>
                ))}
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-textMuted">
                  Python · {personal.pythonKnowledge}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-textMuted">
                  Web development · {personal.webDevelopmentKnowledge}
                </span>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.highlights.map((item, index) => {
              const Icon = highlightIcons[item.icon] || Sparkles;

              return (
                <motion.article
                  key={item.id}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="glass-panel group relative overflow-hidden rounded-2xl p-5 transition-colors hover:border-primary/35 sm:p-6"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/[0.08] blur-2xl transition-colors group-hover:bg-primary/[0.14]" />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/[0.09] text-accentCyan">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-textMuted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
