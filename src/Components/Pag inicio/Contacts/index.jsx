import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
export const Contacts = ({ darkMode }) => {
  return (
    <div className="flex flex-wrap justify-center w-full max-w-720p m-auto font-serif">
      <h2 className="w-full text-xl md:text-2xl font-semibold text-center md:text-end mr-5 text-primary py-6 lg:py-10">
        CONTACT
      </h2>
      <div className="w-full flex flex-col items-center">
        {/* title */}
        <h3 className="w-full py-2 lg:py-5 text-2xl sm:text-4xl md:text-3xl flex items-center justify-center md:justify-start">
          Don't hesitate, Contact me{" "}
          <FaHandPointDown className="text-yellow-400 ml-1" />
        </h3>
        {/* Contacts links */}
        <div className="w-full flex flex-wrap">
          {/* Each contact */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center py-5 w-full md:w-[300px] rounded-md">
            {/* Icon */}
            <div className={`p-4 ${darkMode ?"bg-white":"bg-white"} rounded-full`}>
              <GrMapLocation className={`text-5xl ${darkMode ?"text-white":"text-white"}`} />
            </div>
            {/* indication */}
            <div className="">
              <span className="font-semibold text-lg">Location</span>
              <p className="text-lg text-primary/80">Rome,Italy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
