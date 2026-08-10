import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./page.css";

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
              Trabajo construido por Casteris.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
