import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill
} from "react-icons/ri";

import CustomIcon from "./CustomIcon";

const TrustedBy = () => {
  return (
    <section className="text-gray-500/60 flex flex-col items-center py-12">
      <strong className="text-base mb-2">Trusted by:</strong>

      <div className="container flex justify-center items-center gap-6 py-2">
        <CustomIcon
          icon={RiFacebookCircleFill}
          size="2em"
          aria-label="A facebook logo"
        />
        <CustomIcon
          icon={RiInstagramFill}
          size="2em"
          aria-label="A Instagram logo"
        />
        <CustomIcon
          icon={RiLinkedinBoxFill}
          size="2em"
          aria-label="A LinkedIn logo"
        />
        <CustomIcon
          icon={RiPinterestFill}
          size="2em"
          aria-label="A Pinterest logo"
        />
        <CustomIcon icon={RiTwitterFill} size="2em" aria-label="A Twitter logo" />
      </div>
    </section>
  );
};

export default TrustedBy;
