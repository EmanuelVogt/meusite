/** Deterministic pseudo-random value from a seed (0–1 range). SSR-safe. */
export function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return Math.round((x - Math.floor(x)) * 100) / 100;
}
