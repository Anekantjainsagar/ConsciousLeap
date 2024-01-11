"use client";
import img1 from "../Assets/carousel/Homeofoneness.jpg";
import img2 from "../Assets/carousel/OurMission.jpg";
import img3 from "../Assets/carousel/OurMotto.jpg";
import img4 from "../Assets/carousel/OurValues.jpg";
import img5 from "../Assets/carousel/OurVision.jpg";

import Image from "next/image";

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

export default function BootstrapCarousel() {
  let data = [img1, img2, img3, img4, img5];

  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      autoplay={{
        interval: 1000,
        disableOnInteraction: true,
      }}
      cssMode={true}
    >
      {data?.map((item, i) => (
        <SwiperSlide key={i}>
          <Image src={item} alt="Slide" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
