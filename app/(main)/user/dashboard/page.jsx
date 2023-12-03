"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
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
import cloud1 from "../../Assets/icons/cloud 1.png";
import gsap, { Power2 } from "gsap";
import Lightening from "./Lightening";

const makeItRain = () => {
  document.querySelector(".rain.front-row").innerHTML = "";
  document.querySelector(".rain.back-row").innerHTML = "";

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    // Your existing makeItRain function logic here
    const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    increment += randoFiver;

    // Add a new raindrop with various randomizations to certain CSS properties
    drops += `<div class="drop" style="left: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                </div>`;

    backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                      <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                      <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                    </div>`;
  }

  document.querySelector(".rain.front-row").innerHTML = drops;
  document.querySelector(".rain.back-row").innerHTML = backDrops;
};

const Dashboard = () => {
  const history = useRouter();
  const [showRain, setShowRain] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showSunshine, setShowSunshine] = useState(false);
  const [showCloud, setShowCloud] = useState(false);
  let { login, isLogin } = useContext(Context);

  const animateLeftRight = (e) => {
    let timeline = gsap.timeline({ repeat: Infinity });

    timeline.fromTo(
      e,
      { x: 1440 },
      { x: -1000, duration: 10, ease: Power2.easeInOut }
    );
  };

  const animateRightLeft = (e) => {
    let timeline = gsap.timeline({ repeat: Infinity });

    timeline.fromTo(
      e,
      { x: -1000 },
      { x: 1440, duration: 10, ease: Power2.easeInOut }
    );
  };

  useEffect(() => {
    if (showCloud) {
      animateLeftRight("#rightCloud");
      animateRightLeft("#right1Cloud");
      setTimeout(() => {
        setShowCloud(false);
      }, 9000);
    }
  }, [showCloud]);

  useEffect(() => {
    if (!isLogin) {
      history.push("/user/login");
    }
  }, []);

  useEffect(() => {
    makeItRain();
  }, []);

  const width = 1300;
  const height = 600;
  const maxLightningPaths = 200;
  const maxLightningThickness = 5;
  const startingDistance = 30;
  const maxBranches = 7;

  function makeLightning(ctx, startingX, startingY, branches) {
    ctx.beginPath();
    const amntOfPaths = getRandomInt(maxLightningPaths);
    let lightningThickness = maxLightningThickness;
    let distance = startingDistance;
    let timeout = 50;
    let speed = timeout;
    let totalTime = 0;
    for (let i = 0; i < amntOfPaths; i++) {
      ctx.strokeStyle = `rgb(78,102,173)`;
      ctx.lineWidth = getRandomInt(lightningThickness);
      lightningThickness /= 2.5;
      setTimeout(() => {
        ctx.moveTo(startingX, startingY);
        let endingX = getRandomInt(distance) * negOrPos() + startingX;
        let endingY = startingY + getRandomInt(distance * 2);
        distance /= 1.1;
        ctx.lineTo(endingX, endingY);
        startingX = endingX;
        startingY = endingY;
        ctx.stroke();
        if (
          branches < maxBranches &&
          getRandomInt(maxLightningPaths / 6) == 1
        ) {
          let time = makeLightning(ctx, startingX, startingY, branches + 1);
          totalTime += time;
        }
      }, timeout);
      speed /= 1.4;
      timeout += speed;
    }
    return timeout + totalTime;
  }

  function negOrPos() {
    return Math.round(Math.random()) == 0 ? -1 : 1;
  }

  function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
  }

  let prevHighestId = 0;

  function createCanvasAndLightning() {
    const canvas = document.createElement("canvas");
    const body = document.getElementById("weatherAnimation");
    canvas.setAttribute("width", "1450px");
    canvas.setAttribute("height", "800px");
    canvas.className = "myCanvas";
    let ctx = canvas.getContext("2d");
    body?.appendChild(canvas);
    const time = makeLightning(
      ctx,
      getRandomInt(width),
      getRandomInt(height / 3),
      0
    );
    canvas.style.animationName = "flash";
    canvas.style.animationDuration = time + "ms";
    setTimeout(() => {
      canvas.style.animationName = "fadeOut";
    }, time);
    setTimeout(() => {
      canvas.remove();
      const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= prevHighestId; i--) {
          window.clearTimeout(i);
        }
        prevHighestId = highestId;
        setTimeout(createCanvasAndLightning, 4000);
      }, 0);
    }, time * 2);
  }

  useEffect(() => {
    createCanvasAndLightning();
  }, [showRain]);

  useEffect(() => {
    if (showLight == true) {
      console.log("Light set timeout");
      setTimeout(() => {
        console.log("Timeout Light");
        setShowLight(false);
      }, 5000);
    }
  }, [showLight]);

  useEffect(() => {
    if (showSunshine == true) {
      setTimeout(() => {
        setShowSunshine(false);
      }, 5000);
    }
  }, [showSunshine]);

  useEffect(() => {
    if (showRain == true) {
      setTimeout(() => {
        setShowRain(false);
      }, 5000);
    }
  }, [showRain]);

  return (
    <div>
      <div className={`${showLight ? "block" : "hidden"}`}>
        <div
          id="weatherAnimation"
          className={`absolute top-0 left-0 z-50`}
        ></div>
      </div>
      <div class={`container ${showSunshine ? "block sunshine" : "hidden"}`}>
        <div class="cloud-one">
          <div class="cloud"></div>
        </div>
        <div class="cloud-two">
          <div class="cloud"></div>
        </div>
        <div class="mountain">
          <svg
            id="Flat"
            height="1000px"
            viewBox="0 0 512 512"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="sun"
              cx="280"
              cy="200"
              fill="#ff750a"
              r="25"
            ></circle>
            <path
              d="m280 384h-256l113.99-200a16 16 0 0 1 28.019 0z"
              fill="#966651"
            ></path>
            <path
              d="m201.579 246.419-25.579 25.581-24-32-32 32-20.49-20.49 38.479-67.51a16 16 0 0 1 28.02 0z"
              fill="#fbe9d8"
            ></path>
            <path d="m203.199 244.799-1.62 1.62" fill="none"></path>
            <path
              d="m488 384v24h-392v-24l171.54-304a16 16 0 0 1 27.06-1.348l41.4 57.348h14.252a16 16 0 0 1 14.218 8.662z"
              fill="#b37a60"
            ></path>
            <path
              d="m382.259 179.129-46.259 52.871-53.99-46.28-2.01-1.72-2.42 2.01-45.58 37.99-27.26-32.71.29-.5 62.509-110.79a16 16 0 0 1 27.06-1.35l41.401 57.35h14.25a16 16 0 0 1 14.22 8.66z"
              fill="#fbe9d8"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={`${
          showRain ? "block" : "hidden"
        } rain-animation overflow-hidden back-row-toggle splat-toggle`}
      >
        <div className="rain front-row"></div>
        <div className="rain back-row"></div>
      </div>
      <div
        className={`${
          showCloud ? "block" : "hidden"
        } absolute z-50 overflow-hidden w-full h-full`}
      >
        <Image
          src={cloud1}
          id="rightCloud"
          alt="Cloud"
          className="absolute w-[50vw]"
        />
        <Image
          src={cloud1}
          id="right1Cloud"
          className="w-[50vw] left-[10vw] top-[-10vw] absolute"
          alt="Cloud"
        />
        <Image
          src={cloud1}
          id="right1Cloud"
          className="w-[50vw] left-[10vw] top-[20vw] absolute"
          alt="Cloud"
        />
        <Image
          src={cloud1}
          id="right1Cloud"
          className="top-[6vw] w-[50vw] absolute"
          alt="Cloud"
        />
        <Image
          src={cloud1}
          alt="Cloud"
          id="rightCloud"
          className="absolute left-[10vw] top-[20vw] w-[50vw]"
        />
      </div>
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
