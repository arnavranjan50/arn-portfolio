"use client";

import { motion } from "framer-motion";
import HeroTerminal from "@/components/HeroTerminal";

export default function MacBookTerminal() {
  return (
    <div className="w-full overflow-hidden rounded-t-[20px] bg-[#0a0e1a] sm:rounded-t-[32px]">
      <div className="mx-auto max-w-[900px] px-4 pt-10 pb-10 sm:px-8 sm:pt-14 sm:pb-14">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-8 text-center text-[11px] font-semibold tracking-[0.3em] text-white/20 uppercase"
        >
          Live Terminal · My Workspace
        </motion.p>

        {/* MacBook Frame */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          style={{ perspective: 1200 }}
        >
          {/* Screen bezel */}
          <div className="relative mx-auto max-w-[750px]">
            {/* Outer bezel */}
            <div
              className="relative overflow-hidden rounded-t-[14px] border border-white/[0.08] bg-[#1a1a1e] p-[6px] sm:rounded-t-[18px] sm:p-[8px]"
              style={{
                boxShadow:
                  "0 -8px 40px rgba(0, 240, 181, 0.04), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Camera notch */}
              <div className="absolute top-0 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center">
                <div className="flex h-[18px] items-center justify-center rounded-b-[8px] bg-[#1a1a1e] px-8 sm:h-[22px] sm:px-12">
                  <div className="h-[4px] w-[4px] rounded-full bg-[#2a2a30] sm:h-[5px] sm:w-[5px]">
                    <div className="h-[2px] w-[2px] translate-x-[1px] translate-y-[1px] rounded-full bg-[#1a3a2a] sm:h-[2.5px] sm:w-[2.5px]" />
                  </div>
                </div>
              </div>

              {/* Inner screen area */}
              <div className="overflow-hidden rounded-[8px] sm:rounded-[10px]">
                <HeroTerminal />
              </div>
            </div>

            {/* Laptop base / hinge */}
            <div className="relative mx-auto">
              {/* Hinge strip */}
              <div
                className="relative z-10 mx-auto h-[4px] rounded-b-[2px] bg-gradient-to-b from-[#2a2a2e] to-[#1e1e22] sm:h-[5px]"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              />

              {/* Base body */}
              <div className="relative mx-auto mt-0">
                <div
                  className="mx-auto h-[10px] rounded-b-[8px] bg-gradient-to-b from-[#252528] to-[#1c1c20] sm:h-[14px] sm:rounded-b-[12px]"
                  style={{
                    width: "108%",
                    marginLeft: "-4%",
                    boxShadow:
                      "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Notch indent */}
                  <div className="absolute top-0 left-1/2 h-[3px] w-[40px] -translate-x-1/2 rounded-b-[4px] bg-[#1a1a1e] sm:h-[4px] sm:w-[50px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Desk reflection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mx-auto mt-4 flex flex-col items-center gap-1"
          >
            <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent sm:w-64" />
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-emerald-500/8 to-transparent sm:w-44" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent sm:w-28" />
          </motion.div>
        </motion.div>

        {/* Bottom reflection line */}
        <div className="mx-auto mt-6 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
      </div>
    </div>
  );
}
