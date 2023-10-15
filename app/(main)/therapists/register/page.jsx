"use client";
import React, { useState } from "react";
import image from "../../Assets/register.png";
import Image from "next/image";

import img1 from "../../Assets/registerTherapist/join1.png";
import img2 from "../../Assets/registerTherapist/join2.png";
import img3 from "../../Assets/registerTherapist/join3.png";
import img4 from "../../Assets/registerTherapist/join4.png";
import img5 from "../../Assets/registerTherapist/join5.png";
import img6 from "../../Assets/registerTherapist/join6.png";
import img7 from "../../Assets/registerTherapist/join7.png";
import img8 from "../../Assets/registerTherapist/join8.png";
import img9 from "../../Assets/registerTherapist/join9.png";
import img10 from "../../Assets/registerTherapist/join10.png";
import img11 from "../../Assets/registerTherapist/join11.png";
import img12 from "../../Assets/registerTherapist/join12.png";

import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterTherapist = () => {
  const [getOtp, setGetOtp] = useState(false);
  let router = useRouter();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    displayName: "",
    desc: "",
    original: "",
    otp: "",
  });
  let registerData = [
    { image: img1, title: "Unbinding", desc: "Free to work elsewhere." },
    { image: img2, title: "Virtual", desc: "Work from anywhere." },
    { image: img3, title: "Tailored", desc: "Tailored time slots." },
    {
      image: img4,
      title: "Promising",
      desc: "Career opportunities at consciousleap.",
    },
    { image: img5, title: "Credible", desc: "Get recognised." },
    { image: img6, title: "Incentivized", desc: "Performance Bonus." },
    { image: img7, title: "Rewarding", desc: "Set your own fees." },
    { image: img8, title: "Informative", desc: "Training and Workshop." },
    { image: img9, title: "Community", desc: "Mindful Therapist community." },
    { image: img10, title: "Recognition", desc: "Get awarded." },
    { image: img11, title: "Supportive", desc: "Mindful work-family." },
    { image: img12, title: "International", desc: "Heal the world." },
  ];

  const onGetOtp = () => {
    console.log(user);
    if (
      !(
        !user?.name ||
        !user?.email ||
        !user?.password ||
        !user?.phone ||
        !user?.displayName ||
        !user?.desc
      )
    ) {
      axios
        .post(`${BASE_URL}/therapist/otp-verification`, user)
        .then((response) => {
          if (response.status == 200) {
            toast.success(response.data.data);
            setUser({ ...user, original: response.data.otp });
            setGetOtp(true);
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

  const onRegister = () => {
    if (user?.otp) {
      if (user?.otp == user?.original) {
        axios
          .post(`${BASE_URL}/therapist/signup`, user)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              toast.success("Registered successfully");
              setTimeout(() => {
                router.push("/therapists/dashboard");
                let token = response.data.token;
                setCookie("therapist_token", token);
                setLogin(response.data);
                setUser({
                  name: "",
                  phone: "",
                  email: "",
                  password: "",
                  displayName: "",
                  desc: "",
                  original: "",
                  otp: "",
                });
                setGetOtp(false);
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
    <div className="overflow-x-hidden">
      <Toaster />
      <h1 className="text-4xl md:text-5xl text-websiteBlue font-medium text-center pt-[4vw] mb-2 md:mb-5">
        Register as a Therapist
      </h1>
      <p className="w-9/12 md:w-7/12 mx-auto text-center font-light tracking-wide">
        By joining our mindful team of Therapists, you are not just profoundly
        improving the quality of life but are truly saving lives by sharing your
        knowledge and expertise with those who need it most. Learn More
      </p>
      <Image
        src={image}
        alt="Register therapist"
        className="mt-[6vw] md:mt-[3vw] w-full"
      />
      <h1 className="text-3xl md:text-5xl text-websiteBlue font-medium text-center pt-[8vw] mb-2 md:mb-7">
        Mindful Advantages
      </h1>
      <p className="font-light text-center pb-6 md:w-full w-11/12 mx-auto">
        At consciousleap, our mindful therapists are the founding pillars of our
        organization, and we take pride in offering them exceptional advantages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-6 px-[2vw] gap-x-8 gap-y-4 md:gap-y-9">
        {registerData.map((e, i) => {
          return <FlipCard data={e} key={i} />;
        })}
      </div>
      <h1 className="text-4xl md:text-5xl text-websiteBlue font-medium text-center pt-[10vw] mb-4">
        Let&#39;s heal the world together
      </h1>
      <p className="font-light md:w-full w-11/12 mx-auto text-center pb-8">
        To take the first step towards joining us, fill out the form below,
        providing us with the necessary details to get to know you better
      </p>
      <div className="rounded-lg w-[90vw] md:w-[30vw] text-sm mx-auto h-fit bg-gradient-to-tr mt-[2vw] from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="h-full w-full py-2 md:py-4 px-[3vw] md:px-[1vw] rounded-lg justify-center bg-white flex flex-col">
          <h1 className="text-websiteBlue font-medium pb-2 border-b">
            Personal Information
          </h1>
          <p className="mt-4 text-websiteBlue font-light">Your Name *</p>
          <input
            type="text"
            value={user?.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            placeholder="Name"
            className="border px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <p className="mt-4 text-websiteBlue font-light">Your Email *</p>
          <input
            type="text"
            value={user?.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="Email"
            className="border px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <p className="mt-4 text-websiteBlue font-light">Your Phone *</p>
          <input
            type="text"
            value={user?.phone}
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }}
            placeholder="Phone"
            className="border px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <p className="mt-4 text-websiteBlue font-light">Your Password *</p>
          <input
            type="password"
            value={user?.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="Password"
            className="border px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <h1 className="text-websiteBlue font-medium mt-8 pb-2 border-b">
            Basic Information
          </h1>
          <p className="mt-4 text-websiteBlue font-light">
            Therapist Display Name *
          </p>
          <input
            type="text"
            value={user?.displayName}
            onChange={(e) => {
              setUser({ ...user, displayName: e.target.value });
            }}
            placeholder="Therapist Display Name"
            className="border px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <p className="mt-4 text-websiteBlue font-light">
            Short Description of Profile *
          </p>
          <input
            type="text"
            value={user?.desc}
            onChange={(e) => {
              setUser({ ...user, desc: e.target.value });
            }}
            placeholder="Short Description of Profile"
            className="border px-4 rounded-sm py-1.5 outline-none mt-2"
          />
          <h1 className="text-websiteBlue font-medium mt-6 border-b">
            Upload your resume
          </h1>
          <input
            class="mt-2 relative m-0 block w-full text-sm min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal text-websiteBlue transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-websiteBlue file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-websiteBlue focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-websiteBlue dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
          />
          {getOtp ? (
            <>
              <p className="mt-4 text-websiteBlue font-light">OTP *</p>
              <input
                type="text"
                value={user?.otp}
                onChange={(e) => {
                  setUser({ ...user, otp: e.target.value });
                }}
                placeholder="Enter OTP"
                className="border px-4 rounded-sm py-1.5 outline-none mt-2"
              />
            </>
          ) : null}
          <button
            onClick={!getOtp ? onGetOtp : onRegister}
            className="bg-websiteBlue px-8 py-2 text-white mt-5 rounded-md w-fit mx-auto"
          >
            {getOtp ? "Register" : "Get Otp"}
          </button>
        </div>
      </div>
    </div>
  );
};

const FlipCard = ({ data }) => {
  return (
    <div className="rounded-lg w-full h-fit bg-gradient-to-tr from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
      <div className="h-full w-full rounded-lg items-center justify-center bg-white flex flex-col">
        <div className="flip-card-special">
          <div className="flip-card-inner-special">
            <div className="flip-card-front-special rounded-lg flex justify-center items-center">
              <Image src={data?.image} alt={img2.src} className="md:w-6/12" />
            </div>
            <div className="flip-card-back-special px-5 flex rounded-lg flex-col justify-center items-center">
              <h1 className="text-websiteBlue text-2xl font-medium">
                {data?.title}
              </h1>
              <p className="text-darkGrey text-xl font-light">{data?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTherapist;
