import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import html from "./assets/Logo/htmlLogo.svg";
import css from "./assets/Logo/CSS.svg";
import javascript from "./assets/Logo/javascript.svg";
import react from "./assets/Logo/react-2.svg";
import tailwind from "./assets/Logo/tailwind.svg";
import jquery from "./assets/Logo/jquery.svg";
import php from "./assets/Logo/php.svg";
import dapper from "./assets/Logo/daper.jpg";

export default function Technology() {
  const techList = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: javascript, label: "JavaScript" },
    { src: react, label: "React Js" },
    { src: tailwind, label: "Tailwind CSS" },
    { src: jquery, label: "Jquery" },
    { src: php, label: "PHP" },
    { src: dapper, label: "Dapper" },
  ];

  return (
    <div className="bg-[#1D1D1D] ">
      <div className="text-center pt-8 font-kreon items-center justify-center mx-1.5 ">
        <h1 className="text-5xl mb-4 font-bold text-body-yellow">Technology</h1>
        <span className="text-white text-2xl">
          This is the Technology I've Worked With, All Applied in My Projects
        </span>
      </div>

      <div className="grid grid-cols-1 mx-1.5 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-8 font-kreon font-bold text-2xl">
        {techList.map((tech, index) => (
          <TechItem key={index} src={tech.src} label={tech.label} />
        ))}
      </div>
    </div>
  );
}

function TechItem({ src, label }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.7)",
    config: { tension: 200, friction: 15 },
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg"
    >
      <div className="w-2/5 md:w-1/2 lg:w-1/2 flex justify-center">
        <img
          src={src}
          alt={`${label} Logo`}
          className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
        />
      </div>
      <div className="w-3/5 md:w-1/2 lg:w-1/2 flex justify-start">
        <span className="text-white">{label}</span>
      </div>
    </animated.div>
  );
}
