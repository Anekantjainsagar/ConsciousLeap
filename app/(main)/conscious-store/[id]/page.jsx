"use client";
import Impact from "@/(main)/Components/Store/Impact";
import TakeAction from "@/(main)/Components/Store/TakeAction";
import React, { useState } from "react";

import tshirt from "@/(main)/Assets/store/tshirt.jpg";
import Image from "next/image";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Line2 from "@/(main)/Components/Lines/Line2";
import { useRouter } from "next/navigation";
import Product from "./modal";
import { IoCartOutline } from "react-icons/io5";

const ProductPage = () => {
  const [size, setSize] = useState("S");
  const [fabric, setFabric] = useState("Cotton");
  const [quantity, setQuantity] = useState(1);
  const [showDesc, setShowDesc] = useState(true);

  return (
    <div className="px-[6vw]">
      <div className="flex items-start mb-[2vw] justify-between">
        <div className="w-[49.5%] border flex items-start justify-between">
          <div className="w-[15%] px-4">
            <div className="w-full h-[10vh] cursor-pointer border border-websiteBlue">
              <Image
                src={tshirt}
                alt="Tshirt"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="w-[85%]">
            <Image src={tshirt} alt="Tshirt" />
          </div>
        </div>
        <div className="w-[49.5%] border px-5 py-3">
          <h1 className="text-xl font-bold hover:text-websiteBlue transition-all cursor-pointer">
            Tshirt - Black
          </h1>
          <div className="flex items-center justify-between">
            <p className="w-[25%] text-gray-400 font-light">Share:</p>
            <div className="flex items-center">
              <AiOutlineMail
                size={30}
                className="bg-gray-400 p-1.5 cursor-pointer mr-2 text-white rounded-full"
              />
              <AiOutlineTwitter
                size={30}
                className="bg-gray-400 p-1.5 cursor-pointer mr-2 text-white rounded-full"
              />
              <FaFacebookF
                size={30}
                className="bg-gray-400 p-1.5 cursor-pointer mr-2 text-white rounded-full"
              />
              <FaLinkedinIn
                size={30}
                className="bg-gray-400 p-1.5 cursor-pointer mr-2 text-white rounded-full"
              />
              <AiOutlineWhatsApp
                size={30}
                className="bg-gray-400 p-1.5 cursor-pointer mr-2 text-white rounded-full"
              />
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Price:</p>
            <p className="mt-0 ml-3 text-3xl">
              <span className="text-websiteBlue font-bold">AED95.00</span>{" "}
              <span className="text-base">/Pc</span>
            </p>
          </div>
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Size:</p>
            <div className="mt-0 ml-3 flex items-center">
              {["S", "M", "L", "XL"].map((e, i) => {
                return (
                  <p
                    key={i}
                    className={`mt-0 border ${
                      size == e ? "border-websiteBlue" : ""
                    } px-3 py-1 mr-2 cursor-pointer`}
                    onClick={(event) => {
                      setSize(e);
                    }}
                  >
                    {e}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Fabric:</p>
            <div className="mt-0 ml-3 flex items-center">
              {["Chiffon", "Cotton"].map((e, i) => {
                return (
                  <p
                    key={i}
                    className={`mt-0 border px-3 py-1 mr-2 cursor-pointer ${
                      e == fabric ? "border-websiteBlue" : ""
                    }`}
                    onClick={(event) => {
                      setFabric(e);
                    }}
                  >
                    {e}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Color:</p>
            <div className="mt-0 ml-3 flex items-center">
              <div className="border border-black p-[4px] rounded-md">
                <div className="bg-black p-4 rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Quantity:</p>
            <div className="mt-0 ml-3 flex items-center">
              <span
                onClick={(e) => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="px-3 cursor-pointer rounded-full bg-gray-100 text-2xl"
              >
                -
              </span>
              <span className="mx-5 text-lg">{quantity}</span>
              <span
                onClick={(e) => {
                  setQuantity(quantity + 1);
                }}
                className="px-3 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 text-2xl"
              >
                +
              </span>
              <p className="ml-3">(100 available)</p>
            </div>
          </div>
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Total Price:</p>
            <div className="mt-0 ml-3 text-3xl">
              <span className="text-websiteBlue font-semibold">
                AED{95 * quantity}.00
              </span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            <button className="w-full text-center py-2 rounded-sm bg-websiteBlue text-white font-semibold ">
              Add to Cart
            </button>
            <button className="w-full text-center py-2 rounded-sm bg-websiteBlue text-white font-semibold ">
              Buy it Now
            </button>
            <button className="w-full flex items-center justify-center text-center py-2 rounded-sm bg-websiteBlue text-white font-semibold ">
              <AiFillHeart className="mr-2" size={20} /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div className="flex items-start justify-between">
        <div className="w-[24%]">
          <h1 className="text-lg mb-1 font-semibold">Top Selling Products</h1>
          <hr className="my-0" />
          <div className="h-[55vh] overflow-y-auto">
            <Block />
            <Block />
            <Block />
            <Block />
          </div>
        </div>
        <div className="w-[74%]">
          <div className="w-full mb-[2vw]">
            <div className="flex text-lg font-semibold items-center">
              <p
                onClick={(e) => {
                  setShowDesc(!showDesc);
                }}
                className={`w-fit px-3 mr-3 cursor-pointer text-center ${
                  !showDesc ? "border-b-2 border-websiteBlue" : ""
                }`}
              >
                Description
              </p>
              <p
                onClick={(e) => {
                  setShowDesc(!showDesc);
                }}
                className={`mt-0 w-fit px-3 mr-3 text-center cursor-pointer ${
                  showDesc ? "border-b-2 border-websiteBlue" : ""
                }`}
              >
                Review
              </p>
            </div>
            {showDesc ? (
              <div className="mt-2 text-xl text-center h-[5vh] pt-2">
                There have been no reviews for this product yet.
              </div>
            ) : (
              <div className="mt-2 text-xl text-center h-[5vh] pt-2">
                {/* There have been no reviews for this product yet. */}
              </div>
            )}
          </div>
          <div className="w-full">
            <h1 className="text-lg font-semibold">Related products</h1>
            <hr className="my-3" />
            <div className="grid grid-cols-3 gap-x-5">
              <StoreBlock />
              <StoreBlock />
              <StoreBlock />
            </div>
          </div>
        </div>
      </div>
      <Line2 />
      <TakeAction />
      <Impact />
    </div>
  );
};

const Block = () => {
  return (
    <div className="flex items-center my-3 justify-start cursor-pointer transition-all hover:shadow-md shadow-gray-500">
      <Image src={tshirt} alt="Tshirt" className="w-4/12" />
      <div>
        <p className="font-bold">Tshirt - Black</p>
        <div className="w-full flex items-center pt-0.5 pl-1">
          <AiFillStar color="#b3b3b3" />
          <AiFillStar color="#b3b3b3" />
          <AiFillStar color="#b3b3b3" />
          <AiFillStar color="#b3b3b3" />
          <AiFillStar color="#b3b3b3" />
        </div>
        <p className="text-websiteBlue mt-1 font-semibold">AED95.00</p>
      </div>
    </div>
  );
};

const StoreBlock = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const history = useRouter();

  return (
    <div
      className="relative hover:scale-105 cursor-pointer transition-all"
      onClick={(e) => {
        history.push(`/conscious-store/tshirt`);
      }}
    >
      <Product modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className="absolute z-30 top-10 py-1.5 left-0 text-red-600 bg-white flex items-center justify-center rounded-r-full pr-2 ml-1 shadow-lg shadow-gray-400">
        <p className="mr-1 text-xs">OFF </p>
        <p className="bg-red-600 text-white text-xs p-1 flex items-center justify-center mt-0 rounded-full">
          5%
        </p>
      </div>
      <div className="rounded-md bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px]">
        <div className="bg-white p-1.5 rounded-full right-4 top-4 absolute shadow-sm shadow-gray-500 hover:scale-110 transition-all">
          <AiOutlineHeart size={20} />
        </div>
        <div className="flex p-3 md:p-2 h-full w-full flex-col rounded-md items-center justify-center bg-white">
          <Image src={tshirt} alt="Tshirt" className="rounded-md" />
          <h1 className="text-lg w-full font-normal pt-2 pl-3">
            Tshirt - Black
          </h1>
          <p className="text-websiteBlue w-full pl-1 font-bold py-1">
            <span className="text-gray-400 line-through">AED500.00</span>{" "}
            AED475.00
          </p>
          <div className="w-full flex items-center pt-0.5 pl-1">
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
            <AiFillStar color="#b3b3b3" />
          </div>
          <button
            onClick={(e) => {
              setIsOpen(!modalIsOpen);
            }}
            className="bg-websiteBlue text-white w-full flex items-center justify-center mt-2 font-medium py-2 rounded-md hover:scale-105 transition-all"
          >
            <IoCartOutline size={26} className="mr-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
