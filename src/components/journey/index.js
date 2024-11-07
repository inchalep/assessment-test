import React from "react";
import TimelineComponent from "../timelineComponent";
import { IoSettingsSharp } from "react-icons/io5";

const Journey = () => {
  return (
    <section className='mid-wrapper md:wrapper md:gap-x-4 md:flex md:justify-between md:items-start'>
      <div className='w-full md:w-6/12 pb-4'>
        <h3 className='text-headingColor text-xl font-bold mb-3 text-center'>
          The Journey With Us
        </h3>
        <TimelineComponent />
      </div>
      <div className='w-full md:w-6/12 bg-blueLight p-6 py-4'>
        <h3 className='text-headingColor text-xl font-bold'>
          Amenities? Always.
        </h3>
        <ul className='text-xl text-slate-500 flex flex-col gap-y-1'>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Fully Furnished</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Utilities</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Kitchen Appliances</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>High-Speed Internet</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Television</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Laundry Facilities</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Fitness Facilities</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Housekeeping</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Pet-Friendly Options</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Accessibility</span>
          </li>
          <li className='flex items-center gap-x-2'>
            <span>
              <IoSettingsSharp />
            </span>
            <span>Community Amenities</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Journey;
