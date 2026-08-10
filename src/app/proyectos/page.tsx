import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./page.css";

export const metadata: Metadata = {
  title: "Proyectos | Casteris",
  description:
    "Portafolio de productos digitales construidos por Casteris a partir de problemas concretos, decisiones de diseño, arquitectura y desarrollo iterativo.",
  alternates: {
    canonical: "/proyectos",
  },
};

const projects = [
  {
    number: "01",
    name: "AgenDoc",
    description:
      "Plataforma digital para simplificar la gestión de citas y la interacción entre pacientes, médicos y clínicas.",
    disciplines: "Producto digital · Arquitectura · Desarrollo",
    href: "/proyectos/agendoc",
    image: "/projects/agendoc-reception.png",
    imageAlt: "Recepción Digital de AgenDoc para reservar una cita médica",
  },
  {
    number: "02",
    name: "CofiGO",
    description:
      "Experiencia digital para simplificar los pedidos y la recogida de alimentos en cafeterías universitarias.",
    disciplines: "Producto digital · Full stack · Operación",
    href: "/proyectos/cofigo",
    image: "/projects/cofigo-menu.png",
    imageAlt:
      "Menú de CofiGO con catálogo de productos, horarios de recojo y carrito",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="projects-page">
        <section className="projects-page__intro">
          <div className="projects-page__container">
            <p className="projects-page__eyebrow">Portafolio</p>

            <h1 className="projects-page__title">Proyectos</h1>

            <p className="projects-page__description">
              Productos digitales construidos a partir de problemas concretos,
              decisiones de diseño y desarrollo iterativo.
            </p>
          </div>
        </section>

        <section
          className="projects-page__list"
          aria-label="Proyectos de Casteris"
        >
          <div className="projects-page__container">
            {projects.map((project) => (
              <article
                className="projects-page__project"
                key={project.name}
              >
                <p className="projects-page__project-number">
                  {project.number}
                </p>

                <div className="projects-page__project-content">
                  <h2 className="projects-page__project-title">
                    {project.name}
                  </h2>

                  <div className="projects-page__project-visual">
                    <Image
                      className="projects-page__project-image"
                      src={project.image}
                      alt={project.imageAlt}
                      width={1173}
                      height={620}
                      sizes="(max-width: 48rem) 100vw, 60rem"
                    />
                  </div>

                  <p className="projects-page__project-description">
                    {project.description}
                  </p>

                  <p className="projects-page__project-disciplines">
                    {project.disciplines}
                  </p>
                  {project.href && (
                    <Link
                      className="projects-page__project-link"
                      href={project.href}
                    >
                      Ver proyecto →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}