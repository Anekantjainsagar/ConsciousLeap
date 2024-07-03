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

import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import LeftBar from "./Components/LeftBar";
import RightBar from "./Components/LeftBar copy";
import Context from "@/Context/Context";

import Rain from "./Rain";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import { getCookie } from "cookies-next";

const Dashboard = () => {
  let { login } = useContext(Context);
  useEffect(() => {
    if (!login?._id) {
      history.push("/user/login");
    }
  }, []);

  const history = useRouter();
  const [showRain, setShowRain] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showSunshine, setShowSunshine] = useState(false);
  const [showCloud, setShowCloud] = useState(false);

  useEffect(() => {
    if (showLight) {
      setTimeout(() => {
        setShowLight(false);
      }, 5000);
    }
  }, [showLight]);

  useEffect(() => {
    if (showCloud) {
      setTimeout(() => {
        setShowCloud(false);
      }, 5000);
    }
  }, [showCloud]);

  useEffect(() => {
    if (showSunshine) {
      setTimeout(() => {
        setShowSunshine(false);
      }, 5000);
    }
  }, [showSunshine]);

  return (
    <div>
      <Rain showRain={showRain} setShowRain={setShowRain} />
      <div
        className={`${
          showLight ? "block" : "hidden"
        } absolute top-0 left-0 w-[95vw] z-50 h-[100vh] overflow-hidden`}
      >
        <Image
          src={"/lightening.gif"}
          width={100}
          height={100}
          alt="Light"
          className="w-full h-full object-cover object-center z-50"
        />
      </div>
      {showSunshine && (
        <div
          className={`absolute z-50 top-0 left-0 w-[99vw] h-[100vh] overflow-hidden`}
        >
          <Image
            src={"/sunshine.gif"}
            width={100}
            height={100}
            alt="Light"
            className="w-full h-full object-cover object-center z-50"
          />
        </div>
      )}
      {showCloud && (
        <div
          className={`absolute z-50 top-0 left-0 w-[99vw] h-[100vh] overflow-hidden`}
        >
          <Image
            src={"/cloud.gif"}
            width={100}
            height={100}
            alt="Light"
            className="w-full h-full object-cover object-center z-50"
          />
        </div>
      )}
      <div className="bg-[#eee] px-[5vw] flex md:flex-row flex-col justify-between items-start py-[4vw]">
        <LeftBar />
        <div className="md:w-6/12 px-[2vw]">
          {" "}
          <div className="mb-4 md:mb-6 border">
            <div className="flex px-[3vw] w-full h-[15vh] min-[768px]:h-[10vh] min-[1000px]:h-[15vh] backgroundImage md:px-[2vw] justify-between items-center rounded-[25px] top-0 left-0">
              <h1 className="text-base md:text-xl text-white font-light">
                Hi {login?.name}, Welcome to #oneness
              </h1>
              <Image
                src={"/Assets/logoPng.png"}
                alt="Logo png"
                width={1000}
                height={1000}
                className="w-[20%] border border-black"
              />
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
            <h2 className="text-websiteBlue font-light md:text-base text-lg text-center">
              Feeling Check
            </h2>
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
                    axios
                      .post(`${BASE_URL}/user/rain`, {
                        token: getCookie("token"),
                      })
                      .then((res) => console.log(res));
                    setShowRain(!showRain);
                  },
                  suburi: "/rain",
                },
                {
                  suburi: "/sunshine",
                  image: sunshine,
                  value: showSunshine,
                  onchange: (e) => {
                    scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                    axios
                      .post(`${BASE_URL}/user/sunshine`, {
                        token: getCookie("token"),
                      })
                      .then((res) => console.log(res));
                    setShowSunshine(!showSunshine);
                  },
                },
                {
                  suburi: "/cloud",
                  image: cloudy,
                  value: showCloud,
                  onchange: (e) => {
                    scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                    axios
                      .post(`${BASE_URL}/user/cloud`, {
                        token: getCookie("token"),
                      })
                      .then((res) => console.log(res));
                    setShowCloud(!showCloud);
                  },
                },
                {
                  suburi: "/light",
                  image: lighteing,
                  value: showLight,
                  onchange: (e) => {
                    scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                    axios
                      .post(`${BASE_URL}/user/light`, {
                        token: getCookie("token"),
                      })
                      .then((res) => console.log(res));
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
                    className="hover:scale-90 transition-all cursor-pointer z-10"
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
