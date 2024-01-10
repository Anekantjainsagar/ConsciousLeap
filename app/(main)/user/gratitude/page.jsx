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
          Gratitude Journel
        </p>
        <button
          onClick={(e) => {
            history.push("/user/gratitude/add");
          }}
          className="bg-newBlue text-lg px-5 py-1 rounded-xl font-bold text-white"
        >
          Add
        </button>
      </div>
      <div className="h-[50vh] overflow-y-auto">
        <div className="grid grid-cols-4 md:gap-x-0 gap-x-3 md:text-lg py-1.5 text-newBlue font-semibold">
          <p className="text-center my-0 py-0">Today, I am grateful for</p>
          <p className="text-center my-0 py-0">Something I am proud of</p>
          <p className="text-center my-0 py-0">
            Reasons for looking forward to tomorrow
          </p>
          <p className="text-center py-0 my-0">Actions</p>
        </div>
        {login?.gratitude?.map((e, i) => {
          return (
            <div
              key={i}
              onClick={(eve) => {
                history.push(`/user/gratitude/${e?._id}`);
              }}
              className="grid grid-cols-4 mt-2 rounded-md cursor-pointer shadow-md shadow-gray-200 border py-2 items-center text-sm md:text-[17px] font-semibold"
            >
              <p className="text-center py-0 my-0">{e?.proud}</p>
              <p className="text-center py-0 my-0">{e?.tomorrow}</p>
              <p className="text-center py-0 my-0">{e?.gratefulFor}</p>
              <div className="text-center py-0 my-0 flex items-center justify-center">
                <AiOutlineDelete
                  className="text-red-500 bg-red-50 p-2 rounded-full hover:text-white hover:bg-red-500 transition-all"
                  size={35}
                  onClick={(element) => {
                    axios
                      .post(`${BASE_URL}/user/delete-gratitude`, {
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
