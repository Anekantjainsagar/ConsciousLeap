"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";

import Navbar from "../../Components/Utils/Navbar";
import Footer from "../../Components/Utils/Footer";
import image from "../../../(main)/Assets/top-background2.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
import { CiLogout, CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import { deleteCookie, getCookie } from "cookies-next";
import { inter } from "../../../font";
import Link from "next/link";

const Dashboard = () => {
  const [dateState, setDate] = useState(new Date());
  const [showLeftBar, setShowLeftBar] = useState(true);
  const [blog, setBlog] = useState();
  const [store, setStore] = useState();
  const { blogs, productM } = useContext(Context);
  const { therapists } = useContext(Context);
  const history = useRouter();
  const router = useRouter();

  useEffect(() => {
    var randomNumber = Math.floor(Math.random() * blogs?.length);
    setBlog(blogs[randomNumber]);
  }, [blogs]);

  useEffect(() => {
    if (productM?.productData) {
      let data = productM?.productData?.products;
      var randomNumber = Math.floor(Math.random() * data?.length);
      if (randomNumber) {
        setStore(data[randomNumber]);
      }
    }
  }, [productM]);

  useEffect(() => {
    if (
      getCookie("therapist_token")?.length <= 0 ||
      !getCookie("therapist_token") ||
      getCookie("therapist_token") === undefined
    ) {
      router.push("/user/login");
    }
  }, [router]);

  return (
    <div className="flex overflow-x-hidden">
      <div
        className={`${
          showLeftBar ? "w-2/12" : "w-0 opacity-0 hidden"
        } border max-[768px]:hidden border-gray-300 md:block h-[100vh] fixed top-0 left-0 bg-veryLightGrey py-4 px-3 flex flex-col justify-center items-center`}
      >
        <Image src={logo} alt="Logo" />
        <div className="flex flex-col items-center">
          <Image
            src={
              therapists?.therapist?.photo
                ? therapists?.therapist?.photo
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0QxSZCjz-8JefhrJrJwtL5i7utqDsRhv7Q&usqp=CAU"
            }
            alt="Image"
            width={1000}
            height={1000}
            className="w-[11.5vw] border h-[11.5vw] object-cover object-center rounded-full mt-[4vw]"
          />
          <p className="mt-1 text-xl text-websiteBlue text-center font-bold">
            {therapists?.therapist?.name}
          </p>
          <p className="text-sm text-websiteBlue break-words w-[13vw] text-center">
            {therapists?.therapist?.email}
          </p>
        </div>
        <div>
          <div
            onClick={(e) => {
              router.push("/therapy/edit-profile");
            }}
            className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-center items-center rounded-full px-[2vw] py-2">
              <CiSettings size={25} className="mr-3" />
              Edit Profile
            </div>
          </div>
          <div
            onClick={(e) => {
              router.push("/");
              therapists.setIsTherapistLogin(false);
              deleteCookie("therapist_token");
              window.reload();
            }}
            className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-center items-center rounded-full px-[2vw] py-2">
              <CiLogout size={25} className="mr-3" />
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className={`${showLeftBar ? "md:w-10/12 md:ml-[16.6%]" : "w-full"}`}>
        <Navbar showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />
        <div className="bg-veryLightGrey px-[3vw] md:px-[1.5vw] flex md:flex-row flex-col items-start justify-between py-[3vw]">
          <div className="md:w-9/12 md:pr-[2vw]">
            <div className="relative h-[10vh] md:h-[25vh] w-full rounded-[3vw]">
              <Image
                src={image}
                alt="Image"
                className="h-full w-full rounded-[3vw] object-cover object-center"
              />
              <div className="absolute top-0 left-0 w-full flex justify-between items-center h-full px-[4vw] text-white">
                <p className="md:text-2xl font-light">
                  Hello {therapists?.therapist?.name}, Welcome to Wellbeing!
                </p>
                <Image
                  src={logoPng}
                  alt="Circle"
                  className="md:w-[8vw] w-[20vw]"
                />
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
              <Link
                href="https://accounts.zoho.com/signin?servicename=ZohoBookings&signupurl=https://www.zoho.com/bookings/signup.html"
                target="_blank"
              >
                <Image
                  src={img1}
                  alt="Image 1"
                  className="hover:scale-105 transition-all cursor-pointer"
                />
              </Link>
              <Link
                href="https://accounts.zoho.com/signin?servicename=ZohoBookings&signupurl=https://www.zoho.com/bookings/signup.html"
                target="_blank"
              >
                <Image
                  src={img2}
                  alt="Image 1"
                  className="hover:scale-105 transition-all cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex md:flex-row flex-col items-stretch justify-between px-[0.7vw]">
              <div className="w-full md:mb-0 mb-3 md:w-[48.5%] bg-white rounded-3xl p-[3vw] md:p-[1vw]">
                <h1 className="text-center text-websiteBlue text-[19px] font-medium">
                  My Reviews
                </h1>
                <div>
                  {[
                    {
                      image: sunrise,
                      text: "Positive Vibes",
                      value:
                        therapists?.therapist?.reviews?.length > 0
                          ? (therapists?.therapist?.reviews?.reduce(
                              (sum, obj) => sum + parseInt(obj.positivenss),
                              0
                            ) /
                              (therapists?.therapist?.reviews?.length * 5)) *
                            100
                          : 0,
                    },
                    {
                      image: calmness,
                      text: "Calmness",
                      value:
                        therapists?.therapist?.reviews?.length > 0
                          ? (therapists?.therapist?.reviews?.reduce(
                              (sum, obj) => sum + parseInt(obj.comfortability),
                              0
                            ) /
                              (therapists?.therapist?.reviews?.length * 5)) *
                            100
                          : 0,
                    },
                    {
                      image: knowledge,
                      text: "Knowledge",
                      value:
                        therapists?.therapist?.reviews?.length > 0
                          ? (therapists?.therapist?.reviews?.reduce(
                              (sum, obj) => sum + parseInt(obj.knowledgable),
                              0
                            ) /
                              (therapists?.therapist?.reviews?.length * 5)) *
                            100
                          : 0,
                    },
                  ].map((e, i) => {
                    return <ReviewBlock key={i} data={e} />;
                  })}
                </div>
              </div>
              <div className="w-full md:mb-0 mb-3 md:w-[48.5%] bg-white rounded-3xl p-[3vw] md:p-[1vw]">
                <h1 className="text-center text-websiteBlue text-[19px] font-medium">
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
          <div className="w-full md:w-3/12">
            <div className="bg-white p-5 rounded-lg">
              <div className="rounded-lg w-full h-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
                <div className="h-full w-full rounded-lg py-[1vw] items-center justify-center bg-white flex flex-col">
                  <h1 className="text-websiteBlue text-xl mb-2 font-semibold">
                    Calendar
                  </h1>
                  <Calendar
                    className={`${inter.className}`}
                    value={dateState}
                    onChange={(e) => {
                      setDate(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="shadow-lg py-2 mt-5 px-3 border rounded-lg bg-white shadow-lightGrey mx-auto">
              {blog?._id && (
                <>
                  <h1 className="text-center text-sm text-websiteBlue">
                    Recommended Reads
                  </h1>
                  <Image
                    src={blog?.image}
                    width={10000}
                    height={10000}
                    alt="Idea image"
                    className="w-8/12 h-[12vh] rounded-md object-cover object-center mx-auto my-4 cursor-pointer"
                    onClick={(e) => {
                      history.push(`/blogs/${blog?._id}`);
                    }}
                  />
                </>
              )}
              <div className="h-[2px] my-5 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen"></div>
              {store?._id && (
                <>
                  <h1 className="text-center text-sm text-websiteBlue">
                    Conscious Store
                  </h1>
                  <Image
                    src={store?.images[0]}
                    width={1000}
                    height={1000}
                    alt="Conscious Store"
                    onClick={(e) => {
                      history.push(`/conscious-store/${store?._id}`);
                    }}
                    className="w-8/12 h-[12vh] object-center cursor-pointer object-cover rounded-md mx-auto my-4"
                  />
                </>
              )}
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
    <div className="bg-veryLightGrey flex justify-between items-center rounded-xl px-[4vw] md:px-[2vw] py-3 md:py-2 mt-3">
      <Image
        src={data?.image}
        alt="Sun rise"
        className={`${
          data?.image?.src?.includes("calm")
            ? "w-[12vw] md:w-[5vw]"
            : data?.image?.src?.includes("know")
            ? "w-[11vw] md:w-[4vw]"
            : "w-[14vw] md:w-[6vw]"
        }`}
      />
      <p className="text-websiteBlue text-lg md:text-base min-[1300px]:text-lg ml-3">
        {data?.text}
      </p>
      <div className="text-websiteBlue bg-white border-4 flex justify-center items-center text-xs rounded-full font-semibold h-[3.75vw] w-[3.75vw] border-oceanGreen">
        {data?.value}%
      </div>
    </div>
  );
};

const TaskBlock = ({ data }) => {
  return (
    <div className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3">
      <div className="bg-veryLightGrey flex justify-between items-center rounded-full px-[5vw] md:px-[2vw] py-[12.75px]">
        <Image
          src={data?.image}
          alt="Sun rise"
          className="w-[10vw] md:w-[3vw]"
        />
        <p className="text-websiteBlue ml-3 text-lg md:text-base min-[1300px]:text-lg">
          {data?.text}
        </p>
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
