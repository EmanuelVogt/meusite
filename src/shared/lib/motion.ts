import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export const scaleOnHover: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const glowPulse: Variants = {
  idle: { boxShadow: "0 0 0px rgba(85, 44, 183, 0)" },
  pulse: {
    boxShadow: [
      "0 0 8px rgba(85, 44, 183, 0.4)",
      "0 0 20px rgba(85, 44, 183, 0.6)",
      "0 0 8px rgba(85, 44, 183, 0.4)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};
