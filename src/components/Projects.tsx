import { motion } from "motion/react";

const projects = [
  {
    title: "CloudShare",
    description:
      "Credit-based file sharing platform that prevents unauthorized downloads and enables secure, controlled digital distribution with razorpay integration.",
    icon: "cloud_upload",
    tags: ["Spring Boot", "React.js", "MongoDB"],
    colorClass: "bg-blue-50 text-blue-600",
    status: "Completed" as const,
    url: "https://github.com/lalit2506verma/CloudShare",
  },
  {
    title: "Group Chat Application",
    description:
      "Real-time room-based messaging platform that enables seamless team communication with live updates and persistent chat history.",
    icon: "forum",
    tags: ["Spring Boot", "WebSocket", "React"],
    colorClass: "bg-teal-50 text-teal-600",
    status: "Completed" as const,
    url: "https://github.com/lalit2506verma/ChatApp-frontend",
  },
  {
    title: "GSTUtils",
    description:
      "GST data processing tool that automates e-commerce return preparation by converting raw sales files into structured filing-ready formats.",
    icon: "receipt_long",
    tags: ["Spring Boot", "FastAPI", "MySQL"],
    colorClass: "bg-amber-50 text-amber-600",
    status: "Working" as const,
    url: "https://github.com/lalit2506verma/GSTUtils-fronend",
  },
  {
    title: "Task Tracker CLI",
    description:
      "Command-line productivity tool that helps users manage tasks efficiently with persistent storage, structured tracking, and intuitive CLI commands.",
    icon: "terminal",
    tags: ["Java", "File I/O"],
    colorClass: "bg-slate-50 text-slate-600",
    status: "Completed" as const,
    url: "https://github.com/lalit2506verma/Task_Tracker_CLI",
  },
  {
    title: "Chess Game",
    description:
      "Interactive browser-based chess game implementing legal move validation, turn-based logic, and dynamic piece rendering.",
    icon: "sports_esports",
    tags: ["JavaScript", "HTML", "CSS"],
    colorClass: "bg-stone-50 text-stone-600",
    status: "Completed" as const,
    url: "https://github.com/lalit2506verma/Chess-game",
  },
];

const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "July 2025",
    credentialUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/bd06ea797343432bbbdf83b2c8f218aa",
    icon: "cloud",
    iconBg: "bg-orange-500",
    field: "Cloud",
    fieldColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Sep 2022",
    credentialUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/R1M5BXSCTER1173J",
    icon: "cloud",
    iconBg: "bg-blue-600",
    field: "Cloud",
    fieldColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const contributions = [
  {
    repo: "JabRef Contribution",
    description:
      "Contributed a code-quality task to the open-source citation manager JabRef by rewriting and enabling resetting of ProxyPreferences to improve preference handling in the app.",
    pr: "#14554",
    prUrl: "https://github.com/JabRef/jabref/pull/14554",
    stars: "4.2k",
    type: "task",
    lang: "Java",
    langColor: "bg-red-400",
  },
];

const statusConfig = {
  Completed: {
    dot: "bg-green-500",
    ping: "bg-green-400",
    text: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  Working: {
    dot: "bg-orange-500",
    ping: "bg-orange-400",
    text: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
};

const typeConfig: Record<string, string> = {
  "Bug Fix": "bg-red-50 text-red-600 border-red-200",
  Docs: "bg-sky-50 text-sky-600 border-sky-200",
  Enhancement: "bg-violet-50 text-violet-600 border-violet-200",
  Feature: "bg-emerald-50 text-emerald-600 border-emerald-200",
  task: "bg-orange-50 text-orange-600 border-orange-200",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex justify-center py-12 md:py-20 px-4 md:px-8"
    >
      <div className="w-full max-w-250 flex flex-col gap-10 md:gap-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const s = statusConfig[project.status];

              return (
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
                        href={project.url}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                      >
                        View Project{" "}
                        <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        href={project.url}
                        aria-label="View on GitHub"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${s.bg} ${s.text} ${s.border}`}
                        >
                          <span className="relative flex h-2 w-2">
                            {project.status === "Working" && (
                              <span
                                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${s.ping} opacity-75`}
                              />
                            )}
                            <span
                              className={`relative inline-flex rounded-full h-2 w-2 ${s.dot}`}
                            />
                          </span>
                          {project.status}
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-violet-500 shrink-0">
              hub
            </span>
            <h3 className="text-xl font-black text-slate-800 shrink-0">
              Open Source Contributions
            </h3>
            <div className="flex-1 h-px bg-slate-200 ml-2" />
          </motion.div>

          <div className="flex flex-col gap-4">
            {contributions.map((c, index) => (
              <motion.a
                key={index}
                href={c.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex items-start gap-3 md:gap-5 p-4 md:p-5 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:border-violet-300 hover:bg-violet-50/30 hover:shadow-md hover:shadow-violet-100 transition-all duration-300"
              >
                {/* Left — repo icon */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white group-hover:bg-violet-600 transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    merge_type
                  </span>
                </div>

                {/* Middle — content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-black text-slate-900 text-sm group-hover:text-violet-700 transition-colors">
                      {c.repo}
                    </span>
                    <span className="text-slate-400 text-xs font-mono">
                      {c.pr}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs font-bold rounded-full border ${typeConfig[c.type] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}
                    >
                      {c.type}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>

                {/* Right — meta */}
                <div className="shrink-0 flex flex-col items-end gap-2 text-right sm:hidden">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    {c.stars}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <span
                      className={`w-2 h-2 rounded-full ${c.langColor}`}
                    ></span>
                    {c.lang}
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-violet-400 group-hover:translate-x-0.5 -translate-y-0.5 transition-all text-base">
                    arrow_outward
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-amber-500">
              workspace_premium
            </span>
            <h3 className="text-xl font-black text-slate-800">
              Certifications
            </h3>
            <div className="flex-1 h-px bg-slate-200 ml-2" />
          </motion.div>

          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex items-start gap-5 p-5 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-md hover:shadow-amber-100 transition-all duration-300"
              >
                {/* Left — issuer icon */}
                <div
                  className={`shrink-0 w-10 h-10 rounded-xl ${cert.iconBg} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                >
                  <span className="material-symbols-outlined text-lg">
                    {cert.icon}
                  </span>
                </div>

                {/* Middle — content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-black text-slate-900 text-sm group-hover:text-amber-700 transition-colors">
                      {cert.title}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs font-bold rounded-full border ${cert.fieldColor}`}
                    >
                      {cert.field}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                </div>

                {/* Right — date + verify */}
                <div className="shrink-0 flex flex-col items-end gap-2 text-right">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <span className="material-symbols-outlined text-sm">
                      calendar_today
                    </span>
                    {cert.date}
                  </div>
                  <span className="text-xs font-bold text-amber-500 group-hover:text-amber-600 flex items-center gap-0.5 transition-colors">
                    View credential
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                      arrow_outward
                    </span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
