import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building, 
  BookOpen, 
  Award, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-mono font-medium tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Education Journey
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            A structured path of academic rigour, engineering fundamentals, and AI/ML specialization.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Luminous Track */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 group`}
                >
                  
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080B12] border-2 border-primary flex items-center justify-center z-10 shadow-glow-blue transition-transform duration-300 group-hover:scale-125 group-hover:border-accentCyan">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0">
                    <div className={`p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover relative overflow-hidden ${
                      item.isPrimary ? 'border-primary/40 shadow-glow-blue/20' : 'border-white/10'
                    }`}>
                      
                      {/* Highlight Ribbon for Primary B.Tech */}
                      {item.isPrimary && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-accentCyan text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
                          <Sparkles className="w-3 h-3 text-accentCyan" />
                          <span>Current Degree • Final Year</span>
                        </div>
                      )}

                      {/* Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold text-accentCyan flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-emerald-400 font-medium">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                        {item.degree}
                      </h3>

                      <p className="text-sm font-semibold text-primary mb-3">
                        {item.branch}
                      </p>

                      {/* Institution & University */}
                      <div className="space-y-1 mb-4 text-xs text-textMuted">
                        <div className="flex items-center gap-2">
                          <Building className="w-3.5 h-3.5 text-textLight shrink-0" />
                          <span className="text-textLight font-medium">{item.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 pl-5.5">
                          <span>Affiliated: <strong className="text-textLight">{item.university}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-textMuted shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Score Badge (Editable Placeholder) */}
                      <div className="mb-4 inline-block px-3 py-1.5 rounded-lg bg-surfaceLight border border-primary/20 text-xs font-mono text-white">
                        <strong className="text-accentCyan">{item.score}</strong>
                      </div>

                      <p className="text-xs text-textMuted leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Coursework Chips */}
                      {item.coursework && (
                        <div className="pt-3 border-t border-white/5">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-textMuted block mb-2 font-semibold">
                            Core Coursework / Modules:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.coursework.map((course, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2.5 py-1 rounded-md bg-surfaceLight/80 border border-white/5 text-[11px] text-textLight/90 hover:border-primary/40 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
