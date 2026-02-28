export type Locale = "en" | "pt";

interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  features: string[];
  architecture: { title: string; description: string }[];
}

export interface Translations {
  terminal: string;
  lvl: string;
  exp: string;
  class: string;
  className: string;
  techStack: string;
  characterSelect: string;
  stageSelect: string;
  stageSelectSub: string;
  viewProject: string;
  bio: string;
  location: string;
  xp: string;
  projects: ProjectItem[];
}

const projectsMeta = [
  { slug: "emergency", image: "/projects/emergency.png", tech: ["NestJS", "React", "React Native", "WebSocket", "TypeScript", "AWS"] },
];

export const translations: Record<Locale, Translations> = {
  en: {
    terminal: '> system.load("profile")',
    lvl: "LVL",
    exp: "EXP",
    class: "Class",
    className: "Full Stack",
    techStack: "// Tech Stack",
    characterSelect: "\u25C6 Character Select \u25C6",
    stageSelect: "Featured Projects",
    stageSelectSub: "Real projects from my career",
    viewProject: "\u25B6 View project",
    bio: "Full-Stack Software Engineer with 7+ years building critical systems for Healthcare, Education and IoT. Technical leadership, developer mentoring, and focus on scalable architectures (Clean Architecture, DDD, Event-Driven). Delivered EAD platforms with 50k+ students, IoT monitoring of 50k+ public lighting points, and hospital ERPs in production.",
    location: "Erechim, RS",
    xp: "7+ years",
    projects: [
      {
        ...projectsMeta[0],
        title: "Hospital Emergency Call Management",
        description:
          "Real-time hospital emergency platform that manages critical calls by bed and sector. Doctors and nurses receive instant alerts on a dedicated React Native app.",
        features: [
          "Real-time alerts via WebSocket by bed and sector",
          "React Native app for doctors and nursing staff",
          "Configurable notification routing per specialty",
          "Response time tracking per call and team",
          "Complete dashboard for emergency management",
          "Event-driven architecture with async queues",
        ],
        architecture: [
          { title: "Backend", description: "NestJS modular monolith with event-driven architecture, async queues (SQS) and WebSocket for real-time communication." },
          { title: "Frontend", description: "React dashboard for hospital management with real-time updates and configurable alert routing per sector." },
          { title: "Mobile", description: "React Native app for doctors and nurses with push notifications, call management and response time tracking." },
        ],
      },
    ],
  },
  pt: {
    terminal: '> sistema.carregar("perfil")',
    lvl: "NVL",
    exp: "EXP",
    class: "Classe",
    className: "Full Stack",
    techStack: "// Tech Stack",
    characterSelect: "\u25C6 Sele\u00E7\u00E3o de Personagem \u25C6",
    stageSelect: "Projetos em Destaque",
    stageSelectSub: "Projetos reais da minha carreira",
    viewProject: "\u25B6 Ver projeto",
    bio: "Engenheiro de Software Full-Stack com mais de 7 anos construindo sistemas cr\u00EDticos para Sa\u00FAde, Educa\u00E7\u00E3o e IoT. Lideran\u00E7a t\u00E9cnica de times, mentoria de desenvolvedores e foco em arquiteturas escal\u00E1veis (Clean Architecture, DDD, Event-Driven). Plataformas EAD com +50 mil alunos, monitoramento IoT de +50 mil pontos de ilumina\u00E7\u00E3o p\u00FAblica e ERPs hospitalares em produ\u00E7\u00E3o.",
    location: "Erechim, RS",
    xp: "7+ anos",
    projects: [
      {
        ...projectsMeta[0],
        title: "Gest\u00E3o de Chamados de Emerg\u00EAncia Hospitalar",
        description:
          "Plataforma hospitalar de emerg\u00EAncia em tempo real que gerencia chamados cr\u00EDticos por leito e setor. M\u00E9dicos e enfermeiros recebem alertas instant\u00E2neos via app React Native dedicado.",
        features: [
          "Alertas em tempo real via WebSocket por leito e setor",
          "App React Native para m\u00E9dicos e enfermagem",
          "Roteamento configur\u00E1vel de notifica\u00E7\u00F5es por especialidade",
          "Rastreamento de tempo de resposta por chamado e equipe",
          "Dashboard completo para gest\u00E3o de emerg\u00EAncias",
          "Arquitetura orientada a eventos com filas ass\u00EDncronas",
        ],
        architecture: [
          { title: "Backend", description: "Mon\u00F3lito modular NestJS com arquitetura orientada a eventos, filas ass\u00EDncronas (SQS) e WebSocket para comunica\u00E7\u00E3o em tempo real." },
          { title: "Frontend", description: "Dashboard React para gest\u00E3o hospitalar com atualiza\u00E7\u00F5es em tempo real e roteamento configur\u00E1vel de alertas por setor." },
          { title: "Mobile", description: "App React Native para m\u00E9dicos e enfermeiros com push notifications, gest\u00E3o de chamados e rastreamento de tempo de resposta." },
        ],
      },
    ],
  },
};
