"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ProjectCard as ProjectCardType } from "@/types";

interface Props {
  project: ProjectCardType;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-[28px] bg-[#242424] transition-shadow duration-350"
      style={{
        transform: hovered ? "scale(1.03)" : "scale(1)",
        boxShadow: hovered
          ? "0 25px 60px rgba(0,0,0,0.4)"
          : "0 4px 20px rgba(0,0,0,0.15)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      {/* Visual gradient area */}
      <div
        className={`relative flex h-[240px] items-end justify-between overflow-hidden bg-gradient-to-br p-6 ${project.gradient}`}
      >
        {/* Hover tag slides in from left */}
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={
            hovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-full bg-white/90 px-4 py-1.5 text-[12px] font-semibold text-[#1c1c1c] shadow-sm backdrop-blur-sm"
        >
          {project.tag}
        </motion.span>

        <span className="text-[4rem] leading-none font-bold text-white/15">
          {String(project.id).padStart(2, "0")}
        </span>

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Info */}
      <div className="p-7">
        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold tracking-wide text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="mb-2.5 text-[1.3rem] font-semibold text-white">
          {project.title}
        </h3>

        <p className="mb-5 text-[14px] leading-relaxed text-white/50">
          {project.description}
        </p>

        <span className="group/link inline-flex items-center gap-2 text-[14px] font-semibold text-emerald-400">
          View Project
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}
