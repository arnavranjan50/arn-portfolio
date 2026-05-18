"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "comment" | "success" | "error" | "blank";
  text: string;
  delay: number; // ms before this line appears
}

const TERMINAL_LINES: TerminalLine[] = [
  { type: "comment", text: "# Welcome to Arnav's workspace", delay: 300 },
  { type: "blank", text: "", delay: 100 },
  { type: "command", text: "whoami", delay: 400 },
  { type: "output", text: "arnav-ranjan — AI Engineer & Creative Technologist", delay: 200 },
  { type: "blank", text: "", delay: 300 },
  { type: "command", text: "cat skills.json | jq '.core[]'", delay: 500 },
  { type: "output", text: '"Python"  "TypeScript"  "React"  "Next.js"  "TensorFlow"', delay: 150 },
  { type: "output", text: '"Docker"  "AWS"  "Node.js"  "PostgreSQL"  "LangChain"', delay: 100 },
  { type: "blank", text: "", delay: 300 },
  { type: "command", text: "git log --oneline -3", delay: 500 },
  { type: "success", text: "a1b2c3d  feat: deploy stress detection model v2.0", delay: 150 },
  { type: "success", text: "e4f5g6h  fix: optimize VIBE player recommendation engine", delay: 100 },
  { type: "success", text: "i7j8k9l  chore: campus hustlers — auth flow complete", delay: 100 },
  { type: "blank", text: "", delay: 300 },
  { type: "command", text: "python3 -c \"import torch; print(torch.cuda.is_available())\"", delay: 600 },
  { type: "success", text: "True ✓", delay: 200 },
  { type: "blank", text: "", delay: 200 },
  { type: "command", text: "echo $STATUS", delay: 400 },
  { type: "output", text: "☕ Currently building something awesome...", delay: 200 },
  { type: "blank", text: "", delay: 400 },
  { type: "command", text: "npm run dev", delay: 500 },
  { type: "success", text: "▲ Ready on http://localhost:3000", delay: 300 },
];

function TypewriterText({ text, speed = 30, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (indexRef.current >= text.length) {
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        onComplete?.();
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, text, speed, onComplete]);

  return <>{displayed}</>;
}

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentTyping, setCurrentTyping] = useState<number>(0);
  const [typingComplete, setTypingComplete] = useState<Set<number>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sequentially reveal lines
  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;

    const line = TERMINAL_LINES[visibleLines];
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      if (line.type === "command") {
        setCurrentTyping(visibleLines);
      } else {
        // Non-command lines are instantly "typed"
        setTypingComplete((prev) => new Set(prev).add(visibleLines));
      }
    }, line.delay);

    return () => clearTimeout(timer);
  }, [visibleLines, typingComplete]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines, typingComplete]);

  const handleTypingComplete = (lineIndex: number) => {
    setTypingComplete((prev) => new Set(prev).add(lineIndex));
  };

  // Restart loop after all lines complete
  useEffect(() => {
    if (typingComplete.size >= TERMINAL_LINES.length) {
      const timer = setTimeout(() => {
        setVisibleLines(0);
        setCurrentTyping(0);
        setTypingComplete(new Set());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [typingComplete]);

  return (
    <div className="relative w-full overflow-hidden rounded-t-[20px] bg-[#0a0e1a] sm:rounded-t-[32px]">
      {/* Terminal window */}
      <div className="mx-auto max-w-[750px] px-4 py-10 sm:px-8 sm:py-14">
        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d1117] shadow-2xl shadow-black/40"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
            {/* Traffic lights */}
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[11px] font-medium text-white/20">
                arnav@workspace ~ /portfolio
              </span>
            </div>
            {/* Fake tab indicator */}
            <div className="flex gap-1.5">
              <div className="h-1 w-4 rounded-full bg-emerald-500/30" />
              <div className="h-1 w-3 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Terminal content */}
          <div
            ref={scrollRef}
            className="h-[280px] overflow-y-auto px-4 py-4 font-mono text-[13px] leading-[1.8] sm:h-[320px] sm:px-5 sm:text-[14px]"
            style={{ scrollbarWidth: "none" }}
          >
            {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="flex">
                {line.type === "blank" ? (
                  <div className="h-[1.8em]" />
                ) : line.type === "command" ? (
                  <div className="flex w-full">
                    <span className="mr-2 shrink-0 select-none text-emerald-400">
                      ❯
                    </span>
                    <span className="text-white/90">
                      {typingComplete.has(i) ? (
                        line.text
                      ) : currentTyping === i ? (
                        <>
                          <TypewriterText
                            text={line.text}
                            speed={25}
                            onComplete={() => handleTypingComplete(i)}
                          />
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                            className="inline-block h-[1em] w-[8px] translate-y-[2px] bg-emerald-400"
                          />
                        </>
                      ) : null}
                    </span>
                  </div>
                ) : line.type === "comment" ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/20 italic"
                  >
                    {line.text}
                  </motion.span>
                ) : line.type === "success" ? (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-emerald-400/70"
                  >
                    {line.text}
                  </motion.span>
                ) : line.type === "error" ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400/70"
                  >
                    {line.text}
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/50"
                  >
                    {line.text}
                  </motion.span>
                )}
              </div>
            ))}

            {/* Blinking cursor at the end when all lines done */}
            {typingComplete.size >= TERMINAL_LINES.length && (
              <div className="flex">
                <span className="mr-2 text-emerald-400">❯</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block h-[1em] w-[8px] translate-y-[2px] bg-emerald-400"
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Reflection / glow underneath */}
        <div className="mx-auto mt-3 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
        <div className="mx-auto mt-1 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-emerald-500/8 to-transparent" />
      </div>
    </div>
  );
}
