import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slider({
  children,
  responsive,
  className = "",
  containerClass = "",
  styles = {},
  itemsClass = "",
  sliderClassName = "",
  slidesToSlide = 1
}) {
  return (
    <div style={styles}>
      <Carousel
        infinite={true}
        autoPlay={true}
        draggable={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass={containerClass}
        className={className}
        sliderClass={sliderClassName}
        itemClass={itemsClass}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        slidesToSlide={slidesToSlide}>
        {children}
      </Carousel>
    </div>
  );
}

export default Slider;
