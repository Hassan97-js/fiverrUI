import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { uiData } from "../../data";

const { responsive } = uiData;

import "./Slider.scss";

const Silder = ({ children }) => {
  return (
    <section className="slider py-24">
      <div className="container">
        <Carousel
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
          {children}
        </Carousel>
      </div>
    </section>
  );
};

export default Silder;
