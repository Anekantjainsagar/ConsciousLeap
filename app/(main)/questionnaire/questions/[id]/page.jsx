"use client";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";

const EachQuestion = ({ params }) => {
  let val = params.id;
  val = parseInt(val);

  let data = [
    {
      question: "The demands of everyday life often get me down.",
      category: "Environmental mastery",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question:
        "I do not fit very well with the people and the community around me.",
      category: "Environmental mastery",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question:
        "I am quite good at managing the many responsibilities of my daily life.",
      category: "Environmental mastery",
      options: [
        {
          name: "Strongly agree",
          value: 7,
        },
        {
          name: "Somewhat agree",
          value: 6,
        },
        {
          name: "A little agree",
          value: 5,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 3,
        },
        {
          name: "Somewhat disagree",
          value: 2,
        },
        {
          name: "Strongly disagree",
          value: 1,
        },
      ],
    },
    {
      question: "I often feel overwhelmed by my responsibilities.",
      category: "Environmental mastery",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question: "I have a sense of direction and purpose in life.",
      category: "Purpose in life",
      options: [
        {
          name: "Strongly agree",
          value: 7,
        },
        {
          name: "Somewhat agree",
          value: 6,
        },
        {
          name: "A little agree",
          value: 5,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 3,
        },
        {
          name: "Somewhat disagree",
          value: 2,
        },
        {
          name: "Strongly disagree",
          value: 1,
        },
      ],
    },
    {
      question:
        "I don’t have a good sense of what it is I’m trying to accomplish in life.",
      category: "Purpose in life",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question: "My daily activities often seem trivial and unimportant to me.",
      category: "Purpose in life",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question: "In general, I feel confident and positive about myself.",
      category: "Self-Acceptance",
      options: [
        {
          name: "Strongly agree",
          value: 7,
        },
        {
          name: "Somewhat agree",
          value: 6,
        },
        {
          name: "A little agree",
          value: 5,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 3,
        },
        {
          name: "Somewhat disagree",
          value: 2,
        },
        {
          name: "Strongly disagree",
          value: 1,
        },
      ],
    },
    {
      question: "I like most parts of my personality.",
      category: "Self-Acceptance",
      options: [
        {
          name: "Strongly agree",
          value: 7,
        },
        {
          name: "Somewhat agree",
          value: 6,
        },
        {
          name: "A little agree",
          value: 5,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 3,
        },
        {
          name: "Somewhat disagree",
          value: 2,
        },
        {
          name: "Strongly disagree",
          value: 1,
        },
      ],
    },
    {
      question:
        "My attitude about myself is probably not as positive as most people feel about themselves.",
      category: "Self-Acceptance",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question:
        "I have not experienced many warm and trusting relationships with others.",
      category: "Positive Relations with Others",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question:
        "Maintaining close relationships has been difficult and frustrating for me.",
      category: "Positive Relations with Others",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
    {
      question:
        "I often feel lonely because I have few close friends with whom to share my concerns.",
      category: "Positive Relations with Others",
      options: [
        {
          name: "Strongly agree",
          value: 1,
        },
        {
          name: "Somewhat agree",
          value: 2,
        },
        {
          name: "A little agree",
          value: 3,
        },
        {
          name: "Neither agree nor disagree",
          value: 4,
        },
        {
          name: "A little disagree",
          value: 5,
        },
        {
          name: "Somewhat disagree",
          value: 6,
        },
        {
          name: "Strongly disagree",
          value: 7,
        },
      ],
    },
  ];

  let tempData = data[val - 1];

  return (
    <div className="w-full h-[66vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-extrabold underline text-[#2e4fc9] mb-1">
          Life Assessment Questionnaire
        </h1>
        <h1 className="text-[27px] font-extrabold text-newBlue mb-8">
          {tempData?.question}
        </h1>
        <div className="grid grid-cols-2 gap-x-10">
          {tempData?.options.map((e, i) => {
            return <Block key={i} data={e} page={val} />;
          })}
        </div>
        <p className="text-lg mt-8">{val}/13</p>
      </div>
    </div>
  );
};

const Block = ({ data, page }) => {
  const history = useRouter();
  const { setQuestionnaire, questionnaire, getUser } = useContext(Context);

  return (
    <div
      onClick={(e) => {
        let answersUpdated = questionnaire?.answers;
        answersUpdated[page - 1] = data?.value;
        setQuestionnaire({ ...questionnaire, answers: [...answersUpdated] });
        console.log(data?.name, data?.value, answersUpdated);
        if (page == 13) {
          axios
            .post(`${BASE_URL}/login/update-questionnaire`, {
              ...questionnaire,
              token: getCookie("token"),
            })
            .then((response) => {
              console.log(response);
              getUser();
              history.push("/questionnaire");
            })
            .catch((err) => {
              console.log(err);
            });
        }
        history.push(`/questionnaire/questions/${page + 1}`);
      }}
      className="rounded-xl mb-4 md:mb-5 mx-auto w-[35vw] h-fit bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px] hover:p-[4px] cursor-pointer transition-all"
    >
      <div className="h-full w-full rounded-xl text-lg text-center bg-white px-2 md:px-10 py-1.5 cursor-pointer">
        {data?.name}
      </div>
    </div>
  );
};

export default EachQuestion;
