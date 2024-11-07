import React from "react";

const Card = ({ data }) => {
  return (
    <div className='w-full'>
      <figure>
        <img src={data.thumbnail} className='rounded-md' />
      </figure>
      <h3 className='my-3 text-xl text-bluePrimary font-bold'>{data.title}</h3>
      <p className='text-lg'>{data.description}</p>
    </div>
  );
};

export default Card;
