import Image from "next/image";
import Link from "next/link";
import "./FeaturedProjects.css";

type Project = {
  number: string;
  name: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "AgenDoc",
    description:
      "Plataforma para la gestión de citas médicas que explora la construcción de un producto digital completo, desde la experiencia del paciente hasta la operación médica y administrativa.",
    href: "/proyectos/agendoc",
    image: "/projects/agendoc-reception.png",
    imageAlt: "Recepción Digital de AgenDoc para reservar una cita médica",
  },
  {
    number: "02",
    name: "CofiGO",
    description:
      "Plataforma de pedidos para cafeterías universitarias orientada a simplificar la compra, reducir tiempos de espera y conectar la experiencia del estudiante con la operación de la cafetería.",
    href: "/proyectos/cofigo",
    image: "/projects/cofigo-menu.png",
    imageAlt: "Menú de CofiGO con catálogo de productos, horarios de recojo y carrito",
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
          <p className="featured-projects__eyebrow">Proyectos destacados</p>

          <h2
            id="featured-projects-title"
            className="featured-projects__title"
          >
            Construir también es una forma de aprender.
          </h2>

          <p className="featured-projects__description">
            Proyectos reales utilizados para explorar problemas, tomar
            decisiones de producto y arquitectura, desarrollar soluciones y
            convertir conocimiento en experiencia aplicada.
          </p>
        </div>

        <div className="featured-projects__grid">
          {projects.map((project) => (
            <article
              className="featured-projects__project"
              key={project.number}
            >
              <span
                className="featured-projects__number"
                aria-hidden="true"
              >
                {project.number}
              </span>

              <h3 className="featured-projects__project-name">
                {project.name}
              </h3>

              {project.image && (
                <div className="featured-projects__visual">
                  <Image
                    className="featured-projects__image"
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    width={1173}
                    height={620}
                    sizes="(max-width: 48rem) 100vw, 50vw"
                  />
                </div>
              )}

              <p className="featured-projects__project-description">
                {project.description}
              </p>

              <Link
                className="featured-projects__project-link"
                href={project.href}
              >
                Ver proyecto →
              </Link>
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