export function Scanlines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(var(--theme-scanline), 0.1) 1px, rgba(var(--theme-scanline), 0.1) 2px)",
        backgroundSize: "100% 2px",
      }}
    />
  );
}
