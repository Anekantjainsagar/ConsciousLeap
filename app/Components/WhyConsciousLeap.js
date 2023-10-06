"use client";
import React, { useEffect, useRef } from "react";
import image from "../Assets/youtube.jpeg";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

const WhyConsciousLeap = () => {
  let ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    if (window.innerWidth > 550 && typeof window !== "undefined") {
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
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        id="whyconsciousleap?"
        ref={ref}
        className="mb-10 md:mb-16 text-3xl font-light gradientHover cursor-pointer"
      >
        Why ConsciousLeap?
      </h1>
      <Image
        src={image}
        alt={image.src}
        className="mx-auto md:w-fit rounded-lg w-10/12 shadow-xl shadow-lightGrey"
      />
    </div>
  );
};

export default WhyConsciousLeap;
