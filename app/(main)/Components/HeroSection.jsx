"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

const HeroSection = () => {
  const history = useRouter();

  return (
    <div className="w-full h-full relative">
      <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2">
        <h1 className="text-transparent w-fit leading-tight bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen arial font-black uppercase text-xl md:text-8xl">
          Walk <span className="font-bold">Towards</span>
          <br /> Well-Being!
        </h1>
        <p className="md:text-3xl text-xs font-light mt-2">
          Let&apos;s #StartTheConversation
        </p>
        <button
          onClick={() => {
            history.push("/therapy");
          }}
          className="bg-websiteBlue text-xs md:text-2xl font-medium px-5 md:px-20 py-1.5 md:py-5 rounded-full text-white shadow-lg shadow-gray-300 md:my-8 my-2"
        >
          Talk to our therapists now!
        </button>
        <div className="hidden md:flex items-start justify-start space-x-8">
          <BsArrowDown className="bg-white text-6xl rounded-full h-[10vh] px-1.5 shadow-md shadow-gray-400" />
          <p className="text-sm md:text-2xl w-5/12 font-light">
            To live your life to the fullest, we&apos;re continuing to find ways
            to prevent mental health problems.
          </p>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        src="/Assets/hero_new.png"
        alt="Walk Towards Well-Being"
        className="w-full"
      />
    </div>
  );
};

export default HeroSection;
