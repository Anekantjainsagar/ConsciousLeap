"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

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
import img1 from "../Assets/mindfulTherapist/image-001.jpg";
import img2 from "../Assets/mindfulTherapist/image-003.jpg";
import img4 from "../Assets/mindfulTherapist/image-004.jpg";
import img5 from "../Assets/mindfulTherapist/image-005.jpg";

import mobile from "../Assets/mindfulTherapist/mobile.png";

const MindfulTherapist = () => {
  let testimonialsHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let timeline = gsap.timeline();
  //   timeline.fromTo(
  //     testimonialsHeading.current,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: testimonialsHeading.current,
  //         start: "top 70%",
  //         end: "top 40%",
  //       },
  //       ease: Power2.easeInOut,
  //     }
  //   );
  // }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col mt-[20vw] md:mt-[10vw]">
      <h1
        ref={testimonialsHeading}
        className="mb-6 md:mb-8 text-3xl font-light gradientHover cursor-pointer"
      >
        Our Mindful Therapists
      </h1>
      <BootstrapCarousel />
    </div>
  );
};

export function BootstrapCarousel() {
  let data = [img1, img2, img4, img5, img1, img2, img4, img5];

  return (
    <div className="custom-carousel-container relative">
      <div className="absolute left-1/2 -translate-x-1/2 z-10 h-full">
        <Image
          src={mobile}
          alt="Mobile image"
          className="h-full md:h-[99.9%] mx-auto"
        />
      </div>
      <Swiper
        slidesPerView={5}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        autoplay={{
          interval: 3000,
          disableOnInteraction: false,
        }}
        className="w-[98vw] flex items-center"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item}
              alt="Slide"
              className="w-[50vw] md:w-[14vw] mx-auto"
              priority
              as="image"
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MindfulTherapist;
