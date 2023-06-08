import { Link } from "react-router-dom";

function SliderGigCategoryCard({ item }) {
  const styles = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${item.imgURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <Link
      style={styles}
      className="block relative text-white w-full h-80"
      to="/gigs?category=design">
      <div className="pt-7 pl-7">
        <p className="font-thin">{item.description}</p>
        <p className="text-2xl font-medium">{item.title}</p>
      </div>
    </Link>
  );
}

export default SliderGigCategoryCard;
