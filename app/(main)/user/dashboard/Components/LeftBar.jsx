"use client";
import React, { useState, useContext } from "react";
import image from "../../../Assets/dashboard-user-image.jpeg";
import ideas from "../../../Assets/ideas.jpg";
import books from "../../../Assets/book.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import { deleteCookie } from "cookies-next";

const LeftBar = () => {
  const history = useRouter();
  let { login, setIsLogin } = useContext(Context);

  return (
    <div className="w-[95%] mx-auto md:w-3/12 rounded-md bg-white py-8 md:mb-0 mb-4 md:mt-0 mt-3 md:py-6">
      <div className="flex flex-col items-center text-lightGrey font-light">
        <Image src={image} alt="User image" className="w-5/12" />
        <p className="mt-1.5 mb-0">Name: {login?.name}</p>
        <p className="mt-0.5">{login?.phone}</p>
        <div className="rounded-full w-[85%] mt-6 cursor-pointer mx-auto h-fit bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
          <div
            onClick={(e) => {
              history.push("/user/dashboard/edit");
            }}
            className="h-full w-full py-1.5 rounded-full items-center justify-center bg-white flex flex-col"
          >
            Edit Profile
          </div>
        </div>
        <div className="rounded-full w-[85%] mt-2 cursor-pointer mx-auto h-fit bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
          <div
            onClick={(e) => {
              setIsLogin(false);
              deleteCookie("token");
              history.push("/");
            }}
            className="h-full w-full py-1.5 rounded-full items-center justify-center bg-white flex flex-col"
          >
            Logout
          </div>
        </div>
      </div>
      <div className="h-[2px] w-[85%] mx-auto my-3 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen"></div>
      <div className="shadow-lg py-2 px-3 border rounded-lg shadow-lightGrey w-[85%] mx-auto">
        <h1 className="text-center text-sm text-lightGrey">
          Recommanded Reads
        </h1>
        <Image src={ideas} alt="Idea image" className="w-8/12 mx-auto my-4" />
        <div className="h-[2px] my-5 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen"></div>
        <h1 className="text-center text-sm text-lightGrey">conscious Store</h1>
        <Image src={books} alt="Idea image" className="w-8/12 mx-auto my-4" />
      </div>
    </div>
  );
};

export default LeftBar;
