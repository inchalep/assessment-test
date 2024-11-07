import React from "react";
import { cardData } from "../../constants/cardData";
import Card from "../card";
import OwlCarousel from "react-owl-carousel";

const Cardscomponent = () => {
  const options = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 3,
      },
    },
  };
  return (
    <div className='mid-wrapper mt-8 py-10'>
      <div className=''>
        <OwlCarousel className='owl-theme' {...options}>
          {cardData.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Cardscomponent;
