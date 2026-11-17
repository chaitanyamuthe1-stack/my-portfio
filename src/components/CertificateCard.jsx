import { Award, CalendarDays, ExternalLink } from "lucide-react";

export default function CertificateCard({ certificate }) {
  const certificateUrl =
    certificate.certificateUrl || certificate.verificationUrl;

  return (
    <article className="glass-panel glass-panel-hover flex h-full flex-col rounded-3xl p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 to-secondary/10 text-accentCyan">
          <Award size={22} strokeWidth={1.6} />
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-200">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-emerald-300"
          />
          {certificate.status}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold leading-7 text-white">
          {certificate.title}
        </h3>
        {certificate.organization && (
          <p className="mt-2 text-sm text-textMuted">
            {certificate.organization}
          </p>
        )}

        <div className="mt-5 flex flex-1 flex-col justify-end gap-4">
          {certificate.category && (
            <p className="w-fit max-w-full rounded-xl border border-primary/20 bg-primary/[0.07] px-3 py-2 text-xs leading-5 text-accentCyan">
              {certificate.category}
            </p>
          )}
          {certificate.date && (
            <div className="border-t border-white/[0.08] pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-textMuted">
                Date earned
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium text-textLight">
                <CalendarDays
                  aria-hidden="true"
                  size={14}
                  className="shrink-0 text-accentCyan"
                />
                {certificate.date}
              </p>
            </div>
          )}
        </div>

        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 border-t border-white/[0.08] pt-4 text-sm font-medium text-accentCyan transition-colors hover:text-white"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
