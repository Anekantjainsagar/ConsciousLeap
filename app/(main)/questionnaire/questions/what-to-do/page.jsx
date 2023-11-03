"use client";
import Context from "@/Context/Context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const WhatToDo = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-base md:text-[27px] font-extrabold text-newBlue mb-8">
          I am not sure what I am going through
        </h1>
        <div>
          {["Talk to the therapist", "I'm happy to take the Questionnaire"].map(
            (e) => {
              return <Block key={e} data={e} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        if (data.includes("Questionnaire")) {
          history.push("/questionnaire/questions/1");
        } else {
          history.push("/therapy");
        }
      }}
      className="rounded-xl mb-4 md:mb-5 mx-auto h-fit bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px] hover:p-[2px] cursor-pointer transitionAnimate hover:scale-105"
    >
      <div className="h-full w-full rounded-xl text-lg text-center bg-white px-2 md:px-10 py-1.5 cursor-pointer">
        {data}
      </div>
    </div>
  );
};

export default WhatToDo;
