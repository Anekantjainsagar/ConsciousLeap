"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import img1 from "../Assets/Statistics/img1.png";
import img2 from "../Assets/Statistics/img2.png";
import img3 from "../Assets/Statistics/img3.png";
import img4 from "../Assets/Statistics/img4.png";
import img5 from "../Assets/Statistics/img5.png";

import img11 from "../Assets/Statistics/img1-1.png";
import img21 from "../Assets/Statistics/img2-1.png";
import img31 from "../Assets/Statistics/img3-1.png";
import img41 from "../Assets/Statistics/img4-1.png";
import img51 from "../Assets/Statistics/img5-1.png";

import bg from "../Assets/bg-member.png";

const MemberStatistics = () => {
  let memberStatiticsHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        id="memberstatistics"
        ref={memberStatiticsHeading}
        className="mb-2 text-3xl font-light gradientHover cursor-pointer"
      >
        Member Statistics
      </h1>
      <div className="w-full relative">
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src={!visible3 ? img3 : img31}
            alt="Image 1"
            className="cursor-pointer w-[20vw] min-[600px]:w-[16vw] min-[768px]:w-[10vw]"
            onMouseEnter={(e) => {
              setVisible3(!visible3);
            }}
            onMouseOut={(e) => {
              setVisible3(!visible3);
            }}
            onMouseLeave={(e) => {
              setVisible3(!visible3);
            }}
          />
        </div>
        <div className="absolute z-10 left-1/2 top-16 md:top-28 w-[75%] md:w-[60%] flex justify-between items-center -translate-x-1/2">
          <Image
            src={!visible2 ? img2 : img21}
            alt="Image 1"
            className="cursor-pointer w-[23%] md:w-[18%]"
            onMouseEnter={(e) => {
              setVisible2(!visible2);
            }}
            onMouseOut={(e) => {
              setVisible2(!visible2);
            }}
            onMouseLeave={(e) => {
              setVisible2(!visible2);
            }}
          />
          <Image
            src={!visible4 ? img4 : img41}
            alt="Image 1"
            className="cursor-pointer w-[23%] md:w-[18%]"
            onMouseEnter={(e) => {
              setVisible4(!visible4);
            }}
            onMouseOut={(e) => {
              setVisible4(!visible4);
            }}
            onMouseLeave={(e) => {
              setVisible4(!visible4);
            }}
          />
        </div>
        <div className="z-10 absolute left-1/2 top-[45vw] md:top-[20vw] w-[97%] md:w-[90%] flex justify-between items-center -translate-x-1/2">
          <Image
            src={!visible1 ? img1 : img11}
            alt="Image 1"
            className="cursor-pointer w-2/12 md:w-[11%]"
            onMouseEnter={(e) => {
              setVisible1(!visible1);
            }}
            onMouseOut={(e) => {
              setVisible1(!visible1);
            }}
            onMouseLeave={(e) => {
              setVisible1(!visible1);
            }}
          />
          <Image
            src={!visible5 ? img5 : img51}
            alt="Image 1"
            className="cursor-pointer w-2/12 md:w-[11%]"
            onMouseEnter={(e) => {
              setVisible5(!visible5);
            }}
            onMouseOut={(e) => {
              setVisible5(!visible5);
            }}
            onMouseLeave={(e) => {
              setVisible5(!visible5);
            }}
          />
        </div>
      </div>
      <div className="relative mt-[20vw] md:mt-[8vw]">
        <Image
          src={bg}
          alt="Background image"
          className="w-[65%] md:w-[35vw] min-[2000px]:w-[23vw] mt-[8vw] md:mt-[4vw] mx-auto"
        />
        <div className="absolute -translate-y-1/2 top-1/2 pt-[7vw] md:pt-[3.5vw] flex flex-col items-center justify-center left-1/2 -translate-x-1/2">
          {visible1 ? (
            <>
              <h1 className="text-websiteBlue text-3xl min-[900px]:text-3xl min-[1040px]:text-7xl font-normal md:mb-2 mb-0">
                87%
              </h1>
              <p className="text-center text-xs min-[900px]:text-base min-[1040px]:text-2xl text-darkGrey">
                Of our members
                <br />{" "}
                <span className="text-websiteBlue font-medium">
                  Recommended
                </span>{" "}
                us
              </p>
            </>
          ) : null}
          {visible2 ? (
            <>
              <h1 className="text-websiteBlue text-3xl min-[900px]:text-3xl min-[1040px]:text-7xl font-normal md:mb-2 mb-0 max-[1500px]:text-3xl">
                82%
              </h1>
              <p className="text-center text-xs min-[900px]:text-base min-[1040px]:text-2xl text-darkGrey">
                Of our members
                <span className="text-websiteBlue font-medium ml-2">
                  Like
                </span>{" "}
                how they feel after 5 sessions
              </p>
            </>
          ) : null}
          {visible3 ? (
            <>
              <h1 className="text-websiteBlue text-3xl min-[900px]:text-3xl min-[1040px]:text-7xl font-normal md:mb-2 mb-0 max-[1500px]:text-3xl">
                76%
              </h1>
              <p className="text-center text-xs min-[900px]:text-base min-[1040px]:text-2xl text-darkGrey">
                Of our members live
                <br />{" "}
                <span className="text-websiteBlue font-medium">
                  Mindfully
                </span>{" "}
                after 8 sessions
              </p>
            </>
          ) : null}
          {visible4 ? (
            <>
              <h1 className="text-websiteBlue text-3xl min-[900px]:text-3xl min-[1040px]:text-7xl font-normal md:mb-2 mb-0 max-[1500px]:text-3xl">
                90%
              </h1>
              <p className="text-center text-xs min-[900px]:text-base min-[1040px]:text-2xl text-darkGrey">
                of our members have rated us
                <span className="text-websiteBlue ml-2 font-medium">
                  Five-Stars
                </span>{" "}
              </p>
            </>
          ) : null}
          {visible5 ? (
            <>
              <h1 className="text-websiteBlue text-3xl min-[900px]:text-3xl min-[1040px]:text-7xl font-normal md:mb-2 mb-0 max-[1500px]:text-3xl">
                95%
              </h1>
              <p className="text-center text-xs min-[900px]:text-base min-[1040px]:text-2xl text-darkGrey">
                of our members
                <span className="text-websiteBlue ml-2 font-medium">
                  Love
                </span>{" "}
                how they feel after 8-10 sessions
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MemberStatistics;
