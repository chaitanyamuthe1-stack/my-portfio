import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Award,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal, education, skills, projects, experience, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Triggers printing to PDF or downloading file
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-3xl bg-[#0b0f19] border border-primary/40 shadow-2xl shadow-primary/30 p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-3 bg-[#0b0f19]/95 backdrop-blur-md pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
              Chaitanya_Muthe_Resume.pdf (Live Interactive Sheet)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface border border-white/10 text-xs font-medium text-white hover:border-primary/50 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-accentCyan" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white shadow-glow-blue hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-white transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div id="printable-resume" className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 sm:p-10 text-white space-y-6 shadow-xl">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                {personal.fullName}
              </h1>
              <p className="text-sm font-semibold text-primary mt-1 font-mono">
                {personal.professionalTitle}
              </p>
              <p className="text-xs text-textMuted italic mt-1">
                "{personal.personalBrandTagline}"
              </p>
            </div>

            <div className="text-xs font-mono text-textMuted space-y-1 sm:text-right">
              <div>{personal.email}</div>
              <div>{personal.location}</div>
              <div className="text-accentCyan flex gap-3 justify-center sm:justify-end pt-1">
                <a href={personal.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                <span>•</span>
                <a href={personal.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accentCyan" />
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-textLight/90 leading-relaxed bg-surface/50 p-3 rounded-xl border border-white/5">
              {personal.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm border-b border-white/5 pb-2">
                  <div>
                    <strong className="text-white block">{edu.degree} - {edu.branch}</strong>
                    <span className="text-textMuted text-xs">{edu.institution} ({edu.university})</span>
                  </div>
                  <div className="sm:text-right text-xs font-mono text-textMuted mt-1 sm:mt-0">
                    <span className="text-accentCyan">{edu.duration}</span>
                    <span className="block text-emerald-400 font-semibold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-secondary font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Technical Skills Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-surface/50 p-3 rounded-xl border border-white/5">
                <strong className="text-white font-mono block mb-1">Languages:</strong>
                <span className="text-textMuted">C Programming, Java (Core & OOP), Python (Scripting & ML), JavaScript</span>
              </div>
              <div className="bg-surface/50 p-3 rounded-xl border border-white/5">
                <strong className="text-white font-mono block mb-1">AI & Machine Learning:</strong>
                <span className="text-textMuted">Machine Learning, Deep Learning (CNNs), NLP, Data Science, OpenCV</span>
              </div>
              <div className="bg-surface/50 p-3 rounded-xl border border-white/5">
                <strong className="text-white font-mono block mb-1">Web Development:</strong>
                <span className="text-textMuted">HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS</span>
              </div>
              <div className="bg-surface/50 p-3 rounded-xl border border-white/5">
                <strong className="text-white font-mono block mb-1">Databases & Tools:</strong>
                <span className="text-textMuted">SQL, MySQL, DBMS Concepts, Git, GitHub, VS Code, Google Colab, Jupyter</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-accentCyan font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accentCyan" />
              Key Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 3).map((p, idx) => (
                <div key={idx} className="bg-surface/50 p-3.5 rounded-xl border border-white/5 text-xs">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-1">
                    <strong className="text-white text-sm">{p.title}</strong>
                    <span className="font-mono text-[11px] text-accentCyan">{p.category}</span>
                  </div>
                  <p className="text-textMuted mb-2">{p.description}</p>
                  <div className="text-[11px] font-mono text-textLight">
                    <strong>Tech: </strong>{p.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
