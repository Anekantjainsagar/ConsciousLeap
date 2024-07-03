"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import globe from "../Assets/globe round.png";

const Drawer = () => {
  let drawerRef = useRef();
  let drawerBox = [
    {
      img1: "/Assets/Drawer/1Color.jpg",
      img2: "/Assets/Drawer/1ColorBw.jpg",
    },
    {
      img1: "/Assets/Drawer/2Color.jpg",
      img2: "/Assets/Drawer/2ColorBw.jpg",
    },
    {
      img1: "/Assets/Drawer/3Color.jpg",
      img2: "/Assets/Drawer/3ColorBw.jpg",
    },
    {
      img1: "/Assets/Drawer/4Color.jpg",
      img2: "/Assets/Drawer/4ColorBw.jpg",
    },
    {
      img1: "/Assets/Drawer/5Color.jpg",
      img2: "/Assets/Drawer/5ColorBw.jpg",
    },
    {
      img1: "/Assets/Drawer/6Color.jpg",
      img2: "/Assets/Drawer/6ColorBw.jpg",
    },
    {
      img1: "/Assets/Drawer/7Color.jpg",
      img2: "/Assets/Drawer/7ColorBw.jpg",
    },
    {
      img1: "/Assets/Drawer/8Color.jpg",
      img2: "/Assets/Drawer/8ColorBw.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let timeline = gsap.timeline();
  //   timeline.fromTo(
  //     drawerRef.current,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: drawerRef.current,
  //         start: "top 70%",
  //         end: "top 40%",
  //       },
  //       ease: Power2.easeInOut,
  //     }
  //   );
  // }, []);

  return (
    <div className="px-[4vw] relative">
      <Image
        src={globe}
        alt="Globe"
        className="w-7/12 left-1/2 -translate-x-1/2 absolute top-0 -z-10"
      />
      <h3
        ref={drawerRef}
        className="mb-12 w-fit mx-auto md:mb-16 mt-10 text-3xl font-light gradientHover cursor-pointer"
      >
        #WorldMentalHealth
      </h3>
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
          <Image
            src={img2}
            alt={"alt"}
            className="w-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flip-card-back">
          <Image
            src={img1}
            alt={"alt"}
            className="w-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
