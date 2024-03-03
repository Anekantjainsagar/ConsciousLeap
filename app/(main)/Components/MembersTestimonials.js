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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MembersTestimonials = () => {
  let testimonialsHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        id="membertestimonials"
        ref={testimonialsHeading}
        className="mb-2 text-3xl font-light text-center gradientHover cursor-pointer"
      >
        Member Testimonials
      </h1>
      <p className="mb-[16vw] md:mb-[4vw] text-center font-light tracking-wide">
        Here&apos;s what our members say about their experiences with Therapy at
        consciousleap.
      </p>
      <BootstrapCarousel />
    </div>
  );
};

export function BootstrapCarousel() {
  let bootstrap = [
    {
      image: "/Assets/client/1.jpg",
      text: "consciousleap has been a game changer for my mental health journey",
    },
    {
      image: "/Assets/client/2.jpg",
      text: "As someone with a busy schedule, their online therapy sessions have been a lifesaver",
    },
    {
      image: "/Assets/client/4.jpg",
      text: "consciousleap created a safe space where I could discuss my concerns and receive guidance",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -z-10 w-full md:block hidden left-1/2 -translate-x-1/2">
        <Image
          src={"/Assets/members-bg.png"}
          width={1000}
          height={1000}
          alt="Background"
          className="w-full px-[10vw]"
        />
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          interval: 3000,
          disableOnInteraction: false,
        }}
        className="w-[98vw]"
      >
        {bootstrap?.map((item, i) => (
          <SwiperSlide key={i} className="pb-5">
            <Image
              src={"/Assets/member-circle.png"}
              height={1000}
              width={1000}
              alt="Members front image"
              className="absolute left-1/2 -translate-x-1/2 w-[58%] md:w-[18%] -top-1 md:top-[0.8vw]"
            />
            <Image
              src={item.image}
              alt="Slide"
              height={1000}
              width={1000}
              className="w-[50vw] md:w-[15vw] mt-[2vw] mx-auto rounded-full"
            />
            <p className="pb-3 w-11/12 mx-auto md:w-full font-light text-center mt-[4vw] text-darkGrey">
              {item?.text}.
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MembersTestimonials;
