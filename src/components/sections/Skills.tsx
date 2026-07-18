"use client";

import { motion } from "framer-motion";
import { skillsData, interestsData } from "@/data/skills";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Chip key={skill} label={skill} className="text-sm py-1.5 px-4" />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GlassCard className="bg-white/5">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 text-center">Areas of Interest</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {interestsData.map((interest) => (
                <Chip key={interest} label={interest} className="text-sm py-1.5 px-4 bg-blue-500/10 text-blue-300 border-blue-500/20" />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
