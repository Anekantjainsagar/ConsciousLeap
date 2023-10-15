"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";

import Navbar from "../../Components/Utils/Navbar";
import Footer from "../../Components/Utils/Footer";

import logo from "@/(main)/Assets/logo.png";

import sagrika from "@/(main)/Assets/sagrika.jpeg";

import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Context from "@/Context/Context";

const EditProfile = () => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const router = useRouter();
  const { therapists } = useContext(Context);
  const [therapist, setTherapist] = useState({
    name: "",
    phone: "",
    email: "",
    desc: "",
    experience: "",
    expertise: [],
    qualifications: [],
    speaks: [],
    about: "",
  });

  useEffect(() => {
    const { therapist } = therapists;
    setTherapist({
      name: therapist?.name,
      phone: therapist?.phone,
      email: therapist?.email,
      desc: therapist?.desc,
      experience: therapist?.experience,
      expertise: therapist?.expertise,
      qualifications: therapist?.qualifications,
      speaks: therapist?.speaks,
      about: therapist?.about,
    });
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
          src={sagrika}
          alt="Image"
          className="w-10/12 rounded-full mt-[4vw]"
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
              router.push("/therapists/dashboard");
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
              router.push("/therapists/edit-profile");
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
        <div className="px-[1.5vw] py-[3vw]">
          <h1 className="text-lg">
            Therapists settings{" "}
            <Link href="/therapists/sagrika" target="_blank">
              <span className="text-base text-gray-500 hover:underline transition-all cursor-pointer">
                (Visit Profile)
              </span>
            </Link>
          </h1>
          <div className="px-3">
            <div
              className="grid py-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Therapist Name *</p>
              <input
                type="text"
                value={therapist?.name}
                onChange={(e) => {
                  setTherapist({ ...therapist, name: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">
                Therapist Profile Picture
              </p>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
              />
            </div>
            <div
              className="grid pt-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Therapist Phone</p>
              <input
                type="text"
                value={therapist?.phone}
                onChange={(e) => {
                  setTherapist({ ...therapist, phone: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid pt-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Short Description *</p>
              <input
                type="text"
                value={therapist?.desc}
                onChange={(e) => {
                  setTherapist({ ...therapist, desc: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid pt-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Experience *</p>
              <input
                type="text"
                value={therapist?.experience}
                onChange={(e) => {
                  setTherapist({ ...therapist, experience: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Expertise *</p>
              <div>
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div className="pl-4">
                    <AiOutlineClose
                      className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                      size={35}
                    />
                  </div>
                </div>
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div className="ml-4 w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer ">
                    Add New
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Qualifications *</p>
              <div>
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div className="pl-4">
                    <AiOutlineClose
                      className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                      size={35}
                    />
                  </div>
                </div>
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div className="ml-4 w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer ">
                    Add New
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Speaks *</p>
              <div>
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div className="pl-4">
                    <AiOutlineClose
                      className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                      size={35}
                    />
                  </div>
                </div>
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div className="ml-4 w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer ">
                    Add New
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">About Therapist*</p>
              <textarea
                className="border outline-none text-gray-600 rounded-md px-4 py-2"
                rows={3}
                cols={3}
                value={therapist?.about}
                onChange={(e) => {
                  setTherapist({ ...therapist, about: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditProfile;
