"use client";
import { useEffect } from "react";
import cloud1 from "../../Assets/icons/cloud 1.png";
import gsap, { Power2 } from "gsap";
import Image from "next/image";

const animateLeftRight = (e) => {
  let timeline = gsap.timeline({ repeat: Infinity });

  timeline.fromTo(
    e,
    { x: 1440 },
    { x: -1000, duration: 10, ease: Power2.easeInOut }
  );
};

const animateRightLeft = (e) => {
  let timeline = gsap.timeline({ repeat: Infinity });

  timeline.fromTo(
    e,
    { x: -1000 },
    { x: 1440, duration: 10, ease: Power2.easeInOut }
  );
};

const Cloud = ({ showCloud, setShowCloud }) => {
  useEffect(() => {
    if (showCloud) {
      console.log("Start");
      animateLeftRight("#rightCloud");
      animateRightLeft("#right1Cloud");
      setTimeout(() => {
        setShowCloud(false);
      }, 9000);
    }
  }, []);

  return (
    <div
      className={`${
        showCloud ? "block" : "hidden"
      } absolute z-50 overflow-hidden w-full h-full`}
    >
      <Image
        src={cloud1}
        id="rightCloud"
        alt="Cloud"
        className="absolute w-[50vw]"
      />
      <Image
        src={cloud1}
        id="right1Cloud"
        className="w-[50vw] left-[10vw] top-[-10vw] absolute"
        alt="Cloud"
      />
      <Image
        src={cloud1}
        id="right1Cloud"
        className="w-[50vw] left-[10vw] top-[20vw] absolute"
        alt="Cloud"
      />
      <Image
        src={cloud1}
        id="right1Cloud"
        className="top-[6vw] w-[50vw] absolute"
        alt="Cloud"
      />
      <Image
        src={cloud1}
        alt="Cloud"
        id="rightCloud"
        className="absolute left-[10vw] top-[20vw] w-[50vw]"
      />
    </div>
  );
};

export default Cloud;
