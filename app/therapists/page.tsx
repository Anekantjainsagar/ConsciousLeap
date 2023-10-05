"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import {
  AiOutlineDown,
  AiOutlineUnorderedList,
  AiOutlineUp,
} from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import image from "../Assets/sagrika.jpeg";
import { useRouter } from "next/navigation";

const page = () => {
  let sellerHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [showGrid, setShowGrid] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);
  const [showExpertise, setShowExpertise] = useState(true);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      sellerHeading.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div className="w-full flex pt-6 items-center justify-center flex-col">
      <h1
        ref={sellerHeading}
        className="text-3xl text-center font-light gradientHover cursor-pointer"
      >
        Our Mindful Therapists
      </h1>
      <p className="text-darkGrey mt-3 mb-10">
        "Our Mindful Therapists" are the founding pillars of consciousleap.
      </p>
      <div className="mt-[3vw] px-[6vw] w-full flex">
        <div className="w-2/12 mr-1">
          <div
            onClick={(e) => {
              setShowFilters(!showFilters);
            }}
            className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
          >
            <p>Filter by</p>
            {showFilters ? <AiOutlineDown /> : <AiOutlineUp />}
          </div>
          <div className={`${showFilters ? "hidden" : "block"}`}>
            <div
              onClick={(e) => {
                setShowExpertise(!showExpertise);
              }}
              className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
            >
              <p>Areas of Expertise</p>
              {showExpertise ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>
            <div className={`${showExpertise ? "hidden" : "block"}`}>
              {[
                "Adolescent and Young Adult counselling",
                "Anxiety",
                "Behavior modification",
              ].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-start text-sm text-darkGrey px-3 py-1"
                  >
                    <input
                      type="checkbox"
                      className="mr-1.5 mt-1.5 cursor-pointer"
                    />
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
            <div
              onClick={(e) => {
                setShowLanguages(!showLanguages);
              }}
              className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
            >
              <p>Language</p>
              {showLanguages ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>
            <div className={`${showLanguages ? "hidden" : "block"}`}>
              {["hindi", "english"].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-start text-sm text-darkGrey px-3 py-1"
                  >
                    <input
                      type="checkbox"
                      className="mr-1.5 mt-1.5 cursor-pointer"
                    />
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-10/12 ml-3">
          <div className="flex px-2 items-center">
            <select
              name=""
              id=""
              className="w-[15vw] rounded-sm text-darkGrey text-sm border px-2 py-2 outline-none"
            >
              <option className="py-1" value="From New to Old">
                From New to Old
              </option>
              <option className="py-1" value="From Old to New">
                From Old to New
              </option>
              <option className="py-1" value="Alphabatical Order Increasing">
                Alphabatical Order Increasing
              </option>
              <option className="py-1" value="Alphabatical Order Decreasing">
                Alphabatical Order Decreasing
              </option>
              <option className="py-1" value="Experience">
                Experience
              </option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="w-[16vw] rounded-sm text-darkGrey text-sm border px-4 ml-4 py-2 outline-none"
            />
            <div className="flex items-center ml-5">
              <BsFillGrid3X3GapFill
                className="text-websiteBlue border p-2 cursor-pointer"
                size={35}
                onClick={(e) => {
                  setShowGrid(true);
                }}
              />
              <AiOutlineUnorderedList
                className="text-websiteBlue border p-2 cursor-pointer"
                size={35}
                onClick={(e) => {
                  setShowGrid(false);
                }}
              />
            </div>
          </div>
          <div
            className={`grid ${
              showGrid ? "grid-cols-3" : "grid-cols-1"
            } mt-5 gap-x-4 gap-y-6`}
          >
            {showGrid ? <GridBlock /> : <ListBlock />}
            {showGrid ? <GridBlock /> : <ListBlock />}
            {showGrid ? <GridBlock /> : <ListBlock />}
            {showGrid ? <GridBlock /> : <ListBlock />}
            {showGrid ? <GridBlock /> : <ListBlock />}
            {showGrid ? <GridBlock /> : <ListBlock />}
            {showGrid ? <GridBlock /> : <ListBlock />}
            {showGrid ? <GridBlock /> : <ListBlock />}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridBlock = () => {
  const history = useRouter();
  return (
    <div className="rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
      <div className="flex items-start py-[3vw] px-[4vw] md:p-[1vw] h-full w-full rounded-xl justify-between bg-white">
        <div className="rounded-full w-5/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
          <div className="flex md:p-1 h-full w-full rounded-full items-center justify-center bg-white">
            <Image src={image} alt="Photo of girl" className="rounded-full" />
          </div>
        </div>
        <div className="w-7/12 ml-[1vw]">
          <h1 className="text-xl text-websiteBlue">Sagrikaa Rastogi</h1>
          <p className="text-darkGrey text-sm mt-1">
            Counselling Psychologist, M.A
          </p>
          <h1 className="mt-1 text-base text-websiteBlue">Expertise</h1>
          {[
            "Anxiety",
            "Emotional distress",
            "Stress",
            "Productivity concerns",
          ].map((e) => {
            return (
              <li key={e} className="text-sm text-darkGrey">
                {e}
              </li>
            );
          })}
          <button
            onClick={(e) => {
              history.push("/therapists/sagrika");
            }}
            className="bg-websiteBlue text-sm px-7 py-1 mt-2 rounded-md text-white font-semibold"
          >
            Detailed Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const ListBlock = () => {
  const history = useRouter();
  return (
    <div className="rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
      <div className="flex items-start py-[3vw] px-[4vw] md:py-[0.75vw] md:px-[2vw] h-full w-full rounded-xl justify-between bg-white">
        <div className="rounded-full w-2/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
          <div className="flex md:p-1 h-full w-full rounded-full items-center justify-center bg-white">
            <Image src={image} alt="Photo of girl" className="rounded-full" />
          </div>
        </div>
        <div className="w-9/12 flex justify-between items-center">
          <div>
            <h1 className="text-xl text-websiteBlue">Sagrikaa Rastogi</h1>
            <p className="text-darkGrey text-sm mt-1">
              Counselling Psychologist, M.A
            </p>
          </div>
          <div>
            <h1 className="mt-1 text-base text-websiteBlue">Expertise</h1>
            {[
              "Anxiety",
              "Emotional distress",
              "Stress",
              "Productivity concerns",
            ].map((e) => {
              return (
                <li key={e} className="text-sm text-darkGrey">
                  {e}
                </li>
              );
            })}
          </div>
          <button
            onClick={(e) => {
              history.push("/therapists/sagrika");
            }}
            className="bg-websiteBlue px-12 py-1.5 rounded-lg text-white font-semibold"
          >
            Detailed Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
