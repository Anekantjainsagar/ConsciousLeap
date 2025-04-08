"use client";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import Image from "next/image";
import Slider from "../Slider";

let images_data = [
  "/questionnaire/4/1.png",
  "/questionnaire/4/2.png",
  "/questionnaire/4/3.png",
  "/questionnaire/4/7.png",
  "/questionnaire/4/4.png",
  "/questionnaire/4/5.png",
  "/questionnaire/4/6.png",
];

const EachQuestion = ({ params }) => {
  let val = params.id;
  const { array, questionnaire, getUser, setFilledQuestionnaire } =
    useContext(Context);
  const history = useRouter();
  val = parseInt(val);

  let data = [
    {
      question: "The demands of everyday life often get me down?",
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
        "I do not fit very well with the people and the community around me?",
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
        "I am quite good at managing the many responsibilities of my daily life?",
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
      question: "I often feel overwhelmed by my responsibilities?",
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
      question: "I have a sense of direction and purpose in life?",
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
        "I don’t have a good sense of what it is I’m trying to accomplish in life?",
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
      question: "My daily activities often seem trivial and unimportant to me?",
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
      question: "In general, I feel confident and positive about myself?",
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
      question: "I like most parts of my personality?",
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
        "My attitude about myself is probably not as positive as most people feel about themselves?",
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
        "I have not experienced many warm and trusting relationships with others?",
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
        "Maintaining close relationships has been difficult and frustrating for me?",
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
        "I often feel lonely because I have few close friends with whom to share my concerns?",
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

  useEffect(() => {
    if (!params.id || array.length == 0) {
      setFilledQuestionnaire(true);
      history.push("/questionnaire");
      axios
        .post(`${BASE_URL}/login/update-questionnaire`, {
          ...questionnaire,
          answers: questionnaire?.answer.map((obj) => Object.values(obj)[0]),
          token: getCookie("token"),
        })
        .then((response) => {
          getUser();
        });
    }
  }, [array, params.id]);

  let tempData = data[val - 1];
  let question_num = 16 - array.length;

  return (
    <div className="w-full md:h-[85vh] py-[1vh] flex flex-col items-center justify-between">
      <Slider val={question_num} />{" "}
      <div className="flex flex-col items-center w-11/12 md:mt-0 mt-10 md:w-8/12 mx-auto">
        <p className="text-start w-full md:text-lg mb-0.5">
          Question no. {question_num}
        </p>
        <h1 className="text-2xl md:text-[30px] font-bold w-full text-start text-websiteBlue mb-8">
          {tempData?.question}
        </h1>
        <div className="flex md:gap-10 gap-5 flex-row flex-wrap items-center justify-center w-full">
          {tempData?.options.map((e, i) => {
            return <Block key={i} data={e} page={val} idx={i} />;
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Block = ({ data, page, idx }) => {
  const history = useRouter();
  const {
    setQuestionnaire,
    questionnaire,
    getUser,
    setArray,
    array,
    getRandomNumberArray,
    setFilledQuestionnaire,
  } = useContext(Context);

  return (
    <Image
      src={images_data[idx]}
      width={1000}
      height={1000}
      alt={data?.name}
      className="w-5/12 md:w-[12vw] cursor-pointer transitionAnimate hover:scale-105 border border-black"
      onClick={(e) => {
        let answersUpdated = questionnaire?.answer;
        answersUpdated[page - 1][`q${page}`] = data?.value;
        setQuestionnaire({ ...questionnaire, answers: [...answersUpdated] });
        if (array.length == 0) {
          setFilledQuestionnaire(true);
          history.push("/questionnaire");
          axios
            .post(`${BASE_URL}/login/update-questionnaire`, {
              ...questionnaire,
              answers: questionnaire?.answer.map(
                (obj) => Object.values(obj)[0]
              ),
              token: getCookie("token"),
            })
            .then((response) => {
              getUser();
            });
        }
        let temp = getRandomNumberArray();
        let num = temp[0];
        setArray([...temp.slice(1, temp.length)]);
        history.push(`/questionnaire/questions/${num}`);
      }}
    />
  );
};

export default EachQuestion;
