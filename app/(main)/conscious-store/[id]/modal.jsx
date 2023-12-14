"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import Context from "@/Context/Context";
import { useRouter } from "next/navigation";

const customStyles = {
  overlay: { zIndex: 50 },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
};

const Product = ({ modalIsOpen, setIsOpen, data }) => {
  const history = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const [fabric, setFabric] = useState("Cotton");
  const { cart } = useContext(Context);

  return (
    <div className="z-50 relative">
      <Toaster />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(!modalIsOpen);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="bg-white w-[90vw] md:h-fit h-[80vh] overflow-y-auto md:w-[50vw] p-5 rounded-lg shadow-md shadow-gray-500 flex md:flex-row flex-col items-start justify-between">
          <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:justify-start md:w-[10%]">
            <div className="border-2 border-websiteBlue h-[7vh] cursor-pointer mb-3 rounded-sm w-[7vh] md:w-full">
              <Image
                src={data?.images[0]}
                alt="data?.images[0]"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-sm object-center"
              />
            </div>
            <AiOutlineClose
              className="md:hidden block"
              size={30}
              onClick={(e) => {
                setIsOpen(!modalIsOpen);
              }}
            />
          </div>
          <div className="w-full md:w-[40%] px-4">
            <Image
              src={data?.images[0]}
              alt="IPhone"
              width={100}
              height={100}
              className="rounded-sm w-full"
            />
          </div>
          <div className="w-full md:w-[50%] md:mt-3 md:ml-3">
            <h1 className="text-lg cursor-pointer flex justify-between items-center hover:text-websiteBlue transition-all">
              <span className="md:w-11/12 md:text-base text-2xl">
                {data?.name}
              </span>
              <AiOutlineClose
                className="md:block hidden"
                size={20}
                onClick={(e) => {
                  setIsOpen(!modalIsOpen);
                }}
              />
            </h1>
            <div className="flex items-center mt-1">
              <p className="w-[25%] text-gray-400 font-light">Price:</p>
              <p className="mt-0 ml-3 text-lg">
                <span className="line-through font-semibold">
                  INR{data?.discountPrice}
                </span>{" "}
                <span className="text-base">/Pc</span>
              </p>
            </div>
            <div className="flex items-center mt-1">
              <p className="w-[25%] text-gray-400 font-light">
                Discount Price:
              </p>
              <p className="mt-0 ml-3 text-lg">
                <span className="text-websiteBlue font-semibold">
                  INR{data?.price}
                </span>{" "}
                <span className="text-base">/Pc</span>
              </p>
            </div>
            <hr />
            {data?.size?.length > 0 && (
              <div className="flex items-center mt-1">
                <p className="w-[25%] text-gray-400 font-light">Size:</p>
                <p className="mt-0 ml-3 flex items-center">
                  {data?.size.map((e, i) => {
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
                </p>
              </div>
            )}
            {data?.size?.length > 0 && (
              <div className="flex items-center mt-3">
                <p className="w-[25%] text-gray-400 font-light">Fabric:</p>
                <p className="mt-0 ml-3 flex items-center">
                  {data?.febric.map((e, i) => {
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
                </p>
              </div>
            )}
            {data?.colors?.length > 0 && (
              <div className="flex items-center mt-3">
                <p className="w-[25%] text-gray-400 font-light">Color:</p>
                <div className="mt-0 ml-3 flex items-center">
                  <div className="border border-black p-[4px] rounded-md">
                    <div className="bg-black p-4 rounded-md"></div>
                  </div>
                </div>
              </div>
            )}
            <hr />
            <div className="flex items-center mt-3">
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
                  className="px-3 cursor-pointer rounded-full bg-gray-100 text-2xl"
                >
                  +
                </span>
                <p className="ml-3">({data?.available} available)</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center mt-1">
              <p className="w-[25%] text-gray-400 font-light">Total Price:</p>
              <p className="mt-0 ml-3 text-xl">
                <span className="text-websiteBlue font-semibold">
                  INR{data?.price * quantity}
                </span>{" "}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                cart?.setCartData([
                  ...cart?.cartData,
                  {
                    name: data?.name,
                    _id: data?._id,
                    price: data?.price,
                    quantity: quantity,
                    images: data?.images,
                    size,
                    fabric,
                  },
                ]);
                history.push("/cart/1");
              }}
              className="bg-websiteBlue text-white w-full flex items-center justify-center mt-2 font-medium py-2 rounded-md hover:scale-105 transition-all"
            >
              <IoCartOutline size={26} className="mr-3" />
              Add to Cart
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
