import { motion } from "framer-motion";
import { HeroVisual } from "./components/HeroVisual";
import { Navigation } from "./components/Navigation";
import { Section } from "./components/Section";
import { experience, profile, projects, skills } from "./data/portfolio";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <Navigation />

      <main>
        <section id="home" className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="eyebrow">{profile.location}</p>
            <h1 className="hero-title">
              {profile.name}
              <span>{profile.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68]">
              {profile.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.a href="#projects" className="button-primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                View Projects
              </motion.a>
              <motion.a href="#contact" className="button-secondary" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <HeroVisual />
        </section>

        <Section id="about" eyebrow="About" title="Computer engineering mindset, frontend product craft.">
          <div className="glass-panel grid gap-8 p-6 md:grid-cols-[1fr_0.75fr] md:p-8">
            <p className="text-lg leading-8 text-white/70">
              I am a computer engineer focused on building modern web products that are useful, elegant, and reliable.
              My work blends software fundamentals with frontend engineering, responsive design, accessibility, and
              thoughtful UI/UX decisions. I enjoy turning complex requirements into interfaces that people can understand
              quickly and use confidently.
            </p>
            <div className="grid gap-3">
              {["Clean architecture", "Accessible interfaces", "Fast loading experiences"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Tools and practices I use to ship polished web experiences.">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-chip"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                whileHover={{ y: -5, borderColor: "rgba(69,223,203,0.55)" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected work shaped for clarity, speed, and polish.">
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.title} className="project-card" whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}>
                <p className="text-sm font-medium text-[#45dfcb]">{project.type}</p>
                <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-white/[0.62]">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/[0.68]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Education and practical frontend development experience.">
          <div className="grid gap-4">
            {experience.map((item) => (
              <article key={item.role} className="glass-panel p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-white/[0.58]">{item.organization}</p>
                  </div>
                  <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/[0.65]">{item.period}</p>
                </div>
                <p className="mt-5 leading-7 text-white/[0.65]">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build a clean, fast, and memorable web experience.">
          <div className="glass-panel p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-lg leading-8 text-white/[0.68]">
                  Have a project, role, or collaboration in mind? Reach out and I’ll respond with next steps.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {profile.socials.map((social) => (
                    <a key={social.label} href={social.href} className="social-link" target="_blank" rel="noreferrer">
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
              <motion.a href={`mailto:${profile.email}`} className="button-primary justify-center" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                {profile.email}
              </motion.a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-sm text-white/[0.45]">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
