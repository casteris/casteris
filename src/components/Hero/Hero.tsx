import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <h1 id="hero-title" className="hero__title">
          Comprender. Construir. Liderar.
        </h1>

        <p className="hero__description">
          Conocimiento, construcción y consultoría tecnológica para comprender
          mejor la tecnología, construir soluciones con criterio y tomar
          mejores decisiones.
        </p>

        <a className="hero__cta" href="#proyectos">
          Explorar proyectos
        </a>
      </div>
    </section>
  );
}
