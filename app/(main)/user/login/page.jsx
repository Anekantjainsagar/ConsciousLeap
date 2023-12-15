"use client";
import React, { useContext, useRef, useState, useEffect } from "react";
import Captcha from "../../Components/Authorized/Captcha";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "@/Utils/urls";
import { setCookie } from "cookies-next";
import Context from "@/Context/Context";
import emailjs from "@emailjs/browser";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const UserLogin = () => {
  const captchaRef = useRef(null);
  let { isLogin, login } = useContext(Context);
  const history = useRouter();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLogin) {
      history.push("/user/dashboard");
    }
  }, [login]);

  const onLogin = () => {
    if (!(!user?.email || !user?.password)) {
      axios
        .post(`${BASE_URL}/login/signin`, user)
        .then((response) => {
          if (response.status == 200) {
            toast.success("Login successful");
            let token = response.data.jwtToken;
            if (response.data.user == "Therapist") {
              router.push("/therapy/dashboard");
              setCookie("therapist_token", token);
              console.log(response.data.user);
            } else if (response.data.user == "User") {
              router.push("/");
              setCookie("token", token);
            }
            setUser({
              email: "",
              password: "",
            });
          } else {
            toast.error(response.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    } else {
      toast.error("Please fill all the details");
    }
  };

  const forgotPassword = () => {
    if (user?.email) {
      console.log(user?.email);
      axios
        .post(`${BASE_URL}/login/password-reset`, {
          email: user?.email,
        })
        .then((res) => {
          if (res.status == 200) {
            emailjs
              .send(
                "service_n23sv5c",
                "template_crf7eig",
                {
                  email: user?.email,
                  url: res.data?.url,
                  to_name: res?.data?.user?.name,
                  from_name: "Consciousleap",
                },
                "l0zGxBngDOZlLankM"
              )
              .then(
                function (response) {
                  console.log("SUCCESS!", response.status, response.text);
                  toast.success(res.data.data);
                },
                function (error) {
                  console.log("FAILED...", error);
                }
              );
          } else {
            toast.error(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Internal server error");
        });
    } else {
      toast.error("Please enter an email address");
    }
  };

  return (
    <div className="py-10">
      <Toaster />
      <div className="rounded-xl min-[900px]:w-[40vw] w-[90vw] min-[1040px]:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex flex-col py-[3vw] px-[4vw] md:px-[1.5vw] md:py-[1.5vw] h-full w-full rounded-xl items-center justify-center bg-white">
          <h1 className="mb-7 text-websiteBlue text-3xl font-semibold">
            Login
          </h1>
          <input
            type="text"
            value={user?.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="w-full border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Email"
          />
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
          <div className="flex justify-between w-full items-center p-2 text-websiteBlue text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-1 cursor-pointer"
                id="remember"
              />
              <label
                htmlFor="remember"
                className="cursor-pointer text-websiteBlue"
              >
                Remember Me
              </label>
            </div>
            <p
              className="cursor-pointer text-websiteBlue"
              onClick={forgotPassword}
            >
              Forgot Password?
            </p>
          </div>
          <Captcha captchaRef={captchaRef} />
          <button
            onClick={onLogin}
            className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg"
          >
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
