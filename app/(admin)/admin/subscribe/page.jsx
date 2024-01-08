"use client";
import Context from "@/Context/Context";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import image from "@/(main)/Assets/dashboard-user-image.jpeg";

const Subscribe = () => {
  const history = useRouter();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    if (!getCookie("admin_token")) {
      history.push("/user/login");
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/get-subscribe`)
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    usersData && (
      <div className="bg-gray-100">
        <div className="bg-white border rounded-md pt-4 overflow-y-auto h-[82vh] shadow-md shadow-gray-200">
          <div className="text-black flex items-center justify-between px-4 border-b pb-2">
            <p className="font-bold">
              All Subscribe Users ({usersData?.length})
            </p>
          </div>
          <div className="px-2 pt-2">
            {usersData.map((e, i) => {
              return <Product data={e} key={i} />;
            })}
          </div>
        </div>
      </div>
    )
  );
};

const Product = ({ data }) => {
  return (
    <div className="rounded-md grid grid-cols-2 items-center mb-3 cursor-pointer shadow-sm shadow-gray-200 p-2">
      <div className="flex items-center">
        <Image
          src={image}
          alt="Image"
          className="w-[4vw] rounded-full object-cover object-center"
        />
        <div className="py-1 ml-3">
          <div className="flex items-center">
            <p className="mt-0 text-newBlue text-base font-bold">
              {data?.email}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <AiOutlineDelete
          className="text-red-500 bg-red-50 p-2 rounded-full hover:text-white hover:bg-red-500 transition-all mr-3"
          size={35}
        />
      </div>
    </div>
  );
};

export default Subscribe;
