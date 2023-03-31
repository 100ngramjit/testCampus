import React from "react";
import { Carousel } from "react-responsive-carousel";
import * as images from "../assets/placements/images";

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
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage="20"
        showThumbs={false}
        interval={2000}
        transitionTime={2000}
        swipeable={true}
        emulateTouch={true}
        animation="slide"
      >
        {Object.entries(images).map(([key, value]) => (
          <img
            key={key}
            src={value}
            alt="gallery"
            style={{ height: 75, width: 150 }}
          />
        ))}
      </Carousel>
    </>
  );
}

export default ImageGallery;
