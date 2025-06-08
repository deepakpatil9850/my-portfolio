import Contact from "./components/contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section/";
import Projects from "./components/projects";
import Skills from "./components/skills/Skills";
import WorkHistory from "./components/work-history";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <HeroSection />
        <WorkHistory />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
