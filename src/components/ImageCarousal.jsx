import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  const images = [
    {
      src: "https://herovired.com/wp-content/uploads/2023/01/webp-old-11-copy.webp",
      alt: "Image 1",
      text1: "Learning at",
      text2: "your fingertips",
      text3:
        "70-90% live classes with industry experts fostering a personalized & engaging learning experience",
    },
    {
      src: "https://herovired.com/wp-content/uploads/2023/01/Website-Banner_domain-atom-1.webp",
      alt: "Image 2",
      text1: "Our",
      text2: "Partners",
      text3: "Premium collaborations with industry leaders and global brands",
    },
    {
      src: "https://herovired.com/wp-content/uploads/2023/01/Website-Banner_Live-learning-1.webp",
      alt: "Image 3",
      text1: "Expand",
      text2: "Your Horizon",
      text3: "Master the skills you need to accelerate your career",
    },
    {
      src: "https://herovired.com/wp-content/uploads/2023/03/OP_WEB-1.webp",
      alt: "Image 4",
      text1: "Cutting edge",
      text2: "Domains",
      text3:
        " Scale up your ambitions with programs across innovative domains & sectors",
    },
  ];

  return (
    <div style={{ marginTop: 50 }}>
      <Carousel
        infiniteLoop={true}
        dynamicHeight={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
      >
        {images.map((image) => (
          <div key={image.src} style={{ position: "relative" }}>
            <img src={image.src} alt={image.alt} style={{ height: "550px" }} />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "50%",
                textAlign: "left",
                paddingLeft: "20px",
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "24px",
                textShadow: "1px 1px #000000",
              }}
            >
              <h2 style={{ fontSize: "50px" }}>{image.text1}</h2>
              <h1 style={{ fontSize: "80px" }}>{image.text2}</h1>
              <p>{image.text3}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
