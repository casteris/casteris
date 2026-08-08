import Capabilities from "../components/Capabilities/Capabilities";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
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
      </main>
    </>
  );
}
