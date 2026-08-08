import "./Founder.css";

export default function Founder() {
  return (
    <section
      id="fundador"
      className="founder"
      aria-labelledby="founder-title"
    >
      <div className="founder__container">
        <div className="founder__introduction">
          <p className="founder__eyebrow">Fundador</p>

          <h2 id="founder-title" className="founder__title">
            Experiencia profesional convertida en conocimiento y construcción.
          </h2>
        </div>

        <div className="founder__content">
          <h3 className="founder__name">Juan Carlos Castro</h3>

          <p className="founder__paragraph">
            Casteris nace de la experiencia de Juan Carlos Castro liderando
            iniciativas, equipos y servicios de tecnología, y de una
            convicción: comprender mejor la tecnología permite construir
            mejores soluciones y tomar mejores decisiones.
          </p>

          <p className="founder__paragraph">
            Su experiencia combina gestión tecnológica, desarrollo de
            soluciones, transformación digital y liderazgo de equipos en
            contextos empresariales internacionales.
          </p>

          <p className="founder__paragraph">
            Casteris es el espacio donde esa experiencia se convierte en
            proyectos, conocimiento y herramientas útiles para profesionales y
            organizaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
