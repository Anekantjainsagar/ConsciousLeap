import React from "react";
import image from "@/(main)/Assets/sagrika.jpeg";
import Image from "next/image";

const Title = () => {
  return (
    <div className="flex items-center bg-gray-50 px-[20vw] py-[2.5vw]">
      <div className="rounded-full w-[8vw] bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex items-start h-full w-[8vw] rounded-full justify-between">
          <Image
            src={image}
            alt="User profile"
            className="w-[7.75vw] rounded-full"
          />
        </div>
      </div>
      <div className="ml-4">
        <h1 className="text-black text-lg font-bold">Sagrikaa Rastogi</h1>
        <p className="text-sm text-darkGrey">Counselling Psychologist, M.A</p>
      </div>
    </div>
  );
};

export default Title;
