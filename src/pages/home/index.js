import React from "react";
import Banner from "../../components/banner";
import Features from "../../components/features";
import Journey from "../../components/journey";
import Slider from "../../components/slider";
import FAQ from "../../components/faq";
import Cardscomponent from "../../components/cardscomponent";

const Home = () => {
  return (
    <div className='min-h-screen pb-6'>
      <Banner />
      <Features />
      <Journey />
      <Slider />
      <FAQ />
      <Cardscomponent />
    </div>
  );
};

export default Home;
