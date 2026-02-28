"use client";

import { useState, useCallback, useEffect } from "react";

interface UseCarouselOptions {
  totalItems: number;
}

function getVisibleItems(): number {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export function useCarousel({ totalItems }: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const update = () => setVisibleItems(getVisibleItems());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, totalItems - visibleItems);
  const cardWidthPercent = 100 / visibleItems;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
    },
    [maxIndex],
  );

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return {
    currentIndex,
    visibleItems,
    cardWidthPercent,
    goNext,
    goPrev,
    goTo,
    isAtStart: currentIndex === 0,
    isAtEnd: currentIndex >= maxIndex,
    maxIndex,
  };
}
