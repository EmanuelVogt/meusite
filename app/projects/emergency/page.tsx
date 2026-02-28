"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Badge, Scanlines, useLocale } from "@/src/shared/ui";

export default function EmergencyProjectPage() {
  const router = useRouter();
  const { t } = useLocale();
  const project = t.projects.find((p) => p.slug === "emergency");

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="font-pixel text-sm text-text-muted">Project not found</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Scanlines />

      {/* Hero image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />

        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 z-10 flex items-center gap-2 border-2 border-border bg-bg-surface px-3 py-2 font-pixel text-[10px] uppercase tracking-widest text-text-muted shadow-retro transition-all hover:border-primary hover:text-primary-light sm:left-6"
        >
          <ArrowLeft size={14} />
          <span>Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto -mt-24 max-w-4xl px-4 pb-20 sm:px-6">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block font-pixel text-[10px] uppercase tracking-widest text-primary-light">
            Stage 01
          </span>
          <h1 className="mb-4 font-pixel text-xl uppercase leading-tight tracking-wide text-text sm:text-2xl md:text-3xl">
            {project.title}
          </h1>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            {project.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-10"
        >
          <span className="mb-3 block font-pixel text-[10px] uppercase tracking-widest text-text-muted">
            // Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-10"
        >
          <span className="mb-4 block font-pixel text-[10px] uppercase tracking-widest text-text-muted">
            // Features
          </span>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <div
                key={feature}
                className="flex items-start gap-3 border-2 border-border bg-bg-surface p-3"
              >
                <span className="mt-0.5 font-pixel text-[10px] text-primary-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs leading-relaxed text-text-muted">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <span className="mb-4 block font-pixel text-[10px] uppercase tracking-widest text-text-muted">
            // Architecture
          </span>
          <div className="border-2 border-border bg-bg-surface p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.architecture.map((item) => (
                <div key={item.title}>
                  <h4 className="mb-1 font-mono text-sm font-bold text-primary-light">
                    {item.title}
                  </h4>
                  <p className="font-mono text-xs leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
