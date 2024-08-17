import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "HTML/CSS/PHP/JAVASCRIPT",
      imgSrc: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Testing",
      imgSrc: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Testing",
      imgSrc: "https://via.placeholder.com/300x200",
    },
  ];

  // Animation for h1
  const [refH1, inViewH1] = useInView({
    triggerOnce: true,
    threshold: 1, // 100% in view
  });

  const h1Spring = useSpring({
    opacity: inViewH1 ? 1 : 0,
    transform: inViewH1 ? "scale(1)" : "scale(0.5)", // Increased pop-up effect
    config: { tension: 250, friction: 20 },
  });

  // Animation for span
  const [refSpan, inViewSpan] = useInView({
    triggerOnce: true,
    threshold: 1, // 100% in view
  });

  const spanSpring = useSpring({
    opacity: inViewSpan ? 1 : 0,
    transform: inViewSpan ? "scale(1)" : "scale(0.5)", // Increased pop-up effect
    config: { tension: 250, friction: 20 },
  });

  return (
    <div className="bg-[#F3B304] font-kreon h-auto py-8">
      <div className="text-center mb-8 mx-1.5">
        <animated.h1
          ref={refH1}
          style={h1Spring}
          className="text-5xl text-black font-bold md:text-7xl md:pt-[100px]"
        >
          PORTFOLIO
        </animated.h1>
        <div className="mt-3 md:mt-6">
          <animated.span
            ref={refSpan}
            style={spanSpring}
            className="text-2xl text-black font-bold md:text-4xl"
          >
            A Collection I've Been Working On
          </animated.span>
        </div>
      </div>

      <div className="grid grid-cols-1 mx-1.5 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-5">
        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioItem({ title, imgSrc }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`border-[3px] border-[#1D1D1D] rounded-lg overflow-hidden transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="h-[60%]">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="h-[40%] flex items-center justify-center bg-[#1D1D1D] text-white p-4">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
