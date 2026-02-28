import type { Project } from "./types";

export const projectsData: Project[] = [
  {
    id: "proj-001",
    stage: 1,
    title: "Hospital ERP",
    description:
      "Modular monolith hospital ERP with event-driven architecture, async queues, scheduling, electronic medical records, pharmacy and billing.",
    tech: ["NestJS", "TypeScript", "AWS", "Docker"],
    imageUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    id: "proj-002",
    stage: 2,
    title: "Hospital Emergency Platform",
    description:
      "Real-time emergency platform with React Native app that alerts doctors about critical calls by bed and sector via WebSocket.",
    tech: ["NestJS", "React", "React Native", "WebSocket"],
    imageUrl: "",
    featured: true,
  },
  {
    id: "proj-003",
    stage: 3,
    title: "IoT Telemanagement",
    description:
      "Urban infrastructure monitoring system for 50k+ public lighting points with remote commands, temperature control and network status.",
    tech: ["React", "Electron", "TypeScript", "AWS"],
    imageUrl: "",
    featured: true,
  },
  {
    id: "proj-004",
    stage: 4,
    title: "EAD Platforms",
    description:
      "High-traffic e-learning platforms for companies like BASF, serving 50k+ students with advanced caching strategies and optimized queries.",
    tech: ["Next.js", "Node.js", "MySQL", "Redis"],
    imageUrl: "",
    featured: true,
  },
  {
    id: "proj-005",
    stage: 5,
    title: "Production Control System",
    description:
      "Production management system with integrated Kanban for assembly lines, production order tracking, stock integration and operator monitoring.",
    tech: ["React", "NestJS", "TypeScript"],
    imageUrl: "",
    featured: true,
  },
  {
    id: "proj-006",
    stage: 6,
    title: "Seed Traceability",
    description:
      "Seed traceability system with automated testing and regulatory compliance. Migrated mobile app from Ionic to React Native.",
    tech: ["Ruby on Rails", "React Native"],
    imageUrl: "",
    featured: false,
  },
];
