"use client";
import React from "react";
import image from "../Assets/sagrika.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  return (
    <div className="py-[4vw]">
      <h1 className="text-3xl text-center font-light gradientHover cursor-pointer">
        Review Therapists
      </h1>
      <div className="grid grid-cols-3 gap-y-10 pt-[3vw] px-[8vw]">
        <Therapist />
        <Therapist />
        <Therapist />
        <Therapist />
        <Therapist />
      </div>
    </div>
  );
};

const Therapist = () => {
  const history = useRouter();
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={(e) => {
        history.push("/therapist-review/sagrika");
      }}
    >
      <div className="rounded-full w-5/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex h-full w-full rounded-full items-center justify-center bg-white">
          <Image src={image} alt="Photo of girl" className="rounded-full" />
        </div>
      </div>
      <p className="text-websiteBlue text-xl ml-4 font-medium">
        Sagrika Rastogi
      </p>
    </div>
  );
};

export default page;
