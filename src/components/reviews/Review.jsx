import Stars from "../stars/Stars";

import CustomIcon from "../custom-icon/CustomIcon";
import { RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";

import "./Reviews.css";

const Review = ({
  sellerName,
  sellerImgURL,
  countryName,
  countryImgURL,
  description
}) => {
  return (
    <div className="item flex flex-column gap-3 flex-size-1 radius-md">
      <div className="user flex gap-3">
        <img className="pp" src={sellerImgURL} alt="" />
        <div className="info">
          <span>{sellerName}</span>
          <div className="country flex gap-2 items-center">
            <img className="flag" src={countryImgURL} alt="" />
            <span className="country">{countryName}</span>
          </div>
        </div>
      </div>

      <Stars>5</Stars>

      <p className="review-desc">{description}</p>

      <div className="helpful fw-500 flex items-center gap-3 mt-auto">
        <span>Helpful?</span>

        <button className="flex items-center gap-2">
          <CustomIcon
            icon={RiThumbUpLine}
            color="#666"
            size="1em"
            aria-label="A thumb up icon"
          />
          <span className="answer">Yes</span>
        </button>

        <button className="flex items-center gap-2">
          <CustomIcon
            icon={RiThumbDownLine}
            color="#666"
            size="1em"
            aria-label="A thumb down icon"
          />
          <span>No</span>
        </button>
      </div>
    </div>
  );
};

export default Review;
