"use client";
import React, { useRef } from "react";
import Captcha from "../../Components/Authorized/Captcha";
import { useRouter } from "next/navigation";

const UserLogin = () => {
  const captchaRef = useRef(null);
  const history = useRouter();

  return (
    <div className="py-10">
      <div className="rounded-xl w-[90vw] md:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex flex-col py-[3vw] px-[4vw] md:px-[1.5vw] md:py-[1.5vw] h-full w-full rounded-xl items-center justify-center bg-white">
          <h1 className="mb-7 text-websiteBlue text-3xl font-semibold">
            Login
          </h1>
          <input
            type="text"
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full border px-3 py-1.5 outline-none rounded-md"
            placeholder="Password"
          />
          <div className="flex justify-between w-full items-center p-2 text-websiteBlue text-sm opacity-50">
            <div className="flex items-center">
              <input type="checkbox" className="mr-1" />
              <p>Remember Me</p>
            </div>
            <p>Forgot Password?</p>
          </div>
          <Captcha captchaRef={captchaRef} />
          <button className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg">
            Login
          </button>
          <p
            onClick={(e) => {
              history.push("/user/register");
            }}
            className="text-websiteBlue mt-[5vw] md:mt-[2vw] text-sm cursor-pointer"
          >
            New to consciousleap?
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
