"use client";
import React, { useEffect, useRef } from "react";

import image1 from "../Assets/Communication/zoom.png";
import image2 from "../Assets/Communication/microsoftTeams.png";
import image3 from "../Assets/Communication/googleMeet.png";
import image4 from "../Assets/Communication/Meeting.png";

import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

const CommunicationChannels = () => {
  let ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ref.current,
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
        ref={ref}
        id="communicationchannels"
        className="mb-12 md:w-full w-8/12 text-center text-3xl font-light gradientHover cursor-pointer"
      >
        Communication Channels
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-y-0 gap-y-8 w-[98vw] items-center">
        {[image1, image2, image3, image4].map((e, i) => {
          return (
            <div key={i} className="flex justify-center items-center">
              <Image
                src={e}
                alt={e.src}
                className={`${
                  e.src.includes("microsoftTeams")
                    ? "w-[65vw] md:w-[18vw]"
                    : "w-[35vw] md:w-[9vw]"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunicationChannels;
