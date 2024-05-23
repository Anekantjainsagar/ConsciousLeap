"use client";
import Context from "@/Context/Context";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import like from "@/(main)/Assets/blog-icons/HeartLight.png";
import likeFilled from "@/(main)/Assets/blog-icons/HeartLightFilled.png";
import comment from "@/(main)/Assets/blog-icons/CommentLight.png";
import share from "@/(main)/Assets/blog-icons/ShareLight.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TitleBlock = ({ title, id, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { login } = useContext(Context);
  const history = useRouter();

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
      <p className="mt-2 text-lg md:text-xl px-1 line-clamp-1 w-9/12 text-newBlue">
        {title}
      </p>
      <div className="w-3/12 pt-1.5 ml-1 flex text-newBlue items-center text-xl justify-between">
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
          {isLiked ? (
            <Image
              className="w-[2vw] cursor-pointer"
              src={likeFilled}
              alt="Like"
            />
          ) : (
            <Image className="w-[2vw] cursor-pointer" src={like} alt="Like" />
          )}
        </div>
        <Image
          onClick={(e) => {
            // e.stopPropagation();
            history.push(`/blogs/${id}`);
          }}
          className="w-[2vw] cursor-pointer"
          src={comment}
          alt="Comment"
        />
        <Image className="w-[2vw] cursor-pointer" src={share} alt="Share" />
      </div>
    </div>
  );
};

export default TitleBlock;
