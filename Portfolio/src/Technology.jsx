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
import bootrtrp from "./assets/Logo/bootstrp.png";
import shadcn from "./assets/Logo/shadcn.png";
import dotnet from "./assets/Logo/NET_Core_Logo.svg";
import figma from "./assets/Logo/Figma-logo.svg";
import Vite from "./assets/Logo/logo.svg";

export default function Technology() {
  const techList = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: javascript, label: "JavaScript" },
    { src: php, label: "PHP" },
    { src: php, label: "C#" },
    { src: react, label: "React Js" },
    { src: tailwind, label: "Tailwind CSS" },
    { src: jquery, label: "Jquery" },
    { src: dapper, label: "Dapper" },
    { src: bootrtrp, label: "Bootstrap" },
    { src: Vite, label: "Vite" },
    { src: shadcn, label: "Shadcn Ui" },
    { src: dotnet, label: ".Net" },
    { src: figma, label: "Figma" },
  ];

 
  const [refH1, inViewH1] = useInView({
    triggerOnce: true,
    threshold: 1, 
  });
  const h1Spring = useSpring({
    opacity: inViewH1 ? 1 : 0,
    transform: inViewH1 ? "scale(1)" : "scale(0.5)", 
    config: { tension: 250, friction: 20 },
  });

 
  const [refSpan, inViewSpan] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const spanSpring = useSpring({
    opacity: inViewSpan ? 1 : 0,
    transform: inViewSpan ? "scale(1)" : "scale(0.5)", 
    config: { tension: 250, friction: 20 },
  });

  return (
    <div className="bg-[#1D1D1D] overflow-x-hidden ">
      <div className="text-center pt-8 font-kreon items-center justify-center mx-1.5 md:pt-[120px] lg:pb-[100px]">
        <animated.h1
          ref={refH1}
          style={h1Spring}
          className="text-5xl mb-4 font-bold text-body-yellow md:text-7xl pb-[20px] lg:text-9xl lg:pb-[40px]"
        >
          Technology
        </animated.h1>
        <animated.span
          ref={refSpan}
          style={spanSpring}
          className="text-white text-2xl md:text-4xl lg:text-5xl "
        >
          This is the Technology I've Worked With, All Applied in My Projects
        </animated.span>
      </div>

      <div className="grid grid-cols-1 mx-1.5 md:grid-cols-2 md:pb-[120px] lg:grid-cols-3 gap-6 mt-10 p-8 font-kreon font-bold text-2xl">
        {techList.map((tech, index) => (
          <TechItem
            key={index}
            src={tech.src}
            label={tech.label}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function TechItem({ src, label, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.7)",
    config: { tension: 200, friction: 15 },
    delay: index * 150,
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className="flex items-center justify-center border-2 border-gray-600 h-24 bg-gray-800 rounded-lg md:h-[130px]"
    >
      <div className="w-2/5 md:w-1/2 lg:w-1/2 flex justify-center">
        <img
          src={src || "/placeholder.svg"}
          alt={`${label} Logo`}
          className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
        />
      </div>
      <div className="w-3/5 md:w-1/2 lg:w-1/2 flex justify-start">
        <span className="text-white md:text-[30px] lg:text-[40px]">
          {label}
        </span>
      </div>
    </animated.div>
  );
}