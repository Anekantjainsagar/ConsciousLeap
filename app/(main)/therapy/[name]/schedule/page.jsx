"use client";
import React, { useContext, useState, useEffect } from "react";
import Context from "@/Context/Context";
import circle from "../../../Assets/bg-member.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Schedule = ({ params }) => {
  let id = params.name;
  const history = useRouter();
  const [user, setUser] = useState();
  const { therapistFilter, fourtyMinMeet, setFourtyMinMeet } =
    useContext(Context);

  useEffect(() => {
    const therapist = therapistFilter?.therapistsData?.find(
      (e) => e?._id == id
    );
    setUser(therapist);
  }, [therapistFilter?.therapistsData]);

  return (
    <div className="py-[10vw] md:py-[5vw] relative">
      <Image src={circle} alt="Consciousleap bg" className="md:w-5/12 mx-auto" />
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-lg md:text-2xl text-websiteBlue mb-2 md:mb-4">Choose a Service:</h1>
        <div
          className="bg-gray-100 mb-3 flex cursor-pointer items-center justify-between rounded-md text-websiteBlue w-[70vw] md:w-[26vw] px-4 py-2 md:text-lg"
          onClick={(e) => {
            setFourtyMinMeet(false);
            history.push(`/therapy/${id}/schedule/appoint`);
          }}
        >
          <p>40 Mins</p>
          <p className="mt-0">INR {user?.meeting_url?.price}</p>
        </div>
        <div
          className="bg-gray-100 flex cursor-pointer items-center justify-between rounded-md text-websiteBlue w-[70vw] md:w-[26vw] px-4 py-2 md:text-lg"
          onClick={(e) => {
            setFourtyMinMeet(true);
            history.push(`/therapy/${id}/schedule/appoint`);
          }}
        >
          <p>60 Mins</p>
          <p className="mt-0">INR {user?.full_meeting_url?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
