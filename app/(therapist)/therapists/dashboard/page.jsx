"use client";
import React, { useState } from "react";
import Image from "next/image";

import Navbar from "../../Components/Utils/Navbar";
import Footer from "../../Components/Utils/Footer";
import image from "../../../(main)/Assets/top-background2.png";
import ideas from "../../../(main)/Assets/ideas.jpg";
import books from "../../../(main)/Assets/book.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import img1 from "../../../(main)/Assets/therapists/my_client.png";
import img2 from "../../../(main)/Assets/therapists/my_earning.png";
import img3 from "../../../(main)/Assets/therapists/therapist_notes.png";

import sunrise from "@/(main)/Assets/therapists/positive_vibes.png";
import calmness from "@/(main)/Assets/therapists/calmness.png";
import knowledge from "@/(main)/Assets/therapists/knowledge.png";

import logoPng from "@/(main)/Assets/logoPng.png";

const Dashboard = () => {
  const [dateState, setDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="bg-veryLightGrey px-[1.5vw] flex items-start justify-between py-[3vw]">
        <div className="w-9/12 pr-[2vw]">
          <div className="relative h-[25vh] w-full rounded-[3vw]">
            <Image
              src={image}
              alt="Image"
              className="h-full w-full rounded-[3vw] object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full flex justify-between items-center h-full px-[4vw] text-white">
              <p className="text-2xl font-light">
                Hello Vandita Sharma , Welcome to Wellbeing!
              </p>
              <Image src={logoPng} alt="Circle" />
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between w-full py-[1vw]">
            <Image
              src={img3}
              alt="Image 1"
              className="hover:scale-105 transition-all cursor-pointer"
            />
            <Image
              src={img1}
              alt="Image 1"
              className="hover:scale-105 transition-all cursor-pointer"
            />
            <Image
              src={img2}
              alt="Image 1"
              className="hover:scale-105 transition-all cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between px-[0.7vw]">
            <div className="w-[48.5%] bg-white rounded-3xl p-[1vw]">
              <h1 className="text-center text-websiteBlue text-[19px] font-medium">
                My Reviews
              </h1>
              <div>
                {[
                  { image: sunrise, text: "Positive Vibes", value: 100 },
                  { image: calmness, text: "Calmness", value: 100 },
                  { image: knowledge, text: "Knowledge", value: 100 },
                ].map((e, i) => {
                  return <ReviewBlock key={i} data={e} />;
                })}
              </div>
            </div>
            <div className="w-[48.5%] bg-white rounded-3xl p-[1vw]">
              <h1 className="text-center text-websiteBlue text-[19px] font-light">
                Tasks for the day
              </h1>
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <div className="bg-white p-5 rounded-lg">
            <div className="rounded-lg w-full h-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
              <div className="h-full w-full rounded-lg p-[1vw] items-center justify-center bg-white flex flex-col">
                <h1 className="text-websiteBlue text-xl font-semibold">
                  Calender
                </h1>
                <Calendar
                  value={dateState}
                  onChange={(e) => {
                    setDate(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="shadow-lg py-2 px-3 border bg-white rounded-lg shadow-lightGrey mt-[1vw] mx-auto">
            <h1 className="text-center text-sm text-lightGrey">
              Recommanded Reads
            </h1>
            <Image
              src={ideas}
              alt="Idea image"
              className="w-8/12 mx-auto my-4"
            />
            <div className="h-[2px] my-5 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen"></div>
            <h1 className="text-center text-sm text-lightGrey">
              conscious Store
            </h1>
            <Image
              src={books}
              alt="Idea image"
              className="w-8/12 mx-auto my-4"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ReviewBlock = ({ data }) => {
  return (
    <div className="bg-veryLightGrey flex justify-between items-center rounded-xl px-[2vw] py-2 mt-3">
      <Image
        src={data?.image}
        alt="Sun rise"
        className={`${
          data?.image?.src?.includes("calm")
            ? "w-[5vw]"
            : data?.image?.src?.includes("know")
            ? "w-[4vw]"
            : "w-[6vw]"
        }`}
      />
      <p className="text-websiteBlue text-lg">{data?.text}</p>
      <div className="text-websiteBlue bg-white border-4 flex justify-center items-center text-xs rounded-full font-semibold h-[3.75vw] w-[3.75vw] border-oceanGreen">
        {data?.value}%
      </div>
    </div>
  );
};

export default Dashboard;
