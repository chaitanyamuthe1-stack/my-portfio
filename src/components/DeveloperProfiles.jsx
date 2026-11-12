import React from 'react';
import { 
  Terminal, 
  Code2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  GitBranch, 
  Layers 
} from 'lucide-react';
import { Github, Linkedin, LeetCode, HackerRank } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function DeveloperProfiles() {
  const { developerProfiles, personal } = portfolioData;

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Code2: LeetCode,
    Terminal: HackerRank,
  };

  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Coding Profiles & Presence
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Active developer platforms, code repositories, competitive problem-solving and professional networks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {developerProfiles.map((profile, index) => {
            const IconComponent = iconMap[profile.icon] || Code2;
            return (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl glass-panel glass-panel-hover border-white/10 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-surfaceLight border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-primary group-hover:border-primary/40 transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-textMuted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-accentCyan block mb-1">
                    {profile.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight mb-1">
                    {profile.platform}
                  </h3>

                  <p className="text-xs font-mono text-textMuted mb-3">
                    @{profile.username}
                  </p>

                  <p className="text-xs text-textMuted leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-textMuted">
                  <span>Explore Profile</span>
                  <span className="text-primary font-bold">→</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Honest GitHub Note */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl bg-surface/80 border border-white/10 text-center text-xs text-textMuted flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Repository links and codebases are genuine academic and personal projects. No fabricated followers or simulated activity stats.
          </span>
        </div>

      </div>
    </section>
  );
}
