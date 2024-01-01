"use client";
import React, { useEffect, useRef } from "react";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
// import "~video-react/dist/video-react.css";
// import { Player } from "video-react";

const Whyconsciousleap = () => {
  let ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    const source = document.createElement("source");
    source.src = "/Why-consciousleap.mp4";
    let videoElement = document.getElementById("video-container");
    if (!videoElement.innerHTML.includes("Why-consciousleap")) {
      video.appendChild(source);
      document.getElementById("video-container").appendChild(video);
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        id="whyconsciousleap?"
        ref={ref}
        className="mb-10 md:mb-16 text-3xl font-light gradientHover cursor-pointer"
      >
        Why consciousleap?
      </h1>
      <div id="video-container" className="px-4 rounded-md md:px-5 min-[2500px]:px-0"></div>
    </div>
  );
};
export default Whyconsciousleap;
