import { FaCheck, FaRecycle, FaRegClock } from "react-icons/fa";

import CustomIcon from "./CustomIcon";

function GigCTA({
  price,
  priceText,
  description,
  deliveryDays,
  revisionsNumber,
  services
}) {
  return (
    <div className="text-neutral-700 flex flex-col gap-5 radius-md lg:sticky lg:top-80 self-start border border-neutral-300 py-8 px-10 mt-10">
      <div>
        <div className="mb-3">
          <h4 className="text-neutral-800 mb-2">{priceText}</h4>
          <span className="font-medium text-lg">${price}</span>
        </div>
        <p>{description}</p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <CustomIcon icon={FaRegClock} size="1em" aria-label="A clock icon" />
          <span>{deliveryDays} Days Delivery</span>
        </div>

        <div className="flex items-center gap-3">
          <CustomIcon icon={FaRecycle} size="1em" aria-label="A clock icon" />
          <span>{revisionsNumber} Revisions</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {services.map((service) => {
          return (
            <div key={service.id} className="item flex items-center gap-3">
              <CustomIcon
                icon={FaCheck}
                color="#16a34a"
                size="1em"
                aria-label="A check icon"
              />
              <span>{service.text}</span>
            </div>
          );
        })}

        <button className="btn btn-primary block w-full mt-5 tracking-wide">
          Continue
        </button>
      </div>
    </div>
  );
}

export default GigCTA;
