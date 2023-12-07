"use client";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import storeHero from "../Assets/store/storehero.jpg";
import Image from "next/image";
import Line2 from "../Components/Lines/Line2";

import blog1 from "../Assets/Blogs/sustain.jpg";
import blog2 from "../Assets/Blogs/eco.jpg";
import blog3 from "../Assets/Blogs/green.jpg";

import impact1 from "../Assets/store/impact/Plastic.gif";
import impact2 from "../Assets/store/impact/co2.gif";
import impact3 from "../Assets/store/impact/funds.gif";
import impact4 from "../Assets/store/impact/jobs.gif";
import impact5 from "../Assets/store/impact/plants.gif";

import icon1 from "../Assets/store/icons/credit-card.png";
import icon2 from "../Assets/store/icons/eco-friendly.png";
import icon3 from "../Assets/store/icons/no-plastic-bottles.png";
import icon4 from "../Assets/store/icons/nontoxic.png";
import { useRouter } from "next/navigation";
import {
  AiOutlineDown,
  AiOutlineFilter,
  AiOutlineUnorderedList,
  AiOutlineUp,
} from "react-icons/ai";
import RangeSlider from "rsuite/RangeSlider";
import "rsuite/dist/rsuite.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import tshirt from '../Assets/store/1 (2).jpg'

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
  const [showCategory, setShowCategory] = useState(false);
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
        <div className="w-3/12 mr-[1vw] ">
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
        <div className="w-9/12 ml-[1vw]">
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
          <div>
            <StoreBlock />
          </div>
        </div>
      </div>
      <Line2 />
      <div className="w-full px-[5vw]">
        <h1 className="text-3xl font-light w-fit gradientHover cursor-pointer">
          Take Action Today
        </h1>
        <div className="grid md:grid-cols-3 md:gap-y-0 gap-y-5 md:gap-x-8 px-3 mt-3">
          {[
            {
              image: blog1,
              title:
                "Sustainability: An Essential Pathway to a Brighter Future",
              route: "/blogs/sustainability",
            },
            {
              image: blog2,
              title:
                "Becoming Eco-Friendly: Simple Steps for Living a More Eco-Friendly Lifestyle",
              route: "/blogs/eco-friendly",
            },
            {
              image: blog3,
              title: "Green Credit Programme: A step towards a better future",
              route: "/blogs/green-credit-programme",
            },
          ].map((e, i) => {
            return <BlogBlock key={i} data={e} />;
          })}
        </div>
        <h1 className="text-3xl font-light mt-[8vw] md:mt-[3vw] w-fit gradientHover cursor-pointer">
          Our Impact
        </h1>
        <div className="grid md:grid-cols-5 px-[14vw] mt-3 md:gap-y-0 gap-y-10 md:gap-x-24">
          {[
            {
              image: impact1,
              title: "Kgs of Plastic Saved",
            },
            { image: impact2, title: "Kgs of CO² Offset / Year" },
            {
              image: impact5,
              title: "Trees Planted in India",
            },
            {
              image: impact4,
              title: "Jobs Created in Rural India",
            },
            { image: impact3, title: "Funds for Climate Action" },
          ].map((e, i) => {
            return (
              <div key={i}>
                <Image
                  src={e?.image}
                  alt={"Image"}
                  className="w-1/2 md:w-full mx-auto"
                />
                <p className="text-center mt-2">{e?.title}</p>
              </div>
            );
          })}
        </div>
        <div className="grid md:grid-cols-4 px-[1vw] mt-[8vw] md:mt-16 md:gap-y-0 gap-y-6 md:gap-x-24">
          {[
            {
              image: icon3,
              title: "Plastic-Free Shopping",
              value:
                "Pledge for Climate Action & Switch to Plastic-Free Living",
            },
            {
              image: icon1,
              title: "100% Secure Payment",
              value:
                "Shop from a wide range of products made by Indian Artisans",
            },
            {
              image: icon4,
              title: "Cruelty-Free + Chemical-Free",
              value: "Ethically Made in India by Earth-Loving Entrepreneurs",
            },
            {
              image: icon2,
              title: "100% Earth-Friendly Products",
              value: "Least Carbon Impact, Good for the Earth, Good for You",
            },
          ].map((e, i) => {
            return (
              <div
                key={i}
                className="flex items-center md:w-full mx-auto w-4/6 justify-between"
              >
                <Image
                  src={e?.image}
                  alt={"Image"}
                  className="w-[20vw] md:w-[4vw]"
                />
                <div className="ml-3">
                  <p className="font-bold">{e?.title}</p>
                  <p className="mt-0 text-xs">{e?.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const StoreBlock = () => {
  return (
    <div>
      <Image src={tshirt} alt="Tshirt" />
    </div>
  );
};

const BlogBlock = ({ data }) => {
  const history = useRouter();

  return (
    <div
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        history.push(data?.route);
      }}
    >
      <Image src={data?.image} alt="Image" className="w-full" />
      <p className="mt-2 text-lg md:text-xl px-1 text-newBlue">{data?.title}</p>
    </div>
  );
};

export default Store;
