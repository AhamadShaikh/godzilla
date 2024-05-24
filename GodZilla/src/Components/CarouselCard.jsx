import React from "react";
import godzilla from "../assets/godzilla.png";

const CarouselCard = ({ img }) => {
  return (
    <div class="w-screen h-96 duration-700 ease-in-out">
      <img src={godzilla} alt="Carousel slide" />
    </div>
  );
};

export default CarouselCard;
