"use client";
import Context from "@/Context/Context";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Blogs = () => {
  const history = useRouter();
  const { blogs } = useContext(Context);

  return (
    <div className="w-full flex px-4 items-center justify-center flex-col">
      <h1 className="mb-2 text-3xl font-light gradientHover cursor-pointer">
        Conscious Blogs
      </h1>
      <p className="font-light md:w-full w-[85%] text-center text-darkGrey">
        We practice what we preach, and our blogs reflect our mindful journey at
        consciousleap.
        <br /> Through our blogs, we aim to spread awareness of the importance
        of mental health and its impact on micro and macro levels.
        <span
          className="text-websiteBlue cursor-pointer"
          onClick={(e) => {
            history.push("/faqs");
          }}
        >
          Learn More
        </span>
      </p>
      <div className="grid md:grid-cols-3 md:gap-y-8 gap-y-5 md:gap-x-8 px-2 md:px-12 mt-5">
        {blogs.map((e, i) => {
          return <BlogBlock data={e} key={i} />;
        })}
      </div>
    </div>
  );
};

const BlogBlock = ({ data }) => {
  const history = useRouter();

  return (
    <div
      className="cursor-pointer border rounded-lg p-2 shadow-md transition-all hover:scale-105"
      onClick={(e) => {
        e.preventDefault();
        history.push(`/blogs/${data?._id}`);
      }}
    >
      <Image
        src={data?.image}
        width={10000}
        height={10000}
        alt="Image"
        className="w-full h-[60vw] md:h-[16vw] object-cover rounded-lg object-center"
      />
      <TitleBlock title={data?.title} id={data?._id} likes={data?.likes} />
    </div>
  );
};

export const TitleBlock = ({ title, id, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { login } = useContext(Context);

  useEffect(() => {
    if (login?._id) {
      let data = likes.find((e) => e == login?._id);
      if (data) {
        setIsLiked(true);
      }
    }
  }, [id, login?._id]);

  return (
    <div className="flex items-center justify-between">
      {/* <Toaster /> */}
      <p className="mt-2 text-lg md:text-xl px-1 line-clamp-1 w-9/12 text-newBlue">
        {title}
      </p>
      <div className="w-3/12 pt-1.5 ml-5 pr-2 flex text-newBlue items-center text-xl justify-between">
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (login?._id) {
              axios
                .post(`${BASE_URL}/admin/toggle-like/${id}`, {
                  userId: login?._id,
                })
                .then((res) => {
                  if (res.status == 200) {
                    setIsLiked(!isLiked);
                  }
                });
            } else {
              toast.error("Please login first");
            }
          }}
        >
          {!isLiked ? <FaRegHeart /> : <FaHeart />}
        </div>
        <FaRegComment />
        <IoMdShare />
      </div>
    </div>
  );
};

export default Blogs;
