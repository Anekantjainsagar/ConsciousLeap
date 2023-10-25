"use client";
import React, { useContext, useState, useEffect } from "react";

import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import LeftBar from "../Components/LeftBar";
import RightBar from "../Components/LeftBar copy";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";

const DashboardEdit = () => {
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
  }, []);

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
      <div className="bg-[#eee] px-[5vw] flex justify-between items-start py-[2vw]">
        <LeftBar />
        <Toaster />
        <div className="w-6/12 px-[2vw]">
          <h1 className="text-darkGrey tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
            Manage Profile
          </h1>
          <div className="bg-white w-full shadow-lg shadow-lightGrey mt-4 p-3">
            <h1 className="text-darkGrey border-b pb-2 border-b-lightGrey tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
              Personal Information
            </h1>
            <div className="mt-4">
              {[
                {
                  title: "Your Name",
                  value: user.name,
                  onchange: (e) => {
                    setUser({ ...user, name: e.target.value });
                  },
                },
                {
                  title: "Your Phone",
                  value: user.phone,
                  onchange: (e) => {
                    setUser({ ...user, phone: e.target.value });
                  },
                },
                {
                  title: "Your Email",
                  value: user.email,
                  onchange: (e) => {
                    setUser({ ...user, email: e.target.value });
                  },
                },
                {
                  title: "Your Photo",
                  value: user.name,
                  onchange: (e) => {
                    setUser({ ...user, name: e.target.value });
                  },
                },
              ].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="items-center grid mb-2"
                    style={{ gridTemplateColumns: "20% 80%" }}
                  >
                    <p className="font-light text-darkGrey text-sm">
                      {e.title}
                    </p>
                    {e?.title?.includes("Photo") ? (
                      <input
                        type="file"
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-websiteBlue transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-websiteBlue file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-websiteBlue focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-websiteBlue dark:file:text-neutral-100 dark:focus:border-primary"
                      />
                    ) : (
                      <input
                        type="text"
                        value={e?.value}
                        onChange={e?.onchange}
                        className="border block outline-none mb-2 border-lightGrey px-3 py-1.5 rounded-md"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onUpdate}
              className="bg-websiteBlue px-5 py-1.5 text-white mt-6 rounded-md"
            >
              Update Profile
            </button>
          </div>
          {/* <div className="bg-white w-full shadow-lg shadow-lightGrey mt-4 p-3">
            <h1 className="text-darkGrey border-b pb-2 border-b-lightGrey tracking-wide text-lg hover:text-websiteBlue transition-all cursor-pointer">
              Address
            </h1>
            <div className="mt-5">
            </div>
          </div> */}
        </div>
        <RightBar />
      </div>
    </>
  );
};

export default DashboardEdit;
