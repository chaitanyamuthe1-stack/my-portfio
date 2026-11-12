import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Printer, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  FolderGit2,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume({ onOpenResume }) {
  const { personal, education, skills, projects } = portfolioData;

  const handleDownload = () => {
    // Open resume modal or direct download
    onOpenResume();
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium tracking-wider uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Explore My Professional Journey
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Take a closer look at my education, technical skills, projects and professional interests.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Main Resume Presentation Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border-primary/30 relative overflow-hidden shadow-glow-blue/10">
          
          {/* Ambient Corner Lighting */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Resume Abstract & Action Column */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Academic Credentials • Class of 2026</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {personal.fullName}
                </h3>
                <p className="text-sm font-semibold text-primary font-mono mt-1">
                  {personal.professionalTitle}
                </p>
                <p className="text-xs text-textMuted mt-1">
                  {personal.college} ({personal.university})
                </p>
              </div>

              {/* Highlights Summary */}
              <div className="space-y-2.5 text-xs text-textMuted">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accentCyan shrink-0" />
                  <span>B.Tech in Artificial Intelligence & Machine Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Core Foundations: C Programming & Java (OOP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Projects in Machine Learning, Deep Learning & Web Systems</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-xs sm:text-sm font-semibold text-white shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-primary/30 hover:border-primary/60 hover:bg-surfaceLight text-xs sm:text-sm font-semibold text-white transition-all"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Download / Print PDF</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-textMuted flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accentCyan" />
                <span>Format: PDF / High-Res Printable • File size: ~180 KB</span>
              </div>

            </div>

            {/* Right Side: Visual Miniature Document Preview */}
            <div className="md:col-span-5 flex justify-center">
              <div 
                onClick={onOpenResume}
                className="relative w-64 h-80 rounded-2xl bg-[#0f1422] border-2 border-primary/40 p-4 shadow-2xl shadow-primary/20 cursor-pointer group hover:border-accentCyan transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col justify-between"
              >
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-glow-blue">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Click to Open & Review
                  </span>
                </div>

                {/* Mock document layout */}
                <div className="space-y-3 pointer-events-none select-none opacity-80 group-hover:opacity-60 transition-opacity">
                  <div className="h-4 w-32 bg-primary/60 rounded" />
                  <div className="h-2 w-24 bg-textMuted/40 rounded" />
                  <div className="h-px w-full bg-white/10 my-2" />
                  <div className="space-y-1.5">
                    <div className="h-2 w-20 bg-accentCyan/50 rounded" />
                    <div className="h-2 w-48 bg-white/20 rounded" />
                    <div className="h-2 w-40 bg-white/15 rounded" />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="h-2 w-20 bg-secondary/50 rounded" />
                    <div className="h-2 w-44 bg-white/20 rounded" />
                    <div className="h-2 w-36 bg-white/15 rounded" />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="h-2 w-20 bg-primary/50 rounded" />
                    <div className="h-2 w-48 bg-white/20 rounded" />
                    <div className="h-2 w-32 bg-white/15 rounded" />
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-accentCyan">
                  <span>Chaitanya_Muthe_CV</span>
                  <span>100% Ready</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
