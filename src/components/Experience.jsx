import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Info, 
  Code2, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-mono font-medium tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {experience.heading}
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Bridging theoretical knowledge with practical engineering implementations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Required Transparent Experience Statement */}
        <div className="max-w-3xl mx-auto mb-14 p-4 rounded-2xl bg-surface border border-primary/30 flex items-start sm:items-center gap-3.5 shadow-glow-blue/10">
          <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-accentCyan shrink-0 mt-0.5 sm:mt-0">
            <Info className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-textLight leading-relaxed">
            <strong className="text-white">Status: </strong>
            "{experience.statusNote}"
          </p>
        </div>

        {/* Timeline of Practical Engagements */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.timeline.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border-white/10 relative overflow-hidden group"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-300 pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-mono font-semibold text-accentCyan">
                    {item.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-textMuted">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Role & Organization */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 text-sm text-textLight font-medium mb-4">
                <Building2 className="w-4 h-4 text-textMuted" />
                <span>{item.organization}</span>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-textMuted block font-semibold">
                  Key Responsibilities & Practical Tasks:
                </span>
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-textMuted leading-relaxed">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies & Skills Gained Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-textLight font-mono uppercase tracking-wider block mb-2 font-semibold">
                    Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologiesUsed.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-surfaceLight border border-white/10 text-textLight font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-textLight font-mono uppercase tracking-wider block mb-1 font-semibold">
                    Key Competencies Cultivated:
                  </span>
                  <p className="text-textMuted leading-relaxed">
                    {item.skillsGained}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
