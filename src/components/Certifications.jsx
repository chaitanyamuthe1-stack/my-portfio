import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  Building, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Courses</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Certifications & Learning
          </h2>
          <p className="text-base sm:text-lg font-medium text-textLight/80">
            Professional certifications, coursework, and technical training validation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header with icon & badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-accentCyan transition-all shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-surfaceLight border border-white/10 text-[11px] font-mono text-accentCyan">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight mb-2">
                  {cert.title}
                </h3>

                {/* Organization & Date */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-textMuted mb-4">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-textLight" />
                    <span className="text-textLight font-medium">{cert.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-accentCyan">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Skills Gained */}
                <div className="p-3 rounded-xl bg-surfaceLight/60 border border-white/5 text-xs text-textMuted mb-6">
                  <strong className="text-textLight font-mono block mb-1">Skills Gained:</strong>
                  <p>{cert.skillsGained}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-textMuted flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Credential ID Included</span>
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-xs font-semibold text-white transition-all hover:shadow-glow-blue/40"
                >
                  <Eye className="w-3.5 h-3.5 text-primary" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

      </div>
    </section>
  );
}
