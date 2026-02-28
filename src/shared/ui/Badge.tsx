"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiNestjs,
  SiAmazonwebservices,
  SiMysql,
  SiRedis,
  SiRubyonrails,
  SiElectron,
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
  react: SiReact,
  "react native": SiReact,
  "node.js": SiNodedotjs,
  typescript: SiTypescript,
  "next.js": SiNextdotjs,
  docker: SiDocker,
  nestjs: SiNestjs,
  aws: SiAmazonwebservices,
  mysql: SiMysql,
  redis: SiRedis,
  "ruby on rails": SiRubyonrails,
  electron: SiElectron,
};

interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  const Icon = iconMap[label.toLowerCase()];

  return (
    <span className="inline-block border-2 border-primary bg-bg-surface px-3 py-1 font-pixel text-[10px] uppercase tracking-wider text-primary-light shadow-retro">
      {Icon && <Icon className="mr-1.5 inline align-middle" size={14} />}
      <span className="align-middle">{label}</span>
    </span>
  );
}
