import React from "react";
import { Carousel } from "react-responsive-carousel";
import AluminiCard from "./AluminiCard";

const AluminiCardCarousal = () => {
  return (
    <Carousel
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage="25"
      interval={3000}
      stopOnHover={false}
      showThumbs={false}
      transitionTime={300}
      swipeable={true}
      emulateTouch={true}
      animation="slide"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
        (ele) => (
          <AluminiCard key={ele} />
        )
      )}
    </Carousel>
  );
};

export default AluminiCardCarousal;
