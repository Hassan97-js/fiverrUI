import { RiStarFill } from "react-icons/ri";
import CustomIcon from "./CustomIcon";

function Stars({ children }) {
  return (
    <div className="flex items-center gap-2">
      <CustomIcon
        icon={RiStarFill}
        colorOverride={true}
        className="text-yellow-400"
        size="1.2em"
        aria-label="A star icon"
      />

      <span>{children}</span>
    </div>
  );
}

export default Stars;
