import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => window.removeEventListener("scroll", isActive);
  });

  return (
    <nav className={active ? "navbar active" : "navbar"}>
      <div className="nav-flex container">
        <div className="logo">
          <Link
            to="/"
            className="logo-link"
            rel="noopener noreferrer"
            aria-label="Logo"
            title="Logo">
            Logo
          </Link>
          <span className="dot">.</span>
        </div>

        <ul className="links" role="list">
          <li className="link">Fiverr Business</li>
          <li className="link">Explore</li>
          <li className="link">English</li>
          <li className="link">Sign in</li>
          <li className="link">Become a Seller</li>
          <li className="btn-wrapper">
            <button type="button" className="btn">
              Join
            </button>
          </li>
        </ul>
      </div>

      {/* Menu */}
      {active && (
        <>
          <div className="menu-separator" />

          <div className="menu container">
            <span>test</span>
            <span>test</span>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
