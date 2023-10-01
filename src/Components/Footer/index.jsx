import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full flex flex-wrap bg-primary/70 p-8 items-center text-lightMode font-semibold text-lg">
      {/* Primera caja */}
      <div className="w-full md:w-1/2 flex py-2 justify-center">
        <h3 className="text-center">Copyright © 2023. All rights are reserved</h3>
      </div>
      {/* Segunda caja */}
      <div className="w-full md:w-1/2 flex py-2 justify-center text-2xl">
        <p className="m-2">
          <FaGithub
            onClick={() => {
              window.open("https://github.com/TinoMaster", "_blank");
            }}
            className="hover:cursor-pointer hover:shadow-md hover:text-primary/90 transition-all rounded-full"
          />{" "}
        </p>
        <p className="m-2">
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/oscar-mallon-241260262/",
                "_blank"
              )
            }
            className="hover:cursor-pointer hover:shadow-md hover:text-primary/90 transition-all rounded-full"
          />{" "}
        </p>
        <p className="m-2">
          <FaTwitterSquare
            onClick={() =>
              window.open("https://twitter.com/Oscar16015874", "_blank")
            }
            className="hover:cursor-pointer hover:shadow-md hover:text-primary/90 transition-all rounded-full"
          />{" "}
        </p>
      </div>
    </div>
  );
};
