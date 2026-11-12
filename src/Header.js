import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const nextTheme = storedTheme || (systemPrefersLight ? "light" : "dark");

    setTheme(nextTheme);
    document.body.classList.toggle("light-mode", nextTheme === "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);
    document.body.classList.toggle("light-mode", nextTheme === "light");
  };

  return (
    <header className="portfolio-header">
      <div className="container">
        <Link to="/" className="logo-link" aria-label="Thimira Savinda home">
          <span className="logo">
            Thimira<span> Savinda</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <nav id="primary-navigation" className={isOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
