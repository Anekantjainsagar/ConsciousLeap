"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap, { ScrollTrigger } from "gsap/all";

const CommunicationChannels = () => {
  let ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        ref={ref}
        id="communicationchannels"
        className="mb-12 md:w-fit mx-auto w-8/12 text-center text-3xl font-light gradientHover cursor-pointer"
      >
        Communication Channels
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-y-0 gap-y-8 w-[98vw] items-center">
        {[
          "/Assets/Communication/zoom.png",
          "/Assets/Communication/microsoftTeams.png",
          "/Assets/Communication/googleMeet.png",
          "/Assets/Communication/Meeting.png",
        ].map((e, i) => {
          return (
            <div key={i} className="flex justify-center items-center">
              <Image
                src={e}
                alt={'src'}
                width={1000}
                height={1000}
                className={`${
                  e.includes("microsoftTeams")
                    ? "w-[65vw] md:w-[18vw]"
                    : e?.includes("google")
                    ? "w-[45vw] md:w-[10vw]"
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
