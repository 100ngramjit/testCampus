import React from "react";
import { Carousel } from "react-responsive-carousel";
import AluminiCard from "../testimonials/AluminiCard";

const AluminiCardCarousal = () => {
  return (
    <>
      <div className="text-center mb-5">
        <h3 className="section_header">Hear straight from our learners</h3>
        <p>
          Hear our learners talk about their learning experience and share the
          impact on their professional lives
        </p>
      </div>
      <Carousel
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage="25"
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        interval={2000}
        transitionTime={2000}
        showStatus={false}
        animation="slide"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (ele) => (
            <AluminiCard key={ele} />
          )
        )}
      </Carousel>
    </>
  );
};

export default AluminiCardCarousal;
