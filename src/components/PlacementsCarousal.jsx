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
      centerSlidePercentage="25"
      showThumbs={false}
      interval={1000}
      transitionTime={300}
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
  );
}

export default ImageGallery;
