import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import CarouselCard from "./CarouselCard";

const carousel_top = [
  { img: 'https://www.shutterstock.com/image-photo/home-office-dress-code-girl-strict-1719984745' },
  { img: 'https://www.shutterstock.com/image-vector/shorten-url-marketing-short-website-address-2326241827' },
  { img: 'https://www.shutterstock.com/image-vector/scan-pay-woman-sits-next-shopping-2305807205' },
  { img: 'https://www.shutterstock.com/image-vector/url-shortener-use-scissors-address-bar-2210269047' },
];

const Carousel = () => {
  return (
    <ResponsiveCarousel
      showArrows={true}
      showThumbs={false}
      showStatus={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {carousel_top.map((item, index) => (
        <CarouselCard key={index} img={item.img} />
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
