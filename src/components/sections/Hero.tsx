"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";

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

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6 w-full flex-grow flex flex-col justify-center relative z-10">
        
        {/* Animated background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-[600px] overflow-hidden -z-10 pointer-events-none opacity-30">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Minimal Photo Placeholder */}
          <div className="w-20 h-20 rounded-full bg-gray-800 border border-gray-700 mb-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-700 to-gray-600" />
            {/* Image goes here */}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            Yash Mishra
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">
            M.S. Computer Engineering @ Purdue University
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
            Hardware & Systems Engineer specializing in ASIC verification, RTL design, and embedded systems. I build and verify complex computing architectures.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="mailto:mishr195@purdue.edu"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a 
              href="#"
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10"
            >
              <FileText size={18} />
              Resume
            </a>
            <div className="flex items-center gap-3 ml-4">
              <a href="https://linkedin.com/in/yash-mishra-25242a243" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5 text-gray-300 hover:text-white">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/mishr195/Personal-Projects-" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5 text-gray-300 hover:text-white">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
