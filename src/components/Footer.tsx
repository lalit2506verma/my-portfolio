import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="mt-auto glass-card border-t border-slate-200 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary/20 rounded-md flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-sm">code</span>
          </div>
          <span className="text-sm font-bold text-slate-700">
            © 2025 Lalit Kumar Verma. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/lalit2506verma"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">Github</span>
            <GrGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/lalit2506verma/"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-6 h-6"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
