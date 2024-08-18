import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import insta from "./assets/Portfolio/insta.bmp";
import obms from "./assets/Portfolio/OBMS.bmp";
import pos from "./assets/Portfolio/POS.jpg";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Instagram Clone",
      imgSrc: insta,
      description: "HTML/CSS/JAVASCRIPT/AJAX/JQUERY/PHP",
    },
    {
      id: 2,
      title: "Bogo Central Bus Management System",
      imgSrc: obms,
      description: "HTML/CSS/JQUERY/JAVASCRIPT/PHP",
    },
    {
      id: 3,
      title: "Point of Sale System",
      imgSrc: pos,
      description: "REACT JS/TAILWIND CSS/.NET Dapper",
    },
    {
      id: 4,
      title: "Point of Sale System",
      imgSrc: pos,
      description: "REACT JS/TAILWIND CSS/.NET Dapper",
    },
    {
      id: 5,
      title: "Point of Sale System",
      imgSrc: pos,
      description: "REACT JS/TAILWIND CSS/.NET Dapper",
    },
    {
      id: 6,
      title: "Point of Sale System",
      imgSrc: pos,
      description: "REACT JS/TAILWIND CSS/.NET Dapper",
    },
  ];

  // Animation for h1
  const [refH1, inViewH1] = useInView({
    triggerOnce: true,
    threshold: 1, // 100% in view
  });

  const h1Spring = useSpring({
    opacity: inViewH1 ? 1 : 0,
    transform: inViewH1 ? "scale(1)" : "scale(0.5)",
    config: { tension: 250, friction: 20 },
  });

  // Animation for span
  const [refSpan, inViewSpan] = useInView({
    triggerOnce: true,
    threshold: 1, // 100% in view
  });

  const spanSpring = useSpring({
    opacity: inViewSpan ? 1 : 0,
    transform: inViewSpan ? "scale(1)" : "scale(0.5)",
    config: { tension: 250, friction: 20 },
  });

  return (
    <div className="bg-[#F3B304] font-kreon h-auto py-8">
      <div className="text-center mb-8 mx-1.5 lg:pb-[80px]">
        <animated.h1
          ref={refH1}
          style={h1Spring}
          className="text-5xl text-black font-bold md:text-7xl md:pt-[100px] lg:text-9xl"
        >
          PORTFOLIO
        </animated.h1>
        <div className="mt-3 md:mt-6 lg:mt-10">
          <animated.span
            ref={refSpan}
            style={spanSpring}
            className="text-2xl text-black font-bold md:text-4xl lg:text-6xl mt-7"
          >
            A Collection I've Been Working On
          </animated.span>
        </div>
      </div>

      <div className="grid grid-cols-1 mx-1.5 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-5">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioItem({ title, imgSrc, description, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.7)",
    config: { tension: 200, friction: 15 },
    delay: index * 250, // Reduced delay for smoother appearance
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className="border-[4px] border-black rounded-md overflow-hidden h-96 lg:border-[4px]"
    >
      <div className="h-[60%]">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="h-[40%] flex flex-col items-center justify-center bg-[#1D1D1D] text-white p-4">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
          {title}
        </h1>
        <span className="text-sm md:text-lg lg:text-xl">{description}</span>
      </div>
    </animated.div>
  );
}
