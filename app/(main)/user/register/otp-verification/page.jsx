"use client";
import React, { useRef, useState, useContext } from "react";
import Captcha from "../../../Components/Authorized/Captcha";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import Context from "@/Context/Context";

import toast, { Toaster } from "react-hot-toast";
import { setCookie } from "cookies-next";

const UserRegister = () => {
  let { user, setUser, setLogin } = useContext(Context);
  const captchaRef = useRef(null);
  const history = useRouter();
  const router = useRouter();

  const onSignUp = () => {
    if (user?.otp) {
      if (user?.otp == user?.original) {
        axios
          .post(`${BASE_URL}/login/signup`, user)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              toast.success("Registered successfully");
              setTimeout(() => {
                router.push("/");
                let token = response.data.token;
                setCookie("token", token);
                setLogin(response.data);
                setUser({
                  name: "",
                  email: "",
                  phone: "",
                  password: "",
                  original: "",
                  otp: "",
                });
              }, 500);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        toast.error("OTP is incorrect");
      }
    } else {
      toast.error("Please enter the OTP");
    }
  };

  return (
    <div className="py-10">
      <Toaster />
      <div className="rounded-xl w-[90vw] md:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex flex-col py-[3vw] px-[4vw] md:px-[1.5vw] md:py-[1.5vw] h-full w-full rounded-xl items-center justify-center bg-white">
          <h1 className="mb-7 text-websiteBlue text-3xl font-semibold">
            OTP Verification
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
          <button
            onClick={onSignUp}
            className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg"
          >
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
