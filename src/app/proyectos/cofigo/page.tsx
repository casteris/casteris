import Link from "next/link";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./page.css";

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

            <h1 className="cofigo-page__title">
              Pedidos universitarios diseñados para reducir espera y simplificar
              la operación.
            </h1>

            <p className="cofigo-page__lead">
              CofiGO explora cómo conectar estudiantes y cafeterías mediante
              una experiencia digital que organiza pedidos, tiempos de recojo y
              operación alrededor de una necesidad cotidiana.
            </p>
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

        <section className="cofigo-page__section">
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

              <ul className="cofigo-page__capabilities">
                {capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="cofigo-page__section">
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
                className="cofigo-page__technologies"
                aria-label="Tecnologías principales de CofiGO"
              >
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <ul className="cofigo-page__decisions">
                <li>
                  Separar la experiencia del estudiante de la operación de la
                  cafetería.
                </li>
                <li>Modelar estados explícitos para el ciclo de cada pedido.</li>
                <li>Evitar transiciones operativas inconsistentes.</li>
                <li>
                  Mantener despliegues independientes para frontend y backend.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cofigo-page__section">
          <div className="cofigo-page__container cofigo-page__section-grid">
            <p className="cofigo-page__section-label">Estado actual</p>

            <div className="cofigo-page__section-content">
              <h2>Implementación funcional full stack.</h2>

              <p>
                CofiGO cubre el recorrido desde la selección de productos hasta
                la creación, seguimiento y gestión operativa de los pedidos,
                incluyendo capacidades administrativas y reportes básicos.
              </p>
            </div>
          </div>
        </section>

        <section className="cofigo-page__return">
          <div className="cofigo-page__container">
            <Link className="cofigo-page__return-link" href="/proyectos">
              ← Volver a proyectos
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
