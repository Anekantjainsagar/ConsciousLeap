"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Context from "@/Context/Context";
import like from "@/(main)/Assets/blog-icons/HeartLight.png";
import comment from "@/(main)/Assets/blog-icons/CommentLight.png";
import share from "@/(main)/Assets/blog-icons/ShareLight.png";
import likeFilled from "@/(main)/Assets/blog-icons/HeartLightFilled.png";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import logo from "@/(main)/Assets/dashboard-user-image.jpeg";
import { LuDot } from "react-icons/lu";
import toast from "react-hot-toast";
import { format } from "timeago.js";
import ShareModel from "./model/Share";

const Blog2 = ({ params }) => {
  const { id } = params;
  const [blog, setBlog] = useState();
  const { blogs, getBlogs } = useContext(Context);
  const [showPopup, setShowPopup] = useState(false);

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
      <ShareModel showSubscribe={showPopup} setShowSubscribe={setShowPopup} />
      <Image
        src={blog?.image}
        width={100}
        height={100}
        alt="Blog"
        className="mx-auto rounded-md w-full"
      />
      <div className="px-[3vw] md:px-[8vw]">
        <NewBlock
          blog={blog}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
        />
        <h1 className="text-2xl mt-4 font-bold text-websiteBlue gradientHover cursor-pointer">
          {blog?.title}
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div
          className="p-2 text-[17px]"
          dangerouslySetInnerHTML={createMarkup()}
        />
        <CommentBlock blog={blog} />
      </div>
    </div>
  );
};

const NewBlock = ({ blog, setShowPopup, showPopup }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { login } = useContext(Context);

  useEffect(() => {
    if (login?._id) {
      let data = blog?.likes.find((e) => e == login?._id);
      if (data) {
        setIsLiked(true);
      }
    }
    setLikeCount(blog?.likes?.length);
  }, [blog?._id, login?._id]);

  return (
    <div className="mt-3">
      <div className="flex items-center">
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (login?._id) {
              axios
                .post(`${BASE_URL}/admin/toggle-like/${blog?._id}`, {
                  userId: login?._id,
                })
                .then((res) => {
                  if (isLiked) {
                    setLikeCount(likeCount - 1);
                  } else {
                    setLikeCount(likeCount + 1);
                  }
                  if (res.status == 200) {
                    setIsLiked(!isLiked);
                  }
                });
            } else {
              toast.error("Please login first");
            }
          }}
        >
          {isLiked ? (
            <Image
              className="w-[7vw] md:w-[2vw] mr-2 cursor-pointer"
              src={likeFilled}
              alt="Like"
            />
          ) : (
            <Image
              className="w-[7vw] md:w-[2vw] mr-2 cursor-pointer"
              src={like}
              alt="Like"
            />
          )}
        </div>
        <Image
          className="w-[7vw] md:w-[2vw] mr-2 cursor-pointer"
          src={comment}
          alt="Comment"
        />
        <Image
          className="w-[7vw] md:w-[2vw] mr-2 cursor-pointer"
          src={share}
          alt="Share"
          onClick={(e) => {
            e.preventDefault();
            setShowPopup(!showPopup);
          }}
        />
      </div>
      <p className="md:pl-2 pl-1 mt-3">
        {likeCount} Likes and {blog?.comments?.length} Comments
      </p>
    </div>
  );
};

const CommentBlock = ({ blog }) => {
  return (
    <div className="mt-5">
      <h3 id="#comment" className="text-2xl font-semibold text-websiteBlue">Comments</h3>
      <div className="m-1">
        <InputBlock blog={blog} />
        <div>
          {blog?.comments?.map((e, i) => {
            return <BlockCode data={e} key={i} />;
          })}
        </div>
        {/* <button className="w-full bg-websiteBlue text-white py-2 font-semibold mt-3 rounded-md">
          Load more..
        </button> */}
      </div>
    </div>
  );
};

const InputBlock = ({ blog }) => {
  const [input, setInput] = useState("");
  const { login, getBlogs } = useContext(Context);

  return (
    <div className="border-2 border-websiteBlue p-2 rounded-md">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          className="rounded-full w-[6.5vw] md:w-[3vw]"
        />
        <h3 className="text-websiteBlue font-normal text-lg ml-2">
          {login?.name}
        </h3>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter text here.."
        className="border-b border-b-websiteBlue outline-none w-full px-2 mt-3 pb-0.5"
      />
      <div className="flex items-end justify-end">
        <button
          onClick={(e) => {
            if (input.trim().length > 0) {
              axios
                .post(`${BASE_URL}/admin/add-comment/${blog?._id}`, {
                  text: input,
                  postedBy: login?.name,
                })
                .then((res) => {
                  if (res.status == 200) {
                    setInput("");
                    getBlogs();
                  }
                });
            } else {
              toast.error("Enter some text");
            }
          }}
          className="bg-websiteBlue mt-2 px-4 py-1 rounded-md text-white"
        >
          Comment
        </button>
      </div>
    </div>
  );
};

const BlockCode = ({ data }) => {
  return (
    <div className="mt-3 mb-1 p-2 rounded-md">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="rounded-full w-[6.5vw] md:w-[3vw]" />
        <h3 className="text-websiteBlue font-normal text-lg ml-2">
          {data?.postedBy}
        </h3>
        <p className="flex items-center text-gray-400">
          <LuDot className="mx-1" />
          {format(data?.date)}
        </p>
      </div>
      <p className="border-b border-b-websiteBlue outline-none w-full text-websiteBlue mt-1 px-1 pb-0.5">
        {data?.text}
      </p>
    </div>
  );
};

export default Blog2;
