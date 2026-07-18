"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = "", onClick, hoverEffect = false }: GlassCardProps) {
  const Element = onClick ? motion.button : motion.div;
  
  return (
    <Element
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 text-left transition-colors duration-300 ${
        hoverEffect ? "hover:bg-white/5 cursor-pointer" : ""
      } ${className}`}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </Element>
  );
}
