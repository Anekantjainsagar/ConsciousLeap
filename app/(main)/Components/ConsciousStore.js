"use client";
import React, { useEffect, useRef, useState } from "react";
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

const ConsciousStore = () => {
  const history = useRouter();
  let storeHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="flex flex-col justify-center items-center pt-[2vw] pb-[12vw] md:pb-[6vw]">
      <h1
        ref={storeHeading}
        id="collaborationsandinitiatives"
        onClick={() => {
          history.push("/conscious-store");
        }}
        className="mb-2 text-3xl text-center font-light gradientHover cursor-pointer"
      >
        Conscious Store
      </h1>
      <p className="font-light md:w-full w-[85%] text-center text-darkGrey">
        We care at every step of our mindful journey at consciousleap.
        <br /> We have pledged to produce, source, and support only locally
        produced, organic, sustainable, environment-friendly goods through our
        Conscious Store.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[6vw] mt-[3vw]">
        {[
          { image: img1 },
          { image: img2 },
          { image: img3 },
          { image: img4 },
          { image: img5 },
          { image: img6 },
          { image: img7 },
          { image: img8 },
        ].map((e, i) => {
          return <Block data={e} key={i} />;
        })}
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => {
        history.push("/conscious-store");
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer rounded-md w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]"
    >
      <div className="flex items-center justify-center h-full w-full rounded-md bg-white p-1">
        <Image
          src={data?.image}
          alt="User profile"
          className="rounded-md hover:scale-95 cursor-pointer transition-all"
        />
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex transition-all items-center justify-center bg-black bg-opacity-25 rounded-md">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from bubbling to the parent
              // Handle add to cart logic here
            }}
            className="bg-gray-200 flex items-center text-black px-4 py-2 rounded-md hover:bg-white transition-all"
          >
            <AiOutlineShoppingCart className="mr-2 text-xl" />
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ConsciousStore;
