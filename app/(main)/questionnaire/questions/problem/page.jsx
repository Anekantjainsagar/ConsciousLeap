"use client";
import Context from "@/Context/Context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import Slider from "../Slider";
import Image from "next/image";

const Problem = () => {
  const data = [
    { text: "I am having difficulty sleeping", img: "/questionnaire/2/1.png" },
    {
      text: "I have been feeling anxious and overwhelmed",
      img: "/questionnaire/2/2.png",
    },
    {
      text: "I have been feeling constant sadness",
      img: "/questionnaire/2/3.png",
    },
    {
      text: "I feel no motivation to complete my tasks",
      img: "/questionnaire/2/4.png",
    },
    {
      text: "I feel lost in my goals and career",
      img: "/questionnaire/2/5.png",
    },
    {
      text: "I have been facing relationship issues",
      img: "/questionnaire/2/6.png",
    },
    {
      text: "I am not sure what I am going through",
      img: "/questionnaire/2/7.png",
    },
  ];

  return (
    <div className="w-full md:h-[80vh] py-[2vh] flex flex-col items-center justify-between">
      <Slider val={2} />
      <div className="flex flex-col items-center w-11/12 md:mt-0 mt-10 md:w-8/12 mx-auto">
        <p className="text-start w-full md:text-lg">Question no. 2</p>
        <h1 className="text-2xl md:text-[30px] font-bold w-full text-start text-websiteBlue mb-8">
          What are the significant concerns you are facing?
        </h1>
        <div className="flex md:gap-10 gap-5 flex-row flex-wrap items-center justify-center w-full">
          {data.map((e) => {
            return <Block key={e} data={e} />;
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();
  const { setQuestionnaire, questionnaire } = useContext(Context);

  return (
    <Image
      src={data?.img}
      width={1000}
      height={1000}
      alt={data?.text}
      className="w-5/12 md:w-[12vw] cursor-pointer transitionAnimate hover:scale-105 border border-black"
      onClick={(e) => {
        setQuestionnaire({ ...questionnaire, problem: data.text });
        history.push("/questionnaire/questions/what-to-do");
      }}
    />
  );
};

export default Problem;
