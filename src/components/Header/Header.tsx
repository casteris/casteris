"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = pathname === "/";

  const navigationItems = [
    {
      label: "Capacidades",
      href: isHomePage ? "#capacidades" : "/#capacidades",
    },
    {
      label: "Proyectos",
      href: isHomePage ? "#proyectos" : "/proyectos",
    },
    {
      label: "Fundador",
      href: isHomePage ? "#fundador" : "/#fundador",
    },
    {
      label: "Contacto",
      href: isHomePage ? "#contacto" : "/#contacto",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link
          className="site-header__wordmark"
          href="/"
          onClick={closeMenu}
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
            <Link
              key={item.label}
              className="site-header__link"
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}