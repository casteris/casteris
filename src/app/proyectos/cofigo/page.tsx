import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./page.css";

export const metadata: Metadata = {
  title: "CofiGO | Proyectos Casteris",
  description:
    "Caso de producto digital de Casteris para pedidos en cafeterías universitarias, conectando experiencia de usuario, operación y desarrollo full stack.",
  alternates: {
    canonical: "/proyectos/cofigo",
  },
};

const capabilities = [
  "Registro y autenticación",
  "Menú digital",
  "Gestión de productos",
  "Carrito de compras",
  "Creación y seguimiento de pedidos",
  "Selección de hora de recojo",
  "Gestión operativa de pedidos",
  "Reportes básicos",
];

const technologies = [
  "React Native",
  "Expo",
  "Spring Boot",
  "MySQL",
  "Vercel",
  "Railway",
];

export default function CofiGOProjectPage() {
  return (
    <>
      <Header />

      <main className="cofigo-page">
        <section className="cofigo-page__hero">
          <div className="cofigo-page__container cofigo-page__hero-content">
            <p className="cofigo-page__eyebrow">CofiGO</p>

            <div className="cofigo-page__hero-grid">
              <h1 className="cofigo-page__title">
                Pedidos universitarios diseñados para reducir espera y
                simplificar la operación.
              </h1>

              <p className="cofigo-page__lead">
                CofiGO explora cómo conectar estudiantes y cafeterías mediante
                una experiencia digital que organiza pedidos, tiempos de recojo
                y operación alrededor de una necesidad cotidiana.
              </p>
            </div>

            <div className="cofigo-page__visual">
              <Image
                className="cofigo-page__image"
                src="/projects/cofigo-menu.png"
                alt="Menú digital de CofiGO con productos, categorías, horarios de recojo y carrito de compra"
                width={1412}
                height={744}
                sizes="(max-width: 48rem) calc(100vw - 2rem), 72rem"
                priority
              />
            </div>
          </div>
        </section>

        <section className="cofigo-page__section">
          <div className="cofigo-page__container cofigo-page__section-grid">
            <p className="cofigo-page__section-label">El problema</p>

            <div className="cofigo-page__section-content">
              <h2>La demanda se concentra cuando el tiempo disponible es menor.</h2>

              <p>
                Comprar alimentos en una cafetería universitaria suele
                concentrar demanda en periodos cortos. Las filas, los tiempos
                de espera y la coordinación entre pedidos y preparación
                afectan tanto al estudiante como a la operación de la
                cafetería.
              </p>
            </div>
          </div>
        </section>

        <section className="cofigo-page__section cofigo-page__section--approach">
          <div className="cofigo-page__container cofigo-page__section-grid">
            <p className="cofigo-page__section-label">El enfoque</p>

            <div className="cofigo-page__section-content">
              <h2>Construir alrededor del recorrido completo del pedido.</h2>

              <p>
                El producto se desarrolló de forma incremental. Primero se
                resolvieron autenticación, menú y selección de productos.
                Después se incorporaron carrito, pedidos, estados operativos y
                herramientas administrativas.
              </p>

              <div
                className="cofigo-page__progression"
                aria-label="Progresión del recorrido de CofiGO"
              >
                <div className="cofigo-page__progression-item">
                  <span>01</span>
                  <strong>Descubrir</strong>
                  <p>Menú y selección</p>
                </div>

                <div className="cofigo-page__progression-item">
                  <span>02</span>
                  <strong>Preparar</strong>
                  <p>Carrito y recojo</p>
                </div>

                <div className="cofigo-page__progression-item">
                  <span>03</span>
                  <strong>Ordenar</strong>
                  <p>Creación y seguimiento</p>
                </div>

                <div className="cofigo-page__progression-item">
                  <span>04</span>
                  <strong>Operar</strong>
                  <p>Gestión y reportes</p>
                </div>
              </div>

              <p>
                La evolución se mantuvo enfocada en reducir fricción para el
                estudiante y dar a la cafetería una forma más clara de
                organizar la preparación y entrega.
              </p>
            </div>
          </div>
        </section>

        <section className="cofigo-page__section">
          <div className="cofigo-page__container cofigo-page__section-grid">
            <p className="cofigo-page__section-label">La solución</p>

            <div className="cofigo-page__section-content">
              <h2>Una experiencia digital conectada con la operación real.</h2>

              <div
                className="cofigo-page__solution-sides"
                aria-label="Experiencia y operación de CofiGO"
              >
                <article className="cofigo-page__solution-side">
                  <p className="cofigo-page__solution-side-label">
                    Experiencia del estudiante
                  </p>

                  <ol>
                    <li>
                      <span>01</span>
                      <p>{capabilities[0]}</p>
                    </li>
                    <li>
                      <span>02</span>
                      <p>{capabilities[1]}</p>
                    </li>
                    <li>
                      <span>03</span>
                      <p>{capabilities[3]}</p>
                    </li>
                    <li>
                      <span>04</span>
                      <p>{capabilities[4]}</p>
                    </li>
                    <li>
                      <span>05</span>
                      <p>{capabilities[5]}</p>
                    </li>
                  </ol>
                </article>

                <article className="cofigo-page__solution-side">
                  <p className="cofigo-page__solution-side-label">
                    Operación de cafetería
                  </p>

                  <ol>
                    <li>
                      <span>01</span>
                      <p>{capabilities[2]}</p>
                    </li>
                    <li>
                      <span>02</span>
                      <p>{capabilities[6]}</p>
                    </li>
                    <li>
                      <span>03</span>
                      <p>{capabilities[7]}</p>
                    </li>
                  </ol>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="cofigo-page__section cofigo-page__section--construction">
          <div className="cofigo-page__container cofigo-page__section-grid">
            <p className="cofigo-page__section-label">
              Construcción y decisiones
            </p>

            <div className="cofigo-page__section-content">
              <h2>
                Separar la experiencia del estudiante de la operación de la
                cafetería.
              </h2>

              <p>
                CofiGO combina una experiencia orientada al usuario con una
                operación administrativa capaz de gestionar productos,
                pedidos y estados. Frontend, backend y persistencia se
                despliegan de forma independiente.
              </p>

              <div
                className="cofigo-page__architecture"
                aria-label="Arquitectura principal de CofiGO"
              >
                <div className="cofigo-page__architecture-layer">
                  <span>01</span>
                  <p>Experiencia</p>
                  <strong>React Native + Expo</strong>
                </div>

                <div className="cofigo-page__architecture-layer">
                  <span>02</span>
                  <p>Backend</p>
                  <strong>Spring Boot</strong>
                </div>

                <div className="cofigo-page__architecture-layer">
                  <span>03</span>
                  <p>Persistencia</p>
                  <strong>MySQL</strong>
                </div>
              </div>

              <div className="cofigo-page__delivery">
                <p className="cofigo-page__delivery-label">Entrega</p>

                <div className="cofigo-page__delivery-flow">
                  <span>Vercel</span>
                  <span aria-hidden="true">+</span>
                  <span>Railway</span>
                </div>
              </div>

              <div
                className="cofigo-page__technologies"
                aria-label="Tecnologías principales de CofiGO"
              >
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <ol className="cofigo-page__decisions">
                <li>
                  <span>01</span>
                  <p>
                    Separar la experiencia del estudiante de la operación de la
                    cafetería.
                  </p>
                </li>

                <li>
                  <span>02</span>
                  <p>Modelar estados explícitos para el ciclo de cada pedido.</p>
                </li>

                <li>
                  <span>03</span>
                  <p>Evitar transiciones operativas inconsistentes.</p>
                </li>

                <li>
                  <span>04</span>
                  <p>
                    Mantener despliegues independientes para frontend y backend.
                  </p>
                </li>
              </ol>

              <div className="cofigo-page__visual cofigo-page__visual--section">
                <Image
                  className="cofigo-page__image"
                  src="/projects/cofigo-admin.png"
                  alt="Panel administrador de CofiGO para la gestión de productos y operación de la cafetería"
                  width={1401}
                  height={742}
                  sizes="(max-width: 48rem) calc(100vw - 2rem), 48rem"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cofigo-page__section cofigo-page__section--state">
          <div className="cofigo-page__container cofigo-page__section-grid">
            <p className="cofigo-page__section-label">Estado actual</p>

            <div className="cofigo-page__section-content">
              <h2>Implementación funcional full stack.</h2>

              <p>
                CofiGO cubre el recorrido desde la selección de productos hasta
                la creación, seguimiento y gestión operativa de los pedidos,
                incluyendo capacidades administrativas y reportes básicos.
              </p>

              <Link className="cofigo-page__return-link" href="/proyectos">
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
