"use client";
import React from "react";
import fortyMin from "@/(main)/Assets/therapists/40-minutes.jpg";
import sixtyMin from "@/(main)/Assets/therapists/60-minutes.jpg";
import { useRouter } from "next/navigation";
import Title from "../components/Title";
import Image from "next/image";

const SelectMeet = () => {
  const router = useRouter();
  return (
    <div>
      <Title />
      <div className="px-[21vw] py-[1vw]">
        <p className="text-xl font-extrabold mb-4">Pick a Service</p>
        {[
          { time: "40 mins", image: fortyMin, rs: 850 },
          { time: "60 mins", image: sixtyMin, rs: 1250 },
        ].map((e, i) => {
          return (
            <div
              key={i}
              onClick={(e) => {
                router.push("/therapists/sagrika/schedule/select-date");
              }}
              className="border-b bg-white grid hover:shadow-lg hover:shadow-gray-300 cursor-pointer transition-all"
              style={{ gridTemplateColumns: "40% 40% 20%" }}
            >
              <div className="flex items-center">
                <Image src={e?.image} alt={e?.image?.src} className="w-[5vw]" />
                <p className="text-sm">Online Therapy ({e?.time})</p>
              </div>
              <div></div>
              <div className="flex flex-col items-center justify-center mr-10">
                <p className="text-websiteBlue font-semibold">{e?.rs} INR</p>
                <p className="text-sm">{e?.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectMeet;
