export const theme = {
  colors: {
    primary: "#552CB7",
    primaryLight: "#7C3AED",
    primaryGlow: "rgba(85, 44, 183, 0.4)",
    bg: "#0A0A0A",
    bgSurface: "#141420",
    bgCard: "#1A1A2E",
    text: "#EDEDED",
    textMuted: "#9CA3AF",
    border: "#2D2D44",
    accentGreen: "#10B981",
  },
  shadows: {
    retro: "4px 4px 0px #552CB7",
    retroLg: "8px 8px 0px #552CB7",
    retroHover: "8px 8px 0px #7C3AED",
  },
} as const;

export type Theme = typeof theme;
