import { FaCheckCircle } from "react-icons/fa";

import Button from "../custom-button/Button";
import CustomIcon from "../custom-icon/CustomIcon";

import assetsData from "../../assets";

const { fiverBusinessImage } = assetsData.images;

// TODO: MAKE IT RESPONSIVE
const FiverrBusiness = () => {
  return (
    <section className="bg-indigo-950 text-white px-7 py-24">
      <div className="container mx-auto flex flex-col xl:flex-row gap-28">
        <div className="left flex flex-col gap-10 flex-1 text-base">
          <div>
            <h1 className="mb-2">fiverr business</h1>
            <h3 className="mb-4">A business solution designed for teams</h3>

            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated for business
            </p>
          </div>

          <ul className="flex flex-col gap-4 font-normal" role="list">
            <div className="flex items-center gap-3">
              <CustomIcon
                icon={FaCheckCircle}
                size="1em"
                aria-label="A check icon"
              />
              <li>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </li>
            </div>

            <div className="flex items-center gap-3">
              <CustomIcon
                icon={FaCheckCircle}
                size="1em"
                aria-label="A check icon"
              />
              <li>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </li>
            </div>

            <div className="flex items-center gap-3">
              <CustomIcon
                icon={FaCheckCircle}
                size="1em"
                aria-label="A check icon"
              />
              <li>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </li>
            </div>
          </ul>

          <Button className="max-w-max rounded-md">Explore Fiverr Business</Button>
        </div>

        <div>
          <img
            className="rounded-md object-cover object-right w-full h-full"
            src={fiverBusinessImage}
          />
        </div>
      </div>
    </section>
  );
};

export default FiverrBusiness;
