"use client";
import Context from "@/Context/Context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import Slider from "../Slider";
import Image from "next/image";

const WhatToDo = () => {
  const data = [
    { text: "Talk to a therapist", img: "/questionnaire/3/1.png" },
    { text: "Continue the questionnaire", img: "/questionnaire/3/2.png" },
  ];

  return (
    <div className="w-full md:h-[75vh] py-[2vh] flex flex-col items-center justify-between">
      <Slider val={3} />
      <div className="flex flex-col items-center w-11/12 md:mt-0 mt-10 md:w-4/12 mx-auto">
        <p className="text-start w-full md:text-lg">Question no. 3</p>
        <h1 className="text-2xl md:text-[30px] font-bold w-full text-start text-websiteBlue mb-8">
          I am not sure what I am going through?
        </h1>
        <div className="flex gap-5 flex-row flex-wrap items-center md:justify-between justify-center w-full">
          {data.map((e) => {
            return <Block key={e} data={e} />;
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();
  const { getRandomNumberArray, setArray, mindfulMonth } = useContext(Context);

  return (
    !(data.text == "Talk to a therapist" && mindfulMonth) && (
      <Image
        src={data?.img}
        width={1000}
        height={1000}
        alt={data?.text}
        className="w-5/12 md:w-[12vw] cursor-pointer transitionAnimate hover:scale-105 border border-black"
        onClick={(e) => {
          if (data.text.includes("questionnaire")) {
            let temp = getRandomNumberArray();
            let num = temp[0];
            setArray([...temp.slice(1, temp.length)]);
            history.push(`/questionnaire/questions/${num}`);
          } else {
            history.push("/therapy");
          }
        }}
      />
    )
  );
};

export default WhatToDo;
