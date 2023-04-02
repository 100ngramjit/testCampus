import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { MobileViewContext } from "../../context/WindowSizeContext";
import AluminiCard from "../testimonials/AluminiCard";

const AluminiCardCarousal = () => {
  const value = useContext(MobileViewContext);

  return (
    <>
      <div className="text-center mb-5">
        <h3 className="section_header">Hear straight from our learners</h3>
        <p>
          Hear our learners talk about their learning experience and share the
          impact on their professional lives
        </p>
      </div>
      {/* <Carousel
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage="25"
        showThumbs={true}
        swipeable={true}
        emulateTouch={true}
        interval={2000}
        transitionTime={2000}
        showStatus={false}
        animation="slide"
      > */}
      <div className="d-flex flex-wrap justify-content-center g-5">
        <AluminiCard />
        <AluminiCard />
        <AluminiCard />
        <AluminiCard />
      </div>
      {/* </Carousel> */}
    </>
  );
};

export default AluminiCardCarousal;
