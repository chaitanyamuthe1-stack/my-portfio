import React, { useState } from 'react';
import { 
  Code, 
  Brain, 
  Globe, 
  Database, 
  Wrench, 
  CheckCircle, 
  Search, 
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryIcons = {
    languages: Code,
    aiml: Brain,
    web: Globe,
    database: Database,
    tools: Wrench,
  };

  const filteredCategories = skills.categories.map((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) return null;
    
    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Carefully curated, genuine technical competencies spanning systems programming, intelligent models, and web stacks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Ethical Transparency Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl bg-surface border border-primary/20 flex items-center gap-3 text-xs text-textMuted">
          <Info className="w-4 h-4 text-accentCyan shrink-0" />
          <span>
            <strong className="text-white">Authentic Skill Matrix:</strong> Categorized by demonstrated coursework, academic implementations, and practical exploration. No fabricated 99% metrics.
          </span>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-surface p-1.5 rounded-2xl border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-blue'
                  : 'text-textMuted hover:text-white hover:bg-white/5'
              }`}
            >
              All Categories
            </button>
            {skills.categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Layers;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-blue'
                      : 'text-textMuted hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills or tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-surface border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-textMuted focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>

        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            if (category.skills.length === 0) return null;

            return (
              <div key={category.id} className="space-y-4">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-textMuted">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top tag & Level */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-md bg-primary/15 border border-primary/30 text-[10px] font-mono font-medium text-accentCyan">
                            {skill.tag}
                          </span>
                          <span className="text-[11px] font-mono text-emerald-400 font-medium">
                            {skill.level}
                          </span>
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors flex items-center justify-between">
                          <span>{skill.name}</span>
                          <span className="text-xs font-normal text-textMuted font-mono">
                            {skill.category}
                          </span>
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-textMuted leading-relaxed mt-2">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-textMuted">
                        <span>Chaitanya Muthe</span>
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
