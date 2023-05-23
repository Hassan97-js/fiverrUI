import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Slider.scss";

const Slider = ({
  children,
  responsive,
  draggable,
  infinite,
  autoPlay,
  autoPlaySpeed,
  keyBoardControl,
  removeArrowOnDeviceType,
  styles = {},
  itemsClass = ""
}) => {
  return (
    <div style={styles}>
      <Carousel
        draggable={draggable}
        responsive={responsive}
        infinite={infinite}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={keyBoardControl}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        itemClass={itemsClass}>
        {children}
      </Carousel>
    </div>
  );
};

export default Slider;
