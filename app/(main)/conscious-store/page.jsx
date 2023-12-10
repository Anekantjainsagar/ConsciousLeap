"use client";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import storeHero from "../Assets/store/storehero.jpg";
import Image from "next/image";
import Line2 from "../Components/Lines/Line2";

import { useRouter } from "next/navigation";
import {
  AiFillStar,
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiOutlineUp,
} from "react-icons/ai";
import RangeSlider from "rsuite/RangeSlider";
import "rsuite/dist/rsuite.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import tshirt from "../Assets/store/tshirt.jpg";
import { IoCartOutline } from "react-icons/io5";
import Product from "./[id]/modal";

import TakeAction from "../Components/Store/TakeAction";
import Impact from "../Components/Store/Impact";

let items = [
  {
    name: "consciousleap Vendibles",
    route: "/conscious-store",
  },
  {
    name: "Oneness Vendibles",
    route: "/conscious-store",
  },
  {
    name: "Conscious Being",
    route: "/conscious-store",
  },
  {
    name: "Conscious Edibles",
    route: "/conscious-store",
  },
  {
    name: "Conscious Healing",
    route: "/conscious-store",
  },
  {
    name: "Conscious Kids",
    route: "/conscious-store",
  },
  {
    name: "Conscious Living",
    route: "/conscious-store",
  },
  {
    name: "Conscious Teens",
    route: "/conscious-store",
  },
  {
    name: "Conscious Travel",
    route: "/conscious-store",
  },
];

const Store = () => {
  const [showCategory, setShowCategory] = useState(true);
  const [firstValue, setFirstValue] = useState(2);
  const [secondValue, setSecondValue] = useState(10);
  const [sortStore, setSortStore] = useState("Sort By");
  const [showGrid, setShowGrid] = useState(false);
  function handleRanges(value) {
    setFirstValue(value[0]);
    setSecondValue(value[1]);
  }

  return (
    <div className="flex flex-col items-center pt-[3vw]">
      <Toaster />
      <h1 className="text-3xl font-light text-center gradientHover cursor-pointer">
        Conscious Store
      </h1>
      <p className="mt-4 mx-auto w-10/12 leading-relaxed text-center px-4">
        At consciousleap, we don’t just believe but act to make a positive
        impact by sharing a part of our profits towards making our world a
        better place than what we received for future generations, not just to
        sustain but thrive mindfully.
      </p>
      <Image
        src={storeHero}
        alt={"Store hero"}
        className="my-5 mx-auto md:w-11/12"
      />
      <div className="flex w-full px-[5vw] py-[4vw] items-start justify-between">
        <div className="md:block hidden w-3/12 mr-[1vw] ">
          <div
            className="flex items-center cursor-pointer border-b pb-2"
            onClick={(e) => {
              setShowCategory(!showCategory);
            }}
          >
            <p className="font-bold mr-4">Categories</p>
            {!showCategory ? (
              <AiOutlineDown size={20} />
            ) : (
              <AiOutlineUp size={20} />
            )}
          </div>
          <div className="my-3">
            {showCategory &&
              items?.map((e, i) => {
                return <p key={i}>{e?.name}</p>;
              })}
          </div>
          <div className="border-y py-3">
            <p className="font-bold mb-3">Price range</p>
            <RangeSlider defaultValue={[2, 10]} onChange={handleRanges} />
            <p className="mt-2 px-1 w-full flex items-center justify-between text-lg">
              <span>{firstValue}</span>
              <span>{secondValue}</span>
            </p>
          </div>
        </div>
        <div className="md:w-9/12 ml-[1vw]">
          <h1 className="text-xl hover:text-newBlue transition-all cursor-pointer">
            Conscious Vendibles
          </h1>
          <div className="flex md:flex-row flex-col px-2 items-center">
            <div className="flex items-center md:mb-0 mb-4 w-full mt-3">
              <select
                name=""
                id=""
                // value={sortStore}
                // onChange={(e) => {
                //   setSortStore(e.target.value);
                // }}
                className="w-full md:w-[13vw] mr-4 rounded-sm text-darkGrey text-sm border px-2 py-2 outline-none"
              >
                {["All Brands"].map((e, i) => {
                  return (
                    <option className="py-1" value={e} key={i}>
                      {e}
                    </option>
                  );
                })}
              </select>
              <select
                name=""
                id=""
                value={sortStore}
                onChange={(e) => {
                  setSortStore(e.target.value);
                }}
                className="w-full md:w-[13vw] rounded-sm text-darkGrey text-sm border px-2 py-2 outline-none"
              >
                <option className="py-1" value="Sort By">
                  Sort By
                </option>
                <option className="py-1" value="Newest">
                  Newest
                </option>
                <option className="py-1" value="Oldest">
                  Oldest
                </option>
                <option className="py-1" value="Price Low to High">
                  Price Low to High
                </option>
                <option className="py-1" value="Price High to Low">
                  Price High to Low
                </option>
              </select>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3">
            <StoreBlock />
            <StoreBlock />
            <StoreBlock />
            <StoreBlock />
          </div>
        </div>
      </div>
      <Line2 />
      <div className="w-full px-[5vw]">
        <TakeAction />
        <Impact />
      </div>
    </div>
  );
};

const StoreBlock = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const history = useRouter();

  return (
    <div
      className="relative hover:scale-105 cursor-pointer transition-all"
      onClick={(e) => {
        history.push(`/conscious-store/tshirt`);
      }}
    >
      <Product modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className="absolute z-30 top-10 py-1.5 left-0 text-red-600 bg-white flex items-center justify-center rounded-r-full pr-2 ml-1 shadow-lg shadow-gray-400">
        <p className="mr-1 text-xs">OFF </p>
        <p className="bg-red-600 text-white text-xs p-1 flex items-center justify-center mt-0 rounded-full">
          5%
        </p>
      </div>
      <div className="rounded-md bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px]">
        <div className="bg-white p-1.5 rounded-full right-4 top-4 absolute shadow-sm shadow-gray-500 hover:scale-110 transition-all">
          <AiOutlineHeart size={20} />
        </div>
        <div className="flex p-3 md:p-2 h-full w-full flex-col rounded-md items-center justify-center bg-white">
          <Image src={tshirt} alt="Tshirt" className="rounded-md" />
          <h1 className="text-lg w-full font-normal pt-2 pl-3">
            Tshirt - Black
          </h1>
          <p className="text-websiteBlue w-full pl-1 font-bold py-1">
            <span className="text-gray-400 line-through">AED500.00</span>{" "}
            AED475.00
          </p>
          <div className="w-full flex items-center pt-0.5 pl-1">
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
          </div>
          <button
            onClick={(e) => {
              setIsOpen(!modalIsOpen);
            }}
            className="bg-websiteBlue text-white w-full flex items-center justify-center mt-2 font-medium py-2 rounded-md hover:scale-105 transition-all"
          >
            <IoCartOutline size={26} className="mr-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
