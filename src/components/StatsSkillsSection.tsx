"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { stats, skills } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += value / steps;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.round(current));
        }
      }, stepTime);
      return () => clearInterval(interval);
    }
  }, [isVisible, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function SkillArc({
  name,
  percent,
  index,
}: {
  name: string;
  percent: number;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <linearGradient
              id={`arc-grad-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00f0b5" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {/* Background ring */}
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          {/* Progress ring */}
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke={`url(#arc-grad-${index})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isVisible
                ? { strokeDashoffset: offset }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.5, delay: 0.3 + index * 0.12, ease: "easeOut" }}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[18px] font-bold text-emerald-400">
          {percent}%
        </span>
      </div>
      <span className="text-[13px] font-medium tracking-wide text-white/50">
        {name}
      </span>
    </motion.div>
  );
}

export default function StatsSkillsSection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({
    threshold: 0.15,
  });
  const { ref: skillsHeadingRef, isVisible: skillsHeadingVisible } =
    useScrollReveal({ threshold: 0.15 });

  return (
    <section id="skills" className="relative bg-[#141414] py-28">
      {/* Stats */}
      <div
        ref={statsRef}
        className="mx-auto mb-24 flex max-w-[1000px] flex-wrap justify-center gap-12 px-6 text-center md:gap-16"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 50, opacity: 0 }}
            animate={statsVisible ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center"
          >
            <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none text-emerald-400 drop-shadow-[0_0_40px_rgba(0,240,181,0.25)]">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="mt-2 text-[12px] font-medium tracking-[0.15em] text-white/25 uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Skills heading */}
      <div ref={skillsHeadingRef} className="mx-auto mb-12 max-w-[800px] px-6 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={skillsHeadingVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4 text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-white"
        >
          Core Expertise
        </motion.h2>
      </div>

      {/* Skills arcs */}
      <div className="mx-auto flex max-w-[800px] flex-wrap justify-center gap-12 px-6">
        {skills.map((skill, i) => (
          <SkillArc
            key={skill.name}
            name={skill.name}
            percent={skill.percent}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
