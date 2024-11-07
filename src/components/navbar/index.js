import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full py-2'>
      <div className='w-full wrapper flex justify-between items-center'>
        <h1>
          <img
            src='https://ariescorporatehousing.com/wp-content/uploads/elementor/thumbs/logo-shadow-qgcic4hztjnl0finnw3o6xcujcxf2jqncd7n1m8we8.png'
            alt='Aries'
          />
        </h1>
        <nav className='flex gap-x-6'>
          <div className='hidden md:flex gap-x-6 text-lg'>
          <NavLink className='font-semibold text-white text-shadow'>Residences</NavLink>
          <NavLink className='font-semibold text-white text-shadow'>Servicing</NavLink>
          <NavLink className='font-semibold text-white text-shadow'>Discover</NavLink>
          </div>
          <button className='px-4 rounded-md text-white bg-sky-900 outline-none shadow-md'>
            Book
          </button>
          <button className='text-headingColor md:text-slate-200'>
            <FaPhoneAlt />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
