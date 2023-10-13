"use client";
import React, { useRef, useState } from "react";
import Captcha from "../../../Components/Authorized/Captcha";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";

const UserRegister = () => {
  const [user, setUser] = useState({
    otp: "",
  });
  const captchaRef = useRef(null);
  const history = useRouter();

  const onSignUp = () => {
    axios
      .post(`${BASE_URL}/login/signup`, user)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="py-10">
      <div className="rounded-xl w-[90vw] md:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex flex-col py-[3vw] px-[4vw] md:px-[1.5vw] md:py-[1.5vw] h-full w-full rounded-xl items-center justify-center bg-white">
          <h1 className="mb-7 text-websiteBlue text-3xl font-semibold">
            Otp Verification
          </h1>
          <input
            value={user?.otp}
            onChange={(e) => {
              setUser({ ...user, otp: e.target.value });
            }}
            type="text"
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Otp"
          />
          <button className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg">
            Register
          </button>
          <p
            onClick={(e) => {
              history.push("/user/login");
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

export default UserRegister;
