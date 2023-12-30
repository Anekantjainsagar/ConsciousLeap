"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Product from "./[id]/modal";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import { getCookie } from "cookies-next";
import Context from "@/Context/Context";

const StoreBlock = ({ data, showGrid }) => {
  const context = useContext(Context);
  const [modalIsOpen, setIsOpen] = useState(false);
  const history = useRouter();

  return (
    data?._id &&
    (showGrid ? (
      <>
        <div className="absolute">
          <Product
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            data={data}
          />
        </div>
        <div
          className="relative hover:scale-105 cursor-pointer min-h-fit transition-all"
          onClick={(e) => {
            history.push(`/conscious-store/${data?._id}`);
          }}
        >
          <div className="absolute z-30 top-10 py-1.5 left-0 text-red-600 bg-white flex items-center justify-center rounded-r-full pr-2 ml-1 shadow-lg shadow-gray-400">
            <p className="mr-1 text-xs">OFF </p>
            <p className="bg-red-600 text-white text-xs p-1 flex items-center justify-center mt-0 rounded-full">
              5%
            </p>
          </div>
          <div className="rounded-md bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px]">
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (!context?.login?.wishlist?.includes(data?._id)) {
                  axios
                    .post(`${BASE_URL}/user/add-to-wishlist`, {
                      token: getCookie("token"),
                      item_id: data?._id,
                    })
                    .then((res) => {
                      if (res.status === 200) {
                        context?.getUser();
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
                history.push("/user/wishlist");
              }}
              className="bg-white p-1.5 rounded-full right-4 top-4 absolute shadow-sm shadow-gray-500 hover:scale-110 transition-all"
            >
              <AiOutlineHeart size={20} />
            </div>
            <div className="flex p-3 md:p-2 h-full w-full flex-col rounded-md items-center justify-center bg-white">
              <Image
                src={data?.images[0]}
                width={100}
                height={100}
                alt="Tshirt"
                className="rounded-md w-full"
              />
              <h1 className="text-lg w-full font-normal pt-2">
                {typeof window != undefined &&
                window.innerWidth < 1000 &&
                window.innerWidth > 768
                  ? data?.name.slice(0, 10) +
                    (data?.name?.length > 10 ? "..." : "")
                  : data?.name}
              </h1>
              <p className="text-websiteBlue w-full pl-1 font-bold py-1">
                <span className="text-gray-400 line-through">
                  INR {data?.discountPrice}
                </span>{" "}
                INR {data?.price}
              </p>
              <div className="w-full flex items-center pt-0.5 pl-1">
                {[...Array(data?.rating)]?.map((e, i) => {
                  return <AiFillStar className="text-websiteBlue" key={i} />;
                })}
                {[...Array(5 - data?.rating)]?.map((e, i) => {
                  return <AiFillStar color="#b3b3b3" key={i} />;
                })}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!modalIsOpen);
                }}
                className="bg-websiteBlue text-white w-full flex items-center justify-center mt-2 font-medium py-2 rounded-md"
              >
                <IoCartOutline size={26} className="mr-3" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="absolute">
          <Product
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            data={data}
          />
        </div>
        <div
          className="relative flex hover:scale-105 cursor-pointer min-h-fit w-full transition-all"
          onClick={(e) => {
            history.push(`/conscious-store/${data?._id}`);
          }}
        >
          <div className="absolute z-30 top-10 py-1.5 left-0 text-red-600 bg-white flex items-center justify-center rounded-r-full pr-2 ml-1 shadow-lg shadow-gray-400">
            <p className="mr-1 text-xs">OFF </p>
            <p className="bg-red-600 text-white text-xs p-1 flex items-center justify-center mt-0 rounded-full">
              5%
            </p>
          </div>
          <div className="rounded-md w-full bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px]">
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (!context?.login?.wishlist?.includes(data?._id)) {
                  axios
                    .post(`${BASE_URL}/user/add-to-wishlist`, {
                      token: getCookie("token"),
                      item_id: data?._id,
                    })
                    .then((res) => {
                      if (res.status === 200) {
                        context?.getUser();
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
                history.push("/user/wishlist");
              }}
              className="bg-white p-1.5 rounded-full right-4 top-4 absolute shadow-sm shadow-gray-500 hover:scale-110 transition-all"
            >
              <AiOutlineHeart size={20} />
            </div>
            <div className="flex p-3 md:p-2 h-full w-full rounded-md items-center justify-center bg-white">
              <Image
                src={data?.images[0]}
                width={100}
                height={100}
                alt="Tshirt"
                className="rounded-md w-[20vw]"
              />
              <div className="w-[50vw] ml-5">
                <h1 className="text-lg w-full font-normal pt-2">
                  {data?.name}
                </h1>
                <p className="text-websiteBlue w-full pl-1 font-bold py-1">
                  <span className="text-gray-400 line-through">
                    INR {data?.discountPrice}
                  </span>{" "}
                  INR {data?.price}
                </p>
                <div className="w-full flex items-center pt-0.5 pl-1">
                  {[...Array(data?.rating)]?.map((e, i) => {
                    return <AiFillStar className="text-websiteBlue" key={i} />;
                  })}
                  {[...Array(5 - data?.rating)]?.map((e, i) => {
                    return <AiFillStar color="#b3b3b3" key={i} />;
                  })}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!modalIsOpen);
                }}
                className="bg-websiteBlue text-white w-[20vw] flex items-center justify-center mt-2 font-medium py-2 rounded-md"
              >
                <IoCartOutline size={26} className="mr-3" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    ))
  );
};

export default StoreBlock;
