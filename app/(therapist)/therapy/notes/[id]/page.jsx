"use client";
import React, { useState, useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiLogout, CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import Context from "@/Context/Context";
import Image from "next/image";

import Navbar from "../../../Components/Utils/Navbar";
import Footer from "../../../Components/Utils/Footer";
import logo from "@/(main)/Assets/logo.png";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";

const NotesApp = ({ params }) => {
  let { id } = params;
  const [showLeftBar, setShowLeftBar] = useState(true);
  const { therapists } = useContext(Context);
  const router = useRouter();

  const [state, setState] = useState({
    name: "",
    age: "",
    date: "",
    occupation: "",
    gender: "",
    relationship: "",
    session: "",
    complaints: {
      complaint1: "",
      complaint2: "",
      complaint3: "",
      complaint4: "",
    },
    notes: "",
    homework: "",
  });

  useEffect(() => {
    if (getCookie("therapist_token")?.length <= 1) {
      router.push("/user/login");
    } else {
      let user = therapists?.therapist?.notes.find((e) => e?._id == id);
      setState({
        name: user?.name,
        age: parseInt(user?.age),
        date: user?.date,
        occupation: user?.occupation,
        gender: user?.gender,
        relationship: user?.relationship,
        session: parseInt(user?.session),
        complaints: {
          complaint1: user?.complaints?.complaint1,
          complaint2: user?.complaints?.complaint2,
          complaint3: user?.complaints?.complaint3,
          complaint4: user?.complaints?.complaint4,
        },
        notes: user?.notes,
        homework: user?.homework,
      });
    }
  }, [therapists, id, router]);

  return (
    <div className="flex">
      <Toaster />
      <div
        className={`${
          showLeftBar ? "w-2/12" : "w-0 hidden"
        } border border-gray-300 h-[100vh] fixed top-0 left-0 bg-veryLightGrey py-4 px-3 flex flex-col items-center`}
      >
        <Image src={logo} alt="Logo" />
        <Image
          src={therapists?.therapist?.photo}
          alt="Image"
          width={1000}
          height={1000}
          className="w-[11.5vw] h-[11.5vw] object-cover object-center rounded-full mt-[4vw]"
        />
        <div className="flex flex-col items-center">
          <p className="mt-1 text-lg">{therapists?.therapist?.name}</p>
          <p className="text-sm text-gray-700 break-words w-[13vw] text-center">
            {therapists?.therapist?.email}
          </p>
        </div>
        <div>
          <div
            onClick={(e) => {
              router.push("/therapy/edit-profile");
            }}
            className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-between items-center rounded-full px-[2vw] py-2">
              <CiSettings size={25} className="mr-3" />
              Edit Profile
            </div>
          </div>
          <div
            onClick={(e) => {
              router.push("/");
              therapists.setIsTherapistLogin(false);
              deleteCookie("therapist_token");
            }}
            className="rounded-full w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-center items-center rounded-full px-[2vw] py-2">
              <CiLogout size={25} className="mr-3" />
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className={`${showLeftBar ? "w-10/12 ml-[16.6%]" : "w-full"}`}>
        <Navbar showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />
        <div className="w-full bg-gradient-to-r h-fit from-[#c7ccdd] py-[5vh] via-[#ddb7b5] to-[#c8dbd9]">
          <div className="bg-white rounded-[45px] h-full py-4 px-7 flex flex-col items-center relative mx-[5vh]">
            <div className="w-full">
              <div className="flex items-center cursor-pointer w-fit">
                <FaArrowLeft size={25} />
                <p className="ml-2 text-lg font-semibold">Back to files</p>
              </div>
            </div>
            <h1 className="text-3xl mt-3 text-newBlue">
              Therapy Session Notes
            </h1>
            <div className="w-full mt-3">
              <p className="text-xl mb-3">Client&apos;s Info:</p>
              <div className="flex items-center mb-2 justify-between">
                <div className="w-1/2 mr-5 flex items-center justify-between text-lg">
                  <p>Name:</p>
                  <input
                    value={state?.name}
                    onChange={(e) => {
                      setState({ ...state, name: e.target.value });
                    }}
                    type="text"
                    className="border w-6/12 outline-none px-3 py-0.5 rounded-lg"
                  />
                </div>
                <div className="w-1/2 flex items-center justify-between text-lg">
                  <p>Date:</p>
                  <input
                    value={state?.date}
                    onChange={(e) => {
                      setState({ ...state, date: e.target.value });
                    }}
                    type="date"
                    className="border w-6/12 outline-none px-3 py-0.5 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2 justify-between">
                <div className="w-1/2 mr-5 flex items-center justify-between text-lg">
                  <p>Age:</p>
                  <input
                    value={state?.age}
                    onChange={(e) => {
                      setState({ ...state, age: e.target.value });
                    }}
                    type="number"
                    className="border w-6/12 outline-none px-3 py-0.5 rounded-lg"
                  />
                </div>
                <div className="w-1/2 flex items-center justify-between text-lg">
                  <p>Gender:</p>
                  <input
                    value={state?.gender}
                    onChange={(e) => {
                      setState({ ...state, gender: e.target.value });
                    }}
                    type="text"
                    className="border w-6/12 outline-none px-3 py-0.5 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2 justify-between">
                <div className="w-1/2 mr-5 flex items-center justify-between text-lg">
                  <p>Relationship status:</p>
                  <input
                    type="text"
                    value={state?.relationship}
                    onChange={(e) => {
                      setState({ ...state, relationship: e.target.value });
                    }}
                    className="border w-6/12 outline-none px-3 py-0.5 rounded-lg"
                  />
                </div>
                <div className="w-1/2 flex items-center justify-between text-lg">
                  <p>Session number:</p>
                  <input
                    type="number"
                    value={state?.session}
                    onChange={(e) => {
                      setState({ ...state, session: e.target.value });
                    }}
                    className="border w-6/12 outline-none px-3 py-0.5 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2 justify-between">
                <div className="w-1/2 mr-5 flex items-center justify-between text-lg">
                  <p>Occupation:</p>
                  <input
                    type="text"
                    value={state?.occupation}
                    onChange={(e) => {
                      setState({ ...state, occupation: e.target.value });
                    }}
                    className="border w-6/12 outline-none px-3 py-0.5 rounded-lg"
                  />
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
            <div className="text-lg w-full">
              <h1 className="">Presenting Complaints:</h1>
              <div className="px-2">
                {[
                  {
                    value: state?.complaints?.complaint1,
                    onChange: (e) => {
                      setState({
                        ...state,
                        complaints: {
                          ...state.complaints,
                          complaint1: e.target.value,
                        },
                      });
                    },
                  },
                  {
                    value: state?.complaints?.complaint2,
                    onChange: (e) => {
                      setState({
                        ...state,
                        complaints: {
                          ...state.complaints,
                          complaint2: e.target.value,
                        },
                      });
                    },
                  },
                  {
                    value: state?.complaints?.complaint3,
                    onChange: (e) => {
                      setState({
                        ...state,
                        complaints: {
                          ...state.complaints,
                          complaint3: e.target.value,
                        },
                      });
                    },
                  },
                  {
                    value: state?.complaints?.complaint4,
                    onChange: (e) => {
                      setState({
                        ...state,
                        complaints: {
                          ...state.complaints,
                          complaint4: e.target.value,
                        },
                      });
                    },
                  },
                ].map((e, i) => {
                  return (
                    <div key={i} className="flex mb-2 items-end">
                      <p className="mr-2 mb-1">{i + 1}.</p>
                      <input
                        value={e?.value}
                        onChange={e?.onChange}
                        type="text"
                        className="w-full border-b border-b-black outline-none px-2 mb-2"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="text-lg w-full">
              <h1 className="">Main Thoughts & Notes:</h1>
              <textarea
                className="w-full px-3 py-1 outline-none border border-black rounded-lg"
                cols="20"
                rows="5"
                value={state?.notes}
                onChange={(e) => {
                  setState({ ...state, notes: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="text-lg w-full">
              <h1 className="">Homework Given:</h1>
              <textarea
                className="w-full px-3 py-1 outline-none border border-black rounded-lg"
                cols="20"
                rows="5"
                value={state?.homework}
                onChange={(e) => {
                  setState({ ...state, homework: e.target.value });
                }}
              ></textarea>
            </div>
            <div
              onClick={(e) => {
                if (!state?.name || !state?.notes) {
                  toast.error("Please fill all the details");
                } else {
                  axios
                    .post(`${BASE_URL}/therapist/note/edit`, {
                      ...state,
                      note_id: id,
                      token: getCookie("therapist_token"),
                    })
                    .then((res) => {
                      console.log(res);
                      if (res.status == 200) {
                        therapists.getTherapist();
                        toast.success("Note updated successful");
                        setState({
                          name: "",
                          age: "",
                          date: "",
                          occupation: "",
                          gender: "",
                          relationship: "",
                          session: "",
                          complaints: {
                            complaint1: "",
                            complaint2: "",
                            complaint3: "",
                            complaint4: "",
                          },
                          notes: "",
                          homework: "",
                        });
                        router.push("/therapy/notes");
                      }
                    });
                }
              }}
              className="flex items-end justify-end w-full"
            >
              <button className="bg-newBlue text-white px-4 text-lg font-semibold mt-2 py-1 rounded-lg">
                Update
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotesApp;
