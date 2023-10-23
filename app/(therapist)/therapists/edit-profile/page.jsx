"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";

import Navbar from "../../Components/Utils/Navbar";
import Footer from "../../Components/Utils/Footer";

import logo from "@/(main)/Assets/logo.png";

import sagrika from "@/(main)/Assets/sagrika.jpeg";

import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Context from "@/Context/Context";
import axios from "axios";
import { getCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "@/Utils/urls";

const EditProfile = () => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const router = useRouter();
  const { therapists } = useContext(Context);
  const [experties, setExperties] = useState("Select expertise");
  const [speaks, setSpeaks] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [therapist, setTherapist] = useState({
    name: "",
    phone: "",
    email: "",
    desc: "",
    experience: "",
    expertise: [],
    qualifications: [],
    speaks: [],
    about: "",
    photo: "",
    meeting_url: "",
  });

  useEffect(() => {
    const { therapist } = therapists;
    setTherapist({
      name: therapist?.name,
      phone: therapist?.phone,
      email: therapist?.email,
      desc: therapist?.desc,
      experience: therapist?.experience,
      expertise: therapist?.expertise,
      qualifications: therapist?.qualifications,
      speaks: therapist?.speaks,
      about: therapist?.about,
      photo: therapist?.photo,
      meeting_url: therapist?.meeting_url,
    });
  }, []);

  const onUpdate = () => {
    axios
      .post(`${BASE_URL}/therapist/update-therapist`, {
        ...therapist,
        token: getCookie("therapist_token"),
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("Details updated successfully");
          therapists.getTherapist();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex ">
      <Toaster />
      <div
        className={`${
          showLeftBar ? "w-2/12" : "w-0 hidden"
        } border border-gray-300 h-[100vh] fixed top-0 left-0 bg-veryLightGrey py-4 px-3 flex flex-col items-center`}
      >
        <Image src={logo} alt="Logo" />
        <Image
          src={therapist?.photo}
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
              router.push("/therapists/dashboard");
            }}
            className="rounded-lg w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-between items-center rounded-lg px-[2vw] py-2">
              <AiOutlineHome size={25} className="mr-3" />
              Dashboard
            </div>
          </div>
          <div
            onClick={(e) => {
              router.push("/therapists/edit-profile");
            }}
            className="rounded-lg w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px] mt-3"
          >
            <div className="bg-veryLightGrey flex font-medium cursor-pointer justify-between items-center rounded-lg px-[2vw] py-2">
              <CiSettings size={25} className="mr-3" />
              Edit Profile
            </div>
          </div>
        </div>
      </div>
      <div className={`${showLeftBar ? "w-10/12 ml-[16.6%]" : "w-full"}`}>
        <Navbar showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />
        <div className="px-[1.5vw] py-[3vw]">
          <h1 className="text-lg">
            Therapists settings{" "}
            <Link
              href={`/therapists/${therapists?.therapist?._id}`}
              target="_blank"
            >
              <span className="text-base text-gray-500 hover:underline transition-all cursor-pointer">
                (Visit Profile)
              </span>
            </Link>
          </h1>
          <div className="px-3">
            <div
              className="grid py-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Therapist Name *</p>
              <input
                placeholder="Name"
                type="text"
                value={therapist?.name}
                onChange={(e) => {
                  setTherapist({ ...therapist, name: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">
                Therapist Profile Picture
              </p>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                onChange={(e) => {
                  const formData = new FormData();
                  formData.append("file", e.target.files[0]);
                  formData.append("upload_preset", "upload_photo");
                  formData.append("cloud_name", "dfk09gblw");

                  console.log(formData);

                  fetch(
                    "https://api.Cloudinary.com/v1_1/dfk09gblw/image/upload",
                    {
                      method: "POST",
                      body: formData,
                    }
                  )
                    .then((res) => res.json())
                    .then((res) => {
                      setTherapist({ ...therapist, photo: res.url });
                    })
                    .catch((err) => {});
                }}
              />
            </div>
            <div
              className="grid pt-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Therapist Phone</p>
              <input
                type="text"
                value={therapist?.phone}
                placeholder="Phone"
                onChange={(e) => {
                  setTherapist({ ...therapist, phone: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid pt-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Short Description *</p>
              <input
                type="text"
                value={therapist?.desc}
                placeholder="Short description"
                onChange={(e) => {
                  setTherapist({ ...therapist, desc: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid pt-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Experience *</p>
              <input
                type="text"
                value={therapist?.experience}
                placeholder="Experience"
                onChange={(e) => {
                  setTherapist({ ...therapist, experience: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Expertise *</p>
              <div>
                {therapist?.expertise?.map((e, i) => {
                  return (
                    <div className="flex items-center w-full mb-4" key={i}>
                      <input
                        type="text"
                        value={e}
                        onChange={(val) => {
                          let updatedExpertise = therapist.expertise;
                          let index = updatedExpertise.indexOf(e);
                          updatedExpertise[index] = val.target.value;
                          setTherapist({
                            ...therapist,
                            expertise: updatedExpertise,
                          });
                        }}
                        className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                      />
                      <div className="pl-4">
                        <AiOutlineClose
                          className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                          size={35}
                          onClick={(event) => {
                            let updatedExpertise = therapist?.expertise;
                            let pos = updatedExpertise.indexOf(e);
                            updatedExpertise.splice(pos, 1);
                            setTherapist({
                              ...therapist,
                              expertise: updatedExpertise,
                            });
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center w-full mb-4">
                  <select
                    name=""
                    id=""
                    value={experties}
                    placeholder="Experties"
                    onChange={(e) => {
                      setExperties(e.target.value);
                    }}
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  >
                    {[
                      "Select expertise",
                      "Anxiety",
                      "Behaviour modifications",
                      "Career ",
                      "Child and Adolescent Counseling",
                      "Deaddiction counseling",
                      "Emotional distress",
                      "Grief Management and Counseling",
                      "Learning and developmental concerns",
                      "Mindfulness based therapy",
                      "Mood related concerns",
                      "Parent and family Counseling",
                      "Productivity and motivation related concerns",
                      "Psychometric testing",
                      "Queer affirmative counseling",
                      "Relationship conflicts",
                      "Self worth and confidence related concerns",
                      "Suicide prevention",
                      "Other Clinical disorders",
                    ].map((e) => {
                      return (
                        <option value={e} key={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                  <div
                    onClick={(event) => {
                      if (experties != "Select expertise") {
                        if (therapist?.expertise.includes(experties)) {
                          toast.error("Experty already exists");
                        } else {
                          setTherapist({
                            ...therapist,
                            expertise: [...therapist.expertise, experties],
                          });
                        }
                        setExperties("Select expertise");
                      } else {
                        toast.error("Please select a value");
                      }
                    }}
                    className="ml-4 w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                  >
                    Add New
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Qualifications *</p>
              <div>
                {therapist?.qualifications?.map((e, i) => {
                  return (
                    <div className="flex items-center w-full mb-4" key={i}>
                      <input
                        type="text"
                        value={e}
                        onChange={(val) => {
                          let arr = therapist.qualifications;
                          let index = arr.indexOf(e);
                          arr[index] = val.target.value;
                          setTherapist({
                            ...therapist,
                            qualifications: arr,
                          });
                        }}
                        className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                      />
                      <div className="pl-4">
                        <AiOutlineClose
                          className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                          size={35}
                          onClick={(event) => {
                            let arr = therapist?.qualifications;
                            let pos = arr.indexOf(e);
                            arr.splice(pos, 1);
                            setTherapist({
                              ...therapist,
                              qualifications: arr,
                            });
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    placeholder="Qualication"
                    value={qualifications}
                    onChange={(e) => {
                      setQualifications(e.target.value);
                    }}
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div
                    onClick={(event) => {
                      setTherapist({
                        ...therapist,
                        qualifications: [
                          ...therapist.qualifications,
                          qualifications,
                        ],
                      });
                      setQualifications("");
                    }}
                    className="ml-4 w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                  >
                    Add New
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Speaks *</p>
              <div>
                {therapist?.speaks?.map((e, i) => {
                  return (
                    <div className="flex items-center w-full mb-4" key={i}>
                      <input
                        type="text"
                        value={e}
                        onChange={(val) => {
                          let arr = therapist.speaks;
                          let index = arr.indexOf(e);
                          arr[index] = val.target.value;
                          setTherapist({
                            ...therapist,
                            speaks: arr,
                          });
                        }}
                        className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                      />
                      <div className="pl-4">
                        <AiOutlineClose
                          className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                          size={35}
                          onClick={(event) => {
                            let arr = therapist?.speaks;
                            let pos = arr.indexOf(e);
                            arr.splice(pos, 1);
                            setTherapist({
                              ...therapist,
                              speaks: arr,
                            });
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center w-full mb-4">
                  <input
                    type="text"
                    value={speaks}
                    placeholder="Speaks"
                    onChange={(e) => {
                      setSpeaks(e.target.value);
                    }}
                    className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                  />
                  <div
                    onClick={(event) => {
                      setTherapist({
                        ...therapist,
                        speaks: [...therapist.speaks, speaks],
                      });
                      setSpeaks("");
                    }}
                    className="ml-4 w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                  >
                    Add New
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid pt-5 items-start"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">About Therapist*</p>
              <textarea
                className="border outline-none text-gray-600 rounded-md px-4 py-2"
                rows={3}
                cols={3}
                value={therapist?.about}
                placeholder="About"
                onChange={(e) => {
                  setTherapist({ ...therapist, about: e.target.value });
                }}
              ></textarea>
            </div>
            <div
              className="grid py-5 items-center"
              style={{ gridTemplateColumns: "15% 85%" }}
            >
              <p className="font-light text-[14px]">Therapist Meeting Url </p>
              <input
                placeholder="Meeting url"
                type="text"
                value={therapist?.meeting_url}
                onChange={(e) => {
                  setTherapist({ ...therapist, meeting_url: e.target.value });
                }}
                className="border outline-none text-gray-600 rounded-md px-4 py-1"
              />
            </div>
          </div>
          <button
            onClick={onUpdate}
            className="ml-4 w-[9vw] flex justify-center items-center py-1 float-right my-4 bg-green-500 text-white rounded-lg cursor-pointer "
          >
            Update Details
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditProfile;
