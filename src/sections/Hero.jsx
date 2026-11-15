import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail, UserRound } from "lucide-react";
import { Github, Linkedin } from "../components/BrandIcons";
import Button from "../components/Button";
import { portfolioData } from "../data/portfolioData";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const socialLabels = {
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "Email",
};

export default function Hero() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || personal.animatedRoles.length < 2) {
      setRoleIndex(0);
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % personal.animatedRoles.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [personal.animatedRoles, prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute right-[-12rem] top-[8%] h-[36rem] w-[36rem] rounded-full bg-secondary/15 blur-[150px]" />
        <div className="absolute bottom-[-18rem] left-[35%] h-[32rem] w-[32rem] rounded-full bg-accentCyan/5 blur-[140px]" />
        <div className="cyber-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
          }}
          className="relative z-10 order-1 lg:order-1"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-surface/65 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-textLight shadow-[0_8px_32px_rgba(4,8,20,0.35)] backdrop-blur-xl sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentCyan/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accentCyan" />
            </span>
            Final year <span className="text-primary">/</span> Class of{" "}
            {personal.expectedGraduation}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.38em] text-accentCyan sm:text-sm"
          >
            HELLO, I’M
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-[clamp(3.2rem,8vw,6.6rem)] font-bold uppercase leading-[0.93] tracking-[-0.075em] text-white"
          >
            <span className="block">Chaitanya</span>
            <span className="mt-1 block bg-gradient-to-r from-white via-[#9dc1ff] to-[#a88bff] bg-clip-text text-transparent">
              Muthe<span className="text-primary">.</span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex min-h-8 items-center gap-2.5 text-sm font-medium text-textLight sm:mt-8 sm:text-base"
          >
            <span className="h-px w-7 bg-gradient-to-r from-primary to-secondary sm:w-10" />
            <span>{personal.professionalTitle}</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex min-h-8 items-center gap-2 font-mono text-xs text-textMuted sm:text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="text-primary">&gt;_</span>
            <span>Exploring</span>
            <span className="relative inline-flex min-w-[12.5rem] overflow-hidden text-accentCyan sm:min-w-[15rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={personal.animatedRoles[roleIndex]}
                  initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.35,
                    ease: "easeOut",
                  }}
                  className="whitespace-nowrap"
                >
                  {personal.animatedRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-1 inline-block h-4 w-px animate-pulse bg-accentCyan" />
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-sm leading-7 text-textMuted sm:text-base sm:leading-8"
          >
            {personal.heroDescription}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl border-l border-primary/50 pl-4 text-sm font-medium leading-6 text-textLight/85 sm:text-base"
          >
            “{personal.personalBrandTagline}”
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button as="a" href="#projects" className="group">
              Explore My Projects
              <ArrowDownRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Button>
            <Button
              as="a"
              variant="secondary"
              href={`/${personal.resumeFileName}`}
              download
            >
              Download Resume
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-5"
            aria-label="Social profiles"
          >
            {Object.entries(socialIcons).map(([key, Icon]) => {
              const label = socialLabels[key];
              const href = personal.socialLinks[key];
              const sharedClassName =
                "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-textMuted transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-white";

              return href ? (
                <a
                  key={key}
                  href={key === "email" ? `mailto:${href}` : href}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noreferrer"}
                  aria-label={label}
                  title={label}
                  className={sharedClassName}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ) : (
                <span
                  key={key}
                  aria-label={`${label} link not provided`}
                  title={`${label} link not provided`}
                  className={`${sharedClassName} cursor-default opacity-60`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>
              );
            })}
            <span className="ml-1 h-5 w-px bg-white/10" />
            <span className="text-xs text-textMuted">
              B.Tech <span className="text-primary">·</span> AI &amp; ML
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20, scale: 0.97 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.65,
            delay: prefersReducedMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative order-2 mx-auto flex w-full max-w-[390px] items-center justify-center sm:max-w-[440px] lg:order-2 lg:max-w-[510px]"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.12]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-secondary/25 [animation:spin_48s_linear_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[15%] rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent blur-3xl"
          />

          <figure className="relative w-[78%] max-w-[360px]">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/70 via-secondary/40 to-accentCyan/30 opacity-75 blur-[1px]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1020]/90 p-2 shadow-[0_30px_100px_rgba(20,54,130,0.32)] backdrop-blur-xl">
              <div className="absolute inset-2 overflow-hidden rounded-[1.55rem] border border-white/[0.07] bg-[radial-gradient(ellipse_at_50%_25%,rgba(55,125,255,0.22),transparent_58%),linear-gradient(155deg,#111a31_0%,#090d18_65%,#131028_100%)]">
                {personal.profileImage ? (
                  <img
                    src={personal.profileImage}
                    alt={`Portrait of ${personal.fullName}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label="Profile photograph placeholder"
                    className="relative flex h-full flex-col items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-[24%] h-40 w-40 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
                    />
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/[0.08] to-primary/10 text-white/75 shadow-[0_0_55px_rgba(55,125,255,0.16)] sm:h-36 sm:w-36">
                      <div className="absolute inset-2 rounded-full border border-dashed border-accentCyan/25" />
                      <UserRound
                        className="h-[4.5rem] w-[4.5rem] text-accentCyan/85 sm:h-20 sm:w-20"
                        strokeWidth={1}
                      />
                    </div>
                    <p className="relative mt-7 font-mono text-[10px] uppercase tracking-[0.32em] text-accentCyan/90">
                      Your portrait
                    </p>
                    <p className="relative mt-2 text-xs text-textMuted/80">
                      Add a profile photo
                    </p>
                  </div>
                )}
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-6 top-6 h-7 w-7 rounded-tl-lg border-l border-t border-accentCyan/70"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-6 right-6 h-7 w-7 rounded-br-lg border-b border-r border-secondary/70"
              />
            </div>
            <figcaption className="sr-only">
              {personal.profileImage
                ? `Portrait of ${personal.fullName}`
                : "Profile photograph placeholder"}
            </figcaption>
          </figure>

          <motion.div
            animate={prefersReducedMotion ? { y: 0 } : { y: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-3 left-0 rounded-2xl border border-white/10 bg-[#0c1222]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-3"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
              Studying
            </p>
            <p className="mt-1 text-sm font-semibold text-white">AI &amp; ML</p>
          </motion.div>

          <motion.div
            animate={prefersReducedMotion ? { y: 0 } : { y: [0, 5, 0] }}
            transition={{
              duration: 5.5,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-[16%] rounded-2xl border border-primary/20 bg-[#0c1222]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-2"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
              Graduation
            </p>
            <p className="mt-1 text-sm font-semibold text-accentCyan">
              {personal.expectedGraduation}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
