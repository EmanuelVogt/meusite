"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/src/shared/lib/motion";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="font-pixel text-sm uppercase tracking-widest text-primary-light md:text-base">
        {"// "}
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 font-mono text-xs text-text-muted">{subtitle}</p>
      )}
      <div className="mt-3 h-[2px] w-16 bg-primary" />
    </motion.div>
  );
}
