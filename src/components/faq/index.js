import React from "react";
import { faqData } from "../../constants/fqaData";
import Accordian from "../accordian";

const FAQ = () => {
  return (
    <section className='mid-wrapper'>
      <h2 className='text-headingColor text-2xl my-5 md:text-4xl text-center font-bold'>
        Frequently Asked Questions (FAQs)
      </h2>
      <div className='py-1'>
        {faqData.map((item, index) => {
          return <Accordian key={index} data={item} />;
        })}
      </div>
    </section>
  );
};

export default FAQ;
