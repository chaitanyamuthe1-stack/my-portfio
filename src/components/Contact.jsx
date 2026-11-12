import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  MapPin, 
  MessageSquare,
  Sparkles,
  Phone
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message with mailto fallback and confetti celebration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#377DFF', '#8957FF', '#00F0FF']
        });
      } catch (err) {
        // Confetti fallback
      }

      // Generate mailto link for direct sending
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Automatically offer direct mail client draft
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1000);
    }, 900);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Futuristic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Connect & Create Something Amazing
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            I'm always interested in learning, collaborating and exploring exciting opportunities in technology.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-primary/30 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                  Whether you are an engineering recruiter, tech lead, or fellow student looking to collaborate on AI/ML projects, feel free to reach out.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-surfaceLight/80 border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-textMuted uppercase block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-accentCyan transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-surface border border-white/10 text-textMuted hover:text-white hover:border-primary/50 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-surfaceLight/80 border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-textMuted uppercase block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {personal.location}
                  </span>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-textMuted block font-semibold">
                  Professional Channels:
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-surfaceLight border border-white/10 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-colors flex items-center justify-center gap-2 text-xs font-medium text-white"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-surfaceLight border border-white/10 hover:border-primary/60 hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 text-xs font-medium text-white"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Availability Badge Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 flex items-center gap-3 text-xs text-textLight">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>
                <strong>Response Window:</strong> Typically replies within 24 hours. Open to full-time roles, graduate trainee positions, and internships.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border-white/10 relative">
            
            <h3 className="text-2xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-textMuted mb-8">
              Fill out the form below. Your message will be formatted and addressed directly to Chaitanya Muthe.
            </p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs sm:text-sm text-emerald-400 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Message Prepared Successfully!</strong>
                  <span>Your email client is opening to deliver this message directly to Chaitanya Muthe. Thank you for connecting!</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-textLight uppercase tracking-wider mb-2 font-medium">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full bg-surface border rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-textMuted/60 focus:outline-none transition-all ${
                      errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-primary/60 focus:shadow-glow-blue/20'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-textLight uppercase tracking-wider mb-2 font-medium">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className={`w-full bg-surface border rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-textMuted/60 focus:outline-none transition-all ${
                      errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-primary/60 focus:shadow-glow-blue/20'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-textLight uppercase tracking-wider mb-2 font-medium">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Opportunity Discussion / AI Project Collaboration"
                  className={`w-full bg-surface border rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-textMuted/60 focus:outline-none transition-all ${
                    errors.subject ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-primary/60 focus:shadow-glow-blue/20'
                  }`}
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.subject}</span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-textLight uppercase tracking-wider mb-2 font-medium">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here... Let me know how we can collaborate."
                  className={`w-full bg-surface border rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-textMuted/60 focus:outline-none transition-all resize-y ${
                    errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-primary/60 focus:shadow-glow-blue/20'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-white shadow-glow-blue hover:shadow-glow-purple hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
