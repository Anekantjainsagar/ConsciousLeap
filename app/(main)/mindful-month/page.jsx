"use client";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const MindFulMonth = () => {
  const { setMindfulMonth, login } = useContext(Context);
  const history = useRouter();

  return (
    <div>
      <div className="bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen flex items-center justify-center">
        <marquee behavior="scroll" direction="right">
          <div className="flex items-center justify-between w-full py-1 text-xs md:text-lg text-white font-semibold">
            <p className="py-0 my-0 md:pr-0 pr-8">
              Free Discovery Session on Suicide Prevention Awareness Month
            </p>
            <p className="py-0 my-0">
              Free Discovery Session on Suicide Prevention Awareness Month
            </p>
          </div>
        </marquee>
      </div>
      <Image
        src={"/Assets/carousel/Banner 3.png"}
        alt="Displaying mindful monday"
        width={1000}
        height={10000}
        className="w-full cursor-pointer"
        onClick={(e) => {
          if (login?._id) {
            setMindfulMonth(true);
            history.push("/questionnaire");
          } else {
            toast.error("Please login first");
            history.push("/user/login");
          }
        }}
      />
      <div className="mx-4 md:mx-32">
        <h1 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen w-fit">
          Changing the narrative
        </h1>
        <p className="px-2 text-sm md:text-[17px] mt-1.5 text-newBlue">
          Every year 726 000 people take their own life and there are many more
          people who make suicide attempts. Every suicide is a tragedy that
          affects families, communities and entire countries and has
          long-lasting effects on the people left behind.
          <br />
          <br /> Suicide prevention efforts require coordination and
          collaboration among multiple sectors of society, including the health
          sector and other sectors such as education, labour, agriculture,
          business, justice, law, defence, politics and the media. These efforts
          must be comprehensive and integrated given the multifaceted
          nature of suicide.
        </p>
        {/* <h1 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen w-fit mt-8">
          What does this Discovery Session entail?
        </h1>
        <div className="text-newBlue px-2 text-sm md:text-[17px]">
          <li className="my-1">
            Access to our Conscious Questionnaire to discover the different
            aspects of your well-being.
          </li>
          <li className="my-1">
            Free 15 mins consultation with our therapist to guide you on your
            well-being journey.
          </li>
        </div> */}
      </div>
    </div>
  );
};

export default MindFulMonth;
