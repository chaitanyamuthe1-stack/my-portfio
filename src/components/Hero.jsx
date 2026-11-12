import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Terminal, 
  Brain, 
  Code, 
  ShieldCheck, 
  Camera, 
  RotateCw,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  // Typewriter effect state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Profile image state (supports custom image upload or default futuristic avatar)
  const [customAvatar, setCustomAvatar] = useState(null);

  useEffect(() => {
    const fullText = personal.typewriterTexts[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % personal.typewriterTexts.length);
        }
      }
    }, isDeleting ? 40 : 90);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, personal.typewriterTexts]);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCustomAvatar(imageUrl);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/80 border border-primary/30 backdrop-blur-md w-fit shadow-glow-blue/20">
              <span className="w-2 h-2 rounded-full bg-accentCyan animate-ping" />
              <span className="w-2 h-2 rounded-full bg-accentCyan -ml-3" />
              <span className="text-xs font-mono font-medium tracking-wider text-accentCyan uppercase">
                {personal.heroGreeting}
              </span>
              <span className="text-textMuted text-xs">•</span>
              <span className="text-xs font-mono text-textMuted uppercase">Available for Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                CHAITANYA <br />
                <span className="bg-gradient-to-r from-primary via-[#6f8eff] to-secondary bg-clip-text text-transparent">
                  MUTHE
                </span>
              </h1>
              
              <div className="flex items-center gap-2 pt-2">
                <span className="text-primary font-mono text-sm sm:text-base font-semibold">&gt;</span>
                <span className="text-lg sm:text-2xl font-bold text-textLight">
                  {personal.professionalTitle}
                </span>
              </div>
            </div>

            {/* Animated Typing Role */}
            <div className="flex items-center gap-3 py-1 font-mono text-base sm:text-xl">
              <span className="text-textMuted text-sm sm:text-base">Focus:</span>
              <div className="px-3 py-1 rounded-md bg-surface border border-white/10 text-accentCyan font-semibold flex items-center min-h-[36px]">
                <span>{displayedText}</span>
                <span className="inline-block w-2 h-5 bg-accentCyan ml-1 animate-pulse" />
              </div>
            </div>

            {/* Tagline */}
            <blockquote className="border-l-2 border-primary/60 pl-4 py-1 text-base sm:text-lg font-medium text-textLight/90 italic">
              "{personal.personalBrandTagline}"
            </blockquote>

            {/* Bio Description */}
            <p className="text-textMuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {personal.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-white shadow-glow-blue transition-all duration-300 hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface border border-primary/30 hover:border-primary/60 hover:bg-surfaceLight text-sm font-semibold text-white transition-all duration-300 hover:shadow-glow-blue/50"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Verified Indicator */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-white/10 text-textMuted hover:text-white hover:border-primary/50 hover:bg-surfaceLight transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-white/10 text-textMuted hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-surfaceLight transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg bg-surface border border-white/10 text-textMuted hover:text-accentCyan hover:border-accentCyan/50 hover:bg-surfaceLight transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="Send Email"
                  title="Email Chaitanya Muthe"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />

              <div className="text-xs font-mono text-textMuted flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Deogiri Institute of Engg. & Management Studies (DBATU)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Avatar & Holographic Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
              
              {/* Rotating outer cyber ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-secondary/25 animate-pulse-slow pointer-events-none" />
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-tr from-primary/10 via-secondary/15 to-transparent blur-xl pointer-events-none" />

              {/* Central Frame */}
              <div className="relative w-64 sm:w-80 h-72 sm:h-92 rounded-3xl bg-surfaceCard border-2 border-primary/40 p-2 shadow-2xl shadow-primary/20 backdrop-blur-xl overflow-hidden group">
                
                {/* Tech corner markers */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accentCyan" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accentCyan" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accentCyan" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accentCyan" />

                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-surfaceLight to-[#080B12] overflow-hidden flex flex-col items-center justify-center">
                  
                  {customAvatar ? (
                    <img
                      src={customAvatar}
                      alt={personal.fullName}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    /* Stylized futuristic AI engineer silhouette avatar */
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
                      <div className="relative w-32 h-32 mb-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accentCyan p-[2px] shadow-glow-blue">
                          <div className="w-full h-full rounded-full bg-[#080B12] flex items-center justify-center overflow-hidden">
                            {/* Stylized Avatar Silhouette SVG */}
                            <svg viewBox="0 0 100 100" className="w-24 h-24 text-textMuted group-hover:text-white transition-colors duration-300">
                              <circle cx="50" cy="38" r="20" fill="url(#avatar-grad)" />
                              <path d="M18 90 C18 68 32 60 50 60 C68 60 82 68 82 90 Z" fill="url(#avatar-grad)" />
                              <defs>
                                <linearGradient id="avatar-grad" x1="0" y1="0" x2="1" y2="1">
                                  <stop offset="0%" stopColor="#377DFF" />
                                  <stop offset="50%" stopColor="#8957FF" />
                                  <stop offset="100%" stopColor="#00F0FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>

                        {/* Floating neural node indicator */}
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-surface border border-primary flex items-center justify-center shadow-glow-blue">
                          <Brain className="w-4 h-4 text-accentCyan animate-pulse" />
                        </div>
                      </div>

                      <h3 className="text-white font-bold text-lg tracking-tight">
                        Chaitanya Muthe
                      </h3>
                      <p className="text-xs font-mono text-accentCyan uppercase tracking-wider mt-0.5">
                        AI & ML Specialist
                      </p>
                      <p className="text-[11px] text-textMuted mt-2 max-w-[200px]">
                        Engineering Intelligence • Building Scalable Solutions
                      </p>
                    </div>
                  )}

                  {/* Photo Customizer Overlay (Hover) */}
                  <label className="absolute inset-x-0 bottom-0 py-2.5 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-2 text-xs font-medium text-white/90 cursor-pointer hover:bg-black/90 transition-all opacity-90 group-hover:opacity-100">
                    <Camera className="w-3.5 h-3.5 text-accentCyan" />
                    <span>Upload Photo (Optional)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Floating Badge: FINAL YEAR ENGINEERING STUDENT */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-4 px-4 py-2 rounded-xl bg-surface/95 border border-primary/40 backdrop-blur-xl shadow-glow-blue/30 flex items-center gap-2.5 z-20 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono tracking-widest text-textMuted uppercase font-bold">
                    ACADEMIC STATUS
                  </span>
                  <span className="text-xs font-bold text-white tracking-wide">
                    {personal.statusBadge}
                  </span>
                </div>
              </div>

              {/* Floating Top Badge: C & Java Foundations */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/90 border border-secondary/40 backdrop-blur-md shadow-glow-purple/20 z-20">
                <Code className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-mono text-white font-medium">
                  C • Java • Python
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
