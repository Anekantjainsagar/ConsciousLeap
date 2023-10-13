"use client";
import React, { useState } from "react";
import Title from "../components/Title";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Calendar } from "rsuite";

const EnterDetails = () => {
  const [value, setValue] = useState(new Date());
  const router = useRouter();

  return (
    <div>
      <Title />
      <div className="flex items-center justify-between w-[58vw] mx-auto py-5 border-b">
        <AiOutlineArrowLeft
          size={22}
          className="cursor-pointer"
          onClick={(e) => {
            router.push("/therapists/sagrika/schedule/select-date");
          }}
        />
        <p className="text-sm">
          13 Oct 2023 | 01:00 pm | Online Therapy (40 mins)
        </p>
        <div></div>
      </div>
      <div className="flex justify-center items-center w-full py-[2vw]">
        <div className="w-[25vw]">
          <p className="text-xl font-bold mb-5">Please Enter Your Details</p>
          <p className="mt-4 text-black font-light">Your Name *</p>
          <input
            type="text"
            placeholder="Name"
            className="border w-full px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <p className="mt-4 text-black font-light">Your Email *</p>
          <input
            type="text"
            placeholder="Email"
            className="border w-full px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <p className="mt-4 text-black font-light">Contact Number *</p>
          <input
            type="text"
            placeholder="Number"
            className="border w-full px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <input
            disabled
            type="text"
            placeholder="Payment Amount"
            value={"Payment Amount    850 INR"}
            className="border w-full px-4 rounded-sm py-1.5 outline-none mt-4"
          />
          <button className="bg-newPurple mt-4 font-bold text-white w-full text-center py-2.5 rounded-sm">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterDetails;
