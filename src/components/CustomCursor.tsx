"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const setTrailRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) trailRefs.current[i] = el;
  }, []);

  useEffect(() => {
    // Don't run on touch devices
    if ("ontouchstart" in window) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    const trailPositions = Array.from({ length: 5 }, () => ({ x: 0, y: 0 }));
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const animate = () => {
      // Dot — fast
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }

      // Ring — slower
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // Trail dots — progressively slower
      trailPositions.forEach((pos, i) => {
        const target = i === 0 ? { x: dotX, y: dotY } : trailPositions[i - 1];
        const speed = 0.15 - i * 0.02;
        pos.x += (target.x - pos.x) * speed;
        pos.y += (target.y - pos.y) * speed;
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        }
      });

      raf = requestAnimationFrame(animate);
    };

    // Hover detection
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    const bindHoverTargets = () => {
      const targets = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, .project-card"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
      return targets;
    };

    const targets = bindHoverTargets();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => setTrailRef(el, i)}
          className="pointer-events-none fixed top-0 left-0 z-[9997] -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: visible ? 0.3 - i * 0.05 : 0 }}
        >
          <div
            className="rounded-full bg-emerald-400"
            style={{
              width: 4 - i * 0.5,
              height: 4 - i * 0.5,
            }}
          />
        </div>
      ))}

      {/* Main dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.15s" }}
      >
        <div
          className="rounded-full transition-all duration-200"
          style={{
            width: clicking ? 6 : hovering ? 14 : 8,
            height: clicking ? 6 : hovering ? 14 : 8,
            background: hovering
              ? "linear-gradient(135deg, #00f0b5, #6366f1)"
              : "#00f0b5",
            boxShadow: hovering
              ? "0 0 16px rgba(0, 240, 181, 0.5)"
              : "0 0 8px rgba(0, 240, 181, 0.3)",
          }}
        />
      </div>

      {/* Ring follower */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <div
          className="rounded-full transition-all duration-300"
          style={{
            width: clicking ? 32 : hovering ? 52 : 40,
            height: clicking ? 32 : hovering ? 52 : 40,
            border: `1.5px solid ${hovering ? "rgba(0, 240, 181, 0.5)" : "rgba(0, 240, 181, 0.2)"}`,
            background: hovering ? "rgba(0, 240, 181, 0.04)" : "transparent",
            backdropFilter: hovering ? "blur(2px)" : "none",
          }}
        />
      </div>
    </>
  );
}
