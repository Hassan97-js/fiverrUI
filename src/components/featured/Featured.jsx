import assetsData from "../../assets";

const { heroManImage } = assetsData.images;
const { heroSearchIcon } = assetsData.icons;

import "./Featured.scss";

const Featured = () => {
  return (
    <section className="featured">
      <div className="container flex items-center">
        <div className="left flex flex-column gap-6">
          <h1>
            Find the perfect <i className="hl">freelance</i> services for your
            business
          </h1>

          <div className="flex justify-between bg-white radius-base overflow-hidden" role="Search">
            <div role="Search Input" className="flex items-center flex-size-1 gap-2">
              <img
                className="search-icon m-3"
                src={heroSearchIcon}
                alt="A search icon"
              />
              <input
                className="d-block w-100 h-100 border-0 outline-0"
                type="text"
                placeholder="Try building mobile app"
              />
            </div>

            <button className="btn--featured border-0 outline-0">Search</button>
          </div>

          <div className="popular flex items-center gap-3">
            <span className="fw-500">Popular:</span>
            <button className="btn--popular radius-full py-1 px-3">
              Web Design
            </button>
            <button className="btn--popular radius-full py-1 px-3">Wordpress</button>
            <button className="btn--popular radius-full py-1 px-3">
              Logo Design
            </button>
            <button className="btn--popular radius-full py-1 px-3">
              AI Services
            </button>
          </div>
        </div>

        <div className="right">
          <img src={heroManImage} alt="A Man Image" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
