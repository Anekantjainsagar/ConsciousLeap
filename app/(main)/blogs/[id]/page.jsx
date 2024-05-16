"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Context from "@/Context/Context";
import like from "@/(main)/Assets/blog-icons/HeartLight.png";
import comment from "@/(main)/Assets/blog-icons/CommentLight.png";
import share from "@/(main)/Assets/blog-icons/ShareLight.png";

const Blog2 = ({ params }) => {
  const { id } = params;
  const [blog, setBlog] = useState();
  const { blogs, getBlogs } = useContext(Context);

  useEffect(() => {
    getBlogs();
  }, []);

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
        <NewBlock blog={blog} />
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

const NewBlock = ({ blog }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { login } = useContext(Context);

  useEffect(() => {
    if (login?._id) {
      let data = blog?.likes.find((e) => e == login?._id);
      if (data) {
        setIsLiked(true);
      }
    }
  }, [blog?._id, login?._id]);

  return (
    <div>
      <div className="flex items-center">
        <Image className="w-[2vw] mr-2 cursor-pointer" src={like} alt="Like" />
        <Image
          className="w-[2vw] mr-2 cursor-pointer"
          src={comment}
          alt="Comment"
        />
        <Image
          className="w-[2vw] mr-2 cursor-pointer"
          src={share}
          alt="Share"
        />
      </div>
      <p className="pl-2 mt-3">{blog?.likes?.length} Likes</p>
    </div>
  );
};

export default Blog2;
