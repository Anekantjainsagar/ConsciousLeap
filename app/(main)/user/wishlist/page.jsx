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
            <></>
          ) : (
            <div className="bg-white w-full shadow-lg shadow-lightGrey mt-4 p-3">
              <h1 className="text-darkGrey text-center tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
                There isn't anything added yet
              </h1>
            </div>
          )}
        </div>
        <RightBar />
      </div>
    </>
  );
};

export default Wishlist;
