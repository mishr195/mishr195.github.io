"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { timelineData, TimelineEvent } from "@/data/timeline";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { Briefcase, GraduationCap, Cpu, ChevronRight, X } from "lucide-react";

export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case "experience":
        return <Briefcase size={20} className="text-blue-400" />;
      case "education":
        return <GraduationCap size={20} className="text-purple-400" />;
      case "project":
        return <Cpu size={20} className="text-emerald-400" />;
      default:
        return <Briefcase size={20} />;
    }
  };

  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">The Journey</h2>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-none">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 timeline-gradient" />

          {timelineData.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 md:mb-24 flex flex-col md:flex-row w-full ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                {/* Desktop timeline node */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black border border-white/20 items-center justify-center z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  {getIcon(event.type)}
                </div>

                {/* Mobile timeline node */}
                <div className="md:hidden absolute -left-4 top-8 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center z-10">
                   {getIcon(event.type)}
                </div>

                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}>
                  <GlassCard 
                    hoverEffect 
                    onClick={() => setSelectedEvent(event)}
                    className="group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-400">{event.date}</span>
                      <ChevronRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{event.title}</h3>
                    <h4 className="text-md text-gray-300 mb-4">{event.organization}</h4>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                      {event.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {event.technologies.slice(0, 3).map((tech) => (
                        <Chip key={tech} label={tech} />
                      ))}
                      {event.technologies.length > 3 && (
                        <Chip label={`+${event.technologies.length - 3}`} className="bg-transparent" />
                      )}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for details */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-10 relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-8 pr-10">
                <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-2 block">
                  {selectedEvent.type} • {selectedEvent.date}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedEvent.title}</h3>
                <h4 className="text-xl text-gray-300">{selectedEvent.organization}</h4>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {selectedEvent.summary}
                </p>
              </div>

              {selectedEvent.details && (
                <div className="space-y-8 mb-8 border-t border-white/10 pt-8">
                  {selectedEvent.details.problem && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">The Problem</h5>
                      <p className="text-gray-300">{selectedEvent.details.problem}</p>
                    </div>
                  )}
                  {selectedEvent.details.architecture && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Architecture & Solution</h5>
                      <p className="text-gray-300">{selectedEvent.details.architecture}</p>
                    </div>
                  )}
                  {selectedEvent.details.challenges && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technical Challenges</h5>
                      <p className="text-gray-300">{selectedEvent.details.challenges}</p>
                    </div>
                  )}
                  {selectedEvent.details.results && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Results & Impact</h5>
                      <p className="text-gray-300">{selectedEvent.details.results}</p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.technologies.map((tech) => (
                    <Chip key={tech} label={tech} className="bg-white/5 border-white/10" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
