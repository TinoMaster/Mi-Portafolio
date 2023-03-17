import React from "react";
import githubImage from "../../../assets/images/github.jpg";
import reactImage from "../../../assets/images/reactpng.png";
import javascriptImage from "../../../assets/images/Javascript_Logo.png";
import cssImage from "../../../assets/images/css.png";
import htmlImage from "../../../assets/images/html.png";
import nodeImage from "../../../assets/images/node.png";
import expressImage from "../../../assets/images/express.png";
import nextImage from "../../../assets/images/nextjs.png";
import reduxImage from "../../../assets/images/redux.png";
import mongoImage from "../../../assets/images/mongo.png";

export const BoxTechs = () => {
  return (
    <div className="flex flex-wrap w-full left-14 top-10 lg:top-14 lg:left-20">
      {/* techs */}
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md border-2 border-red-300 shadow-md lg:w-12 lg:h-12 shadow-red-400/30 relative overflow-hidden w-8 h-8 m-1 lg:m-2">
          <img src={htmlImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 lg:w-12 lg:h-12 border-2 border-sky-400 shadow-lg shadow-sky-400/20 h-8  m-1 lg:m-2">
          <img src={cssImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 border-2 lg:w-12 lg:h-12 border-yellow-400 shadow-lg shadow-yellow-400/20 h-8 m-1 lg:m-2">
          <img src={javascriptImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 border-2 lg:w-12 lg:h-12 border-sky-400 shadow-lg shadow-sky-400/30 h-8 m-1 lg:m-2">
          <img src={reactImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 border-2 lg:w-12 lg:h-12 border-green-500 shadow-lg shadow-green-500/30 h-8 m-1 lg:m-2">
          <img src={nodeImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 border-2 lg:w-12 lg:h-12 border-slate-500 shadow-lg shadow-slate-500/30 h-8 m-1 lg:m-2">
          <img src={expressImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 border-2 lg:w-12 lg:h-12 border-sky-300 shadow-lg shadow-sky-500/30 h-8 m-1 lg:m-2">
          <img src={nextImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 border-2 lg:w-12 lg:h-12 border-violet-300 shadow-lg shadow-violet-500/30 h-8 m-1 lg:m-2">
          <img src={reduxImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md relative overflow-hidden w-8 border-2 lg:w-12 lg:h-12 border-green-300 shadow-lg shadow-green-500/30 h-8 m-1 lg:m-2">
          <img src={mongoImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="w-1/5 flex justify-center pb-2">
        <div className="rounded-md border-2 lg:w-12 lg:h-12 border-black shadow-md shadow-black/40 relative overflow-hidden w-8 h-8 m-1 lg:m-2">
          <img src={githubImage} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};
