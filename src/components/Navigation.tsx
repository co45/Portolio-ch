import { motion } from "framer-motion";
import { navItems } from "../data/portfolio";

export function Navigation() {
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
          Portfolio
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="button-mini">
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
