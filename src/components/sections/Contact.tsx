"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

const GithubIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
        >
          Let's Build Something
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing hardware engineering, systems architecture, or potential opportunities. Feel free to reach out.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <a href="mailto:mishr195@purdue.edu" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/20">
              <Mail size={20} />
            </div>
            <span className="font-medium">mishr195@purdue.edu</span>
          </a>
          
          <a href="https://linkedin.com/in/yash-mishra-25242a243" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/20">
              <LinkedinIcon size={20} />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a href="https://github.com/mishr195/Personal-Projects-" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/20">
              <GithubIcon size={20} />
            </div>
            <span className="font-medium">GitHub</span>
          </a>

          <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/20">
              <FileText size={20} />
            </div>
            <span className="font-medium">Resume</span>
          </a>
        </motion.div>

        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Yash Mishra. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </section>
  );
}
