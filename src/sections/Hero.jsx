import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
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
  const prefersReducedMotion = useReducedMotion();

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

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
          }}
          className="relative z-10 order-1 lg:order-1"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.32em] text-accentCyan sm:text-sm"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-[clamp(3rem,8vw,6.6rem)] font-bold leading-[0.91] tracking-[-0.045em] text-white"
          >
            <span className="block">Chaitanya</span>
            <span className="mt-1 block bg-gradient-to-r from-[#f1f7ff] via-[#b9d8ff] to-[#7eb5ff] bg-clip-text text-transparent">
              Muthe{" "}.
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-3 text-base font-semibold leading-7 text-white sm:mt-8 sm:text-lg"
          >
            <span aria-hidden="true" className="h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-accentCyan to-primary" />
            <span>Aspiring AI/ML Engineer &amp; Software Developer</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-3 max-w-xl text-sm leading-6 text-textMuted sm:text-base"
          >
            Final-Year Engineering Student | Artificial Intelligence &amp;
            Machine Learning
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-sm leading-7 text-textMuted sm:text-base sm:leading-8"
          >
            I build intelligent applications, explore emerging technologies, and
            transform innovative ideas into practical real-world solutions
            through code, creativity, and problem-solving.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-sm font-medium leading-6 text-textLight sm:text-base"
          >
            Python Developer | AI &amp; Machine Learning | Software
            Development
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
              href="#contact"
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-white/[0.08] pt-5"
            aria-label="Social profiles"
          >
            <a
              href={`/${personal.resumeFileName}`}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-textLight transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Download Resume
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <span aria-hidden="true" className="h-5 w-px bg-white/10" />
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
            className="absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
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
                    aria-label={`${personal.fullName} monogram`}
                    className="relative flex h-full flex-col items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-[24%] h-40 w-40 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
                    />
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/[0.08] to-primary/10 text-white/75 shadow-[0_0_55px_rgba(55,125,255,0.16)] sm:h-40 sm:w-40">
                      <div className="absolute inset-2 rounded-full border border-dashed border-accentCyan/25" />
                      <span className="bg-gradient-to-br from-white via-[#b9d8ff] to-[#7eb5ff] bg-clip-text text-6xl font-bold tracking-[-0.08em] text-transparent sm:text-7xl">
                        CM
                      </span>
                    </div>
                    <p className="relative mt-7 font-mono text-[10px] uppercase tracking-[0.24em] text-accentCyan/90">
                      Artificial Intelligence
                    </p>
                    <p className="relative mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-textMuted/80">
                      Machine Learning
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
                : `${personal.fullName} monogram`}
            </figcaption>
          </figure>

          <div
            className="absolute -bottom-3 left-0 rounded-2xl border border-white/10 bg-[#0c1222]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-3"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
              Studying
            </p>
            <p className="mt-1 text-sm font-semibold text-white">AI &amp; ML</p>
          </div>

          <div
            className="absolute right-0 top-[16%] rounded-2xl border border-primary/20 bg-[#0c1222]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-2"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
              Graduation
            </p>
            <p className="mt-1 text-sm font-semibold text-accentCyan">
              {personal.expectedGraduation}
            </p>
          </div>
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
