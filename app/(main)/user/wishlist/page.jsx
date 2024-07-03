"use client";
import React, { useContext, useState, useEffect } from "react";

import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import LeftBar from "../dashboard/Components/LeftBar";
import RightBar from "../dashboard/Components/LeftBar copy";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const Wishlist = () => {
  const history = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { login, getUser } = useContext(Context);

  useEffect(() => {
    setUser({
      name: login?.name,
      phone: login?.phone,
      email: login?.email,
    });
  }, [login]);

  const onUpdate = () => {
    let token = getCookie("token");
    axios
      .post(`${BASE_URL}/login/update-user`, { ...user, token })
      .then((response) => {
        if (response.status === 200) {
          getUser();
          toast.success("Details updated successfully");
          setTimeout(() => {
            history.push("/user/dashboard");
          }, 300);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-[#eee] px-[5vw] flex md:flex-row flex-col justify-between items-start py-[2vw]">
        <LeftBar />
        <Toaster />
        <div className="md:w-6/12 px-[2vw]">
          <h1 className="text-darkGrey tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
            Wishlisted items
          </h1>
          {login?.wishlist?.length > 0 ? (
            <div className="grid grid-cols-3 gap-5 mt-2">
              {login?.wishlist?.map((e) => {
                return <Block id={e} key={e} />;
              })}
            </div>
          ) : (
            <div className="bg-white w-full shadow-lg shadow-lightGrey mt-4 p-3">
              <h2 className="text-darkGrey text-center tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
                There isn&apos;t anything added yet
              </h2>
            </div>
          )}
        </div>
        <RightBar />
      </div>
    </>
  );
};

const Block = ({ id }) => {
  const [data, setData] = useState();
  const history = useRouter();
  useEffect(() => {
    axios.post(`${BASE_URL}/product/get/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);

  return (
    data?.images?.length > 0 && (
      <div
        onClick={(e) => {
          history.push(`/conscious-store/${id}`);
        }}
        className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md cursor-pointer shadow-gray-400"
      >
        <Image
          src={data?.images[0]}
          alt="Image"
          className="w-full"
          width={100}
          height={100}
        />
        <p className="mt-2">{data?.name}</p>
      </div>
    )
  );
};

export default Wishlist;
