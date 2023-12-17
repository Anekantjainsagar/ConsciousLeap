"use client";
import { useRouter } from "next/navigation";
import React from "react";
import image from "@/(main)/Assets/logoPng.png";
import Image from "next/image";

const CancelPayment = () => {
  const history = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <Image src={image} alt="Image" className="mb-5 w-1/12" />
      <h1 className="text-3xl">Oops!</h1>
      <p className="text-center w-5/12 my-2">
        We were not able to process your payment. Please review your payment
        details and try again!
      </p>
      <button
        onClick={(e) => {
          history.push("/cart/1");
        }}
        className="bg-websiteBlue px-16 shadow-md shadow-gray-300 py-2 rounded-lg text-white"
      >
        Try Again
      </button>
    </div>
  );
};

export default CancelPayment;
