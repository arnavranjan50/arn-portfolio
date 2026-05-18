"use client";

import { useState, useEffect, useCallback } from "react";
import type { ScrollDirection } from "@/types";

export function useScrollDirection(): {
  scrollDirection: ScrollDirection;
  scrollY: number;
} {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrollY(currentY);

    if (currentY > lastScrollY && currentY > 60) {
      setScrollDirection("down");
    } else if (currentY < lastScrollY && currentY <= 60) {
      setScrollDirection("up");
    }

    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrollDirection, scrollY };
}
