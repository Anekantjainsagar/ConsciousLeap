"use client";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

const Therapists = () => {
  const history = useRouter();
  const { therapistFilter, therapistSort, setTherapistSort, showPopUpId } =
    useContext(Context);

  useEffect(() => {
    if (!getCookie("admin_token")) {
      history.push("/user/login");
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="bg-white border rounded-md pt-4 overflow-y-auto h-[82vh] shadow-md shadow-gray-200">
        <div className="text-black flex items-center justify-between px-4 border-b pb-2">
          <p className="font-bold">
            All Therapists ({therapistFilter?.therapistsData?.length})
          </p>
          <div>
            <select
              value={therapistSort}
              onChange={(e) => {
                setTherapistSort(e.target.value);
              }}
              className="w-full md:w-[13vw] rounded-sm text-darkGrey text-sm border px-2 py-2 outline-none"
            >
              <option className="py-1" value="Sort By">
                Sort By
              </option>
              <option className="py-1" value="New to Old">
                New to Old
              </option>
              <option className="py-1" value="Old to New">
                Old to New
              </option>
              <option className="py-1" value="Ascending">
                Ascending
              </option>
              <option className="py-1" value="Descending">
                Descending
              </option>
              <option className="py-1" value="Experience">
                Experience
              </option>
            </select>
          </div>
        </div>
        <div className="px-2 pt-2">
          {therapistFilter?.therapistsData
            ?.sort((a, b) => {
              if (therapistSort == "Experience") {
                let fa = parseInt(a.experience?.slice(0, 2)),
                  fb = parseInt(b.experience?.slice(0, 2));
                if (fa < fb) {
                  return 1;
                }
                if (fa > fb) {
                  return -1;
                }
                return 0;
              } else if (therapistSort == "New to Old") {
                let fa = new Date(a.date),
                  fb = new Date(b.date);

                return fb - fa;
              } else if (therapistSort == "Old to New") {
                let fa = new Date(a.date),
                  fb = new Date(b.date);

                return fa - fb;
              } else if (therapistSort == "Descending") {
                let fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

                if (fa < fb) {
                  return 1;
                }
                if (fa > fb) {
                  return -1;
                }
                return 0;
              } else if (therapistSort == "Ascending") {
                let fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

                if (fa < fb) {
                  return -1;
                }
                if (fa > fb) {
                  return 1;
                }
                return 0;
              }
              return 0;
            })
            .map((e, i) => {
              return <Product data={e} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

const Product = ({ data }) => {
  return (
    <div className="rounded-md grid grid-cols-3 items-center mb-3 cursor-pointer shadow-sm shadow-gray-200 p-2">
      <div className="flex items-center">
        <Image
          src={data?.photo}
          width={100}
          height={100}
          alt="Image"
          className="w-[5vw] rounded-full object-cover object-center"
        />
        <div className="py-1 ml-3">
          <p className="text-lg font-bold">{data?.name}</p>
          <div className="flex items-center">
            <p className="mt-0 text-newBlue text-xs font-bold">
              INR {data?.desc}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="py-0 text-base font-semibold text-newBlue">Expertise</h1>
        {data?.expertise?.slice(0, 2)?.map((e) => {
          return (
            <p className="mt-0" key={e}>
              {e}
            </p>
          );
        })}
      </div>
      <div className="flex justify-end items-center">
        <AiOutlineEye
          className="text-oceanGreen bg-lightOceanGreen p-2 rounded-full hover:text-white hover:bg-oceanGreen transition-all mr-3"
          size={35}
        />
        <AiOutlineEdit
          className="text-blue-500 bg-blue-50 p-2 rounded-full hover:text-white hover:bg-blue-500 transition-all mr-3"
          size={35}
        />
        <AiOutlineDelete
          className="text-red-500 bg-red-50 p-2 rounded-full hover:text-white hover:bg-red-500 transition-all mr-3"
          size={35}
        />
      </div>
    </div>
  );
};

export default Therapists;
