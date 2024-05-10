"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Context from "@/Context/Context";
import { AiOutlineClose } from "react-icons/ai";
import MemberConsent from "../therapy/[name]/schedule/memberConsent";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import { getCookie } from "cookies-next";

const customStyles = {
  overlay: { zIndex: 50 },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
};

const QuestionModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { showRecommendation, setShowRecommendation, recommendations } =
    useContext(Context);

  return (
    <div className="z-50 relative">
      <MemberConsent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id={""} />
      <Modal
        isOpen={showRecommendation}
        onRequestClose={() => {
          setShowRecommendation(!showRecommendation);
        }}
        style={customStyles}
      >
        <div className="bg-white w-[80vw] md:h-fit h-[63vh] overflow-y-auto border p-4 rounded-md">
          <div className="flex items-center w-full justify-between">
            <div></div>
            <h1 className="cursor-pointer text-websiteBlue text-xl md:text-xl mx-auto w-fit text-center gradientHover">
              Recommended Therapists
            </h1>
            <AiOutlineClose
              onClick={(e) => {
                setShowRecommendation(!showRecommendation);
              }}
              className="text-2xl md:text-xl cursor-pointer"
            />
          </div>
          <p className="text-center">Here are some therapists recommendations based on your results</p>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {recommendations?.map((e, i) => {
              return (
                <div key={i}>
                  <Grid
                    id={e}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};

const Grid = ({ id, modalIsOpen, setIsOpen }) => {
  const history = useRouter();
  const { setShowPopUpId, therapistFilter, setShowRecommendation } =
    useContext(Context);
  const [data, setData] = useState();

  useEffect(() => {
    let a = therapistFilter?.therapistsData?.find((e) => {
      return e?._id == id;
    });
    setData(a);
  }, [id]);

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
    <div
      className="cursor-pointer"
      onClick={(e) => {
        history.push(`/therapy/${data?._id}`);
      }}
    >
      <div className="flex items-center justify-center rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px] h-full hover:scale-105 transition-all">
        <div className="flex md:flex-row flex-col items-center md:items-start py-[3vw] px-[4vw] md:p-[1vw] h-full w-full rounded-xl justify-between bg-white">
          {/* Image problem */}
          <div className="rounded-full md:w-[9vw] h-[50vw] w-[50vw] md:h-[9vw] bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
            <div className="flex md:p-1 h-full w-full rounded-full items-center justify-center bg-white">
              <Image
                src={data?.photo}
                width={1000}
                height={1000}
                alt="Photo of girl"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
          </div>
          <div className="md:w-7/12 md:mt-0 mt-3 flex flex-col items-center md:items-start md:ml-[1vw]">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl md:text-xl text-websiteBlue line-clamp-1">
                {data?.name}
              </h1>
              <p className="text-darkGrey text-sm mt-1 md:text-start text-center line-clamp-1">
                {data?.desc}
              </p>
              <h1 className="mt-1 text-lg md:text-base text-websiteBlue">
                Expertise
              </h1>
              <div className="h-fit min-[1100px]:h-[6vh] ">
                {data?.expertise?.slice(0, 2)?.map((e, i) => {
                  return (
                    <li
                      key={i}
                      className="text-base md:text-start text-center md:text-[11px] text-darkGrey line-clamp-1"
                    >
                      {i + 1}. {e}
                    </li>
                  );
                })}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowRecommendation(false);
                setShowPopUpId(data);
                if (isConsentFilled) {
                  setIsOpen(!modalIsOpen);
                } else {
                  history.push(`/therapy/${data?._id}/schedule`);
                }
              }}
              className="bg-websiteBlue text-sm px-5 py-1 mt-2 rounded-md text-white hover:scale-105 transition-all font-semibold"
            >
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
