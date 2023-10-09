import React from "react";
import img1 from "../Assets/questionnaire/ic1.png";
import img2 from "../Assets/questionnaire/ic2.png";
import img3 from "../Assets/questionnaire/ic3.png";
import img4 from "../Assets/questionnaire/ic4.png";
import Image from "next/image";

const Questionnaire = () => {
  let questionnaire = [
    {
      image: img1,
      title: "Environmental Mastery",
      desc: "You have a good sense of mastery & competence in managing the environment;and you control complex external activities; and you make effective use of your surrounding opportunities very well.",
      value: "71",
    },
    {
      image: img2,
      title: "Purpose In Life",
      desc: "You depict good sense of directedness;and you feel there is meaning to your present and past life;and you hold your beliefs that give life purpose; and you have aims and objectives for living.",
      value: "71",
    },
    {
      image: img3,
      title: "Self Acceptance",
      desc: "You possess a positive attitude toward yourself; and you acknowledge the facts and accept aspects of yourself including both good and bad qualities; and feel positive about your past life.",
      value: "71",
    },
    {
      image: img4,
      title: "Relations with Others",
      desc: "You have few close, trusting relationships with others; find it difficult to be warm, open, and you are concerned about others; and you are isolated and frustrated in interpersonal relationships.",
      value: "71",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <h1 className="cursor-pointer underline mb-8 md:mb-16 text-2xl md:text-3xl pt-[8vw] md:pt-[4vw] text-center hover:text-websiteBlue transition-all">
        Initial Analysis
      </h1>
      {questionnaire.map((e, i) => {
        return <Block data={e} key={i} />;
      })}
      <button className="px-16 py-2 rounded-md mx-auto block font-medium bg-websiteBlue text-white">
        Reset
      </button>
      <p className="font-light text-center w-[85%] md:w-[90%] mx-auto my-8">
        <span className="font-semibold">Disclaimer:</span> This questionnaire is
        intended to provide a general assessment of mental health and should not
        be considered a substitute for professional evaluation or advice. The
        results of this questionnaire are based solely on the provided responses
        and should be interpreted with caution. It is important to consult with
        a qualified mental health professional for assessment and personalized
        guidance.
      </p>
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="rounded-full w-[97%] md:w-[85%] mb-4 md:mb-10 mx-auto h-fit bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
      <div className="h-full w-full rounded-full flex items-center justify-between bg-white px-2 md:px-6">
        <Image
          src={data?.image}
          alt="Image"
          className="w-[15%] md:w-[6%] py-4"
        />
        <div className="border-2 border-websiteBlue text-3xl md:text-6xl md:ml-[5vw] w-[17vw] md:w-[9.1vw] rounded-full flex justify-center items-center text-websiteBlue h-[17vw] md:h-[9.1vw]">
          {data?.value}
          <span className="text-lg md:text-2xl md:ml-0.5">%</span>
        </div>
        <div className="w-8/12 md:w-7/12 py-4 md:pr-4">
          <h1 className="text-center text-sm md:text-2xl font-medium cursor-pointer hover:text-websiteBlue transition-all mb-1">
            {data?.title}
          </h1>
          <p className="text-center md:text-base text-[9px] font-light">
            {data?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;