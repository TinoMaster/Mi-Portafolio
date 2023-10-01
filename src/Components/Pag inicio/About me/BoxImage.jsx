import React from "react";
import { vector2, vector3 } from "../../../svgs";
import { motion } from "framer-motion";
import { imageaboutme1, imageaboutme2 } from "../../../animation/framers";

export const BoxImage = () => {
  return (
    <div className="flex w-full h-full lg:w-1/2 lg:p-5 justify-center lg:justify-start">
      <div className="lg:w-1/2 flex gap-3">
        {/* block1 */}
        <motion.div
          variants={imageaboutme1}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1.8 }}
          className="flex flex-col gap-2 justify-center rounded-md bg-white items-end"
        >
          <div className="w-[120px] h-[150px] lg:w-[200px] lg:h-[250px] p-1 shadow-lg shadow-black/40 rounded-md">
            <img src={vector2} alt="1" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        {/* block2 */}
        <motion.div
          variants={imageaboutme2}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1.8 }}
          className="flex flex-col gap-2 justify-center rounded-md bg-white items-start "
        >
          <div className="w-[120px] h-[150px] lg:w-[200px] lg:h-[250px] p-1 shadow-lg shadow-black/40 rounded-md">
            <img
              src={vector3}
              alt="1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
