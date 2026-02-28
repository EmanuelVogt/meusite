import { HeroSection } from "@/src/widgets/hero-section";
import { profileData } from "@/src/entities/profile";

export default function Home() {
  return (
    <main>
      <HeroSection profile={profileData} />
    </main>
  );
}
