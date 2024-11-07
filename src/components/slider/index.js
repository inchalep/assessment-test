import React from "react";
import OwlCarousel from "react-owl-carousel";

const Slider = () => {
  const options = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 1000,
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
        items: 6,
      },
    },
  };
  return (
    <div className='pt-24 pb-5'>
      <OwlCarousel className='owl-theme' {...options}>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/1-Fireplace.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/Pool.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/18camden-pier-district-apartments-stpetersburg-florida-sky-lounge-1.jpg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/1-Fireplace.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/Pool.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/18camden-pier-district-apartments-stpetersburg-florida-sky-lounge-1.jpg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/1-Fireplace.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/Pool.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/18camden-pier-district-apartments-stpetersburg-florida-sky-lounge-1.jpg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/1-Fireplace.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/Pool.jpeg?fit=300%2C300&ssl=1' />
        </div>
        <div>
          <img src='https://i0.wp.com/ariescorporatehousing.com/wp-content/uploads/2023/12/18camden-pier-district-apartments-stpetersburg-florida-sky-lounge-1.jpg?fit=300%2C300&ssl=1' />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;
