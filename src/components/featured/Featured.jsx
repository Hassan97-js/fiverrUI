import assetsData from "../../assets";

const { heroManImage } = assetsData.images;
const { heroSearchIcon } = assetsData.icons;

const Featured = () => {
  return (
    <section className="flex justify-center bg-green-950 text-white">
      <div className="container px-6 pt-7 flex lg:flex-row md:items-center justify-center flex-col gap-6">
        <div className="flex flex-col py-14 gap-6">
          <h1>
            Find the perfect <i className="text-green-400">freelance</i> services for
            your business
          </h1>

          <div
            className="flex md:flex-row md:justify-between flex-col bg-white rounded-sm overflow-hidden"
            role="Search">
            <div role="Search Input" className="flex items-center flex-1 gap-2">
              <img
                className="w-5 h-5 m-3"
                src={heroSearchIcon}
                alt="A search icon"
              />
              <input
                className="block w-full h-full border-0 outline-none"
                type="text"
                placeholder="Try building mobile app"
              />
            </div>

            <button className="w-full p-3 md:w-32 bg-green-600 text-white border-0 outline-none">
              Search
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="font-semibold">Popular:</span>

            <button className="text-white border text-sm border-white rounded-full py-1 px-3">
              Web Design
            </button>

            <button className="text-white border text-sm border-white rounded-full py-1 px-3">
              Wordpress
            </button>

            <button className="text-white border text-sm border-white rounded-full py-1 px-3">
              Logo Design
            </button>

            <button className="text-white border text-sm border-white rounded-full py-1 px-3">
              AI Services
            </button>
          </div>
        </div>

        <div className="self-end">
          <img src={heroManImage} alt="A Man Image" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
