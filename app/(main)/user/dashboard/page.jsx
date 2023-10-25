"use client";
import React, { useEffect, useState, useContext } from "react";
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
import Context from "@/Context/Context";

const Dashboard = () => {
  const history = useRouter();
  let { login, isLogin } = useContext(Context);

  useEffect(() => {
    if (!isLogin) {
      history.push("/user/login");
    }
  }, []);

  return (
    <>
      <div className="bg-[#eee] px-[5vw] flex justify-between items-start py-[2vw]">
        <LeftBar />
        <div className="w-6/12 px-[2vw]">
          {" "}
          <div className="relative mb-6">
            <Image src={bg} alt="Background" />
            <div className="flex px-[2vw] justify-between items-center h-full absolute top-0 left-0">
              <h1 className="text-2xl text-white font-light">
                Hi {login?.name}, Welcome to #oneness
              </h1>
              <Image src={logoPng} alt="Logo png" className="w-[20%]" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {[
              { image: therapistReview, route: "/therapist-review" },
              { image: scheduleAppointment, route: "" },
              { image: findNewTherapist, route: "/therapy" },
            ].map((e, i) => {
              return (
                <div
                  className="cursor-pointer bg-white w-[32%] p-[2.5vw] h-[8vw] flex justify-center items-center rounded-3xl"
                  key={i}
                >
                  <Image
                    src={e?.image}
                    alt={e?.image?.src}
                    onClick={(event) => {
                      history.push(e?.route);
                    }}
                  />
                </div>
              );
            })}
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
