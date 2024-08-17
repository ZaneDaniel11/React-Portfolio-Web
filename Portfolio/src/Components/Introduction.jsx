import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import profilePic from "../assets/profilepic.png";
import "../CSS/Introduction.css";

export default function Introduction() {
  const [helloSpring, setHelloSpring] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.9)",
  }));
  const [Namewhat, setName] = useSpring(() => ({
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

  // Typing animation states
  const [displayText, setDisplayText] = useState("Zane Daniel");
  const texts = ["Web Developer", "Zane Daniel"];
  const typingSpeed = 150;
  const eraseSpeed = 100;
  const delayBeforeErase = 1500;
  const delayBeforeTypingStarts = 3000; // 2 seconds delay

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let timeout;

    const type = () => {
      const currentText = texts[textIndex];
      if (isErasing) {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          charIndex--;
          timeout = setTimeout(type, eraseSpeed);
        } else {
          isErasing = false;
          textIndex = (textIndex + 1) % texts.length;
          timeout = setTimeout(type, typingSpeed);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(type, typingSpeed);
        } else {
          isErasing = true;
          timeout = setTimeout(type, delayBeforeErase);
        }
      }
    };

    timeout = setTimeout(type, delayBeforeTypingStarts);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setTimeout(
      () => setHelloSpring({ opacity: 1, transform: "scale(1)" }),
      200
    );
    setTimeout(() => setName({ opacity: 1, transform: "scale(1)" }), 400);
    setTimeout(() => setDescSpring({ opacity: 1, transform: "scale(1)" }), 600);
    setTimeout(
      () => setButtonSpring({ opacity: 1, transform: "scale(1)" }),
      800
    );
    setTimeout(
      () => setImageSpring({ opacity: 1, transform: "scale(1)" }),
      1000
    );
  }, [setHelloSpring, setName, setDescSpring, setButtonSpring, setImageSpring]);

  return (
    <div className="block">
      <div className="flex flex-col md:flex-row h-auto bg-body-yellow font-kreon items-center md:items-start justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 px-4 py-6 md:py-8 lg:px-10 md:pt-[120px] md:pb-[120px] lg:pt-[130px] lg:pb-[170px]">
        <div className="text-center md:text-left lg:ml-20">
          <animated.h1
            style={helloSpring}
            className="text-5xl m-0 mb-4 font-bold text-custom-red md:text-7xl lg:text-9xl"
          >
            Hello, I'm
          </animated.h1>
          <animated.p
            style={Namewhat}
            className="text-4xl mb-2 font-bold md:text-5xl lg:text-8xl lg:mt-6 relative whitespace-nowrap"
          >
            {displayText}
            <span className="cursor"></span> {/* Cursor element */}
          </animated.p>
          <animated.p
            style={descSpring}
            className="text-2xl mb-6 md:text-3xl lg:text-5xl lg:mt-4"
          >
            I am a web developer in the Philippines
          </animated.p>
          <animated.button
            style={buttonSpring}
            className="bg-custom-red text-white px-9 py-2 rounded border-2 border-black md:px-16 md:border-[3px] md:text-2xl lg:w-[210px] lg:h-[50px] lg:mt-7 "
          >
            Hire me
          </animated.button>
        </div>
        <animated.div
          style={imageSpring}
          className="mt-8 mb-10 md:mt-0 lg:mr-20"
        >
          <img
            src={profilePic}
            alt="Profile Pic"
            style={{ borderRadius: "185.5px" }}
            className="lg:w-[512px]"
          />
        </animated.div>
      </div>
    </div>
  );
}
