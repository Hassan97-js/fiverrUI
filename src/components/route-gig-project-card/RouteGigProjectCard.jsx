import { Link } from "react-router-dom";
import { RiHeartFill } from "react-icons/ri";

import Stars from "../stars/Stars";

import { formatCurrency } from "../../utils";

import "./RouteGigProjectCard.scss";

const RouteGigProjectCard = ({ gig }) => {
  const { imgURL, client, price, description } = gig;

  const formattedPrice = formatCurrency(price);

  return (
    <Link
      to="/gig/123"
      className="route-project-card radius-base overflow-hidden pb-3">
      <div
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: 200
        }}
        role="image"></div>

      <div className="client-info flex-size-3 px-4 mt-5">
        <div className="flex flex-column gap-3">
          <div className="flex items-center gap-3">
            <img
              className="object-cover radius-full"
              src={client.profileURL}
              alt="a freelancing client image"
              width={30}
              height={30}
            />

            <strong>{client.fullName}</strong>
          </div>

          <span className="fw-500 mb-2">Gig: {gig.id}</span>
        </div>

        <p className="description light-text mb-5">{description}</p>

        <Stars>{client.stars}</Stars>

        <hr className="divider d-block w-100 my-4" />

        <div className="flex items-center justify-between">
          <RiHeartFill color="#f94449" size="1.2em" aria-label="A heart icon" />

          <div className="gig-details flex flex-column items-end">
            <p className="light-text upper">Starting at</p>
            <strong className="price">{formattedPrice}</strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RouteGigProjectCard;
