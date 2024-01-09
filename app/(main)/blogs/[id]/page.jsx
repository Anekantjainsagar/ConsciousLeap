"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Context from "@/Context/Context";

const Blog2 = ({ params }) => {
  const { id } = params;
  const [blog, setBlog] = useState();
  const { blogs } = useContext(Context);

  useEffect(() => {
    const temp = blogs?.find((e) => {
      return e?._id === id;
    });
    setBlog(temp);
  }, [id, blogs]);

  function createMarkup() {
    return { __html: blog?.description };
  }

  return (
    <div className="mx-auto w-[90vw] md:w-[70vw] py-[1vw]">
      <Image
        src={blog?.image}
        width={100}
        height={100}
        alt="Blog"
        className="mx-auto rounded-md w-full"
      />
      <div className="px-[3vw] md:px-[8vw]">
        <h1 className="text-2xl mt-4 font-bold text-websiteBlue gradientHover cursor-pointer">
          {blog?.title}
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div
          className="p-2 text-[17px]"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  );
};

export default Blog2;
