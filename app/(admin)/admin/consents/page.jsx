"use client";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import image from "@/(main)/Assets/dashboard-user-image.jpeg";
import toast, { Toaster } from "react-hot-toast";

const Consents = () => {
  const history = useRouter();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    if (!getCookie("admin_token")) {
      history.push("/user/login");
    }
  }, [history]);

  const getConsents = () => {
    axios
      .get(`${BASE_URL}/consent/get-consents`)
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getConsents();
  }, []);

  return (
    usersData && (
      <div className="bg-gray-100">
        <Toaster />
        <div className="bg-white border rounded-md pt-4 overflow-y-auto h-[82vh] shadow-md shadow-gray-200">
          <div className="text-black flex items-center justify-between px-4 border-b pb-2">
            <p className="font-bold">Consent Forms ({usersData?.length})</p>
          </div>
          <div className="px-2 pt-2">
            {usersData.map((e, i) => {
              return <Product data={e} key={i} getConsents={getConsents} />;
            })}
          </div>
        </div>
      </div>
    )
  );
};

const Product = ({ data, getConsents }) => {
  return (
    <div className="rounded-md grid grid-cols-3 items-center mb-3 cursor-pointer shadow-sm shadow-gray-200 p-2">
      <div className="flex items-center">
        <Image
          src={image}
          alt="Image"
          className="w-[4vw] rounded-full object-cover object-center"
        />
        <div className="py-1 ml-3">
          <p className="font-bold text-[16px]">{data?.name}</p>
          <div className="flex items-center">
            <p className="mt-0 text-newBlue text-xs font-bold">
              {data?.address}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <p className="py-0 my-0 font-semibold text-newBlue">
          {data?.emergency?.name}
        </p>
        <p className="py-0 my-0 font-semibold">{data?.emergency?.phone}</p>
      </div>
      <div className="flex justify-end items-center">
        <AiOutlineDelete
          className="text-red-500 bg-red-50 p-2 rounded-full hover:text-white hover:bg-red-500 transition-all mr-3"
          size={35}
          onClick={(e) => {
            axios
              .post(`${BASE_URL}/consent/delete-consent/${data?._id}`)
              .then((res) => {
                console.log(res.data)
                if (res.status === 200 && res.data.deletedCount > 0) {
                  getConsents();
                  toast.success("Deleted successfully");
                }
              });
          }}
        />
      </div>
    </div>
  );
};

export default Consents;
