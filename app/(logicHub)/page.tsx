// Componentes
import Benefits from "@/components/templates/logicHub/sections/benefits";
import Contact from "@/components/templates/logicHub/sections/contact";
import HeroSection from "@/components/templates/logicHub/sections/hero";
import Projects from "@/components/templates/logicHub/sections/projects";
import Services from "@/components/templates/logicHub/sections/services";
import Teams from "@/components/templates/logicHub/sections/teams";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Benefits />
      <Projects />
      <Teams />
      <Contact />
    </>
  );
}
