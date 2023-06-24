import { Link } from "react-router-dom";
import { RiHeartFill } from "react-icons/ri";

import CustomIcon from "./CustomIcon";
import Stars from "./Stars";

import { formatCurrency, getRatingAverage } from "../utils";

function GigCard({
  userInfo,
  gigId,
  gigCoverImg,
  category,
  price,
  description,
  totalStars = 1,
  starNumber = 1
}) {
  const styles = {
    backgroundImage: `url(${gigCoverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top"
  };

  const { username, imgURL } = userInfo;

  const formattedPrice = formatCurrency(price);
  const gigRating = getRatingAverage(totalStars / starNumber);

  // JSX
  const fallbackImg = "https://picsum.photos/200";

  return (
    <Link
      to={`/gig/${gigId}`}
      className="max-w-sm shadow-md rounded-sm overflow-hidden pb-3">
      <div style={styles} className="h-48" role="image"></div>

      <div className="px-4 mt-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 mb-5">
            <img
              className="object-cover rounded-full w-8 h-8"
              src={imgURL || fallbackImg}
              alt="a freelancing client image"
            />

            <strong className="font-semibold">
              <span>{username}</span>
              <p>({category})</p>
            </strong>
          </div>

          {/* <span className="font-medium text-neutral-500 mb-2">Gig: {counter}</span> */}
        </div>

        <p className="mb-5 truncate">{description}</p>

        <Stars>{gigRating}</Stars>

        <hr className="block w-full my-4" />

        <div className="flex items-center justify-between">
          <CustomIcon
            icon={RiHeartFill}
            colorOverride={true}
            className="text-red-500"
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
}

export default GigCard;
