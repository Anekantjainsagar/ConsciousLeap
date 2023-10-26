"use client";
import React, { useState, useContext, useEffect } from "react";
import pen from "@/(main)/Assets/topGratitude.png";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import Context from "@/Context/Context";

const Gratitude = () => {
  const [thoughts, setThoughts] = useState({
    proud: "",
    tomorrow: "",
    gratefulFor: "",
  });
  const { login } = useContext(Context);

  useEffect(() => {
    console.log(login);
    setThoughts({
      proud: login?.gratitude?.proud,
      tomorrow: login?.gratitude?.tomorrow,
      gratefulFor: login?.gratitude?.gratefulFor,
    });
  }, [login]);

  const onSubmit = () => {
    if (thoughts?.proud && thoughts?.tomorrow && thoughts?.gratefulFor) {
      axios
        .post(`${BASE_URL}/user/gratitude`, {
          proud: thoughts?.proud?.replace(/\n/g, "\\n"),
          tomorrow: thoughts?.tomorrow?.replace(/\n/g, "\\n"),
          gratefulFor: thoughts?.gratefulFor?.replace(/\n/g, "\\n"),
          token: getCookie("token"),
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            toast.success("Saved successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please enter something");
    }
  };

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
      <div className="md:w-9/12 bg-gradient-to-r md:h-[115vh] from-[#c7ccdd] via-[#ddb7b5] to-[#c8dbd9]">
        <div className="bg-white w-[95%] mx-auto md:w-[92%] rounded-[45px] h-[88%] relative my-[3vw] md:mx-[5vh] pt-[3vw]">
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
              onChange={(e) => {
                setThoughts({ ...thoughts, proud: e.target.value });
              }}
              className="border rounded-md outline-none border-gray-800 w-[90%] block p-3 text-xl"
              id=""
              cols="30"
              rows="4"
              placeholder="Write here.,."
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
                onChange={(e) => {
                  setThoughts({ ...thoughts, tomorrow: e.target.value });
                }}
                className="border rounded-md outline-none border-gray-800 block p-3 text-xl"
                id=""
                cols={
                  typeof window != "undefined"
                    ? window.innerWidth < 500
                      ? "23"
                      : "30"
                    : "0"
                }
                rows="6"
                placeholder="Write here.,."
              ></textarea>
            </div>
            <div className="w-[96%] mx-auto md:w-[50%] md:pr-[3.5vw]">
              <h1 className="text-websiteBlue text-xl md:mt-0 mt-4 md:text-2xl mb-3">
                Reasons for looking forward to tomorrow
              </h1>
              <textarea
                name=""
                value={thoughts?.gratefulFor}
                onChange={(e) => {
                  setThoughts({ ...thoughts, gratefulFor: e.target.value });
                }}
                className="border rounded-md w-full outline-none border-gray-800 block p-3 text-xl"
                id=""
                cols="30"
                rows="6"
                placeholder="Write here.,."
              ></textarea>
            </div>
          </div>
          <button
            onClick={onSubmit}
            className="float-right bg-blue-700 rounded-xl m-8 text-white px-6 py-1 text-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
