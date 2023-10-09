"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import img1 from "../Assets/client1.jpg";
import img2 from "../Assets/client2.jpg";
import img3 from "../Assets/client3.jpg";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import bg from "../Assets/members-bg.png";
import memberFront from "../Assets/member-circle.png";

const MembersTestimonials = () => {
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
        id="membertestimonials"
        ref={testimonialsHeading}
        className="mb-2 text-3xl font-light gradientHover cursor-pointer"
      >
        Member Testimonials
      </h1>
      <p className="mb-[16vw] md:mb-[4vw] text-center font-light tracking-wide">
        Here's what our members say about their experiences with Therapy at
        consciousleap.
      </p>
      <BootstrapCarousel />
    </div>
  );
};

export function BootstrapCarousel() {
  let bootstrap = [
    {
      image: img1,
      text: "consciousleap has been a game changer for my mental health journey",
    },
    {
      image: img2,
      text: "As someone with a busy schedule, their online therapy sessions have been a lifesaver",
    },
    {
      image: img3,
      text: "consciousleap created a safe space where I could discuss my concerns and receive guidance",
    },
  ];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="custom-carousel-container relative">
      <div className="absolute -z-10 w-[75vw] md:block hidden left-1/2 -translate-x-1/2">
        <Image src={bg} alt="Background" />
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-[98vw]"
      >
        {bootstrap.map((item, i) => (
          <Carousel.Item key={i} interval={3000} className="w-full relative">
            <Image
              src={memberFront}
              alt="Members front image"
              className="absolute left-1/2 -translate-x-1/2 w-[58%] md:w-[18%] -top-1 md:top-[0.8vw]"
            />
            <Image
              src={item.image}
              alt="Slide"
              className="w-[50vw] md:w-[15vw] mt-[2vw] mx-auto rounded-full"
            />
            <p className="pb-3 w-11/12 mx-auto md:w-full font-light text-center mt-[4vw] text-darkGrey">
              {item?.text}.
            </p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MembersTestimonials;
