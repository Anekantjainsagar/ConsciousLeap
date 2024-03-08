"use client";
import React, { useContext, useEffect, useRef } from "react";
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

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Context from "@/Context/Context";

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
          onClick={(e) => {
            history.push("/blogs");
          }}
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
        <div className="mt-[2vw] mx-auto w-full">
          <BootstrapCarousel />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 px-[4vw] mt-[4vw] md:px-[2vw]">
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
        </div> */}
      </div>
    </>
  );
};

export function BootstrapCarousel() {
  const { blogs } = useContext(Context);

  return (
    <div className="custom-carousel-container w-full">
      <div className="mx-[4vw]">
        <Swiper
          slidesPerView={
            typeof window != "undefined" ? (window.innerWidth < 550 ? 1 : 3) : 0
          }
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          loop={true}
          autoplay={{
            interval: 3000,
            disableOnInteraction: false,
          }}
          className="flex items-center"
        >
          {blogs?.map((item, i) => (
            <SwiperSlide key={i} as={"image"}>
              <BlogBlock data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const BlogBlock = ({ data }) => {
  const history = useRouter();

  return (
    <div className="bg-gradient-to-r from-newBlue via-pinkishRed rounded-md p-[1px] to-oceanGreen w-11/12 mx-auto">
      <div
        className="cursor-pointer border p-2 rounded-md bg-white"
        onClick={(e) => {
          e.preventDefault();
          history.push(`/blogs/${data?._id}`);
        }}
      >
        <Image
          src={data?.image}
          alt="Image"
          className="w-full h-[30vh] md:h-[40vh] object-cover rounded-md object-center"
          width={1000}
          height={1000}
        />
        <p className="mt-2 text-lg md:text-xl px-1 text-newBlue line-clamp-2 md:line-clamp-1">
          {data?.title}
        </p>
      </div>
    </div>
  );
};

export default ConsciousleapBlog;
