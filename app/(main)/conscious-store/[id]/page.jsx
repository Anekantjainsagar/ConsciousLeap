"use client";
import Impact from "@/(main)/Components/Store/Impact";
import TakeAction from "@/(main)/Components/Store/TakeAction";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  AiFillBell,
  AiFillHeart,
  AiFillStar,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Line2 from "@/(main)/Components/Lines/Line2";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import StoreBlock from "../StoreBlock";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import { getCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";

const ProductPage = ({ params }) => {
  const history = useRouter();
  const context = useContext(Context);
  const [size, setSize] = useState("S");
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [fabric, setFabric] = useState("Cotton");
  const [showDesc, setShowDesc] = useState(true);

  useEffect(() => {
    axios.post(`${BASE_URL}/product/get/${params?.id}`).then((res) => {
      setProduct(res.data);
    });
  }, [params]);

  return (
    <div className="px-[4vw] md:px-[6vw]">
      <Toaster />
      <div className="flex md:flex-row flex-col items-start md:pt-2 mb-[2vw] justify-between">
        <div className="w-full md:mb-0 mb-5 md:w-[49.5%] border flex md:flex-row flex-col-reverse items-start justify-between">
          <div className="md:w-[15%] py-3 md:py-0 px-3 md:px-4">
            <div className="w-full min-[900px]:h-[3vh] min-[1040px]:h-[10vh] cursor-pointer border border-websiteBlue">
              <Image
                src={product?.images[0]}
                alt="Tshirt"
                width={100}
                height={100}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="w-full md:w-[85%]">
            <Image
              src={product?.images[0]}
              alt="Tshirt"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="md:w-[49.5%] border px-5 py-3">
          <h1 className="text-xl font-bold hover:text-websiteBlue transition-all cursor-pointer">
            {product?.name}
          </h1>
          {/* <div className="flex items-center md:mt-0 mt-3 justify-between">
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
          </div> */}
          <hr className="my-5" />
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Price:</p>
            <p className="mt-0 ml-3 text-3xl">
              <span className="text-websiteBlue font-bold">
                INR {product?.price}
              </span>{" "}
              <span className="text-base">/Pc</span>
            </p>
          </div>
          {product?.size?.length > 0 && (
            <div className="flex items-center mb-5 justify-start">
              <p className="w-[25%] text-gray-400 font-light">Size:</p>
              <div className="mt-0 ml-3 flex items-center">
                {product?.size.map((e, i) => {
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
          )}
          {product?.febric?.length > 0 && (
            <div className="flex items-center mb-5 justify-start">
              <p className="w-[25%] text-gray-400 font-light">Fabric:</p>
              <div className="mt-0 ml-3 flex items-center">
                {product?.febric.map((e, i) => {
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
          )}
          {product?.colors?.length > 0 && (
            <div className="flex items-center mb-5 justify-start">
              <p className="w-[25%] text-gray-400 font-light">Color:</p>
              <div className="mt-0 ml-3 flex items-center">
                <div className="border border-black p-[4px] rounded-md">
                  <div className="bg-black p-4 rounded-md"></div>
                </div>
              </div>
            </div>
          )}
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
              <p className="ml-3">({product?.available} available)</p>
            </div>
          </div>
          <div className="flex items-center mb-5 justify-start">
            <p className="w-[25%] text-gray-400 font-light">Total Price:</p>
            <div className="mt-0 ml-3 text-3xl">
              <span className="text-websiteBlue font-semibold">
                INR {product?.price * quantity}
              </span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-3">
            <button
              onClick={(e) => {
                context?.cart?.setCartData([
                  ...context?.cart?.cartData,
                  {
                    name: product?.name,
                    _id: product?._id,
                    price: product?.price,
                    quantity: quantity,
                    images: product?.images,
                    size,
                    fabric,
                  },
                ]);
                history.push("/cart/1");
              }}
              className="w-full text-center py-2 md:text-base text-xs rounded-md md:rounded-sm bg-websiteBlue text-white font-semibold "
            >
              Add to Cart
            </button>
            <button
              onClick={(e) => {
                context?.cart?.setCartData([
                  ...context?.cart?.cartData,
                  {
                    name: product?.name,
                    _id: product?._id,
                    price: product?.price,
                    quantity: quantity,
                    images: product?.images,
                    size,
                    fabric,
                  },
                ]);
                history.push("/cart/1");
              }}
              className="w-full text-center py-2 md:text-base text-xs rounded-md md:rounded-sm bg-websiteBlue text-white font-semibold "
            >
              Buy it Now
            </button>
            <button
              onClick={(e) => {
                if (!context?.login?.wishlist?.includes(product?._id)) {
                  axios
                    .post(`${BASE_URL}/user/add-to-wishlist`, {
                      token: getCookie("token"),
                      item_id: product?._id,
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
              className="w-full flex items-center justify-center text-center py-2 md:text-base text-xs rounded-md md:rounded-sm bg-websiteBlue text-white font-semibold "
            >
              <AiFillHeart className="mr-2" size={20} /> Add to Wishlist
            </button>

          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div className="flex md:flex-row flex-col-reverse items-start justify-between">
        <div className="w-full md:w-[24%] md:mt-0 mt-8">
          <h1 className="text-lg mb-1 font-semibold">Top Selling Products</h1>
          <hr className="my-0" />
          <div className="md:h-[55vh] overflow-y-auto">
            {context?.productM?.productData?.map((e, i) => {
              return <Block data={e} key={i} />;
            })}
          </div>
        </div>
        <div className="md:w-[74%]">
          <div className="w-full mb-[2vw]">
            <div className="flex text-lg font-semibold items-center">
              <p
                onClick={(e) => {
                  setShowDesc(!showDesc);
                }}
                className={`mt-0 w-fit px-3 mr-3 text-center cursor-pointer ${
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
              <div className="mt-2 md:text-xl text-center md:h-[5vh] pt-2">
                There have been no reviews for this product yet.
              </div>
            ) : (
              <div className="mt-2 md:text-xl text-center md:h-[5vh] w-full pt-2">
                There have been no description for this product yet.
              </div>
            )}
          </div>
          <div className="w-full">
            <h1 className="text-lg font-semibold">Related products</h1>
            <hr className="my-3" />
            <div className="grid md:px-0 md:mt-0 mt-7 px-[5vw] md:grid-cols-3 gap-x-5">
              {context?.productM?.productData?.slice(0, 3)?.map((e, i) => {
                return <StoreBlock data={e} key={i} showGrid={true} />;
              })}
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

const Block = ({ data }) => {
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        history.push(`/conscious-store/${data?._id}`);
      }}
      className="flex items-center my-3 justify-start cursor-pointer rounded-md transition-all hover:shadow-md shadow-gray-500"
    >
      <Image
        src={data?.images[0]}
        width={100}
        height={100}
        alt="Tshirt"
        className="w-4/12 rounded-md"
      />
      <div className="ml-2">
        <p className="font-bold">{data?.name}</p>
        <div className="w-full flex items-center pt-0.5 pl-1">
          {" "}
          {[...Array(data?.rating)]?.map((e, i) => {
            return <AiFillStar key={i} className="text-websiteBlue" />;
          })}
          {[...Array(5 - data?.rating)]?.map((e, i) => {
            return <AiFillStar color="#b3b3b3" key={i} />;
          })}
        </div>
        <p className="text-websiteBlue mt-1 font-semibold">INR {data?.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;
