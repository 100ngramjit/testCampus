import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousal = () => {
  const images = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1025/1000/600/",
    "https://picsum.photos/id/1024/1000/600/",
    "https://picsum.photos/id/1021/1000/600/",
    "https://picsum.photos/id/1009/1000/600/",
  ];

  return (
    <Carousel
      infiniteLoop="true"
      dynamicHeight="true"
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
    >
      {images?.map((image) => (
        <img key={image} src={image} style={{ height: "550px" }} />
      ))}
    </Carousel>
  );
};

export default ImageCarousal;
