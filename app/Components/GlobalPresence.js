"use client";
import React, { useEffect, useRef } from "react";
import image from "../Assets/globe.png";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import logoPng from "../Assets/logoPng.png";

const GlobalPresence = () => {
  let globalHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      globalHeading.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: globalHeading.current,
          start: "top 70%",
          end: "top 40%",
        },
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        ref={globalHeading}
        className="mb-2 md:mb-16 text-3xl font-light gradientHover cursor-pointer"
      >
        Our Global Presence
      </h1>
      <p className="text-darkGrey md:w-full w-[90%] text-center">
        consciousleap is based in Estonia, Europe, and Mumbai, India, and is
        #ComingSoon in Dubai, UAE.
      </p>
      <div className="relative">
        <Image src={image} alt={image.src} className="mt-3 w-[100vw]" />
        {/* India */}
        <div className="absolute flex flex-col items-center justify-center md:top-[53%] top-[52%] cursor-pointer md:left-[66.5%] left-[69%] hover:scale-75 transition-all">
          <p className="text-transparent md:text-base text-xs bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen absolute -top-5">
            INDIA
          </p>
          <Image
            src={logoPng}
            alt="Logo png"
            className="cursor-pointer w-5/12 md:w-4/12 mt-0 md:mt-2"
          />
        </div>
        {/* Dubai */}
        <div className="absolute flex flex-col items-center justify-center md:top-[48%] cursor-pointer top-[49%] left-[50%] md:left-[57%] hover:scale-75 transition-all">
          <p className="text-transparent md:text-base text-xs bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen absolute -top-5">
            DUBAI
          </p>
          <Image
            src={logoPng}
            alt="Logo png"
            className="cursor-pointer w-5/12 md:w-4/12 md:my-1"
          />
          <p className="text-semibold text-xs text-center text-websiteBlue">
            #COMINGSOON
          </p>
        </div>
        {/* ESTONIA */}
        <div className="absolute flex flex-col items-center justify-center md:top-[29%] cursor-pointer top-[29%] md:left-[48%] left-[50%] hover:scale-75 transition-all">
          <p className="text-transparent md:text-base text-xs bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen absolute -top-5">
            ESTONIA
          </p>
          <Image
            src={logoPng}
            alt="Logo png"
            className="cursor-pointer w-5/12 md:w-4/12 mt-0 md:mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
