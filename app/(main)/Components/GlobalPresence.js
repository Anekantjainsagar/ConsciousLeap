"use client";
import React, { useState, useRef } from "react";
import image from "../Assets/globe.png";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import logoPng from "../Assets/logoPng.png";

const GlobalPresence = () => {
  let globalHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [showIndia, setShowIndia] = useState(false);
  const [setshowEstonia, setSetshowEstonia] = useState(false);
  const [setshowDubai, setSetshowDubai] = useState(false);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        ref={globalHeading}
        className="mb-2 md:mb-5 text-3xl font-light gradientHover cursor-pointer"
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
        <div
          className={`absolute md:scale-100 scale-50 flex flex-col items-center justify-center top-[53%] cursor-pointer left-[53%] md:left-[65%] min-[1300px]:left-[66%] min-[2000px]:left-[68%] transition-all`}
        >
          <p
            className={`text-transparent md:text-base text-xs bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen absolute -top-5 ${
              showIndia ? "block" : "hidden"
            }`}
          >
            INDIA
          </p>
          <Image
            src={logoPng}
            alt="Logo png"
            onMouseEnter={(e) => {
              setShowIndia(true);
            }}
            onMouseOut={(e) => {
              setShowIndia(true);
            }}
            onMouseLeave={(e) => {
              setShowIndia(false);
            }}
            className="cursor-pointer mac:w-7/12 w-5/12 md:w-3/12 mt-0 bubbleAnimate md:mt-2 hover:scale-125 transition-all"
          />
        </div>
        {/* Dubai */}
        <div className="absolute md:scale-100 scale-50 flex flex-col items-center justify-center cursor-pointer top-[46%] min-[2000px]:top-[48%] left-[45%] min-[2000px]:left-[58%] md:left-[57%]">
          <p
            className={`text-transparent md:text-base text-xs bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen absolute -top-5 ${
              setshowDubai ? "block" : "hidden"
            }`}
          >
            DUBAI
          </p>
          <Image
            src={logoPng}
            alt="Logo png"
            onMouseEnter={(e) => {
              setSetshowDubai(true);
            }}
            onMouseOut={(e) => {
              setSetshowDubai(true);
            }}
            onMouseLeave={(e) => {
              setSetshowDubai(false);
            }}
            className="cursor-pointer mac:w-7/12 w-5/12 md:w-3/12 bubbleAnimate mt-0 md:mt-2 hover:scale-125 transition-all"
          />
          <p
            className={`text-semibold text-xs mt-2 text-center text-websiteBlue ${
              setshowDubai ? "block" : "hidden"
            }`}
          >
            #COMINGSOON
          </p>
        </div>
        {/* ESTONIA */}
        <div className="absolute md:scale-100 scale-50 flex flex-col items-center justify-center cursor-pointer top-[29%] md:left-[46%] left-[36%] min-[1400px]:left-[49%]">
          <p
            className={`text-transparent md:text-base text-xs bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen absolute -top-5 ${
              setshowEstonia ? "block" : "hidden"
            }`}
          >
            ESTONIA
          </p>
          <Image
            src={logoPng}
            onMouseEnter={(e) => {
              setSetshowEstonia(true);
            }}
            onMouseOut={(e) => {
              setSetshowEstonia(true);
            }}
            onMouseLeave={(e) => {
              setSetshowEstonia(false);
            }}
            alt="Logo png"
            className="cursor-pointer mac:w-7/12 w-5/12 md:w-3/12 bubbleAnimate mt-0 md:mt-2 hover:scale-125 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
