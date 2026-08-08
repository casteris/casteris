import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand">
          <p className="site-footer__wordmark">Casteris</p>

          <p className="site-footer__tagline">
            Comprender. Construir. Liderar.
          </p>
        </div>

        <nav
          className="site-footer__links"
          aria-label="Enlaces externos de Casteris"
        >
          <a
            className="site-footer__link"
            href="https://github.com/casteris/casteris"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="site-footer__link"
            href="https://www.linkedin.com/company/casteris"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>

        <p className="site-footer__copyright">
          © 2026 Casteris
        </p>
      </div>
    </footer>
  );
}
