"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../Assets/mindfulTherapist/image-001.jpg";
import img2 from "../Assets/mindfulTherapist/image-002.jpg";
import img3 from "../Assets/mindfulTherapist/image-003.jpg";
import img4 from "../Assets/mindfulTherapist/image-004.jpg";
import img5 from "../Assets/mindfulTherapist/image-005.jpg";

const MindfulTherapist = () => {
  let testimonialsHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      testimonialsHeading.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: testimonialsHeading.current,
          start: "top 70%",
          end: "top 40%",
        },
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        ref={testimonialsHeading}
        className="mb-2 text-3xl font-light gradientHover cursor-pointer"
      >
        Our Mindful Therapists
      </h1>
      <BootstrapCarousel />
    </div>
  );
};

export function BootstrapCarousel() {
  let bootstrap = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="custom-carousel-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="flex justify-center items-center"
      >
        {/* <Image src={img1} alt="Image" /> */}
        {bootstrap.map((item, i) => (
          <Carousel.Item key={i} interval={1000}>
            <Image src={item} alt="Slide" />
          </Carousel.Item>
        ))}
        {/* <Image src={img1} alt="Image" /> */}
      </Carousel>
    </div>
  );
}

export default MindfulTherapist;
