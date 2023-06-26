import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const contacts = [
  {
    name: "Location",
    description: "Rome,Italy",
    icon: <IoLocationSharp />,
    link: "/",
  },
  {
    name: "Email",
    description: "ommallono@gmail.com",
    icon: <TfiEmail />,
    link: "mailto:ommallono@gmail.com",
  },
];

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
          {contacts?.map((el) => (
            <div
              key={el.name}
              className="flex flex-wrap justify-center md:justify-start gap-3 items-center py-5 w-full md:w-[300px] rounded-md"
            >
              {/* Icon */}
              <div className="w-full flex justify-center md:w-auto">
                <div
                  className={`p-4 ${
                    darkMode ? "bg-white " : "bg-white/10"
                  } rounded-full text-4xl shadow-xl shadow-primary/10 border-2 border-primary/20`}
                >
                  {el.icon}
                </div>
              </div>
              {/* indication */}
              <div className="flex flex-col items-center md:items-start">
                <span className="font-semibold text-lg">{el.name}</span>
                <a
                  href={el.link}
                  className="text-lg text-primary/80 hover:cursor-pointer hover:text-primary/50 transition-all"
                >
                  {el.description}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
