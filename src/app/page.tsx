import { LayoutWrapper } from "./components/LayoutWrapper";
import { HeroSection } from "./components/Hero";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <LayoutWrapper>
          <HeroSection />
          <Skills />
          <Projects />
        </LayoutWrapper>
      </div>
    </main>
  );
}
