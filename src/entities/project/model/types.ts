export interface Project {
  id: string;
  stage: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}
