"use client";
import React, { useRef, useState, useContext, useEffect } from "react";
import Captcha from "../../Components/Authorized/Captcha";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import emailjs from "@emailjs/browser";
import { data } from "../../../codes";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import ReactFlagsSelect from "react-flags-select";

const UserRegister = () => {
  const { user, setUser } = useContext(Context);
  const [code, setCode] = useState("IN");
  const [showPassword, setShowPassword] = useState(false);
  const [termsPolicies, setTermsPolicies] = useState(false);
  const captchaRef = useRef(null);
  const history = useRouter();
  const router = useRouter();

  useEffect(() => {
    let token = getCookie("token");
    if (token) {
      history.push("/user/dashboard");
    }
  }, []);

  const onSignUp = (e) => {
    e.preventDefault();
    if (termsPolicies) {
      if (!(!user?.name || !user?.email || !user?.password)) {
        axios
          .post(`${BASE_URL}/login/otp-verification`, user)
          .then((response) => {
            if (response.status == 200) {
              toast.success(response.data.data);
              emailjs
                .send(
                  "service_n23sv5c",
                  "template_xl03pav",
                  {
                    email: user?.email,
                    otp: response.data.otp,
                    name: "Anekant",
                    from_name: "Consciousleap",
                  },
                  "l0zGxBngDOZlLankM"
                )
                .then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                    console.log("FAILED...", error);
                  }
                );
              setUser({ ...user, original: response.data.otp });
              setTimeout(() => {
                router.push("/user/register/otp-verification");
              }, 600);
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
    } else {
      toast.error("Please accept our Terms of Service and Privacy Policy");
    }
  };

  return (
    <div className="py-10">
      <Toaster />
      {/* <div className="rounded-xl w-[90vw] min-[768px]:w-[60vw] min-[900px]:w-[40vw] min-[1040px]:w-[35vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
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
            className="w-[78%] min-[400px]:w-[65%] min-[495px]:w-[60%] min-[530px]:w-[55%] min-[580px]:w-[50%] min-[600px]:w-[45%] min-[650px]:w-[40%] min-[777px]:w-[82%] min-[900px]:w-[100%] w-[1050px]:w-[100%] min-[1522px]:w-[90%] min-[1700px]:w-[80%] min-[1900px]:w-[70%] border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Name"
          />
          <input
            type="text"
            value={user?.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="w-[78%] min-[400px]:w-[65%] min-[495px]:w-[60%] min-[530px]:w-[55%] min-[580px]:w-[50%] min-[600px]:w-[45%] min-[650px]:w-[40%] min-[777px]:w-[82%] min-[900px]:w-[100%] w-[1050px]:w-[100%] min-[1522px]:w-[90%] min-[1700px]:w-[80%] min-[1900px]:w-[70%] border px-3 py-1.5 outline-none rounded-md mb-4"
            placeholder="Email"
          />
          <div className="w-[78%] min-[400px]:w-[65%] min-[495px]:w-[60%] min-[530px]:w-[55%] min-[580px]:w-[50%] min-[600px]:w-[45%] min-[650px]:w-[40%] min-[777px]:w-[82%] min-[900px]:w-[100%] w-[1050px ]:w-[100%] min-[1522px]:w-[90%] min-[1700px]:w-[80%] min-[1900px]:w-[70%] flex items-center justify-center mb-4">
            <p className="mr-0 md:text-sm text-xs md:block hidden md:mr-6">
              Phone Number :{" "}
            </p>
            <IntlTelInput
              onChange={(e) => {
                console.log(e);
              }}
              style={{
                border: "1px solid #efefef",
                outline: "0px solid black",
                padding: "4px 0",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="relative flex items-center justify-center w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={user?.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="w-[78%] min-[400px]:w-[65%] min-[495px]:w-[60%] min-[530px]:w-[55%] min-[580px]:w-[50%] min-[600px]:w-[45%] min-[650px]:w-[40%] min-[777px]:w-[82%] min-[900px]:w-[100%] w-[1050px]:w-[100%] min-[1522px]:w-[90%] min-[1700px]:w-[80%] min-[1900px]:w-[70%] border px-3 py-1.5 outline-none rounded-md"
              placeholder="Password"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-10 md:right-8 min-[800px]:right-14 min-[1000px]:right-5"
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
          <Captcha captchaRef={captchaRef} />
          <div className="flex justify-between w-[85%] md:w-full items-center pb-4 px-2 text-websiteBlue text-sm">
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
                className="cursor-pointer md:text-sm text-xs text-darkGrey"
              >
                By signing-up to consciousleap, you agree to our
                <span
                  className="text-websiteBlue cursor-pointer mx-1 underline font-semibold"
                  onClick={(e) => {
                    history.push("/privacy/terms");
                  }}
                >
                  Terms of Service
                </span>
                and
                <span
                  className="text-websiteBlue cursor-pointer ml-1 underline font-semibold"
                  onClick={(e) => {
                    history.push("/privacy/policies");
                  }}
                >
                  Privacy Policy
                </span>
                .
              </label>
            </div>
          </div>
          <button
            onClick={onSignUp}
            className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg"
          >
            Get OTP
          </button>
          <p
            onClick={(e) => {
              history.push("/user/login");
            }}
            className="text-websiteBlue mt-[5vw] md:mt-[2vw] text-sm cursor-pointer"
          >
            Login
          </p>
        </div>
      </div> */}
      <div className="rounded-xl w-[90vw] md:w-[45vw] min-[1400px]:w-[30vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
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
            className="border px-3 py-1.5 outline-none rounded-md mb-4 w-full"
            placeholder="Name"
          />
          <input
            type="text"
            value={user?.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="border px-3 py-1.5 outline-none rounded-md mb-4 w-full"
            placeholder="Email"
          />
          <div className="flex items-center justify-center mb-4 w-full">
            <IntlTelInput
              style={{
                border: "1px solid #efefef",
                outline: "0px solid black",
                padding: "4px 0",
                borderRadius: "4px",
              }}
              inputClassName="w-full outline-none"
              containerClassName="intl-tel-input w-full outline-none"
            />
          </div>
          <div className="relative flex items-center justify-center w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={user?.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="border px-3 py-1.5 outline-none rounded-md w-full"
              placeholder="Password"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-10 md:right-8 min-[800px]:right-14 min-[1000px]:right-5"
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
          <Captcha captchaRef={captchaRef} />
          <div className="flex justify-between md:w-full items-center pb-4 px-2 text-websiteBlue text-sm">
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
                className="cursor-pointer md:text-sm text-xs text-darkGrey"
              >
                By signing-up to consciousleap, you agree to our
                <span
                  className="text-websiteBlue cursor-pointer mx-1 underline font-semibold"
                  onClick={(e) => {
                    history.push("/privacy/terms");
                  }}
                >
                  Terms of Service
                </span>
                and
                <span
                  className="text-websiteBlue cursor-pointer ml-1 underline font-semibold"
                  onClick={(e) => {
                    history.push("/privacy/policies");
                  }}
                >
                  Privacy Policy
                </span>
                .
              </label>
            </div>
          </div>
          <button
            onClick={onSignUp}
            className="bg-websiteBlue text-white px-7 font-semibold py-1.5 rounded-lg"
          >
            Get OTP
          </button>
          <p
            onClick={(e) => {
              history.push("/user/login");
            }}
            className="text-websiteBlue mt-[5vw] md:mt-[2vw] text-sm cursor-pointer"
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
