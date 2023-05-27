import Stars from "../stars/Stars";

const AboutSeller = ({
  sellerName,
  sellerImg,
  rating,
  fromCountry,
  memberDate,
  responseTime,
  lastDelivery,
  languages,
  aboutSeller
}) => {
  return (
    <div className="text-neutral-700">
      <div>
        <h2 className="text-neutral-800 mb-6 font-medium">About The Seller</h2>

        <div className="user">
          <div className="flex gap-3">
            <img
              className="self-start w-12 h-12 object-cover object-postion-center rounded-full"
              src={sellerImg}
              alt=""
            />

            <div className="info flex flex-col gap-1">
              <span className="fw-500">{sellerName}</span>
              <div className="stars">
                <Stars>{rating}</Stars>
              </div>
            </div>
          </div>

          <button className="border border-neutral-800 font-medium rounded-md mb-9 mt-7 py-1 px-5">
            Contact me
          </button>
        </div>
      </div>

      <div className="box border border-neutral-200 w-full max-w-lg rounded-sm">
        <div className="grid md:grid-cols-2 gap-3 p-4">
          <div>
            <p>From</p>
            <p className="font-medium">{fromCountry} </p>
          </div>

          <div>
            <p>Member since</p>
            <p className="font-medium">{memberDate} </p>
          </div>

          <div>
            <p>Avg. response time</p>
            <p className="font-medium">{responseTime} </p>
          </div>

          <div>
            <p>Last delivery</p>
            <p className="font-medium">{lastDelivery} </p>
          </div>

          <div>
            <p>Languages</p>
            <p className="font-medium">{languages} </p>
          </div>
        </div>

        <hr />

        <p className="p-4">{aboutSeller}</p>
      </div>
    </div>
  );
};

export default AboutSeller;
