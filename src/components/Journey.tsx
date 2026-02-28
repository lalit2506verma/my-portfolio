import { motion } from "motion/react";

const milestones = [
  {
    title: "Junior Developer",
    subtitle: "TechCorp Inc.",
    date: "Jan 2023 - Present",
    description:
      "Developing frontend features using React and Tailwind CSS. Collaborating with senior devs to improve code quality and implement accessibility standards across the platform.",
    icon: "work",
    isLeft: true,
  },
  {
    title: "BS in Computer Science",
    subtitle: "University of Technology",
    date: "Sep 2019 - May 2023",
    description:
      "Graduated with Honors. Focused on Algorithms, Data Structures, and Web Technologies. Capstone project involved building a real-time chat application.",
    icon: "school",
    isLeft: false,
  },
  {
    title: "First Open Source PR",
    subtitle: "GitHub Contribution",
    date: "June 2021",
    description:
      "Contributed a bug fix to a popular React component library. This experience taught me about code review processes, git workflows, and community collaboration.",
    icon: "code_off",
    isLeft: true,
  },
  {
    title: "Hello World!",
    subtitle: "Self-Taught",
    date: "March 2019",
    description:
      "Wrote my first line of Python code. Started with automating simple tasks and fell in love with the logic and creativity of programming.",
    icon: "terminal",
    isLeft: false,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="flex justify-center py-20 px-4 md:px-8">
      <div className="w-full max-w-200 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-base">
              history_edu
            </span>
            Milestones
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            My Journey
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
            A chronological timeline of my growth, learning, and professional
            experience as a developer.
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 h-full hidden md:block blur-[1px]"></div>
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 h-full hidden md:block"></div>
          <div className="absolute left-4.75 top-0 bottom-0 w-0.5 bg-slate-200 h-full md:hidden"></div>
          <div className="absolute left-4.75 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/80 to-transparent h-full md:hidden blur-[1px]"></div>

          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: milestone.isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`group relative flex flex-col ${milestone.isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:items-center w-full`}
              >
                <div
                  className={`absolute -left-3.25 md:left-1/2 md:-translate-x-1/2 bg-background-light p-1 rounded-full z-10 border-2 ${index === 0 ? "border-primary shadow-[0_0_15px_rgba(19,146,236,0.5)]" : "border-slate-300 group-hover:border-primary"} transition-colors`}
                >
                  <div
                    className={`${index === 0 ? "bg-primary text-white" : "bg-slate-100 text-slate-500 group-hover:text-primary group-hover:bg-primary/10"} transition-colors p-1.5 rounded-full`}
                  >
                    <span className="material-symbols-outlined text-lg block">
                      {milestone.icon}
                    </span>
                  </div>
                </div>

                <div
                  className={`md:w-1/2 ${milestone.isLeft ? "md:pr-12 md:text-right" : "md:pl-12 text-left"} mb-2 md:mb-0`}
                >
                  <span
                    className={`inline-block py-1 px-3 rounded-full ${index === 0 ? "bg-primary/10 text-primary border border-primary/20" : "bg-slate-200 text-slate-600"} text-sm font-bold`}
                  >
                    {milestone.date}
                  </span>
                </div>

                <div
                  className={`md:w-1/2 ${milestone.isLeft ? "md:pl-12 pl-8" : "md:pr-12 pl-8 md:pl-0"}`}
                >
                  <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 group-hover:bg-white/80">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {milestone.title}
                    </h3>
                    <h4 className="text-sm font-medium text-primary mb-3">
                      {milestone.subtitle}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="relative flex justify-center md:items-center w-full pt-4">
              <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 bg-slate-200 w-4 h-4 rounded-full z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
