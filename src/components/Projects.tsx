import { motion } from "motion/react";

const projects = [
  {
    title: "ShopWave Commerce",
    description:
      "A full-stack e-commerce dashboard with real-time inventory tracking, stripe integration for payments, and an admin panel for product management.",
    icon: "shopping_cart",
    tags: ["React", "Node.js"],
    colorClass: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "AtmoCast",
    description:
      "Minimalist weather forecasting application. Features geolocation support, 5-day forecasts, and dynamic themes based on current weather conditions.",
    icon: "cloud_queue",
    tags: ["Vue.js", "OpenWeather API"],
    colorClass: "bg-sky-50 text-sky-600",
  },
  {
    title: "TaskFlow Pro",
    description:
      "Productivity tool for remote teams. Implemented drag-and-drop kanban boards, user authentication, and real-time socket updates for collaborative editing.",
    icon: "check_circle",
    tags: ["Next.js", "Prisma"],
    colorClass: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "CoinSight",
    description:
      "Real-time cryptocurrency tracking dashboard. Visualizes historical price data with interactive charts and provides portfolio valuation tools.",
    icon: "currency_bitcoin",
    tags: ["React", "Chart.js"],
    colorClass: "bg-purple-50 text-purple-600",
  },
  {
    title: "PixelDreamer",
    description:
      "An experimental interface for generating images from text prompts using stable diffusion models. Includes gallery and prompt history.",
    icon: "auto_awesome",
    tags: ["Python", "Flask"],
    colorClass: "bg-rose-50 text-rose-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex justify-center py-20 px-4 md:px-8">
      <div className="w-full max-w-250 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-base">
              rocket_launch
            </span>
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            My Work
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
            A collection of projects showcasing my technical skills,
            problem-solving abilities, and passion for building helpful
            software.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 h-full hidden md:block blur-[2px]"></div>
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 group relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${project.colorClass}`}>
                      <span className="material-symbols-outlined text-2xl">
                        {project.icon}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                    >
                      View Project{" "}
                      <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                    <a
                      href="#"
                      aria-label="View on GitHub"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <span className="material-symbols-outlined">code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
