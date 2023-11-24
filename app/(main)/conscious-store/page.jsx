import React from "react";
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

const Store = () => {
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
        className="my-5 mx-auto w-11/12"
      />
      <Line2 />
      <div className="w-full px-[5vw]">
        <h1 className="text-3xl font-light w-fit gradientHover cursor-pointer">
          Take Action Today
        </h1>
        <div className="grid grid-cols-3 gap-x-8 px-3 mt-3">
          {[
            {
              image: blog1,
              title:
                "Sustainability: An Essential Pathway to a Brighter Future",
            },
            {
              image: blog2,
              title:
                "Becoming Eco-Friendly: Simple Steps for Living a More Eco-Friendly Lifestyle",
            },
            {
              image: blog3,
              title: "Green Credit Programme: A step towards a better future",
            },
          ].map((e, i) => {
            return <BlogBlock key={i} data={e} />;
          })}
        </div>
        <h1 className="text-3xl font-light mt-[3vw] w-fit gradientHover cursor-pointer">
          Our Impact
        </h1>
        <div className="grid grid-cols-5 px-[14vw] mt-3 gap-x-24">
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
                <Image src={e?.image} alt={"Image"} />
                <p className="text-center mt-2">{e?.title}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-4 px-[1vw] mt-3 gap-x-24">
          {[
            {
              image: icon1,
              title: "Kgs of Plastic Saved",
            },
            { image: icon2, title: "Kgs of CO² Offset / Year" },
            {
              image: icon3,
              title: "Trees Planted in India",
            },
            {
              image: icon4,
              title: "Jobs Created in Rural India",
            },
          ].map((e, i) => {
            return (
              <div key={i}>
                <Image src={e?.image} alt={"Image"} />
                <p className="text-center mt-2">{e?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const BlogBlock = ({ data }) => {
  return (
    <div className="cursor-pointer">
      <Image src={data?.image} alt="Image" className="w-full" />
      <p className="mt-2 text-xl px-1 text-newBlue">{data?.title}</p>
    </div>
  );
};

export default Store;
