"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Profile } from "@/src/entities/profile";
import Image from "next/image";
import Link from "next/link";
import { Badge, RetroFrame, Scanlines, SectionTitle, useLocale } from "@/src/shared/ui";
import { fadeInUp, fadeIn, slideIn } from "@/src/shared/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

interface HeroSectionProps {
  profile: Profile;
}

function getAge(): number {
  const birth = new Date(1998, 11, 22);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-20 sm:px-6 lg:px-8">
      <Scanlines />

      {/* Background grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(85,44,183,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(85,44,183,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-20 mx-auto max-w-6xl">
        {/* Main two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Side A: Player Info */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Location */}
            <div className="mb-6 flex items-center gap-2">
              <MapPin size={12} className="text-text-muted" />
              <span className="font-mono text-xs text-text-muted">
                {t.location}
              </span>
            </div>

            {/* Name */}
            <h1 className="mb-2 font-pixel text-2xl uppercase leading-tight tracking-wide text-text sm:text-3xl md:text-4xl">
              {profile.name}
            </h1>

            {/* Title */}
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-mono text-lg text-primary-light sm:text-xl">
                {profile.title}
              </span>
              <span className="font-mono text-lg text-text-muted sm:text-xl">
                {profile.subtitle}
              </span>
            </div>

            {/* Stats bar */}
            <div className="mb-6 flex gap-6 border-2 border-border bg-bg-surface p-3">
              <div>
                <span className="font-pixel text-[9px] uppercase tracking-widest text-text-muted">
                  {t.lvl}
                </span>
                <p suppressHydrationWarning className="font-mono text-lg font-bold text-primary-light">
                  {getAge()}
                </p>
              </div>
              <div className="h-auto w-[2px] bg-border" />
              <div>
                <span className="font-pixel text-[9px] uppercase tracking-widest text-text-muted">
                  {t.exp}
                </span>
                <p className="font-mono text-lg font-bold text-text">
                  {t.xp}
                </p>
              </div>
              <div className="h-auto w-[2px] bg-border" />
              <div>
                <span className="font-pixel text-[9px] uppercase tracking-widest text-text-muted">
                  {t.class}
                </span>
                <p className="font-mono text-sm font-bold text-text">
                  {t.className}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-text-muted">
              {t.bio}
            </p>

            {/* Stack badges */}
            <div className="mb-8">
              <span className="mb-3 block font-pixel text-[10px] uppercase tracking-widest text-text-muted">
                {t.techStack}
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.stack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {profile.socials.map((social, i) => {
                const Icon = iconMap[social.icon] ?? Mail;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="border-2 border-border bg-bg-surface p-3 text-text-muted shadow-retro transition-colors hover:border-primary hover:text-primary-light"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Side B: Character Select Frame */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="w-full max-w-sm">
              {/* Character select label */}
              <div className="mb-4 text-center">
                <span className="font-pixel text-[10px] uppercase tracking-widest text-primary-light">
                  {t.characterSelect}
                </span>
              </div>

              <RetroFrame>
                <div className="relative aspect-square w-full overflow-hidden bg-bg">
                  <img
                    src="/avatar.jpg"
                    alt={profile.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Scan effect */}
                  <motion.div
                    animate={{ y: ["0%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-primary/20"
                  />
                </div>
              </RetroFrame>
            </div>
          </motion.div>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mt-20">
          <SectionTitle subtitle={t.stageSelectSub}>
            {t.stageSelect}
          </SectionTitle>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {t.projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block w-full shrink-0 sm:w-[80%] lg:w-[60%]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{
                    boxShadow: "8px 8px 0px #7C3AED",
                  }}
                  className="group relative h-full overflow-hidden border-2 border-border bg-bg-card shadow-retro-lg transition-colors hover:border-primary"
                >
                  {/* Background image — full width */}
                  <div className="relative aspect-[2/1] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative -mt-12 px-6 pb-6 sm:px-8 sm:pb-8">
                    <span className="mb-3 inline-block font-pixel text-[10px] uppercase tracking-widest text-primary-light">
                      Stage {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-3 font-mono text-xl font-bold text-text sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text-muted">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} label={tech} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
