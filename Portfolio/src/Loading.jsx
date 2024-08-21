import React, { useEffect } from "react";
import "./load.css";
import qoobee from "./assets/load.gif";

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] text-black bg-body-yellow">
      <div>
        <h1 className="text-5xl md:text-7xl font-kreon font-bold flex items-center">
          L
          <div className="mb-8 relative">
            <img
              src={qoobee}
              alt="Loading"
              className=" w-16 h-16 sm:translate-y- sm:w-20 sm:h-20 md:w-20 md:h-20 ml-[10px]"
            />
          </div>
          ading
          <span className="text-custom-red ml-2 text-8xl">
            <span className="inline-block animate-bounce animation-delay-200">
              .
            </span>
            <span className="inline-block animate-bounce animation-delay-400">
              .
            </span>
            <span className="inline-block animate-bounce animation-delay-600">
              .
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
