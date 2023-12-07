"use client";
import React, { useEffect, useState, useContext, } from "react";
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

import Rain from "./Rain";
import Cloud from "./Cloud";

const Dashboard = () => {
  useEffect(() => {
    if (!isLogin) {
      history.push("/user/login");
    }
  }, []);

  const history = useRouter();
  const [showRain, setShowRain] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showSunshine, setShowSunshine] = useState(false);
  const [showCloud, setShowCloud] = useState(false);
  let { login, isLogin } = useContext(Context);

  return (
    <div>
      <Rain showRain={showRain} setShowRain={setShowRain} />
      <Cloud showCloud={showCloud} setShowCloud={setShowCloud} />
      <div className="bg-[#eee] px-[5vw] flex md:flex-row flex-col justify-between items-start py-[2vw]">
        <LeftBar />
        <div className="md:w-6/12 px-[2vw]">
          {" "}
          <div className="relative mb-4 md:mb-6">
            <Image src={bg} alt="Background" />
            <div className="flex px-[3vw] md:px-[2vw] justify-between items-center h-full absolute top-0 left-0">
              <h1 className="text-base md:text-2xl text-white font-light">
                Hi {login?.name}, Welcome to #oneness
              </h1>
              <Image src={logoPng} alt="Logo png" className="w-[20%]" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center">
            {[
              { image: therapistReview, route: "/therapist-review" },
              { image: scheduleAppointment, route: "/therapy" },
              { image: findNewTherapist, route: "/therapy" },
            ].map((e, i) => {
              return (
                <div
                  className="cursor-pointer bg-white w-full md:w-[32%] p-[3vw] md:p-[2.5vw] h-fit md:mb-0 mb-4 md:h-[8vw] flex justify-center items-center rounded-3xl hover:scale-95 transition-all"
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
          <div className="bg-white rounded-3xl mt-1 md:mt-6 p-4">
            <h1 className="text-websiteBlue font-light md:text-base text-lg text-center">
              Feeling Check
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
              {[
                {
                  image: rain,
                  value: showRain,
                  onchange: (e) => {
                    scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });

                    setShowRain(!showRain);
                  },
                },
                {
                  image: sunshine,
                  value: showSunshine,
                  onchange: (e) => {
                    scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                    setShowSunshine(!showSunshine);
                  },
                },
                {
                  image: cloudy,
                  value: showCloud,
                  onchange: (e) => {
                    scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                    setShowCloud(!showCloud);
                  },
                },
                {
                  image: lighteing,
                  value: showLight,
                  onchange: (e) => {
                    scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                    setShowLight(!showLight);
                  },
                },
              ].map((e) => {
                return (
                  <Image
                    onClick={e?.onchange}
                    src={e?.image}
                    alt={e?.image.src}
                    key={e?.image.src}
                    className="hover:scale-90 transition-all cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
