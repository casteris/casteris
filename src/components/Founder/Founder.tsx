import "./Founder.css";

type ExperienceArea = {
  number: string;
  title: string;
  description: string;
};

const experienceAreas: ExperienceArea[] = [
  {
    number: "01",
    title: "Liderazgo",
    description:
      "Dirección de equipos, servicios e iniciativas tecnológicas con foco en ejecución, calidad y resultados.",
  },
  {
    number: "02",
    title: "Construcción",
    description:
      "Participación en el diseño, desarrollo y evolución de soluciones digitales y productos tecnológicos.",
  },
  {
    number: "03",
    title: "Transformación",
    description:
      "Experiencia en iniciativas de modernización, automatización y cambio tecnológico dentro de organizaciones.",
  },
  {
    number: "04",
    title: "Contexto",
    description:
      "Trabajo con equipos y operaciones distribuidas en diferentes países y entornos empresariales.",
  },
];

export default function Founder() {
  return (
    <section
      id="fundador"
      className="founder"
      aria-labelledby="founder-title"
    >
      <div className="founder__container">
        <div className="founder__introduction">
          <p className="founder__eyebrow">Experiencia</p>

          <h2 id="founder-title" className="founder__title">
            La tecnología también se construye desde las decisiones.
          </h2>

          <p className="founder__description">
            Experiencia desarrollada liderando equipos, servicios e
            iniciativas tecnológicas, construyendo soluciones y acompañando
            procesos de transformación en contextos empresariales
            internacionales.
          </p>
        </div>

        <div className="founder__experience">
          {experienceAreas.map((area) => (
            <article className="founder__area" key={area.number}>
              <span className="founder__number" aria-hidden="true">
                {area.number}
              </span>

              <h3 className="founder__area-title">{area.title}</h3>

              <p className="founder__area-description">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="founder__signature">
          <div className="founder__identity">
            <p className="founder__name">Juan Carlos Castro</p>
            <p className="founder__role">Fundador de Casteris</p>
          </div>

          <p className="founder__closing">
            Casteris nace como una forma de convertir experiencia profesional,
            conocimiento aplicado y construcción tecnológica en proyectos y
            soluciones concretas.
          </p>
        </div>
      </div>
    </section>
  );
}
