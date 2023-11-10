"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import {
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineFilter,
  AiOutlineUnorderedList,
  AiOutlineUp,
} from "react-icons/ai";
import { BsCheckLg, BsFillGrid3X3GapFill } from "react-icons/bs";
import image from "../Assets/sagrika.jpeg";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import MemberConsent from "./[name]/schedule/memberConsent";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import { getCookie } from "cookies-next";

const Therapists = () => {
  let sellerHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [showGrid, setShowGrid] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [showLanguages, setShowLanguage] = useState(true);
  const [showExpertise, setShowExpertise] = useState(true);

  const { therapistFilter, therapistSort, setTherapistSort, showPopUpId } =
    useContext(Context);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isConsentFilled, setIsConsentFilled] = useState(false);
  React.useEffect(() => {
    axios
      .post(`${BASE_URL}/consent/check`, {
        token: getCookie("token"),
      })
      .then((res) => {
        setIsConsentFilled(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.innerWidth < 550) {
        setShowFilters(true);
      }
    }
  }, []);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      sellerHeading.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div className="w-full flex pt-6 items-center justify-center flex-col">
      <MemberConsent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id={""} />
      <h1
        ref={sellerHeading}
        className="text-[27px] text-center mt-5 md:mt-0 font-light gradientHover cursor-pointer"
      >
        Our Mindful Therapists
      </h1>
      <p className="text-darkGrey text-center text-lg md:px-0 px-[5vw] mb-12 md:mb-10">
        &quot;Our Mindful Therapists&quot; are the founding pillars of
        consciousleap.
      </p>
      <div className="mt-[3vw] px-[4vw] md:px-[6vw] w-full flex">
        <div
          className={`${
            showFilters
              ? "hidden"
              : "md:hidden block fixed top-[14vw] w-[60vw] right-0 bg-white h-full"
          }`}
        >
          <div className="w-full flex justify-end mb-3 md:mb-0 mt-[2vw] pr-[2vw]">
            <AiOutlineClose
              size={22}
              className="block"
              onClick={(e) => {
                setShowFilters(!showFilters);
              }}
            />
          </div>
          <div
            onClick={() => {
              setShowExpertise(!showExpertise);
            }}
            className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
          >
            <p>Areas of Expertise</p>
            {showExpertise ? <AiOutlineDown /> : <AiOutlineUp />}
          </div>
          <div className={`${showExpertise ? "hidden" : "block"}`}>
            {therapistFilter?.areaOfExpertise?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex items-start text-sm text-darkGrey px-3 py-1"
                >
                  <input
                    type="checkbox"
                    id={e}
                    checked={therapistFilter?.therapistFilters?.expertise?.includes(
                      e
                    )}
                    onChange={(event) => {
                      if (
                        therapistFilter?.therapistFilters?.expertise?.includes(
                          e
                        )
                      ) {
                        // Exist karta h
                        let arr = therapistFilter?.therapistFilters?.expertise;
                        arr.splice(arr.indexOf(e), 1);
                        therapistFilter?.setTherapistFilters({
                          ...therapistFilter?.therapistFilters,
                          expertise: arr,
                        });
                      } else {
                        therapistFilter?.setTherapistFilters({
                          ...therapistFilter?.therapistFilters,
                          expertise: [
                            ...therapistFilter?.therapistFilters?.expertise,
                            e,
                          ],
                        });
                      }
                    }}
                    className="mr-1.5 mt-1 cursor-pointer block"
                  />
                  <label htmlFor={e} className="cursor-pointer">
                    {e}
                  </label>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => {
              setShowLanguage(!showLanguages);
            }}
            className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
          >
            <p>Language</p>
            {showLanguages ? <AiOutlineDown /> : <AiOutlineUp />}
          </div>
          <div className={`${showLanguages ? "hidden" : "block"}`}>
            {therapistFilter?.speaksFilter?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex items-start text-sm text-darkGrey px-3 py-1"
                >
                  <input
                    type="checkbox"
                    id={e}
                    checked={therapistFilter?.therapistFilters?.speaks?.includes(
                      e
                    )}
                    onChange={(event) => {
                      if (
                        therapistFilter?.therapistFilters?.speaks?.includes(e)
                      ) {
                        // Exist karta h
                        let arr = therapistFilter?.therapistFilters?.speaks;
                        arr.splice(arr.indexOf(e), 1);
                        therapistFilter?.setTherapistFilters({
                          ...therapistFilter?.therapistFilters,
                          speaks: arr,
                        });
                      } else {
                        therapistFilter?.setTherapistFilters({
                          ...therapistFilter?.therapistFilters,
                          speaks: [
                            ...therapistFilter?.therapistFilters?.speaks,
                            e,
                          ],
                        });
                      }
                    }}
                    className="mr-1.5 mt-1 cursor-pointer block"
                  />
                  <label htmlFor={e} className="cursor-pointer">
                    {e}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {/* Leftbar showing in the desktop */}
        <div className="md:block hidden w-2/12 mr-1">
          <div
            onClick={() => {
              setShowFilters(!showFilters);
            }}
            className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
          >
            <p>Filter by</p>
            {showFilters ? <AiOutlineDown /> : <AiOutlineUp />}
          </div>
          <div className={`${showFilters ? "hidden" : "block"}`}>
            <div
              onClick={() => {
                setShowExpertise(!showExpertise);
              }}
              className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
            >
              <p>Areas of Expertise</p>
              {showExpertise ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>
            <div className={`${showExpertise ? "hidden" : "block"}`}>
              {therapistFilter?.areaOfExpertise?.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-start text-sm text-darkGrey px-3 py-1"
                  >
                    <input
                      type="checkbox"
                      id={e}
                      checked={therapistFilter?.therapistFilters?.expertise?.includes(
                        e
                      )}
                      onChange={(event) => {
                        if (
                          therapistFilter?.therapistFilters?.expertise?.includes(
                            e
                          )
                        ) {
                          // Exist karta h
                          let arr =
                            therapistFilter?.therapistFilters?.expertise;
                          arr.splice(arr.indexOf(e), 1);
                          therapistFilter?.setTherapistFilters({
                            ...therapistFilter?.therapistFilters,
                            expertise: arr,
                          });
                        } else {
                          therapistFilter?.setTherapistFilters({
                            ...therapistFilter?.therapistFilters,
                            expertise: [
                              ...therapistFilter?.therapistFilters?.expertise,
                              e,
                            ],
                          });
                        }
                      }}
                      className="mr-1.5 mt-1 cursor-pointer block"
                    />
                    <label htmlFor={e} className="cursor-pointer">
                      {e}
                    </label>
                  </div>
                );
              })}
            </div>
            <div
              onClick={() => {
                setShowLanguage(!showLanguages);
              }}
              className="border-b-2 cursor-pointer flex justify-between items-center px-3 py-2.5 font-semibold"
            >
              <p>Language</p>
              {showLanguages ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>
            <div className={`${showLanguages ? "hidden" : "block"}`}>
              {therapistFilter?.speaksFilter?.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-start text-sm text-darkGrey px-3 py-1"
                  >
                    <input
                      type="checkbox"
                      id={e}
                      checked={therapistFilter?.therapistFilters?.speaks?.includes(
                        e
                      )}
                      onChange={(event) => {
                        if (
                          therapistFilter?.therapistFilters?.speaks?.includes(e)
                        ) {
                          // Exist karta h
                          let arr = therapistFilter?.therapistFilters?.speaks;
                          arr.splice(arr.indexOf(e), 1);
                          therapistFilter?.setTherapistFilters({
                            ...therapistFilter?.therapistFilters,
                            speaks: arr,
                          });
                        } else {
                          therapistFilter?.setTherapistFilters({
                            ...therapistFilter?.therapistFilters,
                            speaks: [
                              ...therapistFilter?.therapistFilters?.speaks,
                              e,
                            ],
                          });
                        }
                      }}
                      className="mr-1.5 mt-1 cursor-pointer block"
                    />
                    <label htmlFor={e} className="cursor-pointer">
                      {e}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Displaying the data in right section with that navbar */}
        <div className="w-full md:w-10/12 ml-0 md:ml-3">
          <div className="flex md:flex-row flex-col px-2 items-center">
            <div className="flex items-center md:mb-0 mb-4 w-full">
              <AiOutlineFilter
                size={30}
                className="mr-5 block md:hidden"
                onClick={() => {
                  setShowFilters(!showFilters);
                }}
              />
              <select
                name=""
                id=""
                value={therapistSort}
                onChange={(e) => {
                  setTherapistSort(e.target.value);
                }}
                className="w-full md:w-[15vw] rounded-sm text-darkGrey text-sm border px-2 py-2 outline-none"
              >
                <option className="py-1" value="Sort By">
                  Sort By
                </option>
                <option className="py-1" value="New to Old">
                  New to Old
                </option>
                <option className="py-1" value="Old to New">
                  Old to New
                </option>
                <option className="py-1" value="Ascending">
                  Ascending
                </option>
                <option className="py-1" value="Descending">
                  Descending
                </option>
                <option className="py-1" value="Experience">
                  Experience
                </option>
              </select>
            </div>
            <input
              value={therapistFilter?.therapistFilters?.search}
              onChange={(e) => {
                therapistFilter?.setTherapistFilters({
                  ...therapistFilter?.therapistFilters,
                  search: e.target.value,
                });
              }}
              type="text"
              placeholder="Search"
              className="w-full md:w-[16vw] rounded-sm text-darkGrey text-sm border px-4 ml-0 md:ml-4 py-2 outline-none"
            />
            <div className="hidden md:flex items-center ml-5">
              <BsFillGrid3X3GapFill
                className="text-websiteBlue border p-2 cursor-pointer"
                size={35}
                onClick={() => {
                  setShowGrid(true);
                }}
              />
              <AiOutlineUnorderedList
                className="text-websiteBlue border p-2 cursor-pointer"
                size={35}
                onClick={() => {
                  setShowGrid(false);
                }}
              />
            </div>
          </div>
          <div
            className={`grid ${
              showGrid ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
            } mt-5 gap-x-4 gap-y-6 md:px-0 px-[4vw]`}
          >
            {therapistFilter?.therapistsData
              ?.sort((a, b) => {
                if (therapistSort == "Experience") {
                  let fa = a.experience.toLowerCase(),
                    fb = b.experience.toLowerCase();

                  if (fa < fb) {
                    return 1;
                  }
                  if (fa > fb) {
                    return -1;
                  }
                  return 0;
                } else if (therapistSort == "New to Old") {
                  let fa = new Date(a.date),
                    fb = new Date(b.date);

                  return fa - fb;
                } else if (therapistSort == "Old to New") {
                  let fa = new Date(a.date),
                    fb = new Date(b.date);

                  return fb - fa;
                } else if (therapistSort == "Descending") {
                  let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                  if (fa < fb) {
                    return 1;
                  }
                  if (fa > fb) {
                    return -1;
                  }
                  return 0;
                } else if (therapistSort == "Ascending") {
                  let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                  if (fa < fb) {
                    return -1;
                  }
                  if (fa > fb) {
                    return 1;
                  }
                  return 0;
                }
                return 0;
              })
              ?.map((e, i) => {
                return showGrid ? (
                  <GridBlock
                    data={e}
                    key={i}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                    isConsentFilled={isConsentFilled}
                    setIsConsentFilled={setIsConsentFilled}
                  />
                ) : (
                  <ListBlock
                    data={e}
                    key={i}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                    isConsentFilled={isConsentFilled}
                    setIsConsentFilled={setIsConsentFilled}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridBlock = ({
  data,
  modalIsOpen,
  setIsOpen,
  isConsentFilled,
  setIsConsentFilled,
}) => {
  const history = useRouter();
  const { setShowPopUpId, showPopUpId } = useContext(Context);

  return (
    <div
      className="cursor-pointer"
      onClick={(e) => {
        history.push(`/therapy/${data?._id}`);
      }}
    >
      <div className="md:hidden block rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
        <div className="flex flex-col justify-center items-start py-[4vw] px-[1vw] h-full w-full rounded-xl bg-white">
          <div className="rounded-full mx-auto w-5/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
            <div className="flex md:p-1 h-full w-full rounded-full items-center justify-center bg-white">
              <Image
                src={data?.photo}
                width={1000}
                height={1000}
                alt="Photo of girl"
                className="w-full h-[35vw] object-cover object-center rounded-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-between items-center">
            <div>
              <h1 className="text-xl text-websiteBlue text-center">
                {data?.name}
              </h1>
              <p className="text-darkGrey text-sm text-center">{data?.desc}</p>
            </div>
            <div>
              <h1 className="mt-2 text-center text-base text-websiteBlue">
                Expertise
              </h1>
              <div>
                {data?.expertise?.slice(0, 2)?.map((e) => {
                  return (
                    <li key={e} className="text-sm text-darkGrey">
                      {e}
                    </li>
                  );
                })}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPopUpId(data);
                if (isConsentFilled) {
                  setIsOpen(!modalIsOpen);
                } else {
                  history.push(`/therapy/${data?._id}/schedule`);
                }
              }}
              className="bg-websiteBlue px-5 py-1.5 mt-5 rounded-lg text-white font-semibold text-sm"
            >
              Schedule Session
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex items-center justify-center hidden rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px] h-full hover:scale-105 transition-all">
        <div className="flex items-start py-[3vw] px-[4vw] md:p-[1vw] h-full w-full rounded-xl justify-between bg-white">
          <div className="rounded-full w-5/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
            <div className="flex md:p-1 h-full w-full rounded-full items-center justify-center bg-white">
              <Image
                src={data?.photo}
                width={1000}
                height={1000}
                alt="Photo of girl"
                className="w-full h-[8vw] object-cover object-center rounded-full"
              />
            </div>
          </div>
          <div className="w-7/12 ml-[1vw]">
            <div className="h-[20vh] max-[1280px]:h-[28vh] max-[950px]:h-[32vh]">
              <h1 className="text-xl text-websiteBlue">{data?.name}</h1>
              <p className="text-darkGrey text-sm mt-1">{data?.desc}</p>
              <h1 className="mt-1 text-base text-websiteBlue">Expertise</h1>
              <div className="h-[8vh]">
                {data?.expertise?.slice(0, 2)?.map((e) => {
                  return (
                    <li key={e} className="text-sm text-darkGrey">
                      {e}
                    </li>
                  );
                })}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPopUpId(data);
                if (isConsentFilled) {
                  setIsOpen(!modalIsOpen);
                } else {
                  history.push(`/therapy/${data?._id}/schedule`);
                }
              }}
              className="bg-websiteBlue text-sm px-5 py-1 mt-2 rounded-md text-white hover:scale-105 transition-all font-semibold"
            >
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListBlock = ({
  data,
  modalIsOpen,
  setIsOpen,
  isConsentFilled,
  setIsConsentFilled,
}) => {
  const { setShowPopUpId, showPopUpId } = useContext(Context);
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        history.push(`/therapy/${data?._id}`);
      }}
      className="scale-95 hover:scale-100 transition-all"
    >
      <div className="rounded-xl w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
        <div className="flex items-start py-[3vw] px-[4vw] md:py-[0.75vw] md:px-[2vw] h-full w-full rounded-xl justify-between bg-white">
          <div className="rounded-full w-2/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1px]">
            <div className="flex md:p-1 h-full w-full rounded-full items-center justify-center bg-white">
              <Image
                src={data?.photo}
                width={1000}
                height={1000}
                alt="Photo of girl"
                className="w-full h-[10vw] object-cover object-center rounded-full"
              />
            </div>
          </div>
          <div className="w-[81%] flex justify-between items-center h-[22vh]">
            <div className="w-3/12 h-fit">
              <h1 className="text-xl text-websiteBlue">{data?.name}</h1>
              <p className="text-darkGrey text-sm mt-1">{data?.desc}</p>
            </div>
            <div className="w-5/12 h-fit">
              <h1 className="mt-1 text-base text-websiteBlue">Expertise</h1>
              {data?.expertise?.slice(0, 5).map((e) => {
                return (
                  <li key={e} className="text-sm text-darkGrey">
                    {e}
                  </li>
                );
              })}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPopUpId(data);
                if (isConsentFilled) {
                  setIsOpen(!modalIsOpen);
                } else {
                  history.push(`/therapy/${data?._id}/schedule`);
                }
              }}
              className="bg-websiteBlue w-3/12 py-1.5 rounded-lg text-white font-semibold hover:scale-105 transition-all"
            >
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapists;
