"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";

const ThingsMyself = () => {
  const history = useRouter();
  const { login, getUser } = useContext(Context);

  return (
    <div className="my-[9vw] mx-[5vw] px-5 py-3 border rounded-xl shadow-lg shadow-gray-300 bg-white h-[60vh] flex flex-col justify-between">
      <Toaster />
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-newBlue gradientHover cursor-pointer">
          Self Love Journel
        </p>
        <button
          onClick={(e) => {
            history.push("/user/things-myself/add");
          }}
          className="bg-newBlue text-lg px-5 py-1 rounded-xl font-bold text-white"
        >
          Add
        </button>
      </div>
      <div className="h-[50vh] overflow-y-auto">
        <div className="grid grid-cols-4 text-lg py-1.5 text-newBlue font-semibold">
          <p className="text-center my-0 py-0">Self-care List</p>
          <p className="text-center my-0 py-0">Things I like about myself</p>
          <p className="text-center my-0 py-0">
            Things I want to tell my past self
          </p>
          <p className="text-center py-0 my-0">Actions</p>
        </div>
        {login?.thingsMyself?.map((e, i) => {
          return (
            <div
              key={i}
              onClick={(e) => {
                history.push(`/user/things-myself/${i + 1}`);
              }}
              className="grid grid-cols-4 mt-2 rounded-md cursor-pointer shadow-md shadow-gray-200 border py-2 items-center text-[17px] font-semibold"
            >
              <p className="text-center py-0 my-0">{e?.selfCare}</p>
              <p className="text-center py-0 my-0">{e?.thingsMyself}</p>
              <p className="text-center py-0 my-0">{e?.thingsPast}</p>
              <div className="text-center py-0 my-0 flex items-center justify-center">
                <AiOutlineDelete
                  className="text-red-500 bg-red-50 p-2 rounded-full hover:text-white hover:bg-red-500 transition-all"
                  size={35}
                  onClick={(element) => {
                    axios
                      .post(`${BASE_URL}/user/delete-thingsMyself`, {
                        userId: login?._id,
                        noteId: e?._id,
                      })
                      .then((res) => {
                        if (res.status === 200) {
                          getUser();
                          toast.success("Deleted successfully");
                        }
                      });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThingsMyself;
