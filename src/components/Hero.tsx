"use client";

import { motion } from "framer-motion";
import MacBookTerminal from "@/components/MacBookTerminal";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center bg-[#d4dde3]">
      {/* Hero text */}
      <div className="relative z-10 mx-auto max-w-[900px] px-6 pt-[min(25vh,200px)] text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-bold tracking-tight text-[#0a1628]"
          style={{ fontFamily: "'SF Pro Display', 'Inter', system-ui, sans-serif" }}
        >
          It&apos;s not just code.
          <br />
          It&apos;s craft designed
          <br />
          around{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            you
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-[520px] px-2 text-[15px] leading-relaxed text-[#0a1628]/60 sm:text-[17px]"
        >
          AI Engineer &amp; creative technologist — building digital
          experiences that push boundaries.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="#projects"
            className="w-full rounded-full bg-[#0a1628] px-8 py-3.5 text-center text-[14px] font-semibold tracking-wide text-white uppercase transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border-2 border-[#0a1628]/20 px-8 py-3.5 text-center text-[14px] font-semibold tracking-wide text-[#0a1628] uppercase transition-all hover:border-[#0a1628]/40 hover:scale-105 sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      {/* Bottom — Animated MacBook Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        className="relative mt-16 w-full"
      >
        <div className="mx-auto max-w-[1400px] overflow-hidden">
          <MacBookTerminal />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8 mb-6 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-10 w-px bg-gradient-to-b from-[#0a1628]/40 to-transparent" />
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#0a1628]/40 uppercase">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
