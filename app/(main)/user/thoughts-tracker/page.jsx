"use client";
import React, { useState, useContext, useEffect } from "react";
import pen from "@/(main)/Assets/pen.png";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import Context from "@/Context/Context";

const ThoughtTracker = () => {
  const [thoughts, setThoughts] = useState("");
  const { login } = useContext(Context);

  useEffect(() => {
    setThoughts(login?.thoughts);
  }, [login]);

  const onSubmit = () => {
    if (thoughts) {
      axios
        .post(`${BASE_URL}/user/thoughts`, {
          thoughts: thoughts?.replace(/\n/g, "\\n"),
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
    <div className="my-[9vw] mx-[5vw] border border-gray-200 md:rounded-none rounded-md md:border-gray-400 flex md:flex-row flex-col justify-between">
      <Toaster />
      <div className="md:w-3/12 md:py-0 py-5 flex flex-col items-center justify-center">
        <p className="mb-1 md:mb-2 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen cursor-pointer">
          Thought
        </p>
        <p className="text-2xl md:text-4xl border-t pt-1 border-black font-semibold text-black">
          Tracker
        </p>
      </div>
      <div className="md:w-9/12 bg-gradient-to-r h-[100vh] md:h-[150vh] from-[#c7ccdd] via-[#ddb7b5] to-[#c8dbd9]">
        <div className="bg-white md:w-[92%] rounded-[45px] h-[88%] relative my-[3vw] mx-[2vh] md:mx-[5vh] pt-[6vw]">
          <Image
            src={pen}
            alt={"Alt"}
            className="w-[50vw] md:w-[30vw] absolute top-0 right-0"
          />
          <textarea
            name=""
            value={thoughts}
            onChange={(e) => {
              setThoughts(e.target.value);
            }}
            className="border rounded-md w-[92%] outline-none border-gray-800 block mx-auto p-3 text-xl"
            id=""
            cols="30"
            rows={
              typeof window != "undefined"
                ? window.innerWidth < 500
                  ? "16"
                  : "27"
                : "0"
            }
            placeholder="Write here..."
          ></textarea>
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

export default ThoughtTracker;
