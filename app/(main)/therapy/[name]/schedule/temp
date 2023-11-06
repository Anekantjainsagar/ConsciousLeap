"use client";
import React, { useContext, useState, useEffect } from "react";
import Context from "@/Context/Context";
import circle from "../../../Assets/bg-member.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../Assets/logoPng.png";
import MemberConsent from "./memberConsent";
import toast, { Toaster } from "react-hot-toast";

const Schedule = ({ params }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  let id = params.name;
  const history = useRouter();
  const [filledConsent, setFilledConsent] = useState(false);
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
      <Toaster />
      <MemberConsent
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setFilledConsent={setFilledConsent}
      />
      <Image
        src={circle}
        alt="Consciousleap bg"
        className="md:w-5/12 mx-auto"
      />
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-lg md:text-2xl text-websiteBlue mb-2 md:mb-4">
          Please Choose Service:
        </h1>
        <div
          className="bg-gray-100 mb-3 flex cursor-pointer items-center justify-between rounded-md text-websiteBlue w-[70vw] md:w-[26vw] px-4 py-2 md:text-lg"
          onClick={(e) => {
            if (filledConsent) {
              setFourtyMinMeet(false);
              history.push(`/therapy/${id}/schedule/appoint`);
            } else {
              toast.error("Please fill the member consent form first");
            }
          }}
        >
          <div className="flex items-center">
            <Image src={logo} alt="Logo" className="w-[2.35vw] mr-1.5" />
            <p>Online Therapy (40 Mins)</p>
          </div>
          <p className="mt-0">INR {user?.meeting_url?.price}</p>
        </div>
        <div
          className="bg-gray-100 flex cursor-pointer items-center justify-between rounded-md text-websiteBlue w-[70vw] md:w-[26vw] px-4 py-2 md:text-lg"
          onClick={(e) => {
            if (filledConsent) {
              setFourtyMinMeet(true);
              history.push(`/therapy/${id}/schedule/appoint`);
            } else {
              toast.error("Please fill the member consent form first");
            }
          }}
        >
          <div className="flex items-center">
            <Image src={logo} alt="Logo" className="w-[2.35vw] mr-1.5" />
            <p>Online Therapy (60 Mins)</p>
          </div>
          <p className="mt-0">INR {user?.full_meeting_url?.price}</p>
        </div>
        <p
          className="mx-auto mt-3 cursor-pointer underline"
          onClick={(e) => {
            setIsOpen(true);
          }}
        >
          Fill Member Consent
        </p>
      </div>
    </div>
  );
};

export default Schedule;
