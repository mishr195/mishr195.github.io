"use client";

import { motion } from "framer-motion";

interface ChipProps {
  label: string;
  className?: string;
}

export function Chip({ label, className = "" }: ChipProps) {
  return (
    <motion.span
      className={`px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/10 ${className}`}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
    >
      {label}
    </motion.span>
  );
}
