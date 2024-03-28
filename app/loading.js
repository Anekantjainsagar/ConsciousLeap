"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";

const Loading = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setShowLoader(false);
    }
    window.addEventListener("load", () => {
      setShowLoader(false);
    });
  }, []);

  let logo_1 = useRef(null);
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline
      .to(logo_1.current, {
        duration: 1,
        transition: Power4.easeInOut,
        delay: 2,
      })
      .to(
        logo_1.current,
        {
          opacity: 0,
          transition: Power4.easeInOut,
          duration: 0.5,
        },
        "-=0.4"
      );
  });

  return showLoader ? (
    <div className="flex items-center justify-center absolute top-0 left-0 z-50 bg-white w-[100vw] h-[100vh]">
      <Image
        alt="Loader"
        src={"/Loader.gif"}
        width={1000}
        height={1000}
        className="w-[400px] h-[400px]"
      />
    </div>
  ) : null;
};

export default Loading;
