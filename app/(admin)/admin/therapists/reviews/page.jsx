"use client";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const TherapistsReviews = () => {
  const history = useRouter();
  const { therapistFilter } = useContext(Context);

  useEffect(() => {
    if (!getCookie("admin_token")) {
      history.push("/user/login");
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="bg-white border rounded-md pt-4 overflow-y-auto h-[82vh] shadow-md shadow-gray-200">
        <div className="text-black flex items-center justify-between px-4 border-b pb-2">
          <p className="font-bold">All Therapists Reviews</p>
        </div>
        <div className="flex items-center justify-between shadow-md text-base font-bold rounded-lg px-4 mb-2 py-2 grid grid-cols-5">
          <p className="mt-0 text-center flex items-center font-bold text-base">
            Therapist
          </p>
          <p className="mt-0 text-center text-sm">Comfortability</p>
          <p className="mt-0 text-center text-sm">Knowledgable</p>
          <p className="mt-0 text-center text-sm">Positivenss</p>
          <p className="mt-0 text-center text-sm">Experience</p>
        </div>
        <div className="px-2">
          {therapistFilter?.therapistsData.map((e, i) => {
            return <Product data={e} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Product = ({ data }) => {
  return (
    <>
      <div>
        {data?.reviews?.map((e, i) => {
          return <Review data={e} key={i} therapist={data} />;
        })}
      </div>
    </>
  );
};

const Review = ({ data, therapist }) => {
  return (
    <div className="flex items-center justify-between shadow-md rounded-lg px-4 mb-2 py-2 grid grid-cols-5">
      <p className="mt-0 text-center flex items-center font-bold text-base">
        <Image
          src={therapist?.photo}
          alt={therapist?.photo?.url}
          width={100}
          height={100}
          className="w-[4vw] object-cover object-center rounded-full border border-darkGrey h-[4vw]"
        />
        {therapist?.name}
      </p>
      <p className="mt-0 text-center text-sm">{data?.comfortability}</p>
      <p className="mt-0 text-center text-sm">{data?.knowledgable}</p>
      <p className="mt-0 text-center text-sm">{data?.positivenss}</p>
      <p className="mt-0 text-center text-sm">{data?.experience}</p>
    </div>
  );
};

export default TherapistsReviews;
