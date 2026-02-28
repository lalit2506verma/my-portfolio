import { motion } from "motion/react";
import { FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex-1 flex flex-col justify-center min-h-[calc(100vh-100px)] pt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-8 z-20"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to Work
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                  Lalit Kumar Verma
                </span>
              </h1>
            </div>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary max-w-lg transform transition hover:scale-[1.02]">
              <p className="text-slate-600  text-lg md:text-xl font-medium leading-relaxed">
                "Building elegant solutions through{" "}
                <span className="text-slate-900 font-bold">code</span> and{" "}
                <span className="text-slate-900 font-bold">creativity</span>."
              </p>
            </div>
            <p className="text-slate-500 text-lg max-w-md">
              Turning coffee into clean backend architecture and real-world
              solutions. I design APIs, solve complex problems, and ship code
              that holds up in production.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center gap-2">
                View My Work
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="bg-transparent hover:bg-slate-100 text-slate-700 border-2 border-slate-200 px-8 py-3.5 rounded-xl text-base font-bold transition-all hover:-translate-y-1 flex items-center gap-2">
                <span className="material-symbols-outlined">download</span>
                Download Resume
              </button>
            </div>
            <div className="flex items-center gap-6 mt-4 opacity-70">
              <a
                href="https://github.com/lalit2506verma"
                className="text-slate-500 hover:text-black transition-colors hover:scale-110 transform duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lalit2506verma/"
                className="text-slate-500 hover:text-black transition-colors hover:scale-110 transform duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/lalit_verma3751/"
                className="text-slate-500 hover:text-black transition-colors hover:scale-110 transform duration-200"
              >
                <FaInstagramSquare className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative perspective-[1000px] z-10"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
            <div
              className="relative w-full max-w-lg animate-float"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-10deg) rotateX(5deg)",
              }}
            >
              <div className="glass-card bg-slate-900/95! dark:bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-t-xl p-4 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-xs text-slate-400 font-mono">
                  Lalit@portfolio:~
                </div>
              </div>
              <div className="glass-card bg-slate-900/90! backdrop-blur-xl border-t-0 border-slate-700 rounded-b-xl p-6 min-h-75 shadow-2xl shadow-primary/20">
                <div className="font-mono text-sm space-y-2">
                  <div className="code-line">
                    <span className="line-number">01</span>
                    <div className="code-content">
                      <span className="keyword">class</span>{" "}
                      <span className="function">SoftwareEngineer</span> {"{"}
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">02</span>
                    <div className="code-content pl-4">
                      <span className="keyword">constructor</span>() {"{"}
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">03</span>
                    <div className="code-content pl-8">
                      <span className="keyword">this</span>.
                      <span className="variable">name</span> ={" "}
                      <span className="string">'Lalit Kumar Verma'</span>;
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">04</span>
                    <div className="code-content pl-8">
                      <span className="keyword">this</span>.
                      <span className="variable">skills</span> = [
                      <span className="string">'Java'</span>,{" "}
                      <span className="string">'Spring boot'</span>,{" "}
                      <span className="string">'React'</span>];
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">05</span>
                    <div className="code-content pl-8">
                      <span className="keyword">this</span>.
                      <span className="variable">passion</span> ={" "}
                      <span className="keyword">true</span>;
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">06</span>
                    <div className="code-content pl-4">{"}"}</div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">07</span>
                    <div className="code-content pl-4">
                      <span className="function">sayHello</span>() {"{"}
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">08</span>
                    <div className="code-content pl-8">
                      <span className="keyword">return</span>{" "}
                      <span className="string">
                        "Let's build something amazing!"
                      </span>
                      ;
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">09</span>
                    <div className="code-content pl-4">{"}"}</div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">10</span>
                    <div className="code-content">{"}"}</div>
                  </div>
                  <div className="code-line mt-4">
                    <span className="line-number">11</span>
                    <div className="code-content">
                      <span className="text-green-400">➜</span>{" "}
                      <span className="text-cyan-400">~</span>{" "}
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 glass-card rounded-2xl flex items-center justify-center animate-bounce duration-[3000ms]">
                <span className="material-symbols-outlined text-4xl text-primary">
                  code
                </span>
              </div>
              <div className="absolute -left-4 -top-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-2xl text-purple-500">
                  dataset
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
