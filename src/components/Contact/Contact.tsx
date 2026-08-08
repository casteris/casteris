import "./Contact.css";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <p className="contact__eyebrow">Contacto</p>

        <div className="contact__content">
          <h2 id="contact-title" className="contact__title">
            Conversemos sobre tecnología, productos e ideas.
          </h2>

          <div className="contact__action">
            <p className="contact__description">
              Si estás explorando una iniciativa tecnológica, construyendo un
              producto o buscando convertir una idea en algo concreto, podemos
              conversar.
            </p>

            <a
              className="contact__button"
              href="mailto:contacto@casteris.com"
            >
              Escribir a Casteris
            </a>

            <a
              className="contact__email"
              href="mailto:contacto@casteris.com"
            >
              contacto@casteris.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
