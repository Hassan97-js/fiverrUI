import assetsData from "../assets";

const { heroManImage } = assetsData.images;
const { heroSearchIcon } = assetsData.icons;

const Featured = () => {
  return (
    <section className="flex justify-center text-gray-800 bg-gray-200/60">
      <div className="container px-6 pt-7 flex lg:flex-row md:items-center justify-center flex-col gap-6">
        <div className="flex flex-col py-14 gap-10">
          <h1>
            Find the perfect <i className="text-green-600">freelance</i> services for
            your business
          </h1>

          <div
            className="flex flex-col md:flex-row md:justify-between rounded"
            role="Search">
            <div
              role="Search Input"
              className="bg-white flex items-center flex-1 gap-2">
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

            <button className="btn-sharp btn-primary md:w-36 rounded-tr-lg rounded-br-lg">
              Search
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="font-semibold">Popular:</span>

            <button className="border border-gray-600 text-sm font-medium rounded-full py-1 px-3">
              Web Design
            </button>

            <button className="border border-gray-600 text-sm font-medium rounded-full py-1 px-3">
              Wordpress
            </button>

            <button className="border border-gray-600 text-sm font-medium rounded-full py-1 px-3">
              Logo Design
            </button>

            <button className="border border-gray-600 text-sm font-medium rounded-full py-1 px-3">
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
