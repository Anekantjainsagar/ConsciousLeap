"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import img1 from "../Assets/store/1 (2).jpg";
import img2 from "../Assets/store/11.jpg";
import img3 from "../Assets/store/12.jpg";
import img4 from "../Assets/store/3 (2).jpg";
import img5 from "../Assets/store/5 (3).png";
import img6 from "../Assets/store/8 (3).png";
import img8 from "../Assets/store/8.jpg";
import img7 from "../Assets/store/9.jpg";
import { useRouter } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
import StoreBlock from "../conscious-store/StoreBlock";
import Context from "@/Context/Context";

const ConsciousStore = () => {
  const history = useRouter();
  let storeHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="flex flex-col justify-center items-center pt-[2vw] pb-[12vw] md:pb-[6vw]">
      <h3
        ref={storeHeading}
        id="collaborationsandinitiatives"
        onClick={() => {
          history.push("/conscious-store");
        }}
        className="mb-2 text-3xl text-center font-light gradientHover cursor-pointer"
      >
        Conscious Store
      </h3>
      <p className="font-light md:w-full w-[85%] text-center text-darkGrey">
        We care at every step of our mindful journey at consciousleap.
        <br /> We have pledged to produce, source, and support only locally
        produced, organic, sustainable, environment-friendly goods through our
        Conscious Store.
      </p>
      <div className="mx-auto px-[5vw] w-full">
        <BootstrapCarousel />
      </div>
    </div>
  );
};

export function BootstrapCarousel() {
  const { productM } = useContext(Context);

  return (
    <div className="custom-carousel-container w-full">
      <div className="mx-[4vw]">
        <Swiper
          slidesPerView={
            typeof window != "undefined" ? (window.innerWidth < 550 ? 1 : 3) : 0
          }
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          loop={true}
          autoplay={{
            interval: 3000,
            disableOnInteraction: false,
          }}
          className="flex items-center"
        >
          {productM?.productData?.products?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-11/12 mx-auto py-10">
                <StoreBlock key={i} data={item} showGrid={true} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ConsciousStore;
