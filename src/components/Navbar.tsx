"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  primaryNavLinks,
  secondaryNavLinks,
  panelPrimaryLinks,
  panelSecondaryLinks,
} from "@/lib/data";

/* ── Floating vehicle icon with spinning wheels ── */
function ScrollVehicle({ scrollY }: { scrollY: number }) {
  const wheelRotation = scrollY * 2;

  return (
    <motion.button
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -70, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
      aria-label="Scroll to top"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 shadow-xl shadow-black/10 backdrop-blur-xl transition-transform hover:scale-110">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* ── REAR WHEEL (left, big) ── */}
          <g transform={`rotate(${wheelRotation} 14 32)`}>
            {/* Tyre */}
            <circle cx="14" cy="32" r="8" fill="none" stroke="#1c1c1c" strokeWidth="2.5" />
            {/* Rim */}
            <circle cx="14" cy="32" r="5.5" fill="none" stroke="#444" strokeWidth="0.8" />
            {/* Hub */}
            <circle cx="14" cy="32" r="2" fill="#1c1c1c" />
            <circle cx="14" cy="32" r="1" fill="#555" />
            {/* Spokes — 6 evenly spaced */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1="14"
                y1="32"
                x2={14 + 5.5 * Math.cos((angle * Math.PI) / 180)}
                y2={32 + 5.5 * Math.sin((angle * Math.PI) / 180)}
                stroke="#666"
                strokeWidth="0.6"
              />
            ))}
          </g>

          {/* ── FRONT WHEEL (right, big) ── */}
          <g transform={`rotate(${wheelRotation} 36 32)`}>
            <circle cx="36" cy="32" r="8" fill="none" stroke="#1c1c1c" strokeWidth="2.5" />
            <circle cx="36" cy="32" r="5.5" fill="none" stroke="#444" strokeWidth="0.8" />
            <circle cx="36" cy="32" r="2" fill="#1c1c1c" />
            <circle cx="36" cy="32" r="1" fill="#555" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1="36"
                y1="32"
                x2={36 + 5.5 * Math.cos((angle * Math.PI) / 180)}
                y2={32 + 5.5 * Math.sin((angle * Math.PI) / 180)}
                stroke="#666"
                strokeWidth="0.6"
              />
            ))}
          </g>

          {/* ── BIKE FRAME ── */}
          {/* Main body / tank */}
          <path d="M16 26 L22 20 L30 20 L36 26" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Seat */}
          <path d="M18 22 Q22 18 28 19" stroke="#1c1c1c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Tank fill */}
          <ellipse cx="25" cy="22" rx="4" ry="2.5" fill="#1c1c1c" />
          {/* Front fork */}
          <line x1="32" y1="20" x2="36" y2="27" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" />
          {/* Rear swingarm */}
          <line x1="18" y1="26" x2="14" y2="28" stroke="#1c1c1c" strokeWidth="1.5" strokeLinecap="round" />
          {/* Handlebar */}
          <line x1="30" y1="18" x2="34" y2="17" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" />
          {/* Headlight */}
          <circle cx="35" cy="24" r="1.5" fill="#00f0b5" />
          <circle cx="35" cy="24" r="2.5" fill="none" stroke="#00f0b5" strokeWidth="0.4" opacity="0.5" />
          {/* Taillight */}
          <circle cx="15" cy="24" r="1" fill="#ef4444" />
          {/* Exhaust */}
          <path d="M14 29 L10 30 L9 30" stroke="#666" strokeWidth="1.2" strokeLinecap="round" fill="none" />

          {/* Motion lines */}
          <motion.g
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <line x1="2" y1="28" x2="6" y2="28" stroke="#999" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="1" y1="31" x2="5" y2="31" stroke="#999" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="2" y1="34" x2="5.5" y2="34" stroke="#999" strokeWidth="0.6" strokeLinecap="round" />
          </motion.g>
        </svg>
      </div>
    </motion.button>
  );
}

export default function Navbar() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const lastScrollY = useRef(0);

  /* ── Track scroll: glassmorphism + hide/show + direction ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCurrentScrollY(y);
      setScrolled(y > 40);

      if (y > 80) {
        if (y > lastScrollY.current + 5) {
          // Scrolling DOWN → hide navbar
          setNavHidden(true);
        } else if (y < lastScrollY.current - 5) {
          // Scrolling UP → show navbar
          setNavHidden(false);
        }
      } else {
        setNavHidden(false);
      }

      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (href: string) => {
      setPanelOpen(false);
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.open(href, "_blank");
      }
    },
    []
  );

  return (
    <>
      {/* ── FLOATING VEHICLE ICON — visible when navbar is hidden ── */}
      <AnimatePresence>
        {navHidden && !panelOpen && (
          <ScrollVehicle scrollY={currentScrollY} />
        )}
      </AnimatePresence>

      {/* ── TOP NAVBAR — hides on scroll down, appears on scroll up ── */}
      <motion.nav
        initial={false}
        animate={{
          y: navHidden ? -80 : 0,
          opacity: navHidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-colors duration-500 ${
          scrolled && !navHidden
            ? "bg-white/70 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-center px-6">
          {/* Hamburger */}
          <button
            onClick={() => setPanelOpen(true)}
            className="absolute left-6 flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-black/5 lg:left-14"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-[22px] rounded-full bg-[#1c1c1c]" />
              <span className="block h-[2px] w-[22px] rounded-full bg-[#1c1c1c]" />
              <span className="block h-[2px] w-[16px] rounded-full bg-[#1c1c1c]" />
            </div>
          </button>

          {/* ── Center cluster: left links + logo + right links ── */}
          <div className="flex flex-1 items-center justify-center gap-1">
            {/* Left nav links */}
            <div className="hidden items-center gap-0.5 md:flex">
              {primaryNavLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide text-[#1c1c1c]/70 uppercase transition-colors hover:text-[#1c1c1c]"
                >
                  {link.label}
                  <span className="absolute bottom-1.5 left-4 right-4 h-[1.5px] origin-right scale-x-0 bg-[#1c1c1c] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </button>
              ))}
            </div>

            {/* Center logo — 2×2 grid → horizontal row on hover */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              className="relative mx-3 select-none"
            >
              <motion.div
                layout
                className="overflow-hidden text-[20px] font-extrabold tracking-tight text-[#1c1c1c]"
                style={{
                  display: "grid",
                  gridTemplateColumns: logoHovered ? "repeat(4, auto)" : "repeat(2, auto)",
                  gap: logoHovered ? "0 6px" : "0 2px",
                }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.span layout="position" transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}>A</motion.span>
                <motion.span layout="position" transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}>R</motion.span>
                <motion.span layout="position" className="text-emerald-500" transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}>N</motion.span>
                <motion.span layout="position" className="text-emerald-500" transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}>V</motion.span>
              </motion.div>
            </button>

            {/* Right nav links */}
            <div className="hidden items-center gap-0.5 md:flex">
              {secondaryNavLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide text-[#1c1c1c]/70 uppercase transition-colors hover:text-[#1c1c1c]"
                >
                  {link.label}
                  <span className="absolute bottom-1.5 left-4 right-4 h-[1.5px] origin-right scale-x-0 bg-[#1c1c1c] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA button — hidden on small mobile */}
          <button
            onClick={() => scrollTo("#contact")}
            className="absolute right-4 hidden rounded-full bg-[#1c1c1c] px-5 py-2 text-[12px] font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg sm:block sm:right-6 sm:px-6 sm:py-2.5 sm:text-[13px] lg:right-14"
          >
            Let&apos;s Talk
          </button>
        </div>
      </motion.nav>

      {/* ── SIDE PANEL — only on hamburger click ── */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[998] bg-black/20 backdrop-blur-[2px]"
              onClick={() => setPanelOpen(false)}
            />
            <motion.aside
              initial={{ x: -420 }}
              animate={{ x: 0 }}
              exit={{ x: -420 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-4 bottom-4 left-4 z-[999] w-[380px] max-w-[calc(100vw-32px)] overflow-y-auto rounded-[20px] bg-white/95 shadow-2xl backdrop-blur-xl"
            >
              <div className="p-6">
                <div className="mb-8 flex items-center justify-between">
                  <button
                    onClick={() => setPanelOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c1c1c] text-white transition-transform hover:scale-105"
                    aria-label="Close panel"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <span className="text-lg font-bold tracking-tight text-[#1c1c1c]">ARNAV</span>
                </div>
                <div className="mb-6 flex flex-col gap-1">
                  {panelPrimaryLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => scrollTo(link.href)}
                      className="group flex items-center justify-between rounded-2xl px-4 py-4 text-left transition-colors hover:bg-[#f5f5f5]"
                    >
                      <span className="text-[17px] font-semibold text-[#1c1c1c]">{link.label}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1c1c1c] text-white transition-transform group-hover:translate-x-0.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mb-6 h-px bg-gray-200" />
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {panelSecondaryLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => scrollTo(link.href)}
                      className="group flex items-center gap-2 rounded-xl px-3 py-3 text-left transition-colors hover:bg-[#f5f5f5]"
                    >
                      <span className="text-[14px] font-medium text-[#1c1c1c]/70 group-hover:text-[#1c1c1c]">{link.label}</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 transition-opacity group-hover:opacity-60">
                        <path d="M3 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
