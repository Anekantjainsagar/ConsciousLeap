"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import blog1 from "../Assets/Blogs/1.jpg";
import blog2 from "../Assets/Blogs/2.jpg";
import blog3 from "../Assets/Blogs/3.jpg";
import blog4 from "../Assets/Blogs/4.jpg";
import blog5 from "../Assets/Blogs/5.jpg";
import blog6 from "../Assets/Blogs/6.jpg";
import Line2 from "./Lines/Line2";
import { useRouter } from "next/navigation";

const ConsciousleapBlog = () => {
  let blogsHeading = useRef();
  const history = useRouter();
  let collabrationHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1
          ref={collabrationHeading}
          id="collaborationsandinitiatives"
          className="mb-2 text-3xl text-center font-light gradientHover cursor-pointer"
          onClick={(e) => {
            history.push("/collabrations");
          }}
        >
          Collaborations and Initiatives
        </h1>
        <p className="font-light md:w-full w-[85%] min-[1000px]:px-[5vw] text-center text-darkGrey">
          At consciousleap, we pledge 10% of our net proceeds to support and
          contribute towards a more significant cause, a higher purpose to
          restore our faith in humanity.
          <br /> If you are a Charitable Institute, Non-Profit Organization, or
          NGO that shares our beliefs and values, please register your details
          with us to collaborate.{" "}
          <span
            className="text-websiteBlue cursor-pointer"
            onClick={(e) => {
              history.push("/faqs");
            }}
          >
            Learn More
          </span>
        </p>
      </div>
      <Line2 />
      <div className="w-full flex items-center justify-center flex-col">
        <h1
          id="consciousblogs"
          ref={blogsHeading}
          className="mb-2 text-3xl font-light gradientHover cursor-pointer"
        >
          Conscious Blogs
        </h1>
        <p className="font-light md:w-full w-[85%] text-center text-darkGrey">
          We practice what we preach, and our blogs reflect our mindful journey
          at consciousleap.
          <br /> Through our blogs, we aim to spread awareness of the importance
          of mental health and its impact on micro and macro levels.
          <span
            className="text-websiteBlue cursor-pointer"
            onClick={(e) => {
              history.push("/faqs");
            }}
          >
            Learn More
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 px-[4vw] mt-[4vw] md:px-[2vw]">
          <div>
            <ImageBlock
              image={blog1}
              onClick={(e) => {
                history.push("/blogs/659d624ded6275574f68c552");
              }}
            />
            <div className="grid grid-cols-2 gap-x-[6vw] md:gap-x-[4vw] mt-[4vw] md:mt-[1.5vw]">
              <ImageBlock
                image={blog3}
                onClick={(e) => {
                  history.push("/blogs/ways-to-get-motivated");
                }}
              />
              <ImageBlock
                image={blog4}
                onClick={(e) => {
                  history.push("/blogs/659d6c35ed6275574f68c980");
                }}
              />
            </div>
          </div>
          <div className="md:mt-0 mt-[5vw]">
            <div className="grid grid-cols-2 gap-x-[6vw] md:gap-x-[4vw] mb-[4vw] md:mb-[1.5vw]">
              <ImageBlock
                image={blog5}
                onClick={(e) => {
                  history.push("/blogs/659d63b8ed6275574f68c62c");
                }}
              />
              <ImageBlock
                image={blog6}
                onClick={(e) => {
                  history.push("/blogs/659d6bc4ed6275574f68c97d");
                }}
              />
            </div>
            <ImageBlock
              image={blog2}
              onClick={(e) => {
                history.push("/blogs/659d630eed6275574f68c555");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ImageBlock = ({ image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-md w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]"
    >
      <div className="flex items-start p-[1vw] md:p-[5px] h-full w-full rounded-md justify-between bg-white">
        <Image
          src={image}
          alt="User profile"
          className="rounded-md w-full hover:scale-95 cursor-pointer transition-all"
        />
      </div>
    </div>
  );
};

export default ConsciousleapBlog;
