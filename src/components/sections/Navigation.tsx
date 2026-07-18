"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass-panel border-b-0 border-x-0 border-t-0 bg-black/50" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
          YM.
        </a>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
