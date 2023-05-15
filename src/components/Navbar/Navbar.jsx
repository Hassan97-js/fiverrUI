import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { isActive } from "../../utils";

import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => isActive(setActive));

    return () => window.removeEventListener("scroll", isActive);
  }, []);

  /* Handlers */
  const handleOpenMenu = () => setIsOpen((isOpen) => !isOpen);

  const currentUser = {
    id: 1,
    name: "John Doe",
    isSeller: true
  };

  const navbarClassName = `${
    active || pathname !== "/" ? "navbar active" : "navbar"
  }`;

  return (
    <nav className={navbarClassName}>
      <div className="flex-nav container py-6">
        <div className="logo">
          <Link to="." className="link" aria-label="Logo" title="Logo">
            Logo
          </Link>

          <span className="dot">.</span>
        </div>

        <ul className="links" role="list">
          <li>
            <Link to="." className="link" aria-label="Fiverr Business" title="Home">
              Fiverr Business
            </Link>
          </li>

          <li>
            <Link to="." className="link" aria-label="Explore" title="Explore">
              Explore
            </Link>
          </li>

          <li>
            <Link to="." className="link" aria-label="English" title="English">
              English
            </Link>
          </li>

          <li className="link">
            <Link to="login" className="link" aria-label="Login" title="Login">
              Login
            </Link>
          </li>

          {!currentUser?.isSeller && (
            <li>
              <Link
                to="."
                className="link"
                aria-label="Become a Seller"
                title="Become a Seller">
                Become a Seller
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="btn-wrapper">
              <button type="button" className="btn btn--join">
                Join
              </button>
            </li>
          )}
        </ul>

        <div className="relative">
          <figure className="user-info" onClick={handleOpenMenu}>
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

          {currentUser && (
            <div className={`${isOpen ? "user-menu open" : "user-menu"}`}>
              {currentUser?.isSeller && (
                <>
                  <Link className="link" to="mygigs" aria-label="Gigs" title="Gigs">
                    Gigs
                  </Link>
                  <Link
                    className="link"
                    to="add"
                    aria-label="Add New Gig"
                    title="Add New Gig">
                    Add New Gig
                  </Link>
                </>
              )}

              <Link className="link" to="orders" aria-label="Orders" title="Orders">
                Orders
              </Link>

              <Link
                className="link"
                to="."
                aria-label="Add New Gig"
                title="Messages">
                Messages
              </Link>

              <Link className="link" to="." aria-label="Logout" title="Logout">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      {(active || pathname !== "/") && (
        <>
          <div className="menu-separator" />

          <div className="menu container-fluid grid-menu py-6">
            <Link className="link" to=".">
              Graphics & Design
            </Link>

            <Link className="link" to=".">
              Video & Animation
            </Link>

            <Link className="link" to=".">
              Writing & Translation
            </Link>

            <Link className="link" to=".">
              AI Services
            </Link>

            <Link className="link" to=".">
              Digital Marketing
            </Link>

            <Link className="link" to=".">
              Music & Audio
            </Link>

            <Link className="link" to=".">
              Programming & Tech
            </Link>

            <Link className="link" to=".">
              Business
            </Link>

            <Link className="link" to=".">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
