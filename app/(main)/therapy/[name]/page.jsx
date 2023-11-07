"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

import { BsCameraVideo } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import Context from "@/Context/Context";
import MemberConsent from "./schedule/memberConsent";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import { getCookie } from "cookies-next";

const OneTherapist = ({ params }) => {
  const history = useRouter();
  let id = params.name;
  const [user, setUser] = useState();
  const { therapistFilter } = useContext(Context);

  useEffect(() => {
    const therapist = therapistFilter?.therapistsData?.find(
      (e) => e?._id == id
    );
    setUser(therapist);
  }, [therapistFilter?.therapistsData]);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isConsentFilled, setIsConsentFilled] = useState(false);
  React.useEffect(() => {
    axios
      .post(`${BASE_URL}/consent/check`, {
        token: getCookie("token"),
      })
      .then((res) => {
        setIsConsentFilled(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex md:flex-row flex-col py-[3vw] px-[10vw] md:py-[0.75vw] md:px-[8vw] justify-between">
      <MemberConsent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id={id} />
      <div className="flex flex-col w-full md:w-3/12 mr-[2vw]">
        <div className="rounded-full w-full bg-gradient-to-r from-websiteBlue md:h-fit h-[45vh] via-pinkishRed to-oceanGreen p-[1px]">
          <div className="flex items-start py-[1vw] px-[1vw] md:p-[5px] h-full w-full rounded-full justify-between bg-white">
            <Image
              src={user?.photo}
              alt="User profile"
              width={1000}
              height={1000}
              className="w-full md:h-[19vw] object-cover object-center rounded-full"
            />
          </div>
        </div>
        <h1 className="text-websiteBlue text-xl text-center mt-2 md:mt-4">
          {user?.name}
        </h1>
        <p className="text-center text-sm text-darkGrey">{user?.desc}</p>
        <div className="flex justify-center items-center mt-2 md:mt-5">
          <BsCameraVideo
            className="text-websiteBlue border-websiteBlue p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
            size={40}
          />
          <IoCallOutline
            className="text-pinkishRed border-pinkishRed p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
            size={40}
          />
          <BiMessageDots
            size={40}
            className="text-oceanGreen border-oceanGreen p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
          />
        </div>
        <button
          onClick={(e) => {
            if (isConsentFilled) {
              setIsOpen(true);
            } else {
              history.push(`/therapy/${id}/schedule`);
            }
          }}
          className="bg-websiteBlue px-9 text-sm mt-2 md:mt-7 py-2 rounded-lg text-white mx-auto block"
        >
          Schedule Session
        </button>
      </div>
      <div className="w-full md:w-9/12 flex flex-col">
        <div className="grid grid-cols-1 md:mt-0 mt-5 md:grid-cols-3 gap-5 w-full">
          {<Table data={{ name: "Experience", items: [user?.experience] }} />}
          {
            <Table
              data={{ name: "Qualifications", items: user?.qualifications }}
            />
          }
          {<Table data={{ name: "Speaks", items: user?.speaks }} />}
        </div>
        <div>
          <h1 className="text-websiteBlue text-2xl font-light mt-[5vh]">
            Expertise
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {user?.expertise?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="cursor-pointer rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]"
                >
                  <div className="py-[3vw] text-center px-[4vw] text-darkGrey font-light mobile:py-2 md:px-6 h-full w-full rounded-xl flex items-center justify-center bg-white">
                    {e}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h1 className="text-websiteBlue text-2xl mt-[5vh] font-light">
            About the Therapist
          </h1>
          <p className="text-darkGrey text-sm tracking-wider break-words mt-1">
            {user?.about}
          </p>
        </div>
      </div>
    </div>
  );
};

const Table = ({ data }) => {
  return (
    <div className="rounded-lg w-full h-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
      <div className="h-full w-full rounded-lg items-center justify-center bg-white flex flex-col">
        <div className="w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen pb-[2px]">
          <div className="h-full w-full items-center justify-center bg-white flex flex-col rounded-tl-lg rounded-tr-lg">
            <h1 className="text-websiteBlue text-xl font-light my-1.5">
              {data?.name}
            </h1>
          </div>
        </div>
        <div className="py-3 h-full flex flex-col items-start justify-center px-4">
          {data?.items?.map((e) => {
            return (
              <li className="font-light" key={e}>
                {e}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OneTherapist;
