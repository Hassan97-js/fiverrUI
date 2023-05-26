import { Link } from "react-router-dom";
import { RiHeartFill } from "react-icons/ri";

import CustomIcon from "../custom-icon/CustomIcon";
import Stars from "../stars/Stars";

import { formatCurrency } from "../../utils";

import "./RouteGigProjectCard.css";

const RouteGigProjectCard = ({ gig }) => {
  const { imgURL, client, price, description } = gig;

  const styles = {
    backgroundImage: `url(${imgURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top"
  };

  const formattedPrice = formatCurrency(price);

  return (
    <Link to="/gig/123" className="shadow-md rounded-sm overflow-hidden pb-3">
      <div style={styles} className="h-48" role="image"></div>

      <div className="px-4 mt-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              className="object-cover rounded-full w-8 h-8"
              src={client.profileURL}
              alt="a freelancing client image"
            />

            <strong className="font-semibold">{client.fullName}</strong>
          </div>

          <span className="font-medium text-neutral-500 mb-2">Gig: {gig.id}</span>
        </div>

        <p className="mb-5">{description}</p>

        <Stars>{client.stars}</Stars>

        <hr className="block w-full my-4" />

        <div className="flex items-center justify-between">
          <CustomIcon
            icon={RiHeartFill}
            color="#f94449"
            size="1.2em"
            aria-label="A heart icon"
          />

          <div className="flex flex-col items-end">
            <p className="uppercase text-neutral-500 text-sm font-medium">
              Starting at
            </p>
            <strong className="text-lg font-semibold">{formattedPrice}</strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RouteGigProjectCard;
