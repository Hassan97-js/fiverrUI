import { Link } from "react-router-dom";
import { RiHeartFill, RiStarFill } from "react-icons/ri";

import { formatCurrency } from "../../utils";

import "./RouteGigProjectCard.scss";

const RouteGigProjectCard = ({ gig }) => {
  const { imgURL, category, client, price, description } = gig;

  const formattedPrice = formatCurrency(price);

  return (
    <Link to="/" className="route-project-card flex flex-column gap-4 radius-base">
      <img
        className="project-img flex-size-2"
        src={imgURL}
        alt={`${category} gig image`}
      />

      <div className="client-info flex-size-3 flex flex-column gap-3">
        <div className="flex">
          <img
            className="object-cover radius-full"
            src={client.profileURL}
            alt="a freelancing client image"
            width={30}
            height={30}
          />

          <div className="about">
            <strong>Gig: {gig.id}</strong>
            <p>{client.fullName}</p>
          </div>
        </div>

        <p className="gig-description">{description}</p>

        <div className="flex gap-1">
          <RiStarFill size="1.2em" aria-label="A star icon" />
          <span>{client.stars}</span>
        </div>

        <hr className="d-block w-100 my-4" />

        <div className="flex justify-between">
          <RiHeartFill size="1.2em" aria-label="A heart icon" />

          <div>
            <p className="price-text upper">Starting at</p>
            <strong className="price">{formattedPrice}</strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RouteGigProjectCard;
