"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap, { ScrollTrigger } from "gsap/all";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import mobile from "../Assets/mindfulTherapist/mobile.png";

const MindfulTherapist = () => {
  let testimonialsHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="w-full flex items-center justify-center flex-col mt-[20vw] md:mt-[10vw]">
      <h2
        ref={testimonialsHeading}
        className="mb-6 md:mb-8 text-center text-3xl font-light gradientHover cursor-pointer"
      >
        Our Mindful Therapists
      </h2>
      <BootstrapCarousel />
    </div>
  );
};

export function BootstrapCarousel() {
  let data = [
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1699344226/pfcv68l0afjni97pvjig.jpg",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1699298395/c5otpqefsaqx1bf8qclu.jpg",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1699298499/qwmptx5gb0qvhjxx6mpr.jpg",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1699298517/sdnwd7sbtaeapx4s9coz.jpg",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1699298538/dettte2e0rncdcyrzkdg.jpg",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1701772497/ql2pt0ij71txw03fygds.jpg",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1701772507/h66e6l2ifsfpzerug27q.jpg",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1714737684/apvygeprzckwmegrjbpl.png",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1714737721/tn1tb8surfiuba898pjm.png",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1714737745/o4yzt7jkeb4ujtl96pml.png",
    "https://res.cloudinary.com/dpbsogbtr/image/upload/v1726658659/cqnmg4li4mxxdgo4qbzv.png",
  ];

  return (
    <div className="custom-carousel-container relative">
      <div className="absolute left-1/2 -translate-x-1/2 z-10 h-full">
        <Image
          src={mobile}
          alt="Mobile image"
          className="h-full w-full mx-auto"
        />
      </div>
      <Swiper
        slidesPerView={
          typeof window != "undefined" ? (window.innerWidth < 550 ? 1 : 5) : 0
        }
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        autoplay={{
          interval: 3000,
          disableOnInteraction: false,
        }}
        className="w-[98vw] flex items-center"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i} as={"image"}>
            <Image
              src={item}
              alt="Slide"
              className="w-[50vw] md:w-[14vw] mx-auto"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MindfulTherapist;
