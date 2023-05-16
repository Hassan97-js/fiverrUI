import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill
} from "react-icons/ri";

import "./TrustedBy.scss";

const TrustedBy = () => {
  return (
    <section className="trusted-by flex flex-column items-center py-12">
      <strong>Trusted by:</strong>
      <div className="container flex justify-center items-center gap-6 py-2">
        <RiFacebookCircleFill size="2em" aria-label="A facebook logo" />
        <RiInstagramFill size="2em" aria-label="A Instagram logo" />
        <RiLinkedinBoxFill size="2em" aria-label="A LinkedIn logo" />
        <RiPinterestFill size="2em" aria-label="A Pinterest logo" />
        <RiTwitterFill size="2em" aria-label="A Twitter logo" />
      </div>
    </section>
  );
};

export default TrustedBy;
