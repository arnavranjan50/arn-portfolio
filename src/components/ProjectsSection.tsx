"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({
    threshold: 0.15,
  });

  return (
    <section id="projects" className="relative bg-[#1c1c1c] py-32">
      {/* Section header */}
      <div ref={headingRef} className="mx-auto mb-16 max-w-[800px] px-6 text-center">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={headingVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 inline-block rounded-full bg-emerald-500/10 px-5 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-emerald-400 uppercase"
        >
          Portfolio
        </motion.span>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={headingVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mb-4 text-[clamp(2rem,4vw,3rem)] font-bold text-white"
        >
          Selected Projects
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={headingVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-[16px] leading-relaxed text-white/50"
        >
          A curated showcase of work that defines my craft — built with{" "}
          <motion.span
            initial={{ color: "rgba(52,211,153,0)" }}
            animate={headingVisible ? { color: "#34d399" } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-medium"
          >
            precision, passion, and purpose
          </motion.span>
          .
        </motion.p>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-14">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
