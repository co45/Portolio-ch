import { motion } from "framer-motion";
import type { Language, translations } from "../data/i18n";

type HeroVisualCopy = (typeof translations)[Language]["heroVisual"];

export function HeroVisual({ copy }: { copy: HeroVisualCopy }) {
  return (
    <motion.div
      className="relative min-h-[430px] rounded-[2rem] border border-white/[0.14] bg-white/[0.08] p-5 shadow-glass backdrop-blur-2xl"
      initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      aria-label="Stylized developer dashboard preview"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(93,246,214,0.28),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(255,121,198,0.22),transparent_30%)]" />
      <div className="relative flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="h-3 w-3 rounded-full bg-[#ff6b7a]" />
        <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
        <span className="h-3 w-3 rounded-full bg-[#45dfcb]" />
        <span className="ml-auto text-xs text-white/50">{copy.file}</span>
      </div>

      <div className="relative mt-6 grid gap-4">
        <div className="rounded-2xl border border-white/10 bg-black/[0.28] p-5">
          <p className="text-xs uppercase text-[#45dfcb]">{copy.label}</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {copy.title}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {copy.stats.map(([value, label]) => (
            <motion.div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.08] p-4"
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="mt-1 text-[0.68rem] text-white/[0.55]">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0b1020]/80 p-4 font-mono text-xs leading-6 text-white/70">
          <p><span className="text-[#ff79c6]">const</span> craft = &#123;</p>
          <p className="pl-4">design: <span className="text-[#45dfcb]">"{copy.design}"</span>,</p>
          <p className="pl-4">code: <span className="text-[#ffd166]">"{copy.code}"</span>,</p>
          <p className="pl-4">users: <span className="text-[#9b8cff]">"{copy.users}"</span></p>
          <p>&#125;;</p>
        </div>
      </div>
    </motion.div>
  );
}
