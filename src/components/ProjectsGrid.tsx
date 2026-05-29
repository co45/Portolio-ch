import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  projectCategories,
  type Language,
  type ProjectCategory,
} from "../data/i18n";
import type { translations } from "../data/i18n";

type ProjectsCopy = (typeof translations)[Language]["projects"];
type Filter = "All" | ProjectCategory;

type ProjectsGridProps = {
  copy: ProjectsCopy;
};

export function ProjectsGrid({ copy }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? copy.items
        : copy.items.filter((project) => project.category === activeFilter),
    [activeFilter, copy.items],
  );

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-3" aria-label="Project filters">
        {projectCategories.map((category) => {
          const isActive = activeFilter === category;

          return (
            <button
              key={category}
              type="button"
              className={`filter-button ${isActive ? "filter-button-active" : ""}`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={isActive}
            >
              {copy.filters[category]}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            >
              <p className="text-sm font-medium text-[#45dfcb]">{project.type}</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-white/[0.62]">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/[0.68]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {(project.demoUrl || project.githubUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${copy.liveDemo}: ${project.title}`}
                    >
                      {copy.liveDemo}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${copy.github}: ${project.title}`}
                    >
                      {copy.github}
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
