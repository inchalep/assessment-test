import React from "react";

const Banner = () => {
  return (
    <div className=' md:flex md:justify-between md:items-center'>
      <div className='w-full md:w-6/12 p-6 md:p-11 pt-24 sm:pt-10'>
        <h2 className='text-headingColor font-bold text-[28px] md:text-4xl sm:mt-10 '>Insurance Housing</h2>
        <h3 className='text-headingColor text-[24px] leading-7 md:text-2xl my-2 font-semibold'>Home Repairs Ahead? We’ve Got Your Stay Covered</h3>
        <p className='mb-4 lg:pr-36'>
          Comprehensive housing solutions for those awaiting home repairs.
          Providing a comforting interim residence while insurance takes care of
          the rest. A seamless transition during unexpected times
        </p>
        <button className='btn'>Consult</button>
      </div>
      <figure className='w-full md:w-6/12'>
        <img
          src='https://cdn-2.matterport.com/apifs/models/2gM74GNQ6Tj/images/8CQctimQMWg/09.15.2021_12.00.02.jpg?t=2-6d653532eedda5cd9a5ec7878cf55a26a5c09c00-1731048431-1&k=apifs%2Fmodels%2F2gM74GNQ6Tj%2Fimages%2F8CQctimQMWg%2F09.15.2021_12.00.02.jpg&width=960'
          alt='explore housing'
        />
      </figure>
    </div>
  );
};

export default Banner;
