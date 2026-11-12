import React from 'react';
import { 
  GraduationCap, 
  Cpu, 
  Sparkles, 
  Compass, 
  Target, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, about } = portfolioData;

  const iconMap = {
    GraduationCap: GraduationCap,
    Cpu: Cpu,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {about.heading}
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            {about.subheading}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {about.highlights.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden"
              >
                {/* Background ambient glow on hover */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-extrabold text-primary/40 group-hover:text-primary transition-colors">
                      {item.id}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-surfaceLight border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-accentCyan group-hover:border-primary/40 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accentCyan transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-primary/80 group-hover:text-primary gap-1">
                  <span>Verified Identity</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan ml-auto" />
                </div>
              </div>
            );
          })}
        </div>

        {/* In-depth Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Biography */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 space-y-6 border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-accentCyan uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-primary" />
              <span>Engineering Journey & Mission</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Transforming Curiosity into Intelligent Engineering
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-textMuted leading-relaxed">
              {about.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars Bulleted */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-xs text-textLight">Solid OOP & Algorithm discipline (C & Java)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span className="text-xs text-textLight">Hands-on ML pipelines & Deep Learning (Python)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accentCyan shrink-0 mt-1" />
                <span className="text-xs text-textLight">Curriculum rigor at DIEMS under DBATU</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-xs text-textLight">Eager to contribute to forward-thinking tech teams</span>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional & Quick Metric Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Institution Badge Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Academic Affiliation
                  </h4>
                  <p className="text-xs font-mono text-accentCyan">
                    Department of AI & ML
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-textMuted border-t border-white/10 pt-4">
                <div>
                  <span className="text-textLight font-semibold block">College:</span>
                  <span>{personal.college}</span>
                </div>
                <div>
                  <span className="text-textLight font-semibold block">University:</span>
                  <span>{personal.university}</span>
                </div>
                <div>
                  <span className="text-textLight font-semibold block">Location:</span>
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel rounded-2xl p-4 sm:p-5 text-center border-white/5 hover:border-primary/30 transition-colors"
                >
                  <span className="block text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono text-textMuted uppercase tracking-wider mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Career Objective Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent border border-primary/30">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-accentCyan uppercase tracking-wider font-semibold">
                <Target className="w-4 h-4" />
                <span>Career Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-textLight leading-relaxed">
                "{personal.careerObjective}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
