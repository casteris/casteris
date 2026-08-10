import CapabilityIcon, {
  type CapabilityIconType,
} from "./CapabilityIcon";
import "./Capabilities.css";

type Capability = {
  number: string;
  title: string;
  description: string;
  icon: CapabilityIconType;
};

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Comprender",
    description:
      "Analizar tecnología, negocio y contexto para convertir complejidad en decisiones más claras.",
    icon: "understand",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Transformar necesidades y oportunidades en soluciones estructuradas, viables y alineadas con su propósito.",
    icon: "design",
  },
  {
    number: "03",
    title: "Construir",
    description:
      "Llevar ideas a soluciones reales mediante tecnología, experimentación y desarrollo práctico.",
    icon: "build",
  },
  {
    number: "04",
    title: "Liderar",
    description:
      "Conducir iniciativas, equipos y decisiones tecnológicas con equilibrio entre ejecución, calidad y resultados.",
    icon: "lead",
  },
  {
    number: "05",
    title: "Compartir",
    description:
      "Convertir experiencia y aprendizaje en conocimiento útil que otras personas puedan comprender y aplicar.",
    icon: "share",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capacidades"
      className="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="capabilities__container">
        <div className="capabilities__introduction">
          <p className="capabilities__eyebrow">Capacidades</p>

          <h2 id="capabilities-title" className="capabilities__title">
            Del conocimiento a la ejecución.
          </h2>

          <p className="capabilities__description">
            Casteris reúne capacidades para comprender problemas, diseñar
            alternativas, construir soluciones, liderar su ejecución y
            compartir el conocimiento generado.
          </p>
        </div>

        <div className="capabilities__list">
          {capabilities.map((capability) => (
            <article className="capabilities__item" key={capability.number}>
              <span className="capabilities__number" aria-hidden="true">
                {capability.number}
              </span>

              <div className="capabilities__identity">
                <div className="capabilities__icon-wrapper">
                  <CapabilityIcon type={capability.icon} />
                </div>

                <h3 className="capabilities__item-title">
                  {capability.title}
                </h3>
              </div>

              <p className="capabilities__item-description">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
