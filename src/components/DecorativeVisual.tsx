"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function DecorativeVisual() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [100, -40]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#111] py-32"
    >
      {/* ── Perspective grid floor ── */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-0">
          {/* Horizontal grid lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const y = 300 + (i - 6) * 25 + (i - 6) * (i - 6) * 1.5;
            return (
              <line
                key={`h-${i}`}
                x1="0"
                y1={y}
                x2="1440"
                y2={y}
                stroke="rgba(0,240,181,0.06)"
                strokeWidth="0.5"
              />
            );
          })}
          {/* Vertical converging lines */}
          {Array.from({ length: 20 }).map((_, i) => {
            const x = i * (1440 / 19);
            return (
              <line
                key={`v-${i}`}
                x1={x}
                y1="600"
                x2={720 + (x - 720) * 0.1}
                y2="200"
                stroke="rgba(0,240,181,0.04)"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </motion.div>

      {/* ── Floating orbs ── */}
      <motion.div
        style={{ y: orb1Y }}
        className="pointer-events-none absolute top-[10%] left-[15%] h-64 w-64 rounded-full bg-emerald-500/[0.07] blur-[80px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="pointer-events-none absolute top-[30%] right-[10%] h-48 w-48 rounded-full bg-indigo-500/[0.06] blur-[70px]"
      />
      <motion.div
        style={{ y: orb3Y }}
        className="pointer-events-none absolute bottom-[15%] left-[40%] h-56 w-56 rounded-full bg-teal-500/[0.05] blur-[90px]"
      />

      {/* ── Animated geometric shapes ── */}
      <div className="relative mx-auto flex max-w-[1000px] items-center justify-center px-6">
        <motion.div style={{ y: bgY }} className="relative flex items-center justify-center">
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute h-[320px] w-[320px] md:h-[420px] md:w-[420px]"
          >
            <svg viewBox="0 0 420 420" fill="none" className="h-full w-full">
              <circle cx="210" cy="210" r="200" stroke="rgba(0,240,181,0.08)" strokeWidth="0.5" strokeDasharray="8 12" />
              {/* Orbital dots */}
              <circle cx="210" cy="10" r="3" fill="rgba(0,240,181,0.3)" />
              <circle cx="410" cy="210" r="2" fill="rgba(99,102,241,0.3)" />
              <circle cx="210" cy="410" r="2.5" fill="rgba(0,240,181,0.2)" />
              <circle cx="10" cy="210" r="2" fill="rgba(99,102,241,0.2)" />
            </svg>
          </motion.div>

          {/* Middle ring — counter rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute h-[220px] w-[220px] md:h-[300px] md:w-[300px]"
          >
            <svg viewBox="0 0 300 300" fill="none" className="h-full w-full">
              <circle cx="150" cy="150" r="140" stroke="rgba(99,102,241,0.07)" strokeWidth="0.5" strokeDasharray="4 8" />
              {/* Nodes */}
              {[0, 72, 144, 216, 288].map((deg) => (
                <circle
                  key={deg}
                  cx={(150 + 140 * Math.cos((deg * Math.PI) / 180)).toFixed(2)}
                  cy={(150 + 140 * Math.sin((deg * Math.PI) / 180)).toFixed(2)}
                  r="2"
                  fill="rgba(0,240,181,0.25)"
                />
              ))}
            </svg>
          </motion.div>

          {/* Inner ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-[140px] w-[140px] md:h-[180px] md:w-[180px]"
          >
            <svg viewBox="0 0 180 180" fill="none" className="h-full w-full">
              <circle cx="90" cy="90" r="80" stroke="rgba(0,240,181,0.1)" strokeWidth="0.5" />
              {/* Triangle markers */}
              {[0, 120, 240].map((deg) => {
                const x = (90 + 80 * Math.cos((deg * Math.PI) / 180)).toFixed(2);
                const y = (90 + 80 * Math.sin((deg * Math.PI) / 180)).toFixed(2);
                return (
                  <polygon
                    key={deg}
                    points={`${x},${Number(y) - 4} ${Number(x) - 3.5},${Number(y) + 2} ${Number(x) + 3.5},${Number(y) + 2}`}
                    fill="rgba(0,240,181,0.2)"
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Center core */}
          <div className="relative z-10 flex h-[80px] w-[80px] items-center justify-center md:h-[100px] md:w-[100px]">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl"
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-[#0a0a0a] md:h-20 md:w-20">
              <span className="text-[24px] font-bold tracking-tight text-emerald-400 md:text-[28px]">
                AR
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Animated horizontal lines ── */}
      <motion.div style={{ scaleX: lineScale }} className="mx-auto mt-20 max-w-[600px] origin-center px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </motion.div>

      {/* ── Text ── */}
      <div ref={textRef} className="mt-10 text-center">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={textVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[13px] font-medium tracking-[0.3em] text-white/15 uppercase"
        >
          Building the future, one pixel at a time
        </motion.p>
      </div>

      {/* ── Floating particles ── */}
      {mounted && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute rounded-full bg-emerald-400"
          style={{
            width: 1.5 + Math.random() * 2,
            height: 1.5 + Math.random() * 2,
            left: `${5 + Math.random() * 90}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}
    </section>
  );
}
