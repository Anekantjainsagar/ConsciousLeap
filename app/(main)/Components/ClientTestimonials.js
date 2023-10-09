"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../Assets/client1.jpg";
import img2 from "../Assets/client2.jpg";
import img3 from "../Assets/client3.jpg";

const ClientTestimonials = () => {
  let clientHeadings = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      clientHeadings.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: clientHeadings.current,
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
        ref={clientHeadings}
        className="mb-2 text-3xl font-light gradientHover cursor-pointer"
      >
        Client Testimonials
      </h1>
      <p className="mb-12 mt-2 text-center font-light">
        Here’s what our clients say about their experiences with consciousleap
        for Business.
      </p>
      <BootstrapCarousel />
    </div>
  );
};

export function BootstrapCarousel() {
  let bootstrap = [
    {
      image: img1,
      text: "As a busy professional, finding time for self-care can be a challenge. consciousleap has made it easier for me to prioritize my mental well-being.",
    },
    {
      image: img2,
      text: "Implementing consciousleap into our corporate wellness program has had a tremendous impact on our employees' mental well-being. ",
    },
    {
      image: img3,
      text: "Using consciousleap has been life-changing for me. It's convenient, user-friendly, and provides access to a wide range of resources. I feel supported and empowered to take control of my mental well-being.",
    },
  ];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="custom-carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item, i) => (
          <Carousel.Item key={i} interval={1000}>
            <div className="rounded-full w-fit mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
              <div className="flex md:p-1 h-full w-full rounded-full items-center justify-center bg-white">
                <Image
                  src={item.image}
                  alt="Photo of girl"
                  className="rounded-full cursor-pointer hover:scale-[97%] transition-all"
                />
              </div>
            </div>
            <p className="w-8/12 font-light mx-auto text-center mb-4 text-lg tracking-wider text-darkGrey mt-3">
              {item?.text}
            </p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ClientTestimonials;
