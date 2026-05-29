import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { Navigation } from "./components/Navigation";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { Section } from "./components/Section";
import { translations, type Language } from "./data/i18n";

type Theme = "dark" | "light";

const skillLogoSlugs: Record<string, string> = {
  Angular: "angular",
  React: "react",
  "Spring Boot": "springboot",
  "Node.js": "nodedotjs",
  Express: "express/white",
  Django: "django",
  ".NET": "dotnet",
  JavaScript: "javascript",
  TypeScript: "typescript",
  HTML: "html5",
  CSS: "css",
  PHP: "php",
  MySQL: "mysql",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  Docker: "docker",
  Jenkins: "jenkins",
  "AWS S3":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Microservices: "kubernetes",
  WordPress: "wordpress",
};

function getSkillLogoSrc(skill: string) {
  const logo = skillLogoSlugs[skill];

  return logo.startsWith("https://")
    ? logo
    : `https://cdn.simpleicons.org/${logo}`;
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    return savedLanguage === "fr" ? "fr" : "en";
  });

  const copy = useMemo(() => translations[language], [language]);
  const profile = copy.profile;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
    document.title = copy.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.meta.description);
  }, [copy.meta.description, copy.meta.title, language]);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <Navigation
        copy={copy.nav}
        language={language}
        theme={theme}
        onLanguageChange={setLanguage}
        onThemeToggle={() =>
          setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
        }
      />

      <main>
        <section
          id="home"
          className="section-shell flex min-h-screen items-center pb-20 pt-32"
        >
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="eyebrow">{profile.location}</p>
            <h1 className="hero-title">
              <span className="hero-name-line">
                <span className="hero-photo-wrap" aria-hidden="true">
                  <img
                    className="hero-photo"
                    src={`${import.meta.env.BASE_URL}profile-cutout.png`}
                    alt=""
                  />
                </span>
                {profile.name}
              </span>
              <span className="hero-role-line">{profile.title}</span>
            </h1>
            <p className="mt-6 max-w-none text-lg leading-8 text-white/[0.68]">
              {profile.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#projects"
                className="button-primary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {copy.hero.viewProjects}
              </motion.a>
              <motion.a
                href="#contact"
                className="button-secondary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {copy.hero.contactMe}
              </motion.a>
              <motion.a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                className="button-secondary"
                aria-label={copy.hero.downloadCvLabel}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {copy.hero.downloadCv}
              </motion.a>
            </div>
          </motion.div>
        </section>

        <Section id="about" eyebrow={copy.about.eyebrow} title={copy.about.title}>
          <div className="glass-panel grid gap-8 p-6 md:grid-cols-[1fr_0.75fr] md:p-8">
            <p className="text-lg leading-8 text-white/70">{copy.about.body}</p>
            <div className="grid gap-3">
              {copy.about.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow={copy.skills.eyebrow} title={copy.skills.title}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {copy.skills.items.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-chip"
                title={skill}
                aria-label={skill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                whileHover={{ y: -5, borderColor: "rgba(69,223,203,0.55)" }}
              >
                <img
                  className="skill-logo"
                  src={getSkillLogoSrc(skill)}
                  alt=""
                  loading="lazy"
                />
                <span className="sr-only">{skill}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow={copy.projects.eyebrow}
          title={copy.projects.title}
        >
          <ProjectsGrid copy={copy.projects} />
        </Section>

        <Section
          id="experience"
          eyebrow={copy.experience.eyebrow}
          title={copy.experience.title}
        >
          <div className="grid gap-4">
            {copy.experience.items.map((item) => (
              <article key={item.role} className="glass-panel p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-white/[0.58]">
                      {item.organization}
                    </p>
                  </div>
                  <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/[0.65]">
                    {item.period}
                  </p>
                </div>
                <p className="mt-5 leading-7 text-white/[0.65]">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={copy.contact.eyebrow} title={copy.contact.title}>
          <div className="glass-panel p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-lg leading-8 text-white/[0.68]">
                  {copy.contact.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {profile.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="social-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${social.label} profile`}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
                <motion.a
                  href={`mailto:${profile.email}`}
                  className="button-primary mt-8 justify-center"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {profile.email}
                </motion.a>
              </div>
              <ContactForm copy={copy.contact} />
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-sm text-white/[0.45]">
        <p>
          Copyright {new Date().getFullYear()} {profile.name}. {copy.footer}
        </p>
      </footer>
    </div>
  );
}

export default App;
