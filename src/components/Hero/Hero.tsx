import "./Hero.css";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            <span>Comprender.</span>
            <span>Construir.</span>
            <span>Liderar.</span>
          </h1>

          <p className="hero__description">
            Conocimiento, construcción y consultoría tecnológica para comprender
            mejor la tecnología, construir soluciones con criterio y tomar
            mejores decisiones.
          </p>

          <a className="hero__cta" href="#proyectos">
            Explorar proyectos
            <span className="hero__cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
