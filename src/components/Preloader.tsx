"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Design.", "Engineer.", "Create.", "Innovate."];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Progress counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 40 ? 1.5 : prev < 70 ? 2.5 : prev < 90 ? 3.5 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  // Cycle words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Exit after progress completes
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Lock scroll
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[#060608]"
        >
          {/* ── Background grid ── */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,240,181,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,181,0.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* ── Ambient gradient blobs ── */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/[0.04] blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-1/4 bottom-1/4 h-[350px] w-[350px] rounded-full bg-indigo-600/[0.04] blur-[120px]"
          />

          {/* ── Rotating rings ── */}
          <div className="pointer-events-none absolute">
            {/* Large outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="h-[500px] w-[500px] sm:h-[600px] sm:w-[600px]"
            >
              <svg viewBox="0 0 600 600" fill="none" className="h-full w-full">
                <circle cx="300" cy="300" r="290" stroke="rgba(0,240,181,0.04)" strokeWidth="0.5" />
                <circle cx="300" cy="10" r="2" fill="rgba(0,240,181,0.3)" />
                <circle cx="590" cy="300" r="1.5" fill="rgba(99,102,241,0.25)" />
              </svg>
            </motion.div>
          </div>
          <div className="pointer-events-none absolute">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="h-[340px] w-[340px] sm:h-[400px] sm:w-[400px]"
            >
              <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
                <circle cx="200" cy="200" r="190" stroke="rgba(99,102,241,0.04)" strokeWidth="0.5" strokeDasharray="6 10" />
                {[0, 90, 180, 270].map((deg) => (
                  <circle
                    key={deg}
                    cx={(200 + 190 * Math.cos((deg * Math.PI) / 180)).toFixed(2)}
                    cy={(200 + 190 * Math.sin((deg * Math.PI) / 180)).toFixed(2)}
                    r="1.5"
                    fill="rgba(0,240,181,0.2)"
                  />
                ))}
              </svg>
            </motion.div>
          </div>

          {/* ── Floating particles ── */}
          {mounted && Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              }}
              animate={{
                opacity: [0, 0.4, 0],
                y: [0, -(40 + Math.random() * 60), 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute rounded-full"
              style={{
                width: 1 + Math.random() * 2,
                height: 1 + Math.random() * 2,
                background: i % 3 === 0 ? "#00f0b5" : "#6366f1",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* ── Center content ── */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo reveal */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative mb-8"
            >
              {/* Glow behind logo */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -m-8 rounded-full bg-emerald-500/10 blur-3xl"
              />
              <div className="relative grid grid-cols-2 gap-x-[6px] gap-y-[2px] text-[48px] font-extrabold leading-[1] tracking-tight sm:text-[56px]">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-white"
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-white"
                >
                  R
                </motion.span>
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-emerald-400"
                >
                  N
                </motion.span>
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-emerald-400"
                >
                  V
                </motion.span>
              </div>
            </motion.div>

            {/* Cycling word */}
            <div className="mb-10 h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block text-[14px] font-medium tracking-[0.3em] text-white/30 uppercase"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="w-56 sm:w-64">
              {/* Bar track */}
              <div className="relative mb-4 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, #00f0b5, #34d399, #6366f1)",
                  }}
                />
                {/* Shimmer effect on the bar */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>

              {/* Progress info */}
              <div className="flex items-center justify-between">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[10px] font-medium tracking-[0.2em] text-white/15 uppercase"
                >
                  Loading experience
                </motion.span>
                <span className="font-mono text-[12px] tabular-nums text-emerald-400/50">
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* ── Corner accents ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pointer-events-none absolute top-6 left-6 flex items-center gap-2 sm:top-10 sm:left-10"
          >
            <div className="h-[1px] w-8 bg-white/10" />
            <span className="text-[10px] font-mono text-white/10">2026</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pointer-events-none absolute right-6 bottom-6 flex items-center gap-2 sm:right-10 sm:bottom-10"
          >
            <span className="text-[10px] font-mono text-white/10">PORTFOLIO</span>
            <div className="h-[1px] w-8 bg-white/10" />
          </motion.div>

          {/* Corner crosshairs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="0" x2="10" y2="20" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="0.5" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="0" x2="10" y2="20" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="0.5" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
