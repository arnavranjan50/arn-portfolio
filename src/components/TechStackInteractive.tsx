"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface TechBall {
  id: number;
  label: string;
  name: string;
  description: string;
  bg: string;
  text: string;
  size: number;
  baseX: number;
  baseY: number;
}

const TECH_DATA: TechBall[] = [
  { id: 0, label: "JS", name: "JavaScript", description: "Dynamic scripting for interactive web experiences", bg: "#f7df1e", text: "#000", size: 76, baseX: -90, baseY: -35 },
  { id: 1, label: "⚛", name: "React", description: "Component-driven UIs with virtual DOM efficiency", bg: "#61dafb", text: "#222", size: 84, baseX: 0, baseY: -15 },
  { id: 2, label: "TS", name: "TypeScript", description: "Type-safe JavaScript for scalable applications", bg: "#3178c6", text: "#fff", size: 64, baseX: 90, baseY: -45 },
  { id: 3, label: "🐳", name: "Docker", description: "Containerized deployments for consistent environments", bg: "#2496ed", text: "#fff", size: 68, baseX: 70, baseY: 35 },
  { id: 4, label: "Py", name: "Python", description: "AI/ML pipelines and backend automation", bg: "#3776ab", text: "#ffd43b", size: 60, baseX: -70, baseY: 45 },
  { id: 5, label: "N", name: "Node.js", description: "Server-side JS runtime for API development", bg: "#68a063", text: "#fff", size: 62, baseX: 30, baseY: 60 },
  { id: 6, label: "⚡", name: "Next.js", description: "Full-stack React framework with SSR & ISR", bg: "#000", text: "#fff", size: 56, baseX: -120, baseY: 15 },
  { id: 7, label: "🔥", name: "Firebase", description: "Realtime database, auth & cloud functions", bg: "#ff6f00", text: "#fff", size: 50, baseX: -25, baseY: -65 },
  { id: 8, label: "☁", name: "AWS", description: "Cloud infrastructure — EC2, S3, Lambda", bg: "#ff9900", text: "#232f3e", size: 52, baseX: 55, baseY: -65 },
  { id: 9, label: "🐘", name: "PostgreSQL", description: "Advanced relational database for complex queries", bg: "#336791", text: "#fff", size: 54, baseX: 120, baseY: 5 },
  { id: 10, label: "🤖", name: "TensorFlow", description: "Machine learning models and neural networks", bg: "#ff6f00", text: "#fff", size: 48, baseX: -40, baseY: 65 },
  { id: 11, label: "🧠", name: "LangChain", description: "LLM orchestration for AI-powered applications", bg: "#1c3c3c", text: "#00f0b5", size: 46, baseX: 100, baseY: 50 },
];

function InteractiveBall({
  ball,
  mouseX,
  mouseY,
  containerRef,
  isSelected,
  onSelect,
}: {
  ball: TechBall;
  mouseX: number;
  mouseY: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isSelected: boolean;
  onSelect: (id: number | null) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const [hovered, setHovered] = useState(false);
  const ballRef = useRef<HTMLDivElement>(null);

  // Mouse repel effect
  useEffect(() => {
    if (!containerRef.current || !ballRef.current || isSelected) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2 + ball.baseX;
    const centerY = rect.height / 2 + ball.baseY;

    const relMouseX = mouseX - rect.left;
    const relMouseY = mouseY - rect.top;

    const dx = centerX - relMouseX;
    const dy = centerY - relMouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const repelRadius = 120;
    if (dist < repelRadius && dist > 0) {
      const force = (1 - dist / repelRadius) * 35;
      x.set((dx / dist) * force);
      y.set((dy / dist) * force);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [mouseX, mouseY, ball.baseX, ball.baseY, containerRef, x, y, isSelected]);

  return (
    <motion.div
      ref={ballRef}
      drag
      dragConstraints={containerRef}
      dragElastic={0.3}
      dragMomentum
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isSelected ? 1.3 : 1,
        opacity: 1,
        zIndex: isSelected ? 50 : hovered ? 40 : 10,
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { delay: 0.9 + ball.id * 0.06, duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(isSelected ? null : ball.id);
      }}
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        left: `calc(50% + ${ball.baseX}px)`,
        top: `calc(50% + ${ball.baseY}px)`,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Tooltip on hover */}
      <AnimatePresence>
        {hovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-[12px] font-semibold text-[#0a0e1a] shadow-xl"
          >
            {ball.name}
            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded info card */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-24 left-1/2 z-50 w-52 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#12162a]/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:-bottom-28 sm:w-56"
          >
            <p className="mb-1 text-[13px] font-bold text-white">{ball.name}</p>
            <p className="text-[11px] leading-relaxed text-white/50">{ball.description}</p>
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-[#12162a]/95" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The sphere */}
      <motion.div
        animate={{
          y: isSelected ? 0 : [0, -(5 + (ball.id % 4) * 2), 0],
          rotate: isSelected ? 0 : [0, ball.id % 2 === 0 ? 4 : -4, 0],
        }}
        transition={{
          duration: 3 + (ball.id % 3),
          repeat: isSelected ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: ball.size,
          height: ball.size,
          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95) 0%, ${ball.bg} 45%, rgba(0,0,0,0.2) 100%)`,
          boxShadow: hovered || isSelected
            ? `0 12px 40px rgba(0,0,0,0.4), 0 0 20px ${ball.bg}40, inset 0 -4px 10px rgba(0,0,0,0.15), inset 0 6px 15px rgba(255,255,255,0.5)`
            : `0 8px 24px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.1), inset 0 4px 12px rgba(255,255,255,0.4)`,
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Specular highlight */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: ball.size * 0.35,
            height: ball.size * 0.25,
            top: "15%",
            left: "20%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.6), transparent)",
            filter: "blur(2px)",
          }}
        />
        <span
          className="relative z-10 select-none font-bold"
          style={{
            fontSize: ball.size * 0.33,
            color: ball.text,
            textShadow: ball.text === "#fff" ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
          }}
        >
          {ball.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function TechStackInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  // Handle touch for mobile
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      setMousePos({ x: touch.clientX, y: touch.clientY });
    }
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-t-[20px] bg-[#0a0e1a] px-6 py-12 sm:rounded-t-[32px] sm:py-16"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={() => setSelectedId(null)}
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mb-4 text-center text-[clamp(2rem,6vw,4.5rem)] leading-[1] font-bold tracking-tight text-white/90 italic"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        MY TECHSTACK
      </motion.h2>

      {/* Interaction hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mb-6 text-center text-[11px] font-medium tracking-[0.2em] text-white/20 uppercase sm:mb-10"
      >
        Drag · Hover · Click to explore
      </motion.p>

      {/* Spheres arena */}
      <div
        ref={containerRef}
        className="relative mx-auto h-[280px] max-w-[600px] sm:h-[350px]"
      >
        {/* Glowing purple accent orb */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[5%] bottom-[10%] h-8 w-8 rounded-full bg-purple-400/80 blur-[2px] sm:h-10 sm:w-10"
          style={{ boxShadow: "0 0 30px 10px rgba(192,132,252,0.35)" }}
        />

        {/* Ambient glow behind cluster */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-[80px]" />

        {/* Render each interactive ball */}
        {TECH_DATA.map((ball) => (
          <InteractiveBall
            key={ball.id}
            ball={ball}
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            containerRef={containerRef}
            isSelected={selectedId === ball.id}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </div>
  );
}
