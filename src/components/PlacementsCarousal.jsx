import React from "react";
import { Carousel } from "react-responsive-carousel";
import * as images from "../assets/placements/images";

function ImageGallery() {
  console.log(images);
  return (
    <Carousel
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage="10"
      showThumbs={false}
      interval={3000}
      transitionTime={3000}
      swipeable={true}
      emulateTouch={true}
      animation="slide"
    >
      {Object.entries(images).map(([key, value]) => (
        <img
          key={key}
          src={value}
          alt="gallery"
          style={{ height: 35, width: 90 }}
        />
      ))}
    </Carousel>
  );
}

export default ImageGallery;
