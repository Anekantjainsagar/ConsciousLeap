"use client";
import React, { useRef } from "react";
import Captcha from "../../Components/Authorized/Captcha";
import { useRouter } from "next/navigation";

const page = () => {
  const captchaRef = useRef(null);
  const history = useRouter();

  return (
    <div className="py-10">
      <div className="rounded-xl w-[90vw] md:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex flex-col py-[3vw] px-[4vw] md:px-[1.5vw] md:py-[1.5vw] h-full w-full rounded-xl items-center justify-center bg-white">
          <h1 className="mb-7 text-websiteBlue text-3xl font-semibold">
            Register
          </h1>
          <input
            type="text"
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Phone with Country Code"
          />
          <input
            type="password"
            className="w-full border px-3 mb-1 py-1.5 outline-none rounded-md"
            placeholder="Password"
          />
          <Captcha captchaRef={captchaRef} />
          <div className="flex justify-between w-full items-center pb-4 px-2 text-websiteBlue text-sm opacity-50">
            <div className="flex items-start">
              <input type="checkbox" className="mr-1 mt-1" />
              <p className="w-10/12 text-darkGrey">
                By Signing-up to consciousleap, you agree to our Terms of
                Service and Privacy Policy.
              </p>
            </div>
          </div>
          <button className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg">
            Register
          </button>
          <p
            onClick={(e) => {
              history.push("/users/login");
            }}
            className="text-websiteBlue mt-[5vw] md:mt-[2vw] text-sm cursor-pointer"
          >
            Login to consciousleap
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
