import { motion } from "framer-motion";
import type { Language, translations } from "../data/i18n";

type NavigationCopy = (typeof translations)[Language]["nav"];

type NavigationProps = {
  copy: NavigationCopy;
  language: Language;
  theme: "dark" | "light";
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
};

export function Navigation({
  copy,
  language,
  theme,
  onLanguageChange,
  onThemeToggle,
}: NavigationProps) {
  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-50 px-4"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-3 shadow-glass backdrop-blur-2xl"
        aria-label="Primary navigation"
      >
        <a href="#home" className="text-sm font-bold tracking-wide text-white">
          {copy.brand}
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {copy.items.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="icon-button"
            onClick={onThemeToggle}
            aria-label={copy.themeLabel}
            title={copy.themeLabel}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <select
            className="language-select"
            value={language}
            onChange={(event) => onLanguageChange(event.target.value as Language)}
            aria-label={copy.languageLabel}
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <a href="#contact" className="button-mini">
            {copy.cta}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
