import {
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";
import {
  Github as GithubBrand,
  Linkedin as LinkedinBrand,
  LeetCode,
  HackerRank,
} from "../components/BrandIcons";
import SectionTitle from "../components/SectionTitle";
import { developerProfiles } from "../data/developerProfiles";

const profileIcons = {
  Github: GithubBrand,
  Linkedin: LinkedinBrand,
  LeetCode,
  HackerRank,
};

const profileAccents = {
  github: "group-hover:border-white/30 group-hover:text-white",
  linkedin: "group-hover:border-[#0a66c2]/45 group-hover:text-[#6da9ff]",
  leetcode: "group-hover:border-amber-400/40 group-hover:text-amber-300",
  hackerrank: "group-hover:border-emerald-400/40 group-hover:text-emerald-300",
};

export default function DeveloperProfiles() {
  return (
    <section
      id="profiles"
      className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Around the web"
          title="Developer Profiles"
          description="Coding and professional profiles. Links are only enabled when added to the profile data."
          icon={<ExternalLink size={15} />}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {developerProfiles.map((profile) => {
            const Icon = profileIcons[profile.icon] || Github;
            const accent = profileAccents[profile.id] || "";
            const cardContent = (
              <>
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-textLight transition ${accent}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  {profile.url ? (
                    <ArrowUpRight
                      size={17}
                      className="text-textMuted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  ) : (
                    <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-textMuted">
                      Not linked
                    </span>
                  )}
                </div>
                <div className="mt-7">
                  <h3 className="text-lg font-semibold text-white">
                    {profile.platform}
                  </h3>
                  <p className="mt-1 text-xs text-textMuted">
                    {profile.url
                      ? "Open profile"
                      : "Add your profile URL in src/data/developerProfiles.js"}
                  </p>
                </div>
              </>
            );
            const className =
              "glass-panel glass-panel-hover group flex min-h-40 flex-col justify-between rounded-2xl p-5 transition-colors";

            return profile.url ? (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${profile.platform} profile in a new tab`}
                className={`${className} ${accent}`}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={profile.id}
                className={`${className} cursor-default opacity-90`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
