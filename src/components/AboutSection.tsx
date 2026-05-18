"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({
    threshold: 0.15,
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({
    threshold: 0.15,
  });

  return (
    <section id="about" className="relative bg-white py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: heading + text */}
          <div ref={headingRef}>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={headingVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 inline-block rounded-full bg-[#1c1c1c]/5 px-5 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-[#1c1c1c]/60 uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={headingVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              className="mb-6 text-[clamp(2rem,4vw,3rem)] leading-tight font-bold text-[#0a1628]"
            >
              Building digital
              <br />
              experiences that feel{" "}
              <motion.span
                initial={{ color: "rgba(16,185,129,0)" }}
                animate={headingVisible ? { color: "#10b981" } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-bold"
              >
                effortless
              </motion.span>
              .
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={headingVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="mb-4 text-[16px] leading-[1.8] text-[#0a1628]/55"
            >
              I&apos;m an AI engineer with a passion for clean
              architecture and stunning interfaces. I bridge the gap between
              design and engineering — turning complex ideas into simple,
              beautiful products.
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={headingVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-[16px] leading-[1.8] text-[#0a1628]/55"
            >
              From React and Node.js to Python and Cloud — I approach every
              project with the rigor of an engineer and the eye of a designer.
              Every pixel has purpose. Every line of code has intent.
            </motion.p>
          </div>

          {/* Right: visual card */}
          <motion.div
            ref={contentRef}
            initial={{ y: 60, opacity: 0 }}
            animate={contentVisible ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a1628] to-[#1a2d45] p-10">
              {/* Decorative rings */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full border border-emerald-500/10" />
              <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full border border-emerald-500/5" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-indigo-500/10" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-[12px] font-semibold text-emerald-400">
                  ✦ Available for work
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Location", value: "Bengaluru, IN" },
                    { label: "Experience", value: "2+ Years" },
                    { label: "Focus", value: "AI, ML" },
                    { label: "Education", value: "B.Tech CSE(AI & ML)" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white/[0.05] p-4">
                      <p className="mb-1 text-[11px] font-medium tracking-wide text-white/30 uppercase">
                        {item.label}
                      </p>
                      <p className="text-[15px] font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Figma", "Docker"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/50"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
