import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./page.css";

export const metadata: Metadata = {
  title: "AgenDoc | Proyectos Casteris",
  description:
    "Caso de producto digital de Casteris para la gestión de citas médicas, desde la experiencia del paciente hasta la arquitectura y evolución del producto.",
  alternates: {
    canonical: "/proyectos/agendoc",
  },
};

const capabilities = [
  "Recepción digital para una primera cita",
  "Descubrimiento de médicos y disponibilidad",
  "Reserva y gestión de citas",
  "Portal del paciente",
  "Agenda del médico",
  "Evolución hacia capacidades administrativas",
];

const technologies = [
  "React",
  "Spring Boot",
  "PostgreSQL",
  "Vercel",
  "Railway",
];

export default function AgenDocProjectPage() {
  return (
    <>
      <Header />

      <main className="agendoc-page">
        <section className="agendoc-page__hero">
          <div className="agendoc-page__container agendoc-page__hero-content">
            <p className="agendoc-page__eyebrow">AgenDoc</p>

            <h1 className="agendoc-page__title">
              Gestión de citas médicas construida como un producto digital
              completo.
            </h1>

            <p className="agendoc-page__lead">
              AgenDoc explora cómo simplificar la relación entre pacientes,
              médicos y clínicas mediante una experiencia digital progresiva y
              una arquitectura preparada para evolucionar.
            </p>
          </div>
        </section>

        <section className="agendoc-page__section">
          <div className="agendoc-page__container agendoc-page__section-grid">
            <p className="agendoc-page__section-label">El problema</p>

            <div className="agendoc-page__section-content">
              <h2>Coordinar una cita implica más de lo que parece.</h2>

              <p>
                Una cita médica exige conectar disponibilidad, pacientes,
                médicos y operación administrativa. AgenDoc parte de ese
                problema y busca reducir la fricción en cada punto del
                recorrido.
              </p>
            </div>
          </div>
        </section>

        <section className="agendoc-page__section">
          <div className="agendoc-page__container agendoc-page__section-grid">
            <p className="agendoc-page__section-label">El enfoque</p>

            <div className="agendoc-page__section-content">
              <h2>Construir primero lo esencial y evolucionar desde ahí.</h2>

              <p>
                El producto se ha desarrollado de forma incremental. Primero se
                priorizaron los recorridos esenciales del paciente, después la
                experiencia del médico y posteriormente las capacidades de
                administración.
              </p>

              <p>
                Cada evolución se incorpora cuando existe una necesidad
                funcional concreta, manteniendo el alcance controlado y
                permitiendo validar el producto antes de ampliar su
                complejidad.
              </p>
            </div>
          </div>
        </section>

        <section className="agendoc-page__section">
          <div className="agendoc-page__container agendoc-page__section-grid">
            <p className="agendoc-page__section-label">La solución</p>

            <div className="agendoc-page__section-content">
              <h2>Una experiencia que conecta los principales recorridos.</h2>

              <ul className="agendoc-page__capabilities">
                {capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="agendoc-page__section">
          <div className="agendoc-page__container agendoc-page__section-grid">
            <p className="agendoc-page__section-label">
              Construcción y decisiones
            </p>

            <div className="agendoc-page__section-content">
              <h2>Arquitectura suficiente para evolucionar sin sobrediseñar.</h2>

              <p>
                AgenDoc separa frontend, backend y persistencia para permitir
                que cada capa pueda evolucionar de forma independiente. El
                producto se publica mediante un flujo continuo desde GitHub
                hacia Vercel y Railway.
              </p>

              <div
                className="agendoc-page__technologies"
                aria-label="Tecnologías principales de AgenDoc"
              >
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <ul className="agendoc-page__decisions">
                <li>Priorizar primero los recorridos del paciente.</li>
                <li>Mantener el alcance inicial del MVP acotado.</li>
                <li>
                  Incorporar administración como una evolución posterior del
                  producto.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="agendoc-page__section">
          <div className="agendoc-page__container agendoc-page__section-grid">
            <p className="agendoc-page__section-label">Estado actual</p>

            <div className="agendoc-page__section-content">
              <h2>MVP publicado y operativo.</h2>

              <p>
                La primera versión funcional de AgenDoc está desplegada. La
                siguiente evolución del producto está enfocada en capacidades
                de administración.
              </p>
            </div>
          </div>
        </section>

        <section className="agendoc-page__return">
          <div className="agendoc-page__container">
            <Link className="agendoc-page__return-link" href="/proyectos">
              ← Volver a proyectos
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
