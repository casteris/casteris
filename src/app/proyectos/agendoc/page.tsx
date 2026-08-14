import type { Metadata } from "next";
import Image from "next/image";
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

            <div className="agendoc-page__hero-grid">
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

            <div className="agendoc-page__hero-visual">
              <Image
                className="agendoc-page__hero-image"
                src="/projects/agendoc-reception.png"
                alt="Recepción Digital de AgenDoc para reservar una cita médica"
                width={1173}
                height={620}
                sizes="(max-width: 48rem) 100vw, 72rem"
                priority
              />
            </div>
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

        <section className="agendoc-page__section agendoc-page__section--approach">
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

              <div
                className="agendoc-page__progression"
                aria-label="Progresión de AgenDoc"
              >
                <div className="agendoc-page__progression-item">
                  <span>01</span>
                  <strong>Paciente</strong>
                </div>

                <div className="agendoc-page__progression-item">
                  <span>02</span>
                  <strong>Médico</strong>
                </div>

                <div className="agendoc-page__progression-item">
                  <span>03</span>
                  <strong>Administración</strong>
                </div>
              </div>

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

              <div
                className="agendoc-page__solution-journeys"
                aria-label="Recorridos principales de AgenDoc"
              >
                <article className="agendoc-page__solution-journey">
                  <span>01</span>
                  <h3>Descubrir</h3>
                  <ul>
                    <li>{capabilities[0]}</li>
                    <li>{capabilities[1]}</li>
                  </ul>
                </article>

                <article className="agendoc-page__solution-journey">
                  <span>02</span>
                  <h3>Reservar</h3>
                  <ul>
                    <li>{capabilities[2]}</li>
                    <li>{capabilities[3]}</li>
                  </ul>
                </article>

                <article className="agendoc-page__solution-journey">
                  <span>03</span>
                  <h3>Operar</h3>
                  <ul>
                    <li>{capabilities[4]}</li>
                    <li>{capabilities[5]}</li>
                  </ul>
                </article>
              </div>

              <div className="agendoc-page__section-visual">
                <Image
                  className="agendoc-page__section-image"
                  src="/projects/agendoc-schedule.png"
                  alt="Flujo de AgenDoc para seleccionar fecha y horario de una cita médica"
                  width={1116}
                  height={710}
                  sizes="(max-width: 48rem) 100vw, 48rem"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="agendoc-page__section agendoc-page__section--construction">
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
                className="agendoc-page__architecture"
                aria-label="Arquitectura principal de AgenDoc"
              >
                <div className="agendoc-page__architecture-layer">
                  <span>01</span>
                  <p>Frontend</p>
                  <strong>React</strong>
                </div>

                <div className="agendoc-page__architecture-layer">
                  <span>02</span>
                  <p>Backend</p>
                  <strong>Spring Boot</strong>
                </div>

                <div className="agendoc-page__architecture-layer">
                  <span>03</span>
                  <p>Persistencia</p>
                  <strong>PostgreSQL</strong>
                </div>
              </div>

              <div className="agendoc-page__delivery">
                <p className="agendoc-page__delivery-label">Entrega continua</p>

                <div className="agendoc-page__delivery-flow">
                  <span>GitHub</span>
                  <span aria-hidden="true">→</span>
                  <span>Vercel</span>
                  <span aria-hidden="true">+</span>
                  <span>Railway</span>
                </div>
              </div>

              <div
                className="agendoc-page__technologies"
                aria-label="Tecnologías principales de AgenDoc"
              >
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <ol className="agendoc-page__decisions">
                <li>
                  <span>01</span>
                  <p>Priorizar primero los recorridos del paciente.</p>
                </li>

                <li>
                  <span>02</span>
                  <p>Mantener el alcance inicial del MVP acotado.</p>
                </li>

                <li>
                  <span>03</span>
                  <p>
                    Incorporar administración como una evolución posterior del
                    producto.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="agendoc-page__section agendoc-page__section--state">
          <div className="agendoc-page__container agendoc-page__section-grid">
            <p className="agendoc-page__section-label">Estado actual</p>

            <div className="agendoc-page__section-content">
              <h2>MVP publicado y operativo.</h2>

              <p>
                La primera versión funcional de AgenDoc está desplegada. La
                siguiente evolución del producto está enfocada en capacidades
                de administración.
              </p>

              <Link className="agendoc-page__return-link" href="/proyectos">
                ← Volver a proyectos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
