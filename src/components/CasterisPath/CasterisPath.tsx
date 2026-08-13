import "./CasterisPath.css";
import CasterisPathVisual from "./CasterisPathVisual";

type PathStage = {
  number: string;
  title: string;
  description: string;
};

const stages: PathStage[] = [
  {
    number: "01",
    title: "Comprender",
    description:
      "Analizar tecnología, negocio y contexto para convertir complejidad en decisiones más claras.",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Transformar necesidades y oportunidades en soluciones estructuradas, viables y alineadas con su propósito.",
  },
  {
    number: "03",
    title: "Construir",
    description:
      "Llevar ideas a soluciones reales mediante tecnología, experimentación y desarrollo práctico.",
  },
  {
    number: "04",
    title: "Liderar",
    description:
      "Conducir iniciativas, equipos y decisiones tecnológicas con equilibrio entre ejecución, calidad y resultados.",
  },
  {
    number: "05",
    title: "Compartir",
    description:
      "Convertir experiencia y aprendizaje en conocimiento útil que otras personas puedan comprender y aplicar.",
  },
];

export default function CasterisPath() {
  return (
    <section
      id="capacidades"
      className="casteris-path"
      aria-labelledby="casteris-path-title"
    >
      <div className="casteris-path__container">
        <div className="casteris-path__introduction">
          <p className="casteris-path__eyebrow">Casteris Path</p>

          <h2 id="casteris-path-title" className="casteris-path__title">
            Del conocimiento a la ejecución.
          </h2>

          <p className="casteris-path__description">
            Casteris reúne capacidades para comprender problemas, diseñar
            alternativas, construir soluciones, liderar su ejecución y
            compartir el conocimiento generado.
          </p>
        </div>

        <div className="casteris-path__journey">
          <CasterisPathVisual />

          <div className="casteris-path__stages">
            {stages.map((stage, index) => (
              <article
                className={`casteris-path__stage ${
                  index % 2 === 0
                    ? "casteris-path__stage--left"
                    : "casteris-path__stage--right"
                }`}
                key={stage.number}
              >
                <div className="casteris-path__stage-content">
                  <div className="casteris-path__stage-heading">
                    <span className="casteris-path__number" aria-hidden="true">
                      {stage.number}
                    </span>

                    <h3 className="casteris-path__stage-title">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="casteris-path__stage-description">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
