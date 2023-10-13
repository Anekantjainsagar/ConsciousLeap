"use client";
import React, { useState } from "react";
import Title from "../components/Title";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Calendar } from "rsuite";

const SelectDate = () => {
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
            router.push("/therapists/sagrika/schedule/select-meet");
          }}
        />
        <p className="text-sm">
          Online Therapy (40 mins) |{" "}
          <span className="text-gray-800">40 mins</span>
        </p>
        <div></div>
      </div>
      <div className="px-[21vw] py-[2vw]">
        <p className="text-xl font-extrabold">Choose date & time</p>
        <p className="my-4 text-xs">
          Your appointment will be booked with Sagrikaa Rastogi
        </p>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <Calendar
              bordered
              value={value}
              onChange={(e) => {
                setValue(e);
              }}
            />
          </div>
          <div className="py-4 pl-10 w-[48%] border-l">
            {[
              {
                name: "Afternoon",
                time: [
                  "01:00 pm",
                  "01:30 pm",
                  "02:00 pm",
                  "02:30 pm",
                  "03:00 pm",
                  "03:30 pm",
                ],
              },
              {
                name: "Evening",
                time: ["04:00 pm", "04:30 pm", "05:00 pm"],
              },
              {
                name: "Night",
                time: ["08:30 pm"],
              },
            ].map((e, i) => {
              return (
                <div className="mb-5" key={i}>
                  <p>{e?.name}</p>
                  <div className="flex flex-wrap mt-1">
                    {e?.time?.map((time) => {
                      return (
                        <div
                          key={time}
                          onClick={(e) => {
                            router.push(
                              "/therapists/sagrika/schedule/enter-details"
                            );
                          }}
                          className="border w-[6vw] text-center mr-4 mb-3 py-1 rounded-sm text-sm hover:text-white hover:bg-newPurple transition-all cursor-pointer border-newPurple text-newPurple text-sm"
                        >
                          {time}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
