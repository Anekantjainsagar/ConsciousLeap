"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import image1 from "../Assets/InternationalTherapist/image1.png";
import image2 from "../Assets/InternationalTherapist/image2.png";
import image3 from "../Assets/InternationalTherapist/image3.png";
import image4 from "../Assets/InternationalTherapist/image4.png";

const CertifiedTherapist = () => {
  let therapistHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let timeline = gsap.timeline();
  //   timeline.fromTo(
  //     therapistHeading.current,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: therapistHeading.current,
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
        id="ourinternationallycertifiedtherapists"
        ref={therapistHeading}
        className="mb-12 text-3xl text-center font-light gradientHover cursor-pointer"
      >
        Our Internationally Certified Therapists
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-y-0 gap-y-16 w-[98vw] items-center">
        {[image1, image2, image3, image4].map((e, i) => {
          return (
            <div key={i} className="flex justify-center items-center">
              <Image src={e} alt={e.src} className={"w-[65vw] md:w-[16vw]"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertifiedTherapist;
