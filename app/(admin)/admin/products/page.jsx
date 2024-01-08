"use client";
import Context from "@/Context/Context";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

const Products = () => {
  const [sortStore, setSortStore] = useState("Sort By");
  const { productM } = useContext(Context);
  const history = useRouter();

  useEffect(() => {
    if (!getCookie("admin_token")) {
      history.push("/user/login");
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="bg-white border rounded-md pt-4 overflow-y-auto h-[82vh] shadow-md shadow-gray-200">
        <div className="text-black flex items-center justify-between px-4 border-b pb-2">
          <p className="font-bold">
            All Products ({productM?.productData?.length})
          </p>
          <div>
            <select
              value={sortStore}
              onChange={(e) => {
                setSortStore(e.target.value);
              }}
              className="w-full md:w-[13vw] rounded-sm text-darkGrey text-sm border px-2 py-2 outline-none"
            >
              {[
                "Sort By",
                "Newest",
                "Oldest",
                "Price Low to High",
                "Price High to Low",
                "Ascending",
                "Descending",
              ].map((e, i) => {
                return (
                  <option value={e} key={i}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="px-2 pt-2">
          {productM?.productData
            ?.sort((a, b) => {
              if (sortStore === "Price High to Low") {
                let fa = a.price,
                  fb = b.price;

                if (fa < fb) {
                  return 1;
                }
                if (fa > fb) {
                  return -1;
                }
                return 0;
              } else if (sortStore == "Price Low to High") {
                let fa = a.price,
                  fb = b.price;

                if (fa < fb) {
                  return -1;
                }
                if (fa > fb) {
                  return 1;
                }
                return 0;
              } else if (sortStore === "Descending") {
                let fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

                if (fa < fb) {
                  return 1;
                }
                if (fa > fb) {
                  return -1;
                }
                return 0;
              } else if (sortStore == "Ascending") {
                let fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

                if (fa < fb) {
                  return -1;
                }
                if (fa > fb) {
                  return 1;
                }
                return 0;
              } else if (sortStore === "Oldest") {
                let fa = new Date(a.date),
                  fb = new Date(b.date);

                return fb - fa;
              } else if (sortStore === "Newest") {
                let fa = new Date(a.date),
                  fb = new Date(b.date);

                return fa - fb;
              }
              return 0;
            })
            .map((e, i) => {
              return <Product data={e} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

const Product = ({ data }) => {
  return (
    <div className="rounded-md flex items-center justify-between mb-3 cursor-pointer shadow-sm shadow-gray-200 p-2">
      <div className="flex items-center">
        <Image
          src={data?.images[0]}
          width={100}
          height={100}
          alt="Image"
          className="w-[5vw] object-cover object-center"
        />
        <div className="py-1 ml-3">
          <p className="text-black font-bold">{data?.name}</p>
          <div className="flex items-center">
            <p className="mt-0 text-newBlue text-xs font-bold">
              INR {data?.price}
            </p>
            <p className="mt-0 ml-2 text-gray-700 line-through text-xs font-bold">
              INR {data?.discountPrice}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <AiOutlineEye
          className="text-oceanGreen bg-lightOceanGreen p-2 rounded-full hover:text-white hover:bg-oceanGreen transition-all mr-3"
          size={35}
        />
        <AiOutlineEdit
          className="text-blue-500 bg-blue-50 p-2 rounded-full hover:text-white hover:bg-blue-500 transition-all mr-3"
          size={35}
        />
        <AiOutlineDelete
          className="text-red-500 bg-red-50 p-2 rounded-full hover:text-white hover:bg-red-500 transition-all mr-3"
          size={35}
        />
      </div>
    </div>
  );
};

export default Products;
