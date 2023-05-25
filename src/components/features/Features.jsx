import assetsData from "../../assets";

import "./Features.css";

const { featuresVideo } = assetsData.videos;
const { featuresCheckIcon } = assetsData.icons;

const Features = () => {
  return (
    <section className="features py-24">
      <div className="container flex gap-28">
        <div className="left flex-size-3">
          <video
            className="radius-base object-cover object-position-right w-100 h-100"
            src={featuresVideo}
            muted
            autoPlay
            loop></video>
        </div>

        <div className="right flex flex-column gap-10 flex-size-2">
          <h1 className="mb-4">
            A whole world of freelance talent at your fingertips
          </h1>

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
      </div>
    </section>
  );
};

export default Features;
