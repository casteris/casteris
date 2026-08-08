import Capabilities from "../components/Capabilities/Capabilities";
import Contact from "../components/Contact/Contact";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Footer from "../components/Footer/Footer";
import Founder from "../components/Founder/Founder";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ValueProposition from "../components/ValueProposition/ValueProposition";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ValueProposition />
        <Capabilities />
        <FeaturedProjects />
        <Founder />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
