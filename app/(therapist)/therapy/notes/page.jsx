"use client";
import React, { useState, useContext, useEffect } from "react";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { CiLogout, CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import Context from "@/Context/Context";
import Image from "next/image";

import Navbar from "../../Components/Utils/Navbar";
import Footer from "../../Components/Utils/Footer";


import circle from "../../../(main)/Assets/notes-bg.png";
import logo from "@/(main)/Assets/logo.png";

const Notes = () => {
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
              router.push("/therapy/edit-profile");
            }}
            className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-between items-center rounded-full px-[2vw] py-2">
              <CiSettings size={25} className="mr-3" />
              Edit Profile
            </div>
          </div>
          <div
            onClick={(e) => {
              router.push("/");
              therapists.setIsTherapistLogin(false);
              deleteCookie("therapist_token");
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
      <div className={`${showLeftBar ? "w-10/12 ml-[16.6%]" : "w-full"}`}>
        <Navbar showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />
        <div className="py-4 px-6">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-websiteBlue text-2xl font-medium">
              Therapist Notes
            </h1>
            <AiOutlinePlus
              size={40}
              className="bg-websiteBlue rounded-full p-1 text-white"
            />
          </div>
          <div className="h-[70vh] overflow-y-scroll">
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const Block = () => {
  return (
    <div className="flex items-center justify-between mx-5 border-b border-black mb-3 pb-2">
      <div className="flex items-center w-fit">
        <Image src={circle} alt="Circle" className="w-[4vw]" />
        <div className="ml-2">
          <h1 className="text-websiteBlue text-lg">Anekant Jain</h1>
          <p>Date: 05-11-2023</p>
        </div>
      </div>
      <p className="text-websiteBlue text-lg">
        Session No : <span className="text-black">02</span>
      </p>
    </div>
  );
};

export default Notes;
