import React from 'react';
import { 
  X, 
  Award, 
  Calendar, 
  Building, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#0d121f] border border-primary/40 shadow-2xl shadow-primary/20 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-white hover:border-primary/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Preview Frame */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-surfaceLight via-[#101522] to-[#080B12] border-2 border-primary/30 mb-6 text-center relative overflow-hidden">
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accentCyan" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accentCyan" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accentCyan" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accentCyan" />

          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-glow-blue">
            <Award className="w-8 h-8" />
          </div>

          <span className="text-[11px] font-mono tracking-widest text-accentCyan uppercase block mb-1">
            Certificate of Achievement
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {certificate.title}
          </h3>

          <p className="text-xs text-textMuted mb-3">
            Awarded to <strong className="text-white">Chaitanya Muthe</strong>
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ID: {certificate.credentialId}</span>
          </div>
        </div>

        {/* Details List */}
        <div className="space-y-3 text-xs sm:text-sm text-textMuted mb-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-textLight font-medium">Issuing Organization:</span>
            <span className="font-semibold text-white">{certificate.organization}</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-textLight font-medium">Issue / Completion Date:</span>
            <span className="font-mono text-accentCyan">{certificate.date}</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-textLight font-medium">Domain Category:</span>
            <span className="font-mono text-textLight">{certificate.category}</span>
          </div>

          <div className="pt-2">
            <span className="text-textLight font-medium block mb-1 font-mono uppercase tracking-wider text-xs">
              Demonstrated Skills & Knowledge:
            </span>
            <p className="text-xs text-textLight leading-relaxed bg-surfaceLight/50 p-3 rounded-xl border border-white/5">
              {certificate.skillsGained}
            </p>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
          <span className="text-[11px] font-mono text-textMuted">
            Verified Academic Credential
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white shadow-glow-blue"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
