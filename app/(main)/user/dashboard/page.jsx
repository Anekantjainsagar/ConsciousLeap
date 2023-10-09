"use client";
import React, { useState } from "react";
import Image from "next/image";
import therapistReview from "../../Assets/therapist-review.png";
import scheduleAppointment from "../../Assets/schedule-a-session.png";
import findNewTherapist from "../../Assets/find-the-therapist.png";

import rain from "../../Assets/modes/rain.png";
import sunshine from "../../Assets/modes/sunshine.png";
import lighteing from "../../Assets/modes/lighteing.png";
import cloudy from "../../Assets/modes/cloudy.png";

import bg from "../../Assets/top-background2.png";
import logoPng from "../../Assets/logoPng.png";

import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import LeftBar from "./Components/LeftBar";
import RightBar from "./Components/LeftBar copy";

const Dashboard = () => {
  const history = useRouter();

  return (
    <>
      <div className="bg-[#eee] px-[5vw] flex justify-between items-start py-[2vw]">
        <LeftBar />
        <div className="w-6/12 px-[2vw]">
          {" "}
          <div className="relative mb-6">
            <Image src={bg} alt="Background" />
            <div className="flex px-[4vw] justify-between items-center h-full absolute top-0 left-0">
              <h1 className="text-2xl text-white font-light">
                Hi Kunal Muthreja, Welcome to <br /> #oneness
              </h1>
              <Image
                src={logoPng}
                alt="Logo png"
                className="w-3/12 block ml-5"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Image
              className="bg-white p-5 rounded-3xl w-[30%] cursor-pointer"
              src={therapistReview}
              alt="Schedule appointment"
              onClick={(e) => {
                history.push("/therapist-review");
              }}
            />
            <Image
              className="bg-white p-5 rounded-3xl w-[30%] cursor-pointer"
              src={scheduleAppointment}
              alt="Schedule appointment"
            />
            <Image
              className="bg-white p-5 rounded-3xl w-[30%] cursor-pointer"
              src={findNewTherapist}
              alt="Schedule appointment"
              onClick={(e) => {
                history.push("/therapists");
              }}
            />
          </div>
          <div className="bg-white rounded-3xl mt-6 p-4">
            <h1 className="text-websiteBlue font-light text-center">
              Feeling Check
            </h1>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {[rain, sunshine, cloudy, lighteing].map((e) => {
                return (
                  <Image
                    src={e}
                    alt={e?.src}
                    key={e?.src}
                    className="hover:scale-90 transition-all cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <RightBar />
      </div>
    </>
  );
};

export default Dashboard;
