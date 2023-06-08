import { FaCheckCircle } from "react-icons/fa";

import CustomIcon from "./CustomIcon";

import assetsData from "../assets";

const { fiverBusinessImage } = assetsData.images;

function FiverrBusiness() {
  return (
    <section className="bg-indigo-950 text-white px-6 py-24">
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
                className="shrink-0"
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
                className="shrink-0"
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
                className="shrink-0"
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

          <button className="btn btn-primary self-start">
            Explore Fiverr Business
          </button>
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
}

export default FiverrBusiness;
