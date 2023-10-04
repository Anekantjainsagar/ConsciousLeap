"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import img1 from "@/app/Assets/HowItWorks/step1.jpg";
import img2 from "@/app/Assets/HowItWorks/step2.jpg";
import img3 from "@/app/Assets/HowItWorks/step3.jpg";

const HowItWorks = () => {
  let howItWorksHead = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      howItWorksHead.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: howItWorksHead.current,
          start: "top 70%",
          end: "top 40%",
        },
        ease: Power2.easeInOut,
      }
    );
  }, []);

  let works = [
    {
      name: "Step 1",
      para: "Take a short and simple Questionnaire",
      image: img1,
    },
    {
      name: "Step 2",
      para: "We will match you to a Therapist",
      image: img2,
    },
    {
      name: "Step 3",
      para: "Or choose from a range of Therapists",
      image: img3,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        ref={howItWorksHead}
        className="mb-2 text-3xl font-light gradientHover cursor-pointer"
      >
        How Does It Work?
      </h1>
      <p className="text-center md:w-full w-11/12">
        Considering the importance and impact of mental health, we spared no
        thought to keep it simple, impactful, and flexible all at once.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-0 gap-y-8 w-full px-[10vw] pt-[2.5vw]">
        {works.map((e, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center">
              <h1 className="cursor-pointer gradientHover text-3xl">
                {e?.name}
              </h1>
              <p className="md:text-base text-sm mb-2">{e?.para}</p>
              <Image
                src={e?.image}
                alt={e?.image.src}
                className="w-11/12 md:w-9/12 cursor-pointer hover:scale-95 transition-all"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
