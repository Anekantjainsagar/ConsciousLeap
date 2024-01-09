"use client";
import React from "react";

import blog1 from "../../Assets/Blogs/sustain.jpg";
import blog2 from "../../Assets/Blogs/eco.jpg";
import blog3 from "../../Assets/Blogs/green.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TakeAction = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-light w-fit gradientHover cursor-pointer">
        Take Action Today
      </h1>
      <div className="grid md:grid-cols-3 md:gap-y-0 gap-y-5 md:gap-x-8 px-3 mt-3">
        {[
          {
            image: blog1,
            title: "Sustainability: An Essential Pathway to a Brighter Future",
            route: "/blogs/659d6d5bed6275574f68c988",
          },
          {
            image: blog2,
            title:
              "Becoming Eco-Friendly: Simple Steps for Living a More Eco-Friendly Lifestyle",
            route: "/blogs/659d6d9ced6275574f68c9b5",
          },
          {
            image: blog3,
            title: "Green Credit Programme: A step towards a better future",
            route: "/blogs/659d6de0ed6275574f68c9b8",
          },
        ].map((e, i) => {
          return <BlogBlock key={i} data={e} />;
        })}
      </div>
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

export default TakeAction;
