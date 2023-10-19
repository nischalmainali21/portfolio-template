import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-28 sm:pt-36 flex flex-col items-center">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
