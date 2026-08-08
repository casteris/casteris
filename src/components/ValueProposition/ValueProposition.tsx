import "./ValueProposition.css";

const principles = [
  {
    title: "Claridad",
    description:
      "Hacer comprensibles conceptos y decisiones tecnológicas complejas.",
  },
  {
    title: "Práctica",
    description:
      "Convertir conocimiento en soluciones, proyectos y experiencias reales.",
  },
  {
    title: "Criterio",
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
      <div className="value-proposition__container">
        <div className="value-proposition__introduction">
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

        <div className="value-proposition__principles">
          {principles.map((principle) => (
            <div className="value-proposition__principle" key={principle.title}>
              <h3 className="value-proposition__principle-title">
                {principle.title}
              </h3>

              <p className="value-proposition__principle-description">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
