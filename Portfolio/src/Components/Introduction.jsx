import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import picture from "../assets/profilepic.png";

export default function Introduction() {
  const [helloSpring, setHelloSpring] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
  }));

  const [webDevSpring, setWebDevSpring] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
  }));

  const [descSpring, setDescSpring] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
  }));

  const [buttonSpring, setButtonSpring] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
  }));

  const [imageSpring, setImageSpring] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
  }));

  useEffect(() => {
    setTimeout(
      () => setHelloSpring({ opacity: 1, transform: "scale(1)" }),
      200
    );
    setTimeout(
      () => setWebDevSpring({ opacity: 1, transform: "scale(1)" }),
      400
    );
    setTimeout(() => setDescSpring({ opacity: 1, transform: "scale(1)" }), 600);
    setTimeout(
      () => setButtonSpring({ opacity: 1, transform: "scale(1)" }),
      800
    );
    setTimeout(
      () => setImageSpring({ opacity: 1, transform: "scale(1)" }),
      1000
    );
  }, [
    setHelloSpring,
    setWebDevSpring,
    setDescSpring,
    setButtonSpring,
    setImageSpring,
  ]);

  return (
    <div className="block">
      <div className="flex flex-col h-100 bg-body-yellow font-kreon items-center justify-center">
        <div className="text-center">
          <animated.h1
            style={helloSpring}
            className="text-5xl mb-4 mt-12 font-bold text-custom-red"
          >
            Hello, I'm
          </animated.h1>
          <animated.p style={webDevSpring} className="text-4xl mb-2 font-bold">
            Web Developer
          </animated.p>
          <animated.p style={descSpring} className="text-2xl mb-6">
            I am a web developer in the Philippines
          </animated.p>
          <animated.button
            style={buttonSpring}
            className="bg-custom-red text-white px-9 py-2 rounded border-2 border-black"
          >
            Hire me
          </animated.button>
        </div>
        <animated.div style={imageSpring} className="mt-8 mb-10">
          <img
            src={picture}
            alt="Profile Pic"
            style={{ borderRadius: "185.5px" }}
          />
        </animated.div>
      </div>
    </div>
  );
}
