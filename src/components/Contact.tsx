/// <reference types="vite/client" />
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async () => {
    console.log("button clicked");
    
    if (!formRef.current) return;
    console.log(formRef.current);
    

    // Basic validation
    const data = new FormData(formRef.current);
    if (
      !data.get("from_name") ||
      !data.get("from_email") ||
      !data.get("message")
    ) {
      return;
    }

    setStatus("sending");
    console.log("sending");
    

    try {
      console.log(EMAILJS_PUBLIC_KEY);
      console.log(EMAILJS_SERVICE_ID);
      
      
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      formRef.current.reset();

      // Reset Back
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      formRef.current.reset();
      console.log(error);
      
    }
  };

  const isLoading = status === "sending";

  return (
    <section id="contact" className="flex justify-center py-20 px-4 md:px-8">
      <div className="w-full max-w-250 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-base">mail</span>
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Contact Me
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="glass-card p-6 rounded-2xl h-full flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Contact Details
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-2.5 rounded-lg shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:lalit2506verma@gmail.com"
                        className="text-slate-900 font-medium hover:text-primary transition-colors"
                      >
                        lalit2506verma@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-2.5 rounded-lg shrink-0">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                        Location
                      </p>
                      <p className="text-slate-900 font-medium">
                        Faridabad, India
                      </p>
                      <p className="text-slate-500 text-sm">
                        Open to remote work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-slate-200" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Connect
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.linkedin.com/in/lalit2506verma/"
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all border border-transparent hover:border-slate-200"
                  >
                    <div className="bg-slate-100 text-slate-600 p-2 rounded-lg group-hover:text-white group-hover:bg-[#0077b5] transition-colors">
                      <span className="material-symbols-outlined">work</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">LinkedIn</p>
                      <p className="text-xs text-slate-500">
                        /in/lalit2506verma
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <a
                    href="https://github.com/lalit2506verma"
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all border border-transparent hover:border-slate-200"
                  >
                    <div className="bg-slate-100 text-slate-600 p-2 rounded-lg group-hover:text-white group-hover:bg-[#333] transition-colors">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">GitHub</p>
                      <p className="text-xs text-slate-500">@lalit2506verma</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 order-1 md:order-2"
          >
            <div className="glass-card p-8 md:p-10 rounded-2xl h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700"
                  >
                    <span className="material-symbols-outlined text-green-500">
                      check_circle
                    </span>
                    <p className="font-semibold text-sm">
                      Message sent! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700"
                  >
                    <span className="material-symbols-outlined text-red-500">
                      error
                    </span>
                    <p className="font-semibold text-sm">
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} className="flex flex-col gap-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="from_name"
                      className="text-sm font-bold text-slate-700 ml-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="from_email"
                      className="text-sm font-bold text-slate-700 ml-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-900"
                  >
                    <option>Project Inquiry</option>
                    <option>Job Opportunity</option>
                    <option>Collaboration</option>
                    <option>Just saying hi!</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 resize-none"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="group w-full bg-background-dark text-white hover:bg-primary py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-60 hover:cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                          send
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
