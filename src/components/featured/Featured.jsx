import assetsData from "../../assets";

const { heroManImage } = assetsData.images;
const { heroSearchIcon } = assetsData.icons;

import "./Featured.scss";

const Featured = () => {
  return (
    <section className="featured">
      <div className="container d-flex align-items-center">
        <div className="left d-flex flex-column gap-4">
          <h1 className="h1 mb-0">
            Find the perfect <i className="hl">freelance</i> services for your
            business
          </h1>

          <div
            className="d-flex justify-content-between bg-white rounded-2"
            role="Search">
            <div
              role="Search Input"
              className="search-input d-flex align-items-center gap-2">
              <img
                className="search-icon m-3"
                src={heroSearchIcon}
                alt="A search icon"
              />
              <input
                className="border-0 outline-0"
                type="text"
                placeholder="Try building mobile app"
              />
            </div>

            <button className="btn--featured">Search</button>
          </div>

          <div className="popular d-flex align-items-center gap-3">
            <span>Popular:</span>
            <button className="btn--popular btn-sm rounded-3 py-1 px-3 rounded-pill">
              Web Design
            </button>
            <button className="btn--popular btn-sm rounded-3 py-1 px-3 rounded-pill">
              Wordpress
            </button>
            <button className="btn--popular btn-sm rounded-3 py-1 px-3 rounded-pill">
              Logo Design
            </button>
            <button className="btn--popular btn-sm rounded-3 py-1 px-3 rounded-pill">
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
