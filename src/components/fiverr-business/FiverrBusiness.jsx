import assetsData from "../../assets";

import "./FiverrBusiness.scss";

const { fiverBusinessImage } = assetsData.images;
const { featuresCheckIcon } = assetsData.icons;

const FiverrBusiness = () => {
  return (
    <section className="fiverr-business py-24">
      <div className="container flex flex-center gap-28">
        <div className="left flex flex-column gap-10 flex-size-2">
          <div>
            <h1 className="">fiverr business</h1>
            <h2 className="heading-lg">A business solution designed for teams</h2>
          </div>

          <div>
            <div className="title">
              <img src={featuresCheckIcon} alt="A check icon" />
              <span>The best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just
              project-based pricing.
            </p>
          </div>

          <div>
            <div className="title">
              <img src={featuresCheckIcon} alt="A check icon" />
              <span>The best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just
              project-based pricing.
            </p>
          </div>

          <div>
            <div className="title">
              <img src={featuresCheckIcon} alt="A check icon" />
              <span>The best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just
              project-based pricing.
            </p>
          </div>
        </div>
        <div className="right flex-size-3">
          <img src={fiverBusinessImage} width={"100%"} height={"100%"}></img>
        </div>
      </div>
    </section>
  );
};

export default FiverrBusiness;
