"use client";
import React, { useState } from "react";
import Image from "next/image";
import therapistReview from "../../../Assets/therapist-review.png";
import scheduleAppointment from "../../../Assets/schedule-a-session.png";
import findNewTherapist from "../../../Assets/find-the-therapist.png";

import rain from "../../../Assets/modes/rain.png";
import sunshine from "../../../Assets/modes/sunshine.png";
import lighteing from "../../../Assets/modes/lighteing.png";
import cloudy from "../../../Assets/modes/cloudy.png";

import bg from "../../../Assets/top-background2.png";
import logoPng from "../../../Assets/logoPng.png";

import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import LeftBar from "../Components/LeftBar";
import RightBar from "../Components/LeftBar copy";

const page = () => {
  const history = useRouter();

  return (
    <>
      <div className="bg-[#eee] px-[5vw] flex justify-between items-start py-[2vw]">
        <LeftBar />
        <div className="w-6/12 px-[2vw]">
          <h1 className="text-darkGrey tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
            Manage Profile
          </h1>
          <div className="bg-white w-full shadow-lg shadow-lightGrey mt-4 p-3">
            <h1 className="text-darkGrey border-b pb-2 border-b-lightGrey tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
              Personal Information
            </h1>
            <div className="mt-5">
              {[
                "Your Name",
                "Your Phone",
                "Your Email",
                "Your Password",
                "Your Photo",
              ].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="items-center text-darkGrey grid mb-4"
                    style={{ gridTemplateColumns: "20% 80%" }}
                  >
                    <p className="text-light text-sm">{e}</p>
                    {e?.includes("Photo") ? (
                      <input
                        type="file"
                        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-websiteBlue transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-websiteBlue file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-websiteBlue focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-websiteBlue dark:file:text-neutral-100 dark:focus:border-primary"
                      />
                    ) : (
                      <input
                        type="text"
                        className="border outline-none border-lightGrey px-4 py-1.5 rounded-md"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-websiteBlue px-5 py-1.5 text-white mt-6 rounded-md">
              Update Profile
            </button>
          </div>
          {/* <div className="bg-white w-full shadow-lg shadow-lightGrey mt-4 p-3">
            <h1 className="text-darkGrey border-b pb-2 border-b-lightGrey tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
              Address
            </h1>
            <div className="mt-5">
            </div>
          </div> */}
        </div>
        <RightBar />
      </div>
    </>
  );
};

export default page;
