import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  Medal,
  Trophy,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { achievements } from "../data/achievements";

const achievementIcons = {
  award: Award,
  competition: Trophy,
  workshop: Medal,
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-surface/25 px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Recognition"
          title="Achievements"
          description="Verified academic awards, competitions, workshops, and other milestones."
          icon={<Trophy size={16} />}
        />

        {achievements.length > 0 ? (
          <div className="relative mx-auto max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute bottom-7 left-[1.2rem] top-7 w-px bg-gradient-to-b from-accentCyan/60 via-primary/40 to-transparent sm:left-8"
            />
            <div className="space-y-6">
              {achievements.map((item, index) => {
                const Icon =
                  achievementIcons[item.type] || Award;

                return (
                  <motion.article
                    key={item.id || `${item.title}-${item.year || index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-12 sm:pl-20"
                  >
                    <span className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accentCyan/30 bg-[#0b1020] text-accentCyan shadow-[0_0_24px_rgba(0,240,255,0.1)] sm:left-3 sm:h-11 sm:w-11">
                      <Icon size={18} />
                    </span>
                    <div className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                          {item.organization && (
                            <p className="mt-1 text-sm text-textMuted">
                              {item.organization}
                            </p>
                          )}
                        </div>
                        {item.date && (
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 font-mono text-xs text-textMuted">
                            <CalendarDays size={13} className="text-primary" />
                            {item.date}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-4 text-sm leading-6 text-textMuted">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
            <p className="text-sm text-textMuted">
              No verified achievements have been added yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
