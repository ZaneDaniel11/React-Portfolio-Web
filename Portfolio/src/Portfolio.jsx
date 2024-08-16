import React from "react";
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

  return (
    <div className="bg-[#F3B304] font-kreon h-auto py-8  ">
      <div className="text-center mb-8 mx-1.5">
        <h1 className="text-5xl text-black font-bold">PORTFOLIO</h1>
        <div className="  mt-3">
          <span className="text-2xl text-black font-bold">
            A Collection I've Been Working On
          </span>
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
