"use client";

import Link from "next/link";
import { useState } from "react";
import "./Header.css";

const navigationItems = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Fundador", href: "#fundador" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link
          className="site-header__wordmark"
          href="/"
          aria-label="Casteris, ir al inicio"
        >
          Casteris
        </Link>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`site-header__navigation ${
            isMenuOpen ? "site-header__navigation--open" : ""
          }`}
          aria-label="Navegación principal"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              className="site-header__link"
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
