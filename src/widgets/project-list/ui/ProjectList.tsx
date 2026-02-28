"use client";

import { SectionTitle } from "@/src/shared/ui";
import { ProjectCarousel } from "@/src/features/project-carousel";
import { projectsData } from "@/src/entities/project";

export function ProjectList() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Select your stage and explore the missions">
          Stage Select
        </SectionTitle>
        <ProjectCarousel projects={projectsData} />
      </div>
    </section>
  );
}
