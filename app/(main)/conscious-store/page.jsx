"use client";
import React, { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import storeHero from "../Assets/store/storehero.jpg";
import Image from "next/image";
import Line2 from "../Components/Lines/Line2";

import {
  AiOutlineDown,
  AiOutlineUnorderedList,
  AiOutlineUp,
} from "react-icons/ai";
import RangeSlider from "rsuite/RangeSlider";
import "rsuite/dist/rsuite.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import TakeAction from "../Components/Store/TakeAction";
import Impact from "../Components/Store/Impact";
import Context from "@/Context/Context";
import StoreBlock from "./StoreBlock";

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
  const context = useContext(Context);
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
        <div className="md:w-9/12 w-full ml-[1vw]">
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
                <option className="py-1" value="Ascending">
                  Ascending
                </option>
                <option className="py-1" value="Descending">
                  Descending
                </option>
              </select>
            </div>
            <div className="hidden md:flex items-center ml-5">
              <input
                type="text"
                onChange={(e) => {
                  context?.productM.setProductSearch(e.target.value);
                }}
                value={context?.productM?.productSearch}
                placeholder="Search here"
                className={"outline-none border px-4 py-2 mr-3 rounded-sm"}
              />
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
            {context?.productM?.productData
              ?.sort((a, b) => {
                if (sortStore === "Price High to Low") {
                  let fa = a.price,
                    fb = b.price;

                  if (fa < fb) {
                    return 1;
                  }
                  if (fa > fb) {
                    return -1;
                  }
                  return 0;
                } else if (sortStore == "Price Low to High") {
                  let fa = a.price,
                    fb = b.price;

                  if (fa < fb) {
                    return -1;
                  }
                  if (fa > fb) {
                    return 1;
                  }
                  return 0;
                } else if (sortStore === "Descending") {
                  let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                  if (fa < fb) {
                    return 1;
                  }
                  if (fa > fb) {
                    return -1;
                  }
                  return 0;
                } else if (sortStore == "Ascending") {
                  let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                  if (fa < fb) {
                    return -1;
                  }
                  if (fa > fb) {
                    return 1;
                  }
                  return 0;
                } else if (sortStore === "Oldest") {
                  let fa = new Date(a.date),
                    fb = new Date(b.date);

                  return fb - fa;
                } else if (sortStore === "Newest") {
                  let fa = new Date(a.date),
                    fb = new Date(b.date);

                  return fa - fb;
                }
                return 0;
              })
              ?.map((e, i) => {
                return <StoreBlock key={i} data={e} />;
              })}
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

export default Store;
