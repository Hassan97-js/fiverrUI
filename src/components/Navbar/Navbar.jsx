import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../custom-button/Button";

import { isActive } from "../../utils";

import "./Navbar.css";

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

  return (
    <nav
      className={`flex flex-col items-center justify-center bg-green-900 text-white drop-shadow-xl px-8 ${
        active || pathname !== "/"
          ? "navbar navbar--active bg-white text-neutral-900"
          : "navbar"
      }`}>
      <div className="container relative flex flex-col gap-6 lg:flex-row lg:gap-0 items-center justify-between w-full py-5">
        <div className="font-bold text-3xl">
          <Link to="." className="link" aria-label="Logo" title="Logo">
            fiverr
          </Link>

          <span className="text-green-400">.</span>
        </div>

        <ul
          className="flex flex-col lg:flex-row items-center gap-8 font-medium font-montserrat"
          role="list">
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
            <li>
              <Button
                type="button"
                className="text-white py-2 px-4 rounded-md border border-green-600 bg-green-600">
                Join
              </Button>
            </li>
          )}
        </ul>

        <div className="relative">
          <figure
            className="flex items-center gap-3 m-0 cursor-pointer"
            onClick={handleOpenMenu}>
            <div className="image-wrapper">
              <img
                className="rounded-full object-cover object-center"
                src="https://faces3.b-cdn.net/Colombia.png"
                width={40}
                height={40}
                alt="Profile picture"
              />
            </div>

            <figcaption className="user-select-none">{currentUser?.name}</figcaption>
          </figure>

          {currentUser && (
            <div
              className={`flex flex-col gap-3 w-52 p-4 bg-white rounded-md border border-gray-300 text-gray-600 cursor-pointer ${
                isOpen ? "user-menu open" : "user-menu"
              } font-montserrat`}>
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
                to="messages"
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

          <div className="menu container grid-menu sr-only md:not-sr-only p-6">
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
