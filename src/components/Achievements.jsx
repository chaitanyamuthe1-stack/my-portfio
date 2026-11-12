import React from 'react';
import { 
  Trophy, 
  Award, 
  FileText, 
  Users, 
  Sparkles, 
  Star, 
  Calendar,
  Building
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  const iconMap = {
    Award: Award,
    Trophy: Trophy,
    FileText: FileText,
    Users: Users,
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-mono font-medium tracking-wider uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Achievements & Recognition
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Academic accolades, project hackathons, paper presentations, and leadership initiatives.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl glass-panel glass-panel-hover border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glowing top line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-surfaceLight border border-white/10 flex items-center justify-center text-accentCyan group-hover:scale-110 group-hover:border-primary/50 transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-textMuted">
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight mb-2">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-1.5 text-xs text-textLight font-medium mb-3">
                    <Building className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="line-clamp-1">{item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-accentCyan/80">
                  <span>Recognition</span>
                  <Star className="w-3.5 h-3.5 text-accentCyan" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
