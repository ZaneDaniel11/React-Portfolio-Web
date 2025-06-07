"use client"
import { useSpring, animated } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

// Import your images
import insta from "./assets/Portfolio/insta.bmp"
import obms from "./assets/Portfolio/OBMS.bmp"
import pos from "./assets/Portfolio/POS.jpg"
import lifewood from "./assets/Portfolio/Lifewood.png"
import PortfolioPic from "./assets/Portfolio/Portfolio.png"
import Custodian from "./assets/Portfolio/Custodian.png"


export default function Portfolio() {
  const portfolioItems = [
   
     {
      id: 1,
      title: "Fix asset and Inventory Management System",
      imgSrc: Custodian,
      description: "React Js/Tailwind CSS/.Net Dapper/ShadcnUI",
    },
    {
      id: 2,
      title: "Bogo Central Bus Management System",
      imgSrc: obms,
      description: "PHP/CSS/JQUERY/JAVASCRIPT/PHP",
    },
    {
      id: 3,
      title: "Loan Management System",
      imgSrc: pos,
      description: "HTML/CSS/Bootsrap/.NET MVC",
    },
    {
      id: 4,
      title: "Point of Sale System",
      imgSrc: pos,
      description: "REACT JS/TAILWIND CSS/.NET Dapper",
    },
    {
      id: 5,
      title: "LifeWood Application System",
      imgSrc: lifewood,
      description: "REACT JS/TAILWIND CSS/.NET Dapper/React Redux",
    },
    {
      id: 6,
      title: "Portfolio Website",
      imgSrc: PortfolioPic,
      description: "REACT JS/TAILWIND CSS",
    },
     {
      id: 1,
      title: "Instagram Clone",
      imgSrc: insta,
      description: "PHP/CSS/JAVASCRIPT/AJAX/JQUERY/",
    },
  ]

  const [refH1, inViewH1] = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const h1Spring = useSpring({
    opacity: inViewH1 ? 1 : 0,
    transform: inViewH1 ? "scale(1)" : "scale(0.5)",
    config: { tension: 250, friction: 20 },
  })

  const [refSpan, inViewSpan] = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const spanSpring = useSpring({
    opacity: inViewSpan ? 1 : 0,
    transform: inViewSpan ? "scale(1)" : "scale(0.5)",
    config: { tension: 250, friction: 20 },
  })

  return (
    <div className="relative bg-[#F3B304] font-kreon h-auto py-8">
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

      <div className="grid grid-cols-1 mx-1.5 md:grid-cols-2 md:pb-[50px] lg:grid-cols-3 gap-8 px-4 pt-5">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={`${item.id}-${index}`}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

function PortfolioItem({ title, imgSrc, description, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  // Your original popup animation
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.7)",
    config: { tension: 200, friction: 15 },
    delay: index * 250,
  })

  return (
    <animated.div
      ref={ref}
      style={animation}
      className="group relative border-[4px] border-black rounded-md overflow-hidden h-96 lg:border-[4px] hover:shadow-2xl hover:shadow-black/30 transition-shadow duration-300"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-[60%] overflow-hidden">
        <img
          src={imgSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Floating Action Button */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#F3B304] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>

        {/* Tech Stack Pills */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <div className="flex flex-wrap gap-1">
            {description
              .split("/")
              .slice(0, 5)
              .map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-black/80 text-white text-xs rounded-full backdrop-blur-sm"
                >
                  {tech.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative h-[40%] flex flex-col items-center justify-center bg-[#1D1D1D] text-white p-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-3">
            <div className="w-12 h-1 bg-[#F3B304] mx-auto mb-3 rounded-full"></div>
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">{title}</h1>
          </div>

          <div className="space-y-2">
            <span className="text-sm md:text-lg lg:text-xl block leading-relaxed">{description}</span>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
              <div
                className="bg-[#F3B304] h-1 rounded-full transition-all duration-1000 delay-500"
                style={{ width: inView ? "100%" : "0%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F3B304] transform rotate-45 translate-x-8 translate-y-8 opacity-10"></div>
      </div>

      {/* Side Border Accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#F3B304] to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
    </animated.div>
  )
}
