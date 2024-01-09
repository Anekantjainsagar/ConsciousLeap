"use client";
import React, { useState, useContext, useEffect } from "react";
import pen from "@/(main)/Assets/topGratitude.png";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import Context from "@/Context/Context";
import { useRouter } from "next/navigation";

const Gratitude = ({ params }) => {
  const [thoughts, setThoughts] = useState({
    proud: "",
    tomorrow: "",
    gratefulFor: "",
  });
  const { login } = useContext(Context);

  useEffect(() => {
    const temp = login?.gratitude?.find((e) => {
      return e?._id === params.id;
    });
    setThoughts({
      proud: temp?.proud,
      tomorrow: temp?.tomorrow,
      gratefulFor: temp?.gratefulFor,
    });
  }, [login]);

  return (
    <div className="my-[9vw] mx-[5vw] border border-gray-400 flex md:flex-row flex-col justify-between">
      <Toaster />
      <div className="md:w-3/12 md:py-0 py-5 flex flex-col items-center justify-center">
        <p className="mb-1 md:mb-2 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen cursor-pointer">
          Gratitude
        </p>
        <p className="text-2xl md:text-4xl border-t pt-1 border-black font-semibold text-black">
          Journel
        </p>
      </div>
      <div className="md:w-9/12 bg-gradient-to-r from-[#c7ccdd] via-[#ddb7b5] to-[#c8dbd9]">
        <div className="bg-white mx-auto rounded-[45px] relative pt-[1vw] pb-[2vw] my-4 md:mx-[5vh]">
          <Image
            src={pen}
            alt={"Alt"}
            className="w-[65vw] md:w-[25vw] mx-auto"
          />
          <div className="w-[100%] ml-[3vw]">
            <h1 className="text-websiteBlue text-xl md:text-2xl mb-3">
              Today, I am grateful for
            </h1>
            <textarea
              name=""
              value={thoughts?.proud}
            //   onChange={(e) => {
            //     setThoughts({ ...thoughts, proud: e.target.value });
            //   }}
              className="border rounded-md outline-none border-gray-800 w-[90%] block p-3 text-xl"
              id=""
              rows="4"
              placeholder="Write here..."
            ></textarea>
          </div>
          <div className="flex md:flex-row flex-col w-[100%] justify-between mt-[4vw] items-center">
            <div className="w-[98%] md:w-[50%] px-[3.5vw]">
              <h1 className="text-websiteBlue text-xl md:text-2xl mb-3">
                Something I am proud of
              </h1>
              <textarea
                name=""
                value={thoughts?.tomorrow}
                // onChange={(e) => {
                //   setThoughts({ ...thoughts, tomorrow: e.target.value });
                // }}
                className="border rounded-md w-full outline-none border-gray-800 block p-3 text-xl"
                id=""
                rows="6"
                placeholder="Write here..."
              ></textarea>
            </div>
            <div className="w-[96%] mx-auto md:w-[50%] px-[3.5vw]">
              <h1 className="text-websiteBlue text-xl md:mt-0 mt-4 md:text-2xl mb-3">
                Reasons for looking forward to tomorrow
              </h1>
              <textarea
                name=""
                value={thoughts?.gratefulFor}
                // onChange={(e) => {
                //   setThoughts({ ...thoughts, gratefulFor: e.target.value });
                // }}
                className="border rounded-md w-full outline-none border-gray-800 block p-3 text-xl"
                id=""
                rows="6"
                placeholder="Write here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
