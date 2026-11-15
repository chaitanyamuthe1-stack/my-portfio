import { motion } from "framer-motion";
import {
  Binary,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Code2,
  Coffee,
  Database,
  Globe,
  Layers3,
  Network,
  PanelsTopLeft,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const skillIcons = {
  Binary,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Code2,
  Coffee,
  Database,
  Globe,
  Layers3,
  Network,
  PanelsTopLeft,
  Wrench,
  BrainCircuit,
};

export default function SkillCard({ skill, index = 0 }) {
  const Icon = skillIcons[skill.icon] || Code2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className="skill-card group relative flex min-h-32 items-start gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1020]/70 p-4 transition-colors duration-300 hover:border-primary/35 hover:bg-primary/[0.045] sm:p-5"
    >
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/[0.07] blur-2xl transition-colors duration-300 group-hover:bg-primary/[0.15]" />
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.16] to-secondary/[0.12] text-accentCyan transition-colors group-hover:border-primary/40">
        <Icon size={20} strokeWidth={1.7} />
      </span>
      <div className="relative min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h4 className="font-semibold leading-5 text-white">{skill.name}</h4>
          {skill.level && (
            <span className="rounded-full border border-accentCyan/20 bg-accentCyan/[0.06] px-2.5 py-1 font-mono text-[10px] text-accentCyan">
              {skill.level}
            </span>
          )}
        </div>
        {skill.description && (
          <p className="mt-2 text-xs leading-5 text-textMuted">
            {skill.description}
          </p>
        )}
      </div>
    </motion.article>
  );
}
