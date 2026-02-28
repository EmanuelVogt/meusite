"use client";

import { useRef } from "react";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/src/entities/project";
import { Badge } from "@/src/shared/ui";
import { fadeInUp } from "@/src/shared/lib/motion";
import { seededRandom } from "@/src/shared/lib/hash";
import { useCarousel } from "../lib/useCarousel";

interface ProjectCarouselProps {
  projects: Project[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: "8px 8px 0px #7C3AED",
      }}
      className="group relative flex h-full min-w-0 flex-col border-2 border-border bg-bg-card shadow-retro transition-colors hover:border-primary"
    >
      {/* Stage header */}
      <div className="flex items-center justify-between border-b-2 border-border px-4 py-2">
        <span className="font-pixel text-[10px] uppercase tracking-widest text-primary-light">
          Stage {String(project.stage).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-primary-light"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <Github size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-primary-light"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Image placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-bg-surface">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-8 grid-rows-6 gap-[2px] opacity-20">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 bg-primary"
                style={{ opacity: seededRandom(i) * 0.5 + 0.1 }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-pixel text-[10px] text-primary-light opacity-60 sm:text-xs">
            [{project.title}]
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/10" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-mono text-base font-bold text-text">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-border px-4 py-2">
        <span className="font-pixel text-[9px] uppercase tracking-widest text-text-muted opacity-60 transition-opacity group-hover:opacity-100">
          &#9654; Select stage
        </span>
      </div>
    </motion.article>
  );
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    currentIndex,
    cardWidthPercent,
    goNext,
    goPrev,
    goTo,
    isAtStart,
    isAtEnd,
  } = useCarousel({ totalItems: projects.length });

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;
    if (info.offset.x < -threshold) goNext();
    else if (info.offset.x > threshold) goPrev();
  };

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          onClick={goPrev}
          disabled={isAtStart}
          className="border-2 border-border bg-bg-surface p-2 text-text-muted shadow-retro transition-all hover:border-primary hover:text-primary-light disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-muted"
          aria-label="Previous project"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-pixel text-[10px] text-text-muted">
          {String(currentIndex + 1).padStart(2, "0")}/
          {String(projects.length).padStart(2, "0")}
        </span>
        <button
          onClick={goNext}
          disabled={isAtEnd}
          className="border-2 border-border bg-bg-surface p-2 text-text-muted shadow-retro transition-all hover:border-primary hover:text-primary-light disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-muted"
          aria-label="Next project"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Carousel track */}
      <div ref={containerRef} className="overflow-x-clip overflow-y-visible">
        <motion.div
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * cardWidthPercent}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex cursor-grab py-4 active:cursor-grabbing"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 border border-primary transition-all ${
              i === currentIndex
                ? "scale-125 bg-primary"
                : "bg-transparent hover:bg-primary/50"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
