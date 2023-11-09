"use client";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { BASE_URL } from "../../../../../Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordReset = ({ params }) => {
  const [user, setUser] = useState({ password: "" });
  const [showPassword, setShowPassword] = useState("");
  const { id, token } = params;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/login/password-reset/${id}/${token}`)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          history("/user/login");
        }
      })
      .catch((err) => {});
  }, [params]);

  const onLogin = () => {
    axios
      .post(`${BASE_URL}/login/password-reset/reset/${id}/${token}`, {
        password: user.password,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Password reset successful");
          history("/user/login");
        }
      })
      .catch((err) => {
        toast.error("Internal server error");
      });
  };

  return (
    <div className="py-10">
      <Toaster />
      <div className="rounded-xl w-[90vw] md:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex flex-col py-[3vw] px-[4vw] md:px-[1.5vw] md:py-[1.5vw] h-full w-full rounded-xl items-center justify-center bg-white">
          <h1 className="mb-7 text-websiteBlue text-3xl font-semibold">
            Password Reset
          </h1>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={user?.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="w-full border px-3 py-1.5 outline-none rounded-md"
              placeholder="Password"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-2"
              onClick={(e) => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <AiOutlineEye size={25} />
              ) : (
                <AiOutlineEyeInvisible size={25} />
              )}
            </div>
          </div>
          <button
            onClick={onLogin}
            className="bg-websiteBlue mt-5 text-white px-7 font-semibold py-1.5 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
