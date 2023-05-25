import { RiStarFill } from "react-icons/ri";
import RemixIcon from "../remix-icon/RemixIcon";

const Stars = ({ children }) => {
  return (
    <div className="star flex items-center gap-2">
      <RemixIcon
        icon={RiStarFill}
        color="#e6cc00"
        size="1.2em"
        aria-label="A star icon"
      />

      <span>{children}</span>
    </div>
  );
};

export default Stars;
