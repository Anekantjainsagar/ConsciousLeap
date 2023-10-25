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
    <div className="my-[9vw] mx-[5vw] border border-gray-400 flex justify-between">
      <Toaster />
      <div className="w-3/12 flex flex-col items-center justify-center">
        <p className="mb-2 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen cursor-pointer">
          Self Love
        </p>
        <p className="text-4xl border-t pt-1 border-black font-semibold text-black">
          Journel
        </p>
      </div>
      <div className="w-9/12 bg-gradient-to-r h-[105vh] from-[#c7ccdd] via-[#ddb7b5] to-[#c8dbd9]">
        <div className="bg-white w-[92%] rounded-[45px] h-[88%] relative my-[3vw] mx-[5vh] pt-[3vw]">
          <Image
            src={pen}
            alt={"Alt"}
            className="w-[25vw] absolute top-5 right-5"
          />
          <div className="w-[50%] ml-[3vw]">
            <h1 className="text-websiteBlue text-4xl mb-3">Self-care List</h1>
            <textarea
              name=""
              value={thoughts?.selfCare}
              onChange={(e) => {
                setThoughts({ ...thoughts, selfCare: e.target.value });
              }}
              className="border rounded-md outline-none border-gray-800 block p-3 text-xl"
              id=""
              cols="30"
              rows="6"
              placeholder="Write here.,."
            ></textarea>
          </div>
          <div className="flex w-[100%] justify-between mt-[4vw] items-center">
            <div className="w-[50%] px-[3.5vw]">
              <h1 className="text-websiteBlue text-2xl mb-3">
                Things I like about myself
              </h1>
              <textarea
                name=""
                value={thoughts?.thingsMyself}
                onChange={(e) => {
                  setThoughts({ ...thoughts, thingsMyself: e.target.value });
                }}
                className="border rounded-md outline-none border-gray-800 block p-3 text-xl"
                id=""
                cols="30"
                rows="6"
                placeholder="Write here.,."
              ></textarea>
            </div>
            <div className="w-[50%] pr-[3.5vw]">
              <h1 className="text-websiteBlue text-2xl mb-3">
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

export default ThingsMyself;
