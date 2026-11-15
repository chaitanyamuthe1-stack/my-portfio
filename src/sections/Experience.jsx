import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Lightbulb,
  MapPin,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Professional journey"
          title="Experience"
          description={experience.description}
          icon={<BriefcaseBusiness size={16} />}
        />

        {experience.timeline.length > 0 ? (
          <div className="relative mx-auto max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[1.35rem] top-8 w-px bg-gradient-to-b from-primary/70 via-secondary/45 to-transparent sm:left-8"
            />
            <div className="space-y-7">
              {experience.timeline.map((item, index) => (
                <motion.article
                  key={`${item.organization}-${item.role}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-14 sm:pl-20"
                >
                  <span className="absolute left-1 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/35 bg-[#0b1020] text-accentCyan shadow-[0_0_24px_rgba(55,125,255,0.12)] sm:left-3 sm:h-11 sm:w-11">
                    <BriefcaseBusiness size={18} />
                  </span>
                  <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        {item.type && (
                          <span className="rounded-full border border-secondary/25 bg-secondary/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary">
                            {item.type}
                          </span>
                        )}
                        <h3 className="mt-3 text-xl font-semibold text-white">
                          {item.role}
                        </h3>
                        <p className="mt-1 flex items-center gap-2 text-sm text-textLight">
                          <MapPin size={14} className="text-accentCyan" />
                          {item.organization}
                        </p>
                      </div>
                      {item.duration && (
                        <span className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-textMuted">
                          <CalendarDays size={14} className="text-primary" />
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {item.responsibilities?.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-textLight">
                          Responsibilities
                        </h4>
                        <ul className="mt-3 space-y-2.5">
                          {item.responsibilities.map((responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-2.5 text-sm leading-6 text-textMuted"
                            >
                              <Check
                                size={15}
                                className="mt-1 shrink-0 text-accentCyan"
                              />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.skillsLearned?.length > 0 && (
                      <div className="mt-6 border-t border-white/[0.08] pt-5">
                        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-textLight">
                          <Lightbulb size={14} className="text-secondary" />
                          Skills learned
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.skillsLearned.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-primary/15 bg-primary/[0.05] px-3 py-1.5 text-xs text-textLight"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
            <p className="text-sm text-textMuted">
              No verified internships or work experience have been added yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
