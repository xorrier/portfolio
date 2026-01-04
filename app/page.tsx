import Hero from "@/components/Hero";
import About from "@/components/About";
import GitHubActivity from "@/components/GitHubActivity";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHubActivity />
      <CodingProfiles />
      <Education />
      <Contact />
    </main>
  );
}
