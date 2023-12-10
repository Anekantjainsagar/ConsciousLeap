"use client";
import React, { useState } from "react";
import { CiDeliveryTruck, CiMap, CiTrash } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import tshirt from "../Assets/store/tshirt.jpg";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import cod from "../Assets/cod.png";

const CartPage = () => {
  const [showPage, setShowPage] = useState(1);
  const [deliveryType, setDeliveryType] = useState("Home Delivery");
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  return (
    <div className="py-[4vw] px-[5vw]">
      <div className="flex items-end justify-end mb-2 w-full">
        <button className="bg-websiteBlue px-14 py-2 rounded-md font-semibold text-white">
          Wishlist
        </button>
      </div>
      <div>
        <div className="grid grid-cols-5 my-[2vw]">
          <div
            className={`${
              showPage >= 1 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <IoCartOutline size={35} />
            <p className="mt-1">1. My Cart</p>
          </div>
          <div
            className={`${
              showPage >= 2 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <CiMap size={35} />
            <p className="mt-1">2. Shipping info</p>
          </div>
          <div
            className={`${
              showPage >= 3 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <CiDeliveryTruck size={35} />
            <p className="mt-1">3. Delivery info</p>
          </div>
          <div
            className={`${
              showPage >= 4 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <MdOutlinePayment size={35} />
            <p className="mt-1">4. Payment</p>
          </div>
          <div
            className={`${
              showPage >= 5 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <GiConfirmed size={35} />
            <p className="mt-1">5. Confirmation</p>
          </div>
        </div>
        <div className="px-[3vw] mt-[3vw]">
          {showPage == 1 ? (
            <div className="pt-[2vw]">
              <div
                className="grid font-semibold my-2"
                style={{ gridTemplateColumns: "24% 15% 15% 15% 15% 15% 15%" }}
              >
                <p className="mt-0 text-center">Product</p>
                <p className="mt-0 text-center">Price</p>
                <p className="mt-0 text-center">Tax</p>
                <p className="mt-0 text-center">Quantity</p>
                <p className="mt-0 text-center">Total</p>
                <p className="mt-0 text-center">Remove</p>
              </div>
              <div className="h-[30vh] overflow-y-auto">
                <Block />
                <Block />
                <Block />
              </div>
              <div className="flex items-center justify-between mt-4 border-t">
                <p>SubTotal</p>
                <p className="text-lg text-black font-bold">AED95.000</p>
              </div>
            </div>
          ) : showPage === 2 ? (
            <div className="grid grid-cols-2 px-[14vw] gap-x-10">
              <div className="flex flex-col items-center h-[20vh] justify-center border cursor-pointer">
                {[
                  { name: "Address", value: "A2" },
                  {
                    name: "Postal code",
                    value: "400881",
                  },
                  {
                    name: "City",
                    value: "Mumbai",
                  },
                  {
                    name: "State",
                    value: "Maharashtra",
                  },
                  {
                    name: "Country",
                    value: "India",
                  },
                  {
                    name: "Phone",
                    value: "7692045606",
                  },
                ].map((e) => {
                  return (
                    <p className="mt-0">
                      {e?.name} : <span className="font-bold">{e?.value}</span>
                    </p>
                  );
                })}
              </div>
              <div className="flex flex-col items-center h-[20vh] cursor-pointer justify-center border">
                <AiOutlinePlus />
                <p>Add new Address</p>
              </div>
            </div>
          ) : showPage == 3 ? (
            <div className="px-[10vw]">
              <p className="text-lg font-bold mb-2 cursor-pointer hover:text-websiteBlue transition-all">
                consciousleap Products
              </p>
              <hr />
              <div className="h-[10vw] overflow-y-auto">
                {["A", "B"].map((e) => {
                  return (
                    <div className="h-[6vw] flex items-center border-b" key={e}>
                      <Image
                        src={tshirt}
                        alt="Tshirt"
                        className="h-[5vw] w-[5vw] object-cover object-center"
                      />
                      <p className="ml-2 font-semibold">Tshirt - Black</p>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div className="mt-3 mb-2 flex items-center justify-between">
                <p className="text-lg font-bold cursor-pointer hover:text-websiteBlue transition-all">
                  Choose Delivery Type
                </p>
                <div className="flex items-center">
                  {["Home Delivery", "Local Pickup"].map((e, i) => {
                    return (
                      <p
                        key={i}
                        className={`mt-0 px-6 mr-4 border py-2 cursor-pointer ${
                          e === deliveryType ? "border-websiteBlue" : ""
                        }`}
                        onClick={(event) => {
                          setDeliveryType(e);
                        }}
                      >
                        {e}
                      </p>
                    );
                  })}
                </div>
              </div>
              {deliveryType == "Local Pickup" ? (
                <div className="flex justify-end mr-4">
                  <input
                    type="text"
                    placeholder="Select your nearest Pickup point"
                    className="outline-none border px-3 py-2 w-[21vw] rounded-sm mt-2"
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <div className="flex px-[5vw] mb-5 items-start justify-between">
              <div className="w-[65.5%]">
                <p className="text-lg font-semibold cursor-pointer hover:text-websiteBlue transition-all">
                  Any additional info?
                </p>
                <hr className="my-2" />
                <textarea
                  className="w-full outline-none border px-4 py-2 mb-4 rounded-sm"
                  id=""
                  cols="30"
                  placeholder="Type your text"
                  rows="5"
                ></textarea>
                <p className="text-lg font-semibold cursor-pointer hover:text-websiteBlue transition-all">
                  Select a payment option
                </p>
                <div className="px-[4vw] py-5 grid gap-5 grid-cols-3">
                  <div className="border p-3 w-fit">
                    <Image src={cod} alt="Cod" />
                    <p className="mt-1.5 font-bold text-center">
                      Cash on Delivery
                    </p>
                  </div>
                  <div className="border p-3 w-fit">
                    <Image src={cod} alt="Cod" />
                    <p className="mt-1.5 font-bold text-center">
                      Cash on Delivery
                    </p>
                  </div>
                  <div className="border p-3 w-fit">
                    <Image src={cod} alt="Cod" />
                    <p className="mt-1.5 font-bold text-center">
                      Cash on Delivery
                    </p>
                  </div>
                  <div className="border p-3 w-fit">
                    <Image src={cod} alt="Cod" />
                    <p className="mt-1.5 font-bold text-center">
                      Cash on Delivery
                    </p>
                  </div>
                </div>
                <hr className="my-2" />
                <div>
                  <input
                    type="checkbox"
                    className="cursor-pointer mr-2"
                    checked={termsAndConditions}
                    onChange={(e) => {
                      setTermsAndConditions(!termsAndConditions);
                    }}
                  />
                  I agree to the{" "}
                  <span
                    className="text-websiteBlue"
                    onClick={(e) => {
                      history.push("/privacy/terms");
                    }}
                  >
                    terms and conditions
                  </span>
                  ,{" "}
                  <span
                    className="text-websiteBlue mr-1"
                    onClick={(e) => {
                      history.push("/privacy/refund");
                    }}
                  >
                    return policy
                  </span>
                  &{" "}
                  <span
                    className="text-websiteBlue"
                    onClick={(e) => {
                      history.push("/privacy/policies");
                    }}
                  >
                    privacy policy
                  </span>
                </div>
              </div>
              <div className="w-[31.5%]">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold cursor-pointer hover:text-websiteBlue transition-all">
                    Summary
                  </p>
                  <p className="bg-websiteBlue px-3 text-xs rounded w-fit text-white mt-0 py-0.5">
                    2 Items
                  </p>
                </div>
                <hr className="my-2" />
                <div>
                  <div className="font-bold flex items-center border-b border-b-black pb-1 mb-2 justify-between">
                    <p className="mt-0">Product</p>
                    <p className="mt-0">Total</p>
                  </div>
                  {["Tshirt - Black", "Tshirt - Black"].map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center border-b pb-1 mb-1.5 justify-between"
                      >
                        <p className="mt-0 flex items-center">
                          {e}
                          <IoIosClose color="#000" className="mx-1" />
                          <span className="text-black">2</span>
                        </p>
                        <p className="mt-0">AED100,000.00</p>
                      </div>
                    );
                  })}
                  <div className="font-bold flex text-black items-center border-y py-1 mt-3 justify-between">
                    <p className="mt-0">Subtotal</p>
                    <p className="mt-0">AED100,000.00</p>
                  </div>
                  <div className="font-bold flex text-black items-center border-b py-1 mt-1 justify-between">
                    <p className="mt-0">Tax</p>
                    <p className="mt-0 font-light">AED100,000.00</p>
                  </div>
                  <div className="font-bold flex text-black items-center border-b py-1 mt-1 justify-between">
                    <p className="mt-0">Total Shipping </p>
                    <p className="mt-0 font-light">AED100,000.00</p>
                  </div>
                  <div className="font-bold flex text-black items-center border-b py-1 mt-1 justify-between">
                    <p className="mt-0">Total </p>
                    <p className="mt-0">AED100,000.00</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <input
                      type="text"
                      className="w-full border px-3 text-sm outline-none py-1 rounded-s-sm"
                      placeholder="Have coupon code? Enter here"
                    />
                    <button className="text-white bg-websiteBlue px-5 py-1 rounded-e-sm cursor-pointer">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                history.push("/conscious-store");
              }}
              className="bg-websiteBlue text-white px-8 py-2 rounded-md mt-3"
            >
              Return to Shop
            </button>
            <button
              onClick={(e) => {
                setShowPage(showPage + 1);
              }}
              className="bg-websiteBlue text-white px-8 py-2 rounded-md mt-3"
            >
              {showPage === 1
                ? "Continue to Shopping"
                : showPage == 2
                ? "Continue to Delivery Info"
                : showPage === 3
                ? "Continue to Payment"
                : "Complete Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Block = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="h-[7vw] border-b mb-2 grid flex items-center"
      style={{ gridTemplateColumns: "24% 15% 15% 15% 15% 15% 15%" }}
    >
      <div className="flex items-center justify-center">
        <Image
          src={tshirt}
          alt="Tshirt"
          className="w-[5vw] h-[5vw] object-cover object-center"
        />
        <p className="mt-2 font-semibold">Tshirt - Black</p>
      </div>
      <p className="text-center font-extrabold text-[17px]">AED10,000.00</p>
      <p className="text-center font-extrabold text-[17px]">AED500.00</p>
      <div className="mt-0 ml-3 flex justify-center items-center">
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
      </div>
      <p className="text-center font-extrabold text-[17px] text-websiteBlue">
        AED105,000.00
      </p>
      <div className="flex items-center justify-center">
        <CiTrash
          className="p-2 bg-gray-300 rounded-full text-white cursor-pointer"
          size={35}
        />
      </div>
    </div>
  );
};

export default CartPage;
