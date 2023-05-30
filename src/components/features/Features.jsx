import assetsData from "../../assets";

import { FaCheckCircle } from "react-icons/fa";
import CustomIcon from "../custom-icon/CustomIcon";

const { featuresVideo } = assetsData.videos;

const Features = () => {
  return (
    <section className="py-24">
      <div className="container flex flex-col mx-auto px-6 xl:flex-row gap-28">
        <div>
          <video
            className="rounded-md object-cover object-right w-full h-full"
            src={featuresVideo}
            muted
            autoPlay
            loop></video>
        </div>

        <div className="flex flex-col gap-10 flex-grow">
          <h1 className="text-neutral-900">
            A whole world of freelance talent at your fingertips
          </h1>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CustomIcon
                icon={FaCheckCircle}
                size="1em"
                aria-label="A check logo"
              />
              <span className="text-lg text-neutral-700 font-medium">
                The best for every budget
              </span>
            </div>
            <p className="text-neutral-600">
              Find high-quality services at every price point. No hourly rates, just
              project-based pricing.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CustomIcon
                icon={FaCheckCircle}
                size="1em"
                aria-label="A check logo"
              />
              <span className="text-lg text-neutral-700 font-medium">
                The best for every budget
              </span>
            </div>
            <p className="text-neutral-600">
              Find high-quality services at every price point. No hourly rates, just
              project-based pricing.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CustomIcon
                icon={FaCheckCircle}
                size="1em"
                aria-label="A check logo"
              />
              <span className="text-lg text-neutral-700 font-medium">
                The best for every budget
              </span>
            </div>
            <p className="text-neutral-600">
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
