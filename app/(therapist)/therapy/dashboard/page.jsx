"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";

import Navbar from "../../Components/Utils/Navbar";
import Footer from "../../Components/Utils/Footer";
import image from "../../../(main)/Assets/top-background2.png";
import ideas from "../../../(main)/Assets/ideas.jpg";
import books from "../../../(main)/Assets/book.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// import img1 from "../../../(main)/Assets/therapy/my_client.png";
import img1 from "@/(main)/Assets/Therapy/my_client.png";
import img2 from "@/(main)/Assets/Therapy/my_earning.png";
import img3 from "@/(main)/Assets/Therapy/therapist_notes.png";

import sunrise from "@/(main)/Assets/Therapy/positive_vibes.png";
import calmness from "@/(main)/Assets/Therapy/calmness.png";
import knowledge from "@/(main)/Assets/Therapy/knowledge.png";

import logoPng from "@/(main)/Assets/logoPng.png";

import finishing from "@/(main)/Assets/Therapy/finishing.png";
import schedule from "@/(main)/Assets/Therapy/shedule.png";
import takingBreak from "@/(main)/Assets/Therapy/taking_break.png";

import logo from "@/(main)/Assets/logo.png";

import sagrika from "@/(main)/Assets/sagrika.jpeg";

import { AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";

const Dashboard = () => {
  const [dateState, setDate] = useState(new Date());
  const [showLeftBar, setShowLeftBar] = useState(true);
  const router = useRouter();
  const { therapists } = useContext(Context);

  useEffect(() => {
    if (getCookie("therapist_token")?.length <= 1) {
      router.push("/user/login");
    }
  }, []);

  return (
    <div className="flex ">
      <div
        className={`${
          showLeftBar ? "w-2/12" : "w-0 hidden"
        } border border-gray-300 h-[100vh] fixed top-0 left-0 bg-veryLightGrey py-4 px-3 flex flex-col items-center`}
      >
        <Image src={logo} alt="Logo" />
        <Image
          src={therapists?.therapist?.photo}
          alt="Image"
          width={1000}
          height={1000}
          className="w-[11.5vw] h-[11.5vw] object-cover object-center rounded-full mt-[4vw]"
        />
        <div className="flex flex-col items-center">
          <p className="mt-1 text-lg">{therapists?.therapist?.name}</p>
          <p className="text-sm text-gray-700 break-words w-[13vw] text-center">
            {therapists?.therapist?.email}
          </p>
        </div>
        <div>
          <div
            onClick={(e) => {
              router.push("/therapy/dashboard");
            }}
            className="rounded-lg w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-between items-center rounded-lg px-[2vw] py-2">
              <AiOutlineHome size={25} className="mr-3" />
              Dashboard
            </div>
          </div>
          <div
            onClick={(e) => {
              router.push("/therapy/edit-profile");
            }}
            className="rounded-lg w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-between items-center rounded-lg px-[2vw] py-2">
              <CiSettings size={25} className="mr-3" />
              Edit Profile
            </div>
          </div>
        </div>
      </div>
      <div className={`${showLeftBar ? "w-10/12 ml-[16.6%]" : "w-full"}`}>
        <Navbar showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />
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
                  Hello {therapists?.therapist?.name}, Welcome to Wellbeing!
                </p>
                <Image src={logoPng} alt="Circle" />
              </div>
            </div>
            <div className="grid grid-cols-3 justify-between w-full py-[1vw]">
              <Image
                src={img3}
                alt="Image 1"
                onClick={(e) => {
                  router.push("/therapy/notes");
                }}
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
                <div>
                  {[
                    { image: schedule, text: "Scheduled Sessions", value: 100 },
                    { image: finishing, text: "Finishing Notes", value: 100 },
                    { image: takingBreak, text: "Taking a Break", value: 100 },
                  ].map((e, i) => {
                    return <TaskBlock key={i} data={e} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12">
            <div className="bg-white p-5 rounded-lg">
              <div className="rounded-lg w-full h-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
                <div className="h-full w-full rounded-lg p-[1vw] items-center justify-center bg-white flex flex-col">
                  <h1 className="text-websiteBlue text-xl font-semibold">
                    Calendar
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
                Recommended Reads
              </h1>
              <Image
                src={ideas}
                alt="Idea image"
                className="w-8/12 mx-auto my-4"
              />
              <div className="h-[2px] my-5 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen"></div>
              <h1 className="text-center text-sm text-lightGrey">
                Conscious Store
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
      </div>
    </div>
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

const TaskBlock = ({ data }) => {
  return (
    <div className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3">
      <div className="bg-veryLightGrey flex justify-between items-center rounded-full px-[2vw] py-2">
        <Image src={data?.image} alt="Sun rise" className="w-[3vw]" />
        <p className="text-websiteBlue text-lg">{data?.text}</p>
        <div className="text-oceanGreen">
          <input
            type="checkbox"
            className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
