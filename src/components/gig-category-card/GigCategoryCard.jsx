import { Link } from "react-router-dom";

import "./GigCategoryCard.scss";

const GigCategoryCard = ({ item }) => {
  return (
    <Link
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${item.imgURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="category-card block relative text-white text-white"
      to="/gigs?category=design">
      {/* <img className="w-100 object-cover" src={item.imgURL} alt={item.description} /> */}
      <span className="category-card-description fw-300 absolute">
        {item.description}
      </span>
      <span className="category-card-title fw-500 text-2xl absolute">
        {item.title}
      </span>
    </Link>
  );
};

export default GigCategoryCard;
