import Stars from "../stars/Stars";

import "./AboutSeller.css";

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
    <div className="about-seller">
      <div className="seller">
        <h2 className="seller-heading">About The Seller</h2>

        <div className="user flex items-center gap-3">
          <img
            className="self-start object-cover object-postion-center radius-full"
            width={50}
            height={50}
            src={sellerImg}
            alt=""
          />

          <div className="info flex flex-column gap-1">
            <span className="fw-500">{sellerName}</span>
            <div className="stars">
              <Stars>{rating}</Stars>
            </div>

            <button className="btn--outline btn--seller radius-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="box radius-base">
        <div className="items grid gap-3 p-4">
          <div className="item">
            <p className="title">From</p>
            <p className="desc">{fromCountry} </p>
          </div>
          <div className="item">
            <p className="title">Member since</p>
            <p className="desc">{memberDate} </p>
          </div>
          <div className="item">
            <p className="title">Avg. response time</p>
            <p className="desc">{responseTime} </p>
          </div>
          <div className="item">
            <p className="title">Last delivery</p>
            <p className="desc">{lastDelivery} </p>
          </div>
          <div className="item">
            <p className="title">Languages</p>
            <p className="desc">{languages} </p>
          </div>
        </div>

        <hr />

        <p className="p-4">{aboutSeller}</p>
      </div>
    </div>
  );
};

export default AboutSeller;
