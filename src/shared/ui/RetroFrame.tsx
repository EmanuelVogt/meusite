"use client";

import { motion } from "framer-motion";
import { glowPulse } from "@/src/shared/lib/motion";

interface RetroFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function RetroFrame({ children, className = "" }: RetroFrameProps) {
  return (
    <motion.div
      variants={glowPulse}
      initial="idle"
      animate="pulse"
      className={`relative border-4 border-primary bg-bg-surface shadow-retro-lg ${className}`}
    >
      {/* Corner decorations */}
      <span className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-primary-light" />
      <span className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-primary-light" />
      <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-primary-light" />
      <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-primary-light" />
      {children}
    </motion.div>
  );
}
