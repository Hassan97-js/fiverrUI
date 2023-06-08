import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { makeApiRequest } from "../../utils";
import { useClickAway, useScroll } from "../../hooks";

import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const [isOpen] = useClickAway(dropdownRef);
  const [active] = useScroll();

  const handleLogout = async () => {
    try {
      await makeApiRequest("post", "auth/logout");
      
      // use Context API instead (LATER)
      localStorage.removeItem("currentUser");
      navigate("/");
    } catch (error) {
      throw Error(error);
    }
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="navbar flex flex-col items-center justify-center bg-white drop-shadow-md px-8">
      <div className="relative container flex flex-col gap-10 lg:flex-row lg:gap-0 items-center justify-between w-full py-5">
        <div className="font-bold text-3xl">
          <Link to="." className="link" aria-label="Logo" title="Logo">
            fiverr
          </Link>

          <span className="text-green-400">.</span>
        </div>

        <ul
          className="flex flex-col lg:flex-row items-center gap-8 font-medium"
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
              <button className="btn btn-secondary">Join</button>
            </li>
          )}
        </ul>

        <div className="relative">
          <figure className="flex items-center gap-3 m-0 cursor-pointer">
            <div className="image-wrapper">
              {!!currentUser && (
                <img
                  className="w-10 h-10 rounded-full object-cover object-center"
                  src={currentUser?.img || "https://faces3.b-cdn.net/Colombia.png"}
                  alt="Profile picture"
                />
              )}
            </div>

            <figcaption className="select-none font-medium">
              {currentUser?.username}
            </figcaption>
          </figure>

          {currentUser && (
            <div
              ref={dropdownRef}
              className={`user-menu flex flex-col gap-3 w-52 p-4 bg-white rounded-md border border-gray-300 text-gray-600 font-normal cursor-pointer ${
                isOpen ? "open" : ""
              } font-medium`}>
              {currentUser?.isSeller && (
                <>
                  <Link className="link" to="mygigs" aria-label="Gigs" title="Gigs">
                    Gigs
                  </Link>

                  <Link
                    className="link"
                    to="/add"
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

              <Link
                className="link"
                to="."
                aria-label="Logout"
                title="Logout"
                onClick={handleLogout}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <div
        className={`container grid-menu ${
          active && pathname === "/" ? "open" : ""
        } text-gray-800 transition-all`}>
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
    </nav>
  );
};

export default Navbar;
