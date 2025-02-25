"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import Context from "@/Context/Context";
import React, { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";

const MindFulMonth = () => {
  const { setMindfulMonth, login } = useContext(Context);
  const pathname = usePathname();
  const history = useRouter();

  return (
    <div>
      <div className="bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen flex items-center justify-center">
        <marquee behavior="scroll" direction="right">
          <div className="flex items-center justify-between w-full py-1 text-xs md:text-lg text-white font-semibold">
            <p className="py-0 my-0 md:pr-0 pr-8">
              Start your journey of wellbeing! Book a free discovery session
              now!
            </p>
            <p className="py-0 my-0">
              Start your journey of wellbeing! Book a free discovery session
              now!
            </p>
          </div>
        </marquee>
      </div>
      <div className="relative w-full">
        <Image
          src={"/Assets/carousel/Banner 4.png"}
          alt="Displaying mindful monday"
          width={1000}
          height={10000}
          className="w-full"
        />

        <div
          className="absolute rounded-full cursor-pointer"
          style={{
            bottom: "18.5%", // Adjust the top position
            left: "8.5%", // Adjust the left position
            width: "35%", // Adjust the width of the clickable area
            height: "10%", // Adjust the height of the clickable area
          }}
          onClick={(e) => {
            if (login?._id) {
              setMindfulMonth(true);
              history.push("/questionnaire");
            } else {
              toast.error("Please login first");
              localStorage.setItem("login-history", pathname);
              history.push("/user/login");
            }
          }}
        ></div>
      </div>

      <div className="mx-4 md:mx-32">
        <h1 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen w-fit">
          Walk towards wellbeing!
        </h1>
        <p className="px-2 md:text-[20px] mt-1.5 text-newBlue">
          We are excited to announce the launch of &quot;Walk Towards
          Wellbeing,&quot; an initiative offering free therapy sessions. This
          program aims to provide accessible mental health support to all,
          fostering well-being and resilience in our community. By removing
          financial barriers, we hope to encourage individuals to take a
          proactive step towards their mental health, ensuring they receive the
          care and guidance they need duringthese challenging times. Join us to
          prioritize your mental health with consciousleop.
        </p>
        <h1 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen w-fit mt-8">
          What does this Discovery Session entail?
        </h1>
        <div className="text-newBlue px-2 md:text-[20px]">
          <p className="my-1">1. Access to Conscious Questionnaire</p>
          <p className="my-1">2. ⁠Free Consultation with a Therapist</p>
        </div>
      </div>
    </div>
  );
};

export default MindFulMonth;
