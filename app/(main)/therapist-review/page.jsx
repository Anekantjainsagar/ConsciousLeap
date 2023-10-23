"use client";
import React, { useContext } from "react";
import image from "../Assets/sagrika.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";

const TherapistReview = () => {
  const { therapistFilter } = useContext(Context);

  return (
    <div className="py-[4vw]">
      <h1 className="text-3xl text-center font-light gradientHover cursor-pointer">
        Review Therapists
      </h1>
      <div className="grid grid-cols-3 gap-y-10 pt-[3vw] px-[8vw]">
        {therapistFilter?.therapistsData?.map((e) => {
          return <Therapist key={e?._id} data={e} />;
        })}
      </div>
    </div>
  );
};

const Therapist = ({ data }) => {
  const history = useRouter();
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={(e) => {
        history.push(`/therapist-review/${data?._id}`);
      }}
    >
      <div className="rounded-full w-5/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex h-full p-1 w-full rounded-full items-center justify-center bg-white">
          <Image
            src={data?.photo}
            alt="Photo of girl"
            width={1000}
            height={1000}
            className="rounded-full"
          />
        </div>
      </div>
      <p className="text-websiteBlue text-xl ml-4 font-medium">{data?.name}</p>
    </div>
  );
};

export default TherapistReview;
