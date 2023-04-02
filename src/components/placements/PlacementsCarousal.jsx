import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import * as images from "../../assets/placements/images";
import { MobileViewContext } from "../../context/WindowSizeContext";
import "./style.css";

function ImageGallery() {
  const value = useContext(MobileViewContext);
  return (
    <>
      <div className="text-center mb-5">
        <h3 className="section_header">Where our learners work</h3>
        <p>
          Programs with built-in career and placement assistance for our
          learners to find success and growth
        </p>
      </div>

      {!value ? (
        <Carousel
          className="carousal_parent"
          showIndicators={false}
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage="25"
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
      ) : (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center align-items-center">
            {Object.entries(images).map(([key, value]) => (
              <div className="col placement_logos" key={key}>
                <img
                  src={value}
                  alt="gallery"
                  className="img-fluid rounded logo_width"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
