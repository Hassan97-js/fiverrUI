import assetsData from "../../assets";

import Button from "../custom-button/Button";

import "./FiverrBusiness.scss";

const { fiverBusinessImage } = assetsData.images;
const { featuresCheckIcon } = assetsData.icons;

const FiverrBusiness = () => {
  return (
    <section className="fiverr-business py-24">
      <div className="container flex gap-28">
        <div className="left flex flex-column gap-10 flex-size-2">
          <div>
            <h1 className="heading-lg mb-2">fiverr business</h1>
            <h2 className="heading-xl mb-4">
              A business solution designed for teams
            </h2>

            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated for business
            </p>
          </div>

          <ul className="flex flex-column gap-4 fw-300" role="list">
            <div className="flex gap-3">
              <img
                className="icon self-start"
                src={featuresCheckIcon}
                alt="A check icon"
              />
              <li>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </li>
            </div>

            <div className="flex gap-3">
              <img
                className="icon self-start"
                src={featuresCheckIcon}
                alt="A check icon"
              />
              <li>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </li>
            </div>

            <div className="flex gap-3">
              <img
                className="icon self-start"
                src={featuresCheckIcon}
                alt="A check icon"
              />
              <li>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </li>
            </div>
          </ul>

          <Button className="w-max-content">Explore Fiverr Business</Button>
        </div>

        <div className="right flex-size-3">
          <img
            className="radius-base object-cover object-position-right w-100 h-100"
            src={fiverBusinessImage}
          />
        </div>
      </div>
    </section>
  );
};

export default FiverrBusiness;
