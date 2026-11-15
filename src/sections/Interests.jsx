import React from 'react';
import { 
  Bot, 
  Binary, 
  Layers, 
  Atom, 
  BookOpen, 
  HeartHandshake, 
  Sparkles,
  Compass
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Interests() {
  const { interests } = portfolioData;

  const iconMap = {
    Bot: Bot,
    Binary: Binary,
    Layers: Layers,
    Atom: Atom,
    BookOpen: BookOpen,
    HeartHandshake: HeartHandshake,
  };

  return (
    <section id="interests" className="py-24 relative overflow-hidden bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-mono font-medium tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Passions & Curiosities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Beyond the Code
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Intellectual fascinations and engineering philosophies driving continuous self-evolution.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="p-7 rounded-3xl glass-panel glass-panel-hover border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-surfaceLight border border-white/10 flex items-center justify-center text-accentCyan mb-5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/40 transition-all shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-accentCyan transition-colors tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-textMuted">
                  <span>Interest Vector</span>
                  <span className="text-primary font-bold">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
