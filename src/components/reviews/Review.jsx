import Stars from "../Stars";

import CustomIcon from "../CustomIcon";
import { RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";

function Review({
  sellerName,
  sellerImgURL,
  countryName,
  countryImgURL,
  description
}) {
  return (
    <div className="flex flex-col gap-3 flex-1 rounded-sm shadow-md px-8 py-6 min-w-[21.875rem] min-h-[23.75rem]">
      <div className="flex gap-3">
        <img
          className="w-8 h-8 object-cover object-center rounded-full"
          src={sellerImgURL}
          alt=""
        />

        <div>
          <span className="font-medium">{sellerName}</span>
          <div className="flex gap-2 items-center">
            <img
              className="w-4 h-4"
              src={countryImgURL}
              alt={`${countryName} flag`}
            />
            <span>{countryName}</span>
          </div>
        </div>
      </div>

      <Stars>5</Stars>

      <p className="max-w-[45ch]">{description}</p>

      <div className="font-medium flex items-center gap-3 mt-auto">
        <span>Helpful?</span>

        <button className="flex items-center gap-2">
          <CustomIcon icon={RiThumbUpLine} aria-label="A thumb up icon" />
          <span>Yes</span>
        </button>

        <button className="flex items-center gap-2">
          <CustomIcon icon={RiThumbDownLine} aria-label="A thumb down icon" />
          <span>No</span>
        </button>
      </div>
    </div>
  );
}

export default Review;
