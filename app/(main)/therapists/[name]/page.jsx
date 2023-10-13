"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import image from "../../Assets/sagrika.jpeg";

import { BsCameraVideo } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";

const OneTherapist = () => {
  const history = useRouter();

  let topData = [
    {
      name: "Experience",
      items: ["2-5 Year"],
    },
    {
      name: "Qualifications",
      items: [
        "M.A Counselling Psychology",
        "APA Member",
        "Certified NLP practitioner",
        "Certified Relationship Coach",
      ],
    },
    {
      name: "Speaks",
      items: ["Hindi", "English"],
    },
  ];

  return (
    <div className="flex py-[3vw] px-[10vw] md:py-[0.75vw] md:px-[8vw] justify-between">
      <div className="flex flex-col w-3/12 mr-[2vw]">
        <div className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
          <div className="flex items-start py-[3vw] px-[4vw] md:p-[5px] h-full w-full rounded-full justify-between bg-white">
            <Image src={image} alt="User profile" className="rounded-full" />
          </div>
        </div>
        <h1 className="text-websiteBlue text-xl text-center mt-4">
          Sagrikaa Rastogi
        </h1>
        <p className="text-center text-sm text-darkGrey">
          Counselling Psychologist, M.A
        </p>
        <div className="flex justify-center items-center mt-5">
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
            history.push("/therapists/sagrika/schedule/select-meet");
          }}
          className="bg-websiteBlue px-9 text-sm mt-7 py-2 rounded-lg text-white mx-auto block"
        >
          Schedule Session
        </button>
      </div>
      <div className="w-9/12 flex flex-col items-center">
        <div className="grid grid-cols-3 gap-5 w-full">
          {topData.map((e, i) => {
            return <Table data={e} key={i} />;
          })}
        </div>
        <div>
          <h1 className="text-websiteBlue text-2xl font-light mt-[5vh]">
            Expertise
          </h1>
          <div className="grid grid-cols-3 gap-5 mt-4">
            {[
              "Anxiety",
              "Emotional distress",
              "Stress",
              "Productivity concerns",
              "Relationship issues",
              "Workplace Conflicts",
              "Self Esteem & confidence related concerns",
            ].map((e, i) => {
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
        <div>
          <h1 className="text-websiteBlue text-2xl mt-[5vh] font-light">
            About the Therapist
          </h1>
          <p className="text-darkGrey text-sm tracking-wider">
            A Counseling Psychologist with experience in facilitating
            adolescents and young adults for self growth, anxiety, personality
            disorders, relationship concerns in addition to other mental health
            related concerns. My therapeutic approach is built around the
            premise of empathy and support. My aim is to understand you, your
            emotions and the cause of the chaos you feel you are in.
          </p>
        </div>
      </div>
    </div>
  );
};

const Table = ({ data }) => {
  return (
    <div className="rounded-lg w-full h-fit bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
      <div className="h-full w-full rounded-lg items-center justify-center bg-white flex flex-col">
        <div className="w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen pb-[2px]">
          <div className="h-full w-full items-center justify-center bg-white flex flex-col rounded-tl-lg rounded-tr-lg">
            <h1 className="text-websiteBlue text-xl font-light my-1.5">
              {data?.name}
            </h1>
          </div>
        </div>
        <div className="py-3">
          {data?.items.map((e) => {
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
