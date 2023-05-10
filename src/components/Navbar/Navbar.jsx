import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { isActive } from "../../utils";

import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      isActive(setActive);
    });

    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const currentUser = {
    id: 1,
    name: "John Doe",
    isSeller: true
  };

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
          {!currentUser?.isSeller && <li className="link">Become a Seller</li>}

          {currentUser && (
            <li className="btn-wrapper">
              <button type="button" className="btn">
                Join
              </button>
            </li>
          )}
        </ul>

        {currentUser && (
          <div className="user">
            <figure>
              <div className="image-wrapper">
                <img
                  src="https://faces3.b-cdn.net/Colombia.png"
                  width={40}
                  height={40}
                  alt="Profile picture"
                />
              </div>

              <figcaption>{currentUser?.name}</figcaption>
            </figure>

            <div className="options">
              {currentUser?.isSeller && (
                <>
                  <p>Gigs</p>
                  <p>Add New Gig</p>
                </>
              )}

              <p>Orders</p>
              <p>Messages</p>
              <p>Logout</p>
            </div>
          </div>
        )}
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
