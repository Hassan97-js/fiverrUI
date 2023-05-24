import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Slider.scss";

const Slider = ({
  children,
  responsive,
  className = "",
  containerClass = "",
  draggable,
  infinite,
  autoPlay,
  autoPlaySpeed,
  keyBoardControl,
  removeArrowOnDeviceType,
  styles = {},
  itemsClass = "",
  sliderClassName = "",
  slidesToSlide = 1
}) => {
  return (
    <div style={styles}>
      <Carousel
        className={className}
        containerClass={containerClass}
        draggable={draggable}
        responsive={responsive}
        infinite={infinite}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={keyBoardControl}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        itemClass={itemsClass}
        slidesToSlide={slidesToSlide}
        sliderClass={sliderClassName}>
        {children}
      </Carousel>
    </div>
  );
};

export default Slider;
