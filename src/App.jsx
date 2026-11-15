import { useEffect, useMemo, useState } from "react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import DeveloperProfiles from "./sections/DeveloperProfiles";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Interests from "./sections/Interests";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();
  const { personal } = portfolioData;

  const sections = useMemo(
    () =>
      [
        { id: "home", label: "Home", content: <Hero /> },
        { id: "about", label: "About", content: <About /> },
        { id: "education", label: "Education", content: <Education /> },
        { id: "skills", label: "Skills", content: <Skills /> },
        {
          id: "projects",
          label: "Projects",
          content: <Projects />,
        },
        {
          id: "experience",
          label: "Experience",
          content: <Experience />,
        },
        {
          id: "certificates",
          label: "Certificates",
          content: <Certifications />,
        },
        {
          id: "achievements",
          label: "Achievements",
          content: <Achievements />,
        },
        {
          id: "resume",
          label: "Resume",
          content: <Resume />,
          visible: Boolean(personal.resumeFileName),
        },
        {
          id: "profiles",
          label: "Profiles",
          content: <DeveloperProfiles />,
        },
        {
          id: "interests",
          label: "Interests",
          content: <Interests />,
          visible: portfolioData.interests.length > 0,
        },
        {
          id: "contact",
          label: "Contact",
          content: <Contact />,
        },
      ]
        .filter((section) => section.visible !== false)
        .map(({ id, label, content }) => ({ id, label, content })),
    [personal],
  );

  useEffect(() => {
    let frameId = 0;
    const updateActiveSection = () => {
      frameId = 0;
      const currentSection = [...sections]
        .reverse()
        .find(({ id }) => {
          const element = document.getElementById(id);
          return element && element.getBoundingClientRect().top <= 180;
        });

      if (currentSection) setActiveSection(currentSection.id);
    };
    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, [sections]);

  const navItems = sections.map(({ id, label }) => ({
    label,
    href: `#${id}`,
  }));

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-white selection:bg-primary/30 selection:text-white">
        <ParticleBackground />
        <ScrollProgress />
        <Navbar activeSection={activeSection} navItems={navItems} />
        <motion.main
          className="relative z-10"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
        >
          {sections.map(({ id, content }) => (
            <motion.div
              key={id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.03 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {content}
            </motion.div>
          ))}
        </motion.main>
        <Footer navItems={navItems} />
      </div>
    </MotionConfig>
  );
}
