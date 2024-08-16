import React from "react";
import html from "./assets/Logo/htmlLogo.svg";
import css from "./assets/Logo/CSS.svg";
import javascript from "./assets/Logo/javascript.svg";
import react from "./assets/Logo/react-2.svg";
import tailwind from "./assets/Logo/tailwind.svg";
import jquery from "./assets/Logo/jquery.svg";
import php from "./assets/Logo/php.svg";
import dapper from "./assets/Logo/daper.jpg";


export default function Technology() {
  return (
    <div className="bg-[#1D1D1D]">
      <div className="text-center pt-8 font-kreon items-center justify-center">
        <h1 className="text-5xl mb-4 font-bold text-body-yellow">Technology</h1>
        <span className="text-white text-2xl">
          This is the Technology I've Worked With, All Applied in My Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-8 font-kreon font-bold text-2xl ">
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img src={html} alt="HTML Logo" className="h-20 w-20 mr-4" />
          <span className="text-white ">HTML</span>
        </div>
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img src={css} alt="CSS Logo" className="h-20 w-20 mr-4" />
          <span className="text-white ">CSS</span>
        </div>
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img
            src={javascript}
            alt="JavaScript Logo"
            className="h-12 w-20 mr-4"
          />
          <span className="text-white ">JavaScript</span>
        </div>
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img
            src={react}
            alt="JavaScript Logo"
            className="h-12 w-20 mr-4"
          />
          <span className="text-white ">React Js</span>
        </div>
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img
            src={tailwind}
            alt="JavaScript Logo"
            className="h-12 w-20 mr-4"
          />
          <span className="text-white ">Tailwind Css</span>
        </div>
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img
            src={jquery}
            alt="JavaScript Logo"
            className="h-12 w-20 mr-4"
          />
          <span className="text-white ">Jquery</span>
        </div>
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img
            src={php}
            alt="JavaScript Logo"
            className="h-12 w-20 mr-4"
          />
          <span className="text-white ">PHP</span>
        </div>
        <div className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg">
          <img
            src={dapper}
            alt="JavaScript Logo"
            className="h-12 w-20 mr-4"
          />
          <span className="text-white ">Dapper</span>
        </div>
      </div>
    </div>
  );
}
