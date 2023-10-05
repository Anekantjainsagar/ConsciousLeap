"use client";
import color1Bw from "../Assets/Drawer/1ColorBw.jpg";
import color1 from "../Assets/Drawer/1Color.jpg";
import color2Bw from "../Assets/Drawer/2ColorBw.jpg";
import color2 from "../Assets/Drawer/2Color.jpg";
import color3Bw from "../Assets/Drawer/3ColorBw.jpg";
import color3 from "../Assets/Drawer/3Color.jpg";
import color4Bw from "../Assets/Drawer/4ColorBw.jpg";
import color4 from "../Assets/Drawer/4Color.jpg";
import color5Bw from "../Assets/Drawer/5ColorBw.jpg";
import color5 from "../Assets/Drawer/5Color.jpg";
import color6Bw from "../Assets/Drawer/6ColorBw.jpg";
import color6 from "../Assets/Drawer/6Color.jpg";
import color7Bw from "../Assets/Drawer/7ColorBw.jpg";
import color7 from "../Assets/Drawer/7Color.jpg";
import color8Bw from "../Assets/Drawer/8ColorBw.jpg";
import color8 from "../Assets/Drawer/8Color.jpg";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import globe from "../Assets/globe round.png";

const Drawer = () => {
  let drawerRef = useRef();
  let drawerBox = [
    {
      img1: color1,
      img2: color1Bw,
    },
    {
      img1: color2,
      img2: color2Bw,
    },
    {
      img1: color3,
      img2: color3Bw,
    },
    {
      img1: color4,
      img2: color4Bw,
    },
    {
      img1: color5,
      img2: color5Bw,
    },
    {
      img1: color6,
      img2: color6Bw,
    },
    {
      img1: color7,
      img2: color7Bw,
    },
    {
      img1: color8,
      img2: color8Bw,
    },
  ];
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      drawerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: drawerRef.current,
          start: "top 70%",
          end: "top 40%",
        },
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div className="px-[4vw] relative">
      <Image
        src={globe}
        alt="Globe"
        className="w-7/12 left-1/2 -translate-x-1/2 absolute top-0 -z-10"
      />
      <h1
        ref={drawerRef}
        className="mb-12 md:mb-16 pt-10 text-3xl font-light gradientHover cursor-pointer text-center"
      >
        #WorldMentalHealth
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 md:px-0 px-[5vw] col gap-y-8 md:gap-y-16 gap-x-5 md:gap-x-8">
        {drawerBox.map((e, i) => {
          return <ImageFlipper key={i} img1={e.img1} img2={e.img2} />;
        })}
      </div>
    </div>
  );
};

const ImageFlipper = ({ img1, img2 }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={img2} alt={img2.src} />
        </div>
        <div className="flip-card-back">
          <Image src={img1} alt={img1.src} />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
