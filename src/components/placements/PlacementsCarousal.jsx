import React from "react";
import { Carousel } from "react-responsive-carousel";
import * as images from "../../assets/placements/images";
import "./style.css";

function ImageGallery() {
  console.log(images);
  return (
    <>
      <div className="text-center mb-5">
        <h3 className="section_header">Where our learners work</h3>
        <p>
          Programs with built-in career and placement assistance for our
          learners to find success and growth
        </p>
      </div>

      <Carousel
        className="carousal_parent"
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage="15"
        showThumbs={false}
        interval={1500}
        transitionTime={2000}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
        animation="slide"
        stopOnHover={false}
      >
        {Object.entries(images).map(([key, value]) => (
          <img key={key} src={value} alt="gallery" style={{ width: 180 }} />
        ))}
      </Carousel>
    </>
  );
}

export default ImageGallery;
