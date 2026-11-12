import React from 'react';
import { 
  Mail, 
  ArrowUp, 
  Code2, 
  Heart, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#05070d] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Top subtle light line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Designation */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-[#566bff] to-secondary p-[1.5px] shadow-glow-blue">
                <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    CM
                  </span>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  CHAITANYA MUTHE
                </span>
                <span className="text-xs font-mono text-accentCyan">
                  {personal.professionalTitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-textMuted leading-relaxed max-w-sm">
              "{personal.personalBrandTagline}"
            </p>

            <div className="text-xs text-textMuted font-mono">
              <span>{personal.college}</span> • <span>{personal.university}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-textMuted hover:text-primary transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-primary/60 text-[10px]">›</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block mb-3">
                Connect With Me
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-white hover:border-primary/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-accentCyan hover:border-accentCyan/50 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personal.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                  aria-label="LeetCode"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surfaceLight border border-white/10 hover:border-primary/50 text-xs font-semibold text-white transition-all shadow-sm group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-primary group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-textMuted">
          <div>
            <span>Designed & Developed by </span>
            <strong className="text-white">Chaitanya Muthe</strong>
          </div>

          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>© 2026 Chaitanya Muthe. All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
