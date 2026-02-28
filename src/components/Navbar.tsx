import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Section = "home" | "projects" | "journey" | "contact";

const sections: Section[] = ["home", "projects", "journey", "contact"];

export default function Navbar() {
  const [active, setActive] = useState<Section>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section);
          }
        },
        {
          // Fires when the section crosses the middle 20% band of the viewport
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass-nav border-b-0 px-6 py-4 mx-4 mt-4 rounded-xl shadow-lg shadow-black/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-900 group cursor-pointer">
          <div className="size-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Lalit_Dev</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-1 bg-white/40 p-1 rounded-full border border-white/20 backdrop-blur-sm">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActive(section)}
                className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              >
                <AnimatePresence>
                  {active === section && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      initial={false}
                    />
                  )}
                </AnimatePresence>
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active === section
                      ? "text-primary font-bold"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </a>
            ))}
          </nav>
        </div>
        <button className="hidden md:flex bg-slate-900 hover:bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg items-center gap-2 group">
          <span>Let's Talk</span>
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </motion.header>
  );
}
