import { Link } from "react-router-dom";

import ArrowIcon from "./ArrowIcon";

const Breadcrumb = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 md:space-x-3 mb-8">
        <li>
          <Link
            to="/"
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition">
            Home
          </Link>
        </li>

        <li>
          <div className="flex items-center">
            <ArrowIcon />
            <Link
              to="/gigs"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-800 md:ml-2 transition">
              Gigs
            </Link>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <ArrowIcon />
            <Link
              to="/gig/123"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-800 md:ml-2 transition">
              Gig
            </Link>
          </div>
        </li>

        <li aria-current="page">
          <div className="flex items-center">
            <ArrowIcon />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
              Current
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
