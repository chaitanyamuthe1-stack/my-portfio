import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, Landmark } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-surface/30 px-4 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-secondary/[0.07] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Academic background"
          title="Education"
          description="My current degree and field of study."
        />

        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[1.35rem] top-8 w-px bg-gradient-to-b from-accentCyan/70 via-primary/45 to-secondary/10 sm:left-8"
          />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.article
                key={`${item.degree}-${item.branch}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-14 sm:pl-20"
              >
                <div className="absolute left-0 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-accentCyan/40 bg-[#0b1020] text-accentCyan shadow-[0_0_26px_rgba(0,240,255,0.12)] sm:left-[0.8rem] sm:h-12 sm:w-12">
                  <GraduationCap size={21} />
                </div>

                <div className="glass-panel glass-panel-hover relative overflow-hidden rounded-3xl p-6 sm:p-8">
                  <div className="absolute -right-14 -top-20 h-48 w-48 rounded-full bg-primary/[0.08] blur-3xl" />
                  <div className="relative">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-accentCyan/20 bg-accentCyan/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accentCyan">
                          <span className="h-1.5 w-1.5 rounded-full bg-accentCyan" />
                          {item.status}
                        </span>
                        <h3 className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
                          {item.degree}
                        </h3>
                        <p className="mt-1.5 text-base font-medium text-gradient-primary sm:text-lg">
                          {item.branch}
                        </p>
                      </div>

                      <div className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-sm text-textLight">
                        <CalendarDays size={16} className="text-primary" />
                        <span>
                          Expected graduation:{" "}
                          <strong className="font-semibold text-white">
                            {item.expectedGraduation}
                          </strong>
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 border-t border-white/[0.08] pt-5 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <Landmark
                          size={17}
                          className="mt-0.5 shrink-0 text-accentCyan"
                        />
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
                            College
                          </p>
                          <p className="mt-1 text-sm leading-6 text-textLight">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap
                          size={17}
                          className="mt-0.5 shrink-0 text-secondary"
                        />
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
                            University
                          </p>
                          <p className="mt-1 text-sm leading-6 text-textLight">
                            {item.university}
                          </p>
                        </div>
                      </div>
                    </div>

                    {(item.academicDuration || item.cgpa) && (
                      <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
                        {item.academicDuration && (
                          <span className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-textMuted">
                            Duration: {item.academicDuration}
                          </span>
                        )}
                        {item.cgpa && (
                          <span className="rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-1.5 text-xs text-textLight">
                            CGPA: {item.cgpa}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
