"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const vehicleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: vehicleRef,
    offset: ["start end", "end end"],
  });

  const vehicleY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const vehicleOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <footer>
      {/* ══════ LIGHT FOOTER SECTION ══════ */}
      <div className="bg-[#f5f5f5] px-6 pt-16 pb-10 lg:px-14">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 — Navigation */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/40 uppercase">
              Navigate
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About Me", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills & Stats", href: "#skills" },
                { label: "Get In Touch", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-[15px] font-semibold text-[#1c1c1c] transition-colors hover:text-emerald-600"
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  >
                    <path d="M4 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Socials & Links */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/40 uppercase">
              Elsewhere
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {[
                { label: "GitHub", href: "https://github.com/" },
                { label: "LinkedIn", href: "https://linkedin.com/" },
                { label: "Twitter / X", href: "https://x.com/" },
                { label: "Instagram", href: "https://instagram.com/" },
                { label: "Resume", href: "/Resume.pdf" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-1.5 text-[14px] font-medium text-[#1c1c1c]/70 transition-colors hover:text-[#1c1c1c]"
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="opacity-0 transition-opacity group-hover:opacity-60"
                  >
                    <path d="M3 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/40 uppercase">
              Contact
            </h4>
            <p className="mb-4 text-[14px] leading-relaxed text-[#1c1c1c]/60">
              Have a project in mind? Let&apos;s talk about how we can work together.
            </p>
            <a
              href="mailto:arnav@example.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1c1c1c] px-6 py-2.5 text-[13px] font-semibold text-[#1c1c1c] uppercase tracking-wide transition-all hover:bg-[#1c1c1c] hover:text-white"
            >
              Say Hello
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ══════ BOTTOM BAR — legal links + socials ══════ */}
      <div className="border-t border-[#1c1c1c]/10 bg-[#f5f5f5] px-6 py-5 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="group flex items-center gap-1 text-[12px] font-semibold tracking-wide text-[#1c1c1c]/60 uppercase transition-colors hover:text-[#1c1c1c]"
              >
                {link}
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="opacity-0 transition-opacity group-hover:opacity-60"
                >
                  <path d="M2 1.5l2.5 2.5L2 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <span className="mr-2 text-[11px] font-bold tracking-[0.15em] text-[#1c1c1c]/40 uppercase">
              Socials
            </span>
            {[
              { label: "GitHub", path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
              { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#1c1c1c]/50 transition-colors hover:text-[#1c1c1c]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ DARK VEHICLE REVEAL — with curved top edge ══════ */}
      <div ref={vehicleRef} className="relative bg-[#0a0a0a]">
        {/* Curved top edge */}
        <div className="absolute -top-[60px] left-0 right-0 h-[60px] overflow-hidden">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 h-[60px] w-full"
          >
            <path
              d="M0 60 L0 30 Q720 -30 1440 30 L1440 60 Z"
              fill="#0a0a0a"
            />
          </svg>
        </div>

        {/* Vehicle section */}
        <div className="relative flex h-[55vh] items-center justify-center overflow-hidden pt-8">
          {/* Headlight glow */}
          <motion.div
            style={{ opacity: vehicleOpacity }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[100px]" />
            <div className="absolute top-[45%] left-[42%] h-24 w-24 rounded-full bg-emerald-400/15 blur-[50px]" />
            <div className="absolute top-[45%] left-[58%] h-24 w-24 rounded-full bg-emerald-400/15 blur-[50px]" />
          </motion.div>

          {/* Bike / vehicle front view */}
          <motion.div
            style={{ y: vehicleY, opacity: vehicleOpacity }}
            className="relative z-10 flex flex-col items-center"
          >
            <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
              {/* Body shell */}
              <path
                d="M60 50 Q60 20 100 15 Q140 20 140 50 L145 90 Q145 100 135 105 L65 105 Q55 100 55 90 Z"
                fill="#151520"
                stroke="#222"
                strokeWidth="1"
              />
              {/* Windshield */}
              <path
                d="M72 40 Q72 28 100 25 Q128 28 128 40 L130 60 L70 60 Z"
                fill="#1a1a2e"
                opacity="0.7"
              />
              {/* Windshield reflection */}
              <path
                d="M85 30 Q90 28 100 27 L98 45 L83 45 Z"
                fill="white"
                opacity="0.04"
              />
              {/* Headlights */}
              <rect x="68" y="75" width="18" height="12" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
              <rect x="114" y="75" width="18" height="12" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
              {/* Headlight glow inner */}
              <rect x="70" y="77" width="14" height="8" rx="2" fill="#00f0b5" opacity="0.8" />
              <rect x="116" y="77" width="14" height="8" rx="2" fill="#00f0b5" opacity="0.8" />
              {/* Headlight glow effect */}
              <rect x="70" y="77" width="14" height="8" rx="2" fill="#00f0b5" opacity="0.3" filter="url(#glow)" />
              <rect x="116" y="77" width="14" height="8" rx="2" fill="#00f0b5" opacity="0.3" filter="url(#glow)" />
              {/* Center badge */}
              <rect x="82" y="92" width="36" height="16" rx="4" fill="#111" stroke="#333" strokeWidth="0.5" />
              <text x="100" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">
                ARNAV
              </text>
              {/* Sensor dots on top */}
              <circle cx="90" cy="18" r="1.5" fill="#333" />
              <circle cx="100" cy="16" r="1.5" fill="#333" />
              <circle cx="110" cy="18" r="1.5" fill="#333" />
              {/* Side indicators */}
              <circle cx="58" cy="70" r="2.5" fill="#00f0b5" opacity="0.5" />
              <circle cx="142" cy="70" r="2.5" fill="#00f0b5" opacity="0.5" />
              {/* Bottom edge */}
              <path d="M65 105 Q100 112 135 105" stroke="#222" strokeWidth="0.5" fill="none" />
              {/* Glow filter */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* Ground reflection */}
            <div className="mt-3 h-[1px] w-32 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
            <div className="mt-1 h-[1px] w-20 bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
          </motion.div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/[0.04] px-6 py-6 lg:px-14">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between">
            <span className="text-[12px] text-white/20">
              Copyright Arnav Ranjan. 2026
              <br />
              All Rights Reserved.
            </span>
            <span className="text-[20px] font-bold tracking-tight text-white/20">
              AR<span className="text-emerald-500/30">NV</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
