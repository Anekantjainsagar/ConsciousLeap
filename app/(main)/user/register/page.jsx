"use client";
import React, { useRef, useState } from "react";
import Captcha from "../../Components/Authorized/Captcha";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";

const UserRegister = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [termsPolicies, setTermsPolicies] = useState(false);
  const captchaRef = useRef(null);
  const history = useRouter();
  const router = useRouter();

  const onSignUp = (e) => {
    e.preventDefault();
    if (termsPolicies) {
      if (!(!user?.name || !user?.email || !user?.password || !user?.phone)) {
        axios
          .post(`${BASE_URL}/login/signup`, user)
          .then((response) => {
            console.log(response);
            router.push("/user/register/otp-verification");
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
      } else {
        toast.error("Please fill all the details");
      }
    } else {
      toast.error("Please accept the terms and policies");
    }
  };

  return (
    <div className="py-10">
      <Toaster />
      <div className="rounded-xl w-[90vw] md:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex flex-col py-[3vw] px-[4vw] md:px-[1.5vw] md:py-[1.5vw] h-full w-full rounded-xl items-center justify-center bg-white">
          <h1 className="mb-7 text-websiteBlue text-3xl font-semibold">
            Register
          </h1>
          <input
            value={user?.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            type="text"
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Name"
          />
          <input
            type="text"
            value={user?.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Email"
          />
          <input
            type="text"
            value={user?.phone}
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }}
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Phone with Country Code"
          />
          <input
            type="password"
            value={user?.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            className="w-full border px-3 mb-1 py-1.5 outline-none rounded-md"
            placeholder="Password"
          />
          <Captcha captchaRef={captchaRef} />
          <div className="flex justify-between w-full items-center pb-4 px-2 text-websiteBlue text-sm opacity-50">
            <div className="flex items-start">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="mr-1 mt-1"
                value={termsPolicies}
                onChange={(e) => {
                  setTermsPolicies(!termsPolicies);
                }}
              />
              <label
                htmlFor="check"
                className="w-10/12 cursor-pointer text-darkGrey"
              >
                By Signing-up to consciousleap, you agree to our Terms of
                Service and Privacy Policy.
              </label>
            </div>
          </div>
          <button
            onClick={onSignUp}
            className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg"
          >
            Get Otp
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
