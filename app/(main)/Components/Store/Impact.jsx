"use client";
import React from "react";
import impact1 from "../../Assets/store/impact/Plastic.gif";
import impact2 from "../../Assets/store/impact/co2.gif";
import impact3 from "../../Assets/store/impact/funds.gif";
import impact4 from "../../Assets/store/impact/jobs.gif";
import impact5 from "../../Assets/store/impact/plants.gif";

import icon1 from "../../Assets/store/icons/credit-card.png";
import icon2 from "../../Assets/store/icons/eco-friendly.png";
import icon3 from "../../Assets/store/icons/no-plastic-bottles.png";
import icon4 from "../../Assets/store/icons/nontoxic.png";
import Image from "next/image";

const Impact = () => {
  return (
    <div className="w-full">
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
            value: "Pledge for Climate Action & Switch to Plastic-Free Living",
          },
          {
            image: icon1,
            title: "100% Secure Payment",
            value: "Shop from a wide range of products made by Indian Artisans",
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
              className="flex min-[850px]:flex-row flex-col items-center md:w-full mx-auto w-4/6 justify-between"
            >
              <Image
                src={e?.image}
                alt={"Image"}
                className="w-[20vw] md:w-[5vw]"
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
  );
};

export default Impact;
