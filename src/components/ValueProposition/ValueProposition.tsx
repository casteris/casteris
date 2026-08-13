import "./ValueProposition.css";
import ValuePropositionVisual from "./ValuePropositionVisual";

const ideas = [
  {
    number: "01",
    idea: "Comprender.",
    principle: "Claridad",
    description:
      "Hacer comprensibles conceptos y decisiones tecnológicas complejas.",
  },
  {
    number: "02",
    idea: "Construir.",
    principle: "Práctica",
    description:
      "Convertir conocimiento en soluciones, proyectos y experiencias reales.",
  },
  {
    number: "03",
    idea: "Liderar.",
    principle: "Criterio",
    description:
      "Tomar decisiones tecnológicas considerando contexto, impacto y resultados.",
  },
];

export default function ValueProposition() {
  return (
    <section
      className="value-proposition"
      aria-labelledby="value-proposition-title"
    >
      <ValuePropositionVisual />

      <div className="value-proposition__container">
        <div className="value-proposition__introduction">
          <p className="value-proposition__eyebrow">La idea</p>

          <h2
            id="value-proposition-title"
            className="value-proposition__title"
          >
            Tecnología con criterio, desde la comprensión hasta la ejecución.
          </h2>

          <p className="value-proposition__description">
            Casteris conecta conocimiento, construcción y experiencia
            profesional para abordar la tecnología de forma práctica,
            comprensible y orientada a resultados.
          </p>
        </div>

        <div className="value-proposition__journey">
          <div className="value-proposition__ideas">
            {ideas.map((item) => (
              <article className="value-proposition__idea" key={item.number}>
                <span className="value-proposition__number" aria-hidden="true">
                  {item.number}
                </span>

                <div>
                  <h3 className="value-proposition__idea-title">
                    {item.idea}
                  </h3>

                  <p className="value-proposition__principle">
                    {item.principle}
                  </p>

                  <p className="value-proposition__idea-description">
                    {item.description}
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
