export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  stack: string[];
  status: "online" | "offline" | "busy";
  level: number;
  xp: string;
  location: string;
  socials: SocialLink[];
  avatarUrl: string;
}
