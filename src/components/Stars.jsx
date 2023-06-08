import { RiStarFill } from "react-icons/ri";
import CustomIcon from "./CustomIcon";

const Stars = ({ children }) => {
  return (
    <div className="flex items-center gap-2">
      <CustomIcon
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
