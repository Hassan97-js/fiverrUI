import { Link } from "react-router-dom";

import "./SliderGigProjectCard.css";

const SliderGigProjectCard = ({ project }) => {
  const { imgURL, category, client } = project;

  return (
    <Link to="/" className="slider-project-card flex flex-column gap-4">
      <div className="project-img flex-size-2">
        <img className="radius-base" src={imgURL} alt={`${category} gig image`} />
      </div>

      <div className="client-info flex-size-3 flex items-center gap-3">
        <div className="client-img">
          <img
            className="object-cover radius-full"
            src={client.profileURL}
            alt="a freelancing client image"
            width={30}
            height={30}
          />
        </div>

        <div className="about">
          <strong>Gig: {project.id}</strong>
          <p>{client.fullName}</p>
        </div>
      </div>
    </Link>
  );
};

export default SliderGigProjectCard;
