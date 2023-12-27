"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import img1 from "../Assets/HowItWorks/step1.jpg";
import img2 from "../Assets/HowItWorks/step2.jpg";
import img3 from "../Assets/HowItWorks/step3.jpg";
import { useRouter } from "next/navigation";

const HowItWorks = () => {
  let howItWorksHead = useRef();
  const history = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let timeline = gsap.timeline();
  //   timeline.fromTo(
  //     howItWorksHead.current,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: howItWorksHead.current,
  //         start: "top 70%",
  //         end: "top 40%",
  //       },
  //       ease: Power2.easeInOut,
  //     }
  //   );
  // }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        ref={howItWorksHead}
        id="howdoesitwork?"
        className="mb-2 text-3xl font-light gradientHover cursor-pointer"
      >
        How Does It Work?
      </h1>
      <p className="text-center md:w-full w-8/12">
        Considering the importance and impact of mental health, we spared no
        thought to keep it simple, impactful, and flexible all at once.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-0 gap-y-8 w-full max-[1050px]:px-[4vw] px-[10vw] pt-[2.5vw]">
        <div className="flex flex-col items-center justify-center md:mt-0 mt-5">
          <h1 className="cursor-pointer gradientHover text-3xl">Step 1</h1>
          <p className="md:text-base text-sm mb-2 text-center">
            Take a short and simple
            <span
              className="text-websiteBlue ml-1 cursor-pointer"
              onClick={(e) => {
                history.push("/questionnaire");
              }}
            >
              Questionnaire
            </span>
          </p>
          <Image
            src={img1}
            alt={img1.src}
            className="w-11/12 md:w-9/12 cursor-pointer hover:scale-95 transition-all"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="cursor-pointer gradientHover text-3xl">Step 2</h1>
          <p className="md:text-base text-sm mb-2">
            We will match you to a Therapist
          </p>
          <Image
            src={img2}
            alt={img2.src}
            className="w-11/12 md:w-9/12 cursor-pointer hover:scale-95 transition-all"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="cursor-pointer gradientHover text-3xl">Step 3</h1>
          <p className="md:text-base text-sm mb-2 text-center">
            Or choose from a range of{" "}
            <span
              className="text-websiteBlue ml-1 cursor-pointer"
              onClick={(e) => {
                history.push("/therapy");
              }}
            >
              Therapists
            </span>
          </p>
          <Image
            src={img3}
            alt={img3.src}
            className="w-11/12 md:w-9/12 cursor-pointer hover:scale-95 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
