"use client";
import React, { useState } from "react";
import Image from "next/image";

import myJournel from "../../../Assets/modes/myjournel.png";
import thingsGreatful from "../../../Assets/modes/i-am-greatfull.png";
import thingsLike from "../../../Assets/modes/things-i-like.png";
import thoughtTrack from "../../../Assets/modes/thought-tracker.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const RightBar = () => {
  const [dateState, setDate] = useState(new Date());

  return (
    <div className="w-3/12">
      <div className="rounded-lg w-full h-fit bg-gradient-to-r mb-4 from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="h-full w-full rounded-lg p-[1vw] items-center justify-center bg-white flex flex-col">
          <h1 className="text-websiteBlue text-xl mb-2">Calender</h1>
          <Calendar
            value={dateState}
            onChange={(e: any) => {
              setDate(e);
            }}
          />
        </div>
      </div>
      <Image src={myJournel} alt="Image" />
      <Image src={thoughtTrack} alt="Image" className="mt-4" />
      <Image src={thingsLike} alt="Image" className="mt-4" />
      <Image src={thingsGreatful} alt="Image" className="mt-4" />
    </div>
  );
};

export default RightBar;
