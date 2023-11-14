"use client";
import React, { useEffect } from "react";
import Line2 from "../Components/Lines/Line2";

const BussinessConsciousleap = () => {
  useEffect(() => {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    const source = document.createElement("source");
    source.src = "/Why-consciousleap-for-Business.mp4";
    let videoElement = document.getElementById("container-bussiness");
    if (!videoElement.innerHTML.includes("Why-consciousleap")) {
      video.appendChild(source);
      document.getElementById("container-bussiness").appendChild(video);
    }
  }, []);

  return (
    <div className="flex flex-col items-center pt-[5vw]">
      <h1 className="text-2xl gradientHover cursor-pointer">
        consciousleap for Business
      </h1>
      <p className="mt-3 text-center">
        At consciousleap for Business, we take a collective mindful approach to
        mental health-related support services for Businesses.
      </p>
      <Line2 />
      <h1 className="text-2xl gradientHover cursor-pointer">
        Why consciousleap for Business?
      </h1>
      <div
        id="container-bussiness"
        className="px-4 py-4 rounded-md w-8/12 md:px-5"
      ></div>
      <Line2 />
      <div className="bgGlobe flex flex-col items-center h-[50vh] w-[42%]">
        <h1 className="text-2xl gradientHover cursor-pointer">
          Our Global Clients
        </h1>
        <p className="text-center mt-2">
          Some of our esteemed clients use consciousleap for Business at their
          workplace.
        </p>
      </div>
    </div>
  );
};

export default BussinessConsciousleap;
