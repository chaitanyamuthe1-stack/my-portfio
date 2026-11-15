import { Award, ExternalLink } from "lucide-react";

export default function CertificateCard({ certificate }) {
  return (
    <article className="glass-panel glass-panel-hover overflow-hidden rounded-3xl">
      {certificate.image ? (
        <a
          href={certificate.image}
          target="_blank"
          rel="noreferrer"
          aria-label={`View certificate image for ${certificate.title}`}
          className="block aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-surface"
        >
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        </a>
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-[16/9] items-center justify-center border-b border-white/[0.08] bg-[radial-gradient(ellipse_at_70%_15%,rgba(55,125,255,0.18),transparent_55%),linear-gradient(145deg,#141c30,#090d18_70%,#17102b)]"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-accentCyan">
            <Award size={25} strokeWidth={1.5} />
          </span>
        </div>
      )}

      <div className="p-6">
        <h3 className="font-semibold text-white">{certificate.title}</h3>
        {certificate.organization && (
          <p className="mt-2 text-sm text-textMuted">
            {certificate.organization}
          </p>
        )}
        {certificate.date && (
          <p className="mt-2 font-mono text-xs text-accentCyan">
            Completed {certificate.date}
          </p>
        )}
        {certificate.verificationUrl && (
          <a
            href={certificate.verificationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 py-2 text-sm text-accentCyan transition hover:text-white"
          >
            Verify credential <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
