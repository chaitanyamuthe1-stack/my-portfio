import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ExternalLink,
  FileText,
  Maximize2,
} from "lucide-react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import { portfolioData } from "../data/portfolioData";

export default function Resume() {
  const { personal } = portfolioData;
  const resumeUrl = `/${personal.resumeFileName}`;
  const [resumeStatus, setResumeStatus] = useState("checking");

  useEffect(() => {
    const controller = new AbortController();

    async function checkResume() {
      try {
        const response = await fetch(resumeUrl, {
          method: "HEAD",
          signal: controller.signal,
        });
        const contentType = response.headers.get("content-type") || "";

        setResumeStatus(
          response.ok && contentType.toLowerCase().includes("application/pdf")
            ? "available"
            : "unavailable",
        );
      } catch (error) {
        if (error.name !== "AbortError") setResumeStatus("unavailable");
      }
    }

    checkResume();
    return () => controller.abort();
  }, [resumeUrl]);

  const isResumeAvailable = resumeStatus === "available";

  return (
    <section
      id="resume"
      className="bg-surface/30 px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Résumé"
          title="A closer look"
          description="Preview or download my résumé."
          icon={<FileText size={16} />}
        />

        <div className="glass-panel grid overflow-hidden rounded-3xl lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-accentCyan">
              <FileText size={22} />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-white">
              {personal.fullName}
            </h3>
            <p className="mt-2 text-sm leading-6 text-textMuted">
              {personal.professionalTitle}
            </p>
            <p className="mt-4 text-sm leading-6 text-textMuted">
              {isResumeAvailable
                ? "The current PDF résumé is ready to preview or download."
                : resumeStatus === "checking"
                  ? "Checking for the résumé PDF…"
                  : "The résumé PDF is not available yet. Add the file to the public folder to enable preview and download."}
            </p>

            {isResumeAvailable && (
              <div className="mt-7 flex flex-wrap gap-3">
                <Button as="a" href={resumeUrl} download>
                  Download Resume <ArrowDownToLine size={16} />
                </Button>
                <Button
                  as="a"
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  View Resume <ExternalLink size={15} />
                </Button>
              </div>
            )}
          </div>

          <div className="min-h-[360px] border-t border-white/[0.08] bg-[#080b12]/55 lg:min-h-[520px] lg:border-l lg:border-t-0">
            {isResumeAvailable ? (
              <div className="h-full min-h-[360px] p-3 sm:p-5 lg:min-h-[520px]">
                <div className="mb-3 flex items-center justify-between px-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-textMuted">
                    PDF preview
                  </span>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open résumé PDF in a new tab"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-textMuted transition hover:border-primary/40 hover:text-white"
                  >
                    <Maximize2 size={15} />
                  </a>
                </div>
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0`}
                  title={`${personal.fullName} résumé PDF preview`}
                  className="h-[380px] w-full rounded-xl border border-white/10 bg-white sm:h-[440px] lg:h-[470px]"
                />
              </div>
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center lg:min-h-[520px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-textMuted">
                  <FileText size={28} strokeWidth={1.4} />
                </div>
                <p className="mt-5 font-medium text-textLight">
                  {resumeStatus === "checking"
                    ? "Preparing résumé preview"
                    : "Résumé preview unavailable"}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-textMuted">
                  {resumeStatus === "checking"
                    ? "The PDF file is being checked."
                    : `Place ${personal.resumeFileName} in the public folder to show a preview here.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
