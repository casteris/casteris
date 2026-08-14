import Image from "next/image";
import Link from "next/link";
import "./FeaturedProjects.css";

type ProjectEvidence = {
  number: string;
  name: string;
  statement: string;
  context: string;
  approach: string;
  technologies: string[];
  status: string;
  href: string;
  image: string;
  imageAlt: string;
};

const projects: ProjectEvidence[] = [
  {
    number: "01",
    name: "AgenDoc",
    statement:
      "Gestión de citas médicas construida como un producto digital completo.",
    context: "Gestión de citas médicas",
    approach:
      "Evolución incremental alrededor de los recorridos del paciente, el médico y la operación.",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    status: "MVP publicado y operativo.",
    href: "/proyectos/agendoc",
    image: "/projects/agendoc-reception.png",
    imageAlt: "Recepción Digital de AgenDoc para reservar una cita médica",
  },
  {
    number: "02",
    name: "CofiGO",
    statement:
      "Pedidos universitarios conectados con la operación de la cafetería.",
    context: "Pedidos en cafeterías universitarias",
    approach:
      "Experiencia del estudiante y operación de la cafetería desarrolladas como recorridos conectados.",
    technologies: ["React Native", "Expo", "Spring Boot", "MySQL"],
    status: "Implementación funcional full stack.",
    href: "/proyectos/cofigo",
    image: "/projects/cofigo-menu.png",
    imageAlt:
      "Menú de CofiGO con catálogo de productos, horarios de recojo y carrito",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="proyectos"
      className="featured-projects"
      aria-labelledby="featured-projects-title"
    >
      <div className="featured-projects__container">
        <div className="featured-projects__introduction">
          <p className="featured-projects__eyebrow">Evidencia</p>

          <h2
            id="featured-projects-title"
            className="featured-projects__title"
          >
            El criterio se demuestra construyendo.
          </h2>

          <p className="featured-projects__description">
            AgenDoc y CofiGO muestran cómo problemas concretos pueden
            convertirse en soluciones funcionales mediante decisiones de
            producto, tecnología y arquitectura.
          </p>
        </div>

        <div className="featured-projects__cases">
          {projects.map((project, index) => (
            <article
              className={`featured-projects__case ${
                index % 2 === 0
                  ? "featured-projects__case--default"
                  : "featured-projects__case--reverse"
              }`}
              key={project.number}
            >
              <div className="featured-projects__case-heading">
                <span
                  className="featured-projects__number"
                  aria-hidden="true"
                >
                  {project.number}
                </span>

                <h3 className="featured-projects__project-name">
                  {project.name}
                </h3>

                <p className="featured-projects__statement">
                  {project.statement}
                </p>
              </div>

              <div className="featured-projects__visual">
                <Image
                  className="featured-projects__image"
                  src={project.image}
                  alt={project.imageAlt}
                  width={1412}
                  height={744}
                  sizes="(max-width: 48rem) calc(100vw - 2rem), 54rem"
                />
              </div>

              <div className="featured-projects__evidence">
                <div className="featured-projects__detail">
                  <p className="featured-projects__detail-label">Contexto</p>
                  <p className="featured-projects__detail-value">
                    {project.context}
                  </p>
                </div>

                <div className="featured-projects__detail">
                  <p className="featured-projects__detail-label">Enfoque</p>
                  <p className="featured-projects__detail-value">
                    {project.approach}
                  </p>
                </div>

                <div className="featured-projects__detail">
                  <p className="featured-projects__detail-label">
                    Construcción
                  </p>

                  <div
                    className="featured-projects__technologies"
                    aria-label={`Tecnologías principales de ${project.name}`}
                  >
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="featured-projects__detail">
                  <p className="featured-projects__detail-label">Estado</p>
                  <p className="featured-projects__detail-value">
                    {project.status}
                  </p>
                </div>

                <Link
                  className="featured-projects__project-link"
                  href={project.href}
                >
                  Ver caso →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-projects__portfolio-link-wrapper">
          <Link
            className="featured-projects__portfolio-link"
            href="/proyectos"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </div>
    </section>
  );
}