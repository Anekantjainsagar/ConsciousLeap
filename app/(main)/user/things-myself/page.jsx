"use client";
import React, { useState, useContext, useEffect } from "react";
import pen from "@/(main)/Assets/thingsMyself.png";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import Context from "@/Context/Context";

const ThingsMyself = () => {
  const [thoughts, setThoughts] = useState({
    selfCare: "",
    thingsMyself: "",
    thingsPast: "",
  });
  const { login } = useContext(Context);

  useEffect(() => {
    console.log(login);
    setThoughts({
      selfCare: login?.thingsMyself?.selfCare,
      thingsMyself: login?.thingsMyself?.thingsMyself,
      thingsPast: login?.thingsMyself?.thingsPast,
    });
  }, [login]);

  const onSubmit = () => {
    if (thoughts?.selfCare && thoughts?.thingsMyself && thoughts?.thingsPast) {
      axios
        .post(`${BASE_URL}/user/thingsMyself`, {
          selfCare: thoughts?.selfCare?.replace(/\n/g, "\\n"),
          thingsMyself: thoughts?.thingsMyself?.replace(/\n/g, "\\n"),
          thingsPast: thoughts?.thingsPast?.replace(/\n/g, "\\n"),
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
    <div className="my-[9vw] mx-[5vw] border border-gray-400 flex flex-col md:flex-row justify-between">
      <Toaster />
      <div className="md:w-3/12 md:py-0 py-3 flex flex-col items-center justify-center">
        <p className="mb-1 md:mb-2  text-4xl md:text-2xl min-[1000px]:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen cursor-pointer">
          Self Love
        </p>
        <p className="text-2xl md:text-xl min-[1000px]:text-2xl border-t pt-1 border-black font-semibold text-black">
          Journal
        </p>
      </div>
      <div className="md:w-9/12 bg-gradient-to-r from-[#c7ccdd] via-[#ddb7b5] to-[#c8dbd9]">
        <div className="bg-white rounded-[45px] h-[88%] relative my-[3vw] mx-[2vh] md:mx-[5vh] py-[6vw] max-[1000px]:py-[20vw]">
          <Image
            src={pen}
            alt={"Alt"}
            className="w-[25vw] min-[1000px]:block hidden absolute top-5 right-5"
          />
          <div className="w-full min-[1000px]:w-[50%] px-[4vw] min-[1000px]:px-0 min-[1000px]:ml-[3vw]">
            <h1 className="text-websiteBlue text-2xl md:text-4xl mb-3">
              Self-care List
            </h1>
            <textarea
              name=""
              value={thoughts?.selfCare}
              onChange={(e) => {
                setThoughts({ ...thoughts, selfCare: e.target.value });
              }}
              className="border rounded-md w-full outline-none border-gray-800 block p-3 text-xl"
              id=""
              rows="6"
              placeholder="Write here..."
            ></textarea>
          </div>
          <div className="flex w-[100%] md:flex-row px-[4vw] flex-col justify-between mt-[4vw] items-center">
            <div className="md:w-[50%] w-[98%] pr-[3vw]">
              <h1 className="text-websiteBlue text-xl md:text-2xl mb-3">
                Things I like about myself
              </h1>
              <textarea
                name=""
                value={thoughts?.thingsMyself}
                onChange={(e) => {
                  setThoughts({ ...thoughts, thingsMyself: e.target.value });
                }}
                className="border rounded-md w-full outline-none border-gray-800 block p-3 text-xl"
                id=""
                rows="6"
                placeholder="Write here..."
              ></textarea>
            </div>
            <div className="md:w-[50%] w-[98%]">
              <h1 className="text-websiteBlue text-xl md:mt-0 mt-3 md:text-2xl mb-3">
                Things I want to tell my past self
              </h1>
              <textarea
                name=""
                value={thoughts?.thingsPast}
                onChange={(e) => {
                  setThoughts({ ...thoughts, thingsPast: e.target.value });
                }}
                className="border rounded-md w-full outline-none border-gray-800 block p-3 text-xl"
                id=""
                rows="6"
                placeholder="Write here..."
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

export default ThingsMyself;
