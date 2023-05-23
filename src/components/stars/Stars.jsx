import { RiStarFill } from "react-icons/ri";

const Stars = ({ children }) => {
  return (
    <div className="star flex items-center gap-2">
      <RiStarFill color="#e6cc00" size="1.2em" aria-label="A star icon" />
      <span>{children}</span>
    </div>
  );
};

export default Stars;
