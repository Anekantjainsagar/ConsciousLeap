"use client";
import Context from "@/Context/Context";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import Slider from "../Slider";
import Image from "next/image";

const AskAge = () => {
  const history = useRouter();
  const { login, setArray } = useContext(Context);

  useEffect(() => {
    if (login?.questionnaire?.answers?.length > 0) {
      history.push("/questionnaire");
    }
    setArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  }, [login]);

  const data = [
    { text: "12 - 18 Years", img: "/questionnaire/1/1.png" },
    { text: "19 - 24 Years", img: "/questionnaire/1/2.png" },
    { text: "25 or Above", img: "/questionnaire/1/3.png" },
  ];

  return (
    <div className="w-full md:h-[75vh] py-[2vh] flex flex-col items-center justify-between">
      <Slider val={1} />
      <div className="flex flex-col items-center w-11/12 md:mt-0 mt-10 md:w-6/12 mx-auto">
        <p className="text-start w-full md:text-lg">Question no. 1</p>
        <h1 className="text-2xl md:text-[30px] font-bold w-full text-start text-websiteBlue mb-8">
          Age Range?
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
  const { setQuestionnaire, questionnaire } = useContext(Context);

  return (
    <Image
      src={data?.img}
      width={1000}
      height={1000}
      alt={data?.text}
      className="w-5/12 md:w-[14vw] cursor-pointer transitionAnimate hover:scale-105 border border-black"
      onClick={(e) => {
        setQuestionnaire({ ...questionnaire, age: data.text });
        history.push("/questionnaire/questions/problem");
      }}
    />
  );
};

export default AskAge;
