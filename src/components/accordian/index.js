import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordian = ({ data }) => {
  const [isToggle, setIstoggle] = useState(false);
  const handleToggle = () => {
    setIstoggle((prev) => !prev);
  };
  return (
    <div className='my-3'>
      <div
        role='button'
        className='flex justify-between items-center px-3 py-1 bg-blueLight rounded-md'
        onClick={handleToggle}
      >
        <p className='p-3'>{data.question}</p>
        <button>{isToggle ? <FaChevronUp /> : <FaChevronDown />}</button>
      </div>
      {isToggle ? <p className='py-6 px-7 text-xl border border-slate-200 my-1' >{data.answer}</p> : null}
    </div>
  );
};

export default Accordian;
