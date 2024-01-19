"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";

import logo from "@/(main)/Assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { CiLogout, CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Context from "@/Context/Context";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "@/Utils/urls";

const TherapistAdd = ({ params }) => {
  const { id } = params;
  const { therapists, therapistFilter } = useContext(Context);
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
    meeting_url: {
      url: "",
      price: "",
    },
    full_meeting_url: {
      url: "",
      price: "",
    },
    id: "",
  });

  useEffect(() => {
    const therapist = therapistFilter?.therapistsData?.find(
      (e) => e?._id === id
    );
    setTherapist({
      id: therapist?._id,
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
      meeting_url: {
        url: therapist?.meeting_url?.url,
        price: therapist?.meeting_url?.price,
      },
      full_meeting_url: {
        url: therapist?.full_meeting_url?.url,
        price: therapist?.full_meeting_url?.price,
      },
    });
  }, [therapistFilter]);

  const onUpdate = () => {
    axios
      .post(`${BASE_URL}/therapist/update-therapist`, {
        ...therapist,
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
    <div className="overflow-y-auto h-[82vh]">
      <Toaster />
      <div className="px-[3vw] md:px-[1.5vw] py-[3vw]">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg">Therapists settings </h1>
          <Image
            src={therapist?.photo}
            width={10000}
            height={10000}
            className="rounded-full w-[5vw] h-[5vw] object-cover object-center"
          />
        </div>
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
              className="border outline-none text-gray-600 rounded-md ml-9 md:ml-0 px-4 py-1"
            />
          </div>
          <div
            className="grid items-center"
            style={{ gridTemplateColumns: "15% 85%" }}
          >
            <p className="font-light text-[14px]">Therapist Profile Picture</p>
            <input
              className="block w-full text-sm ml-9 md:ml-0 text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
              type="file"
              onChange={(e) => {
                const formData = new FormData();
                formData.append("file", e.target.files[0]);
                formData.append("upload_preset", "upload_photo");
                formData.append("cloud_name", "dpbsogbtr");

                fetch(
                  "https://api.Cloudinary.com/v1_1/dpbsogbtr/image/upload",
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
              className="border outline-none text-gray-600 rounded-md px-4 py-1 ml-9 md:ml-0"
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
              className="border outline-none text-gray-600 rounded-md px-4 py-1 ml-9 md:ml-0"
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
              className="border outline-none text-gray-600 rounded-md px-4 py-1 ml-9 md:ml-0"
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
                  <div
                    className="flex items-center w-full md:ml-0 ml-9 mb-4"
                    key={i}
                  >
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
              <div className="flex items-center md:ml-0 ml-9 w-full mb-4">
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
                    "Behaviour Modifications",
                    "Career Counseling",
                    "Child and Adolescent Counseling",
                    "De-addiction Counseling",
                    "Emotional Distress",
                    "Grief Management and Counseling",
                    "Learning and Developmental Concerns",
                    "Mindfulness Based Therapy",
                    "Mood Related Concerns",
                    "Parent and Family Counseling",
                    "Productivity and Motivation Related Concerns",
                    "Psychometric Testing",
                    "Queer Affirmative Counseling",
                    "Relationship Conflicts",
                    "Self worth and Confidence Related Concerns",
                    "Suicide Prevention",
                    "Other Clinical Disorders",
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
                  className="ml-4 w-[30vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
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
                  <div
                    className="flex items-center ml-9 md:ml-0 w-full mb-4"
                    key={i}
                  >
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
              <div className="flex items-center w-full mb-4 ml-9 md:ml-0">
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
                  className="ml-4 w-[30vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
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
                  <div
                    className="flex items-center ml-9 md:ml-0 w-full mb-4"
                    key={i}
                  >
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
              <div className="flex items-center w-full ml-9 md:ml-0 mb-4">
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
                  className="ml-4 w-[30vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
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
              className="border outline-none text-gray-600 rounded-md px-4 py-2 ml-9 md:ml-0"
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
            <p className="font-light text-[14px]">
              Therapist Meeting Price (40 mins){" "}
            </p>
            <input
              placeholder="Meeting Price"
              type="text"
              value={therapist?.meeting_url?.price}
              onChange={(e) => {
                setTherapist({
                  ...therapist,
                  meeting_url: {
                    ...therapist?.meeting_url,
                    price: e.target.value,
                  },
                });
              }}
              className="border outline-none text-gray-600 rounded-md px-4 py-1 ml-9 md:ml-0"
            />
          </div>
          <div
            className="grid py-5 items-center"
            style={{ gridTemplateColumns: "15% 85%" }}
          >
            <p className="font-light text-[14px]">
              Therapist Meeting Url (40 mins){" "}
            </p>
            <input
              placeholder="Meeting url"
              type="text"
              value={therapist?.meeting_url?.url}
              onChange={(e) => {
                setTherapist({
                  ...therapist,
                  meeting_url: {
                    ...therapist?.meeting_url,
                    url: e.target.value,
                  },
                });
              }}
              className="border outline-none text-gray-600 rounded-md px-4 py-1 ml-9 md:ml-0"
            />
          </div>
          <div
            className="grid py-5 items-center"
            style={{ gridTemplateColumns: "15% 85%" }}
          >
            <p className="font-light text-[14px]">
              Therapist Meeting Price (60 mins){" "}
            </p>
            <input
              placeholder="Meeting Price"
              type="text"
              value={therapist?.full_meeting_url?.price}
              onChange={(e) => {
                setTherapist({
                  ...therapist,
                  full_meeting_url: {
                    ...therapist?.full_meeting_url,
                    price: e.target.value,
                  },
                });
              }}
              className="border outline-none text-gray-600 rounded-md px-4 py-1 ml-9 md:ml-0"
            />
          </div>
          <div
            className="grid py-5 items-center"
            style={{ gridTemplateColumns: "15% 85%" }}
          >
            <p className="font-light text-[14px]">
              Therapist Meeting Url (60 mins){" "}
            </p>
            <input
              placeholder="Meeting url"
              type="text"
              value={therapist?.full_meeting_url?.url}
              onChange={(e) => {
                setTherapist({
                  ...therapist,
                  full_meeting_url: {
                    ...therapist?.full_meeting_url,
                    url: e.target.value,
                  },
                });
              }}
              className="border outline-none text-gray-600 rounded-md px-4 py-1 ml-9 md:ml-0"
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
    </div>
  );
};

export default TherapistAdd;
