"use client";
import React, { useContext, useEffect, useState } from "react";
import Line2 from "../Components/Lines/Line2";
import ClientTestimonials from "../Components/ClientTestimonials";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import Context from "@/Context/Context";
import bgGlobe from "../Assets/bg-globe.png";
import Image from "next/image";
import logoCircle from "../Assets/bg-member.png";

const BussinessConsciousleap = () => {
  const { bussinessShow } = useContext(Context);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    company: "",
    noOfEmployees: "",
    workEmail: "",
    industry: "",
    country: "",
    about: "",
  });

  React.useEffect(() => {
    const element = document.getElementById(bussinessShow);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  useEffect(() => {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    const source = document.createElement("source");
    source.src = "/Why-consciousleap-for-Business.mp4";
    let videoElement = document.getElementById("container-bussiness");
    if (!videoElement.innerHTML.includes("Why-consciousleap")) {
      video.appendChild(source);
      document.getElementById("container-bussiness").appendChild(video);
    }
  }, []);

  return (
    <div className="flex flex-col items-center pt-[5vw]">
      <Toaster />
      <h1 className="text-3xl font-light gradientHover cursor-pointer">
        consciousleap for Business
      </h1>
      <p className="mt-3 text-center px-4">
        At consciousleap for Business, we take a collective mindful approach to
        mental health-related support services for Businesses.
      </p>
      <Line2 />
      <h1
        className="text-3xl font-light gradientHover md:px-0 px-5 text-center cursor-pointer"
        id="whyconsciousleapforbusiness?"
      >
        Why consciousleap for Business?
      </h1>
      <div
        id="container-bussiness"
        className="px-4 py-4 rounded-md mt-5 w-11/12 md:w-8/12 md:px-5"
      ></div>
      <Line2 />
      <div className="flex flex-col items-center h-[50vh] md:w-[42%]">
        <h1
          className="text-3xl font-light gradientHover cursor-pointer"
          id="ourglobalclients"
        >
          Our Global Clients
        </h1>
        <p className="text-center mt-2 md:px-0 px-5">
          Some of our esteemed clients use consciousleap for Business at their
          workplace.
        </p>
        <Image src={bgGlobe} alt="Bg Globe" className="mt-2 md:mt-5" />
      </div>
      <Line2 />
      <ClientTestimonials />
      <Line2 />
      <div className="relative flex">
        <Image
          src={logoCircle}
          alt="Logo"
          className="md:block hidden w-[65vw]"
        />
        <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 pb-5 md:-translate-x-1/2">
          <h1
            className="text-3xl font-light text-center gradientHover cursor-pointer"
            id="scheduleacall"
          >
            Schedule a Call
          </h1>
          <div className="mt-3 pb-10 flex flex-col items-center">
            <input
              type="text"
              placeholder={"Name"}
              value={user?.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder={"Phone number"}
              value={user?.phone}
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder={"Company Name"}
              value={user?.company}
              onChange={(e) => {
                setUser({ ...user, company: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder={"Number Of Employees"}
              value={user?.noOfEmployees}
              onChange={(e) => {
                setUser({ ...user, noOfEmployees: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder={"Work Email"}
              value={user?.workEmail}
              onChange={(e) => {
                setUser({ ...user, workEmail: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder={"Industry"}
              value={user?.industry}
              onChange={(e) => {
                setUser({ ...user, industry: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder={"Country"}
              value={user?.country}
              onChange={(e) => {
                setUser({ ...user, country: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder={"How did you hear about us?"}
              value={user?.about}
              onChange={(e) => {
                setUser({ ...user, about: e.target.value });
              }}
              className="border outline-none px-4 py-1 w-[80vw] md:w-[20vw] mb-2 rounded-md"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post(`${BASE_URL}/user/bussiness`, { ...user })
                  .then((res) => {
                    if (res.status == 200) {
                      toast.success("Submitted successfully");
                      setUser({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        message: "",
                      });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="w-[80vw] md:w-[20vw] bg-websiteBlue text-white py-2 font-semibold rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessConsciousleap;
