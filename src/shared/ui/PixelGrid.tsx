"use client";

import { seededRandom } from "@/src/shared/lib/hash";

export function PixelGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-10"
    >
      <div className="grid h-full w-full grid-cols-12 grid-rows-12 gap-[1px]">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="bg-primary"
            style={{ opacity: seededRandom(i) * 0.6 + 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}
