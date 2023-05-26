import { FaCheck, FaRecycle, FaRegClock } from "react-icons/fa";

import Button from "../custom-button/Button";
import CustomIcon from "../custom-icon/CustomIcon";

import "./GigCTA.css";

const GigCTA = ({
  price,
  priceText,
  description,
  deliveryDays,
  revisionsNumber,
  services
}) => {
  return (
    <div className="gig-cta flex flex-column gap-4 radius-md">
      <div>
        <div className="price">
          <span>{priceText}</span>
          <h2>${price}</h2>
        </div>
        <p>{description}</p>
      </div>

      <div className="details flex items-center gap-5">
        <div className="item flex items-center gap-3">
          <CustomIcon
            icon={FaRegClock}
            color="#666"
            size="1em"
            aria-label="A clock icon"
          />
          <span>{deliveryDays} Days Delivery</span>
        </div>

        <div className="item flex items-center gap-3">
          <CustomIcon
            icon={FaRecycle}
            color="#666"
            size="1em"
            aria-label="A clock icon"
          />
          <span>{revisionsNumber} Revisions</span>
        </div>
      </div>

      <div className="gig-services-wrapper flex flex-column gap-3">
        {services.map((service) => {
          return (
            <div key={service.id} className="item flex items-center gap-3">
              <CustomIcon
                icon={FaCheck}
                color="#7dca5c"
                size="1em"
                aria-label="A check icon"
              />
              <span>{service.text} </span>
            </div>
          );
        })}

        <Button className="d-block w-100">Continue</Button>
      </div>
    </div>
  );
};

export default GigCTA;
