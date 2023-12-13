"use client";
import React, { useContext, useState, useEffect } from "react";
import { CiDeliveryTruck, CiLight, CiMap, CiTrash } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import tshirt from "../Assets/store/tshirt.jpg";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import cod from "../Assets/cod.png";
import Context from "@/Context/Context";
import { useRouter } from "next/navigation";
import AddAddress from "./AddAddress";

const CartPage = () => {
  const history = useRouter();
  const [showPage, setShowPage] = useState(1);
  const [deliveryType, setDeliveryType] = useState("Home Delivery");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { cart, login } = useContext(Context);

  const [order, setOrder] = useState({
    address: "",
    localPickup: "",
    additional: "",
  });

  useEffect(() => {
    setOrder({
      address: login?.addresses[0],
    });
  }, [login]);

  return (
    <div className="py-[4vw] px-[5vw]">
      <AddAddress setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
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
            <p className="mt-1 md:block hidden">1. My Cart</p>
          </div>
          <div
            className={`${
              showPage >= 2 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center md:mt-0 mt-3 cursor-pointer justify-center`}
          >
            <CiMap size={35} />
            <p className="mt-1 md:block hidden">2. Shipping info</p>
          </div>
          <div
            className={`${
              showPage >= 3 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <CiDeliveryTruck size={35} />
            <p className="mt-1 md:block hidden">3. Delivery info</p>
          </div>
          <div
            className={`${
              showPage >= 4 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <MdOutlinePayment size={35} />
            <p className="mt-1 md:block hidden">4. Payment</p>
          </div>
          <div
            className={`${
              showPage >= 5 ? "text-websiteBlue" : "text-[#cccccc]"
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
          >
            <GiConfirmed size={35} />
            <p className="mt-1 md:block hidden">5. Confirmation</p>
          </div>
        </div>
        <div className="px-[3vw] mt-[3vw]">
          {showPage == 1 ? (
            <div className="pt-[2vw]">
              <div
                className="font-semibold my-2 md:grid hidden"
                style={{ gridTemplateColumns: "24% 15% 15% 15% 15% 15% 15%" }}
              >
                <p className="mt-0 text-center">Product</p>
                <p className="mt-0 text-center">Price</p>
                <p className="mt-0 text-center">Tax</p>
                <p className="mt-0 text-center">Quantity</p>
                <p className="mt-0 text-center">Total</p>
                <p className="mt-0 text-center">Remove</p>
              </div>
              <div className="h-[50vh] md:h-[30vh] overflow-y-auto">
                {cart?.cartData?.map((e, i) => {
                  return <Block key={i} data={e} />;
                })}
              </div>
              <div className="flex items-center justify-between mt-4 border-t">
                <p>SubTotal</p>
                <p className="text-lg text-black font-bold">
                  INR
                  {cart?.cartData?.reduce(
                    (acc, item) =>
                      acc +
                      (item?.price * item?.quantity +
                        item?.price * item?.quantity * (18 / 100)),
                    0
                  )}
                </p>
              </div>
            </div>
          ) : showPage === 2 ? (
            <div className="grid md:grid-cols-2 px-[3vw] md:px-[14vw] gap-x-10">
              {login?.addresses?.map((e, i) => {
                return (
                  <div
                    className={`flex flex-col items-center h-[20vh] py-8 md:mb-0 mb-3 justify-center border cursor-pointer rounded-md ${
                      order?.address?.address === e?.address
                        ? "border-websiteBlue"
                        : ""
                    }`}
                    key={i}
                    onClick={(e) => {
                      setOrder({ address: e });
                    }}
                  >
                    {[
                      { name: "Address", value: e?.address },
                      {
                        name: "Postal code",
                        value: e?.postalCode,
                      },
                      {
                        name: "City",
                        value: e?.city,
                      },
                      {
                        name: "State",
                        value: e?.state,
                      },
                      {
                        name: "Country",
                        value: e?.country,
                      },
                      {
                        name: "Phone",
                        value: e?.phone,
                      },
                    ].map((e, i) => {
                      return (
                        <p className="mt-0" key={i}>
                          {e?.name} :{" "}
                          <span className="font-bold">{e?.value}</span>
                        </p>
                      );
                    })}
                  </div>
                );
              })}
              <div
                onClick={(e) => {
                  setIsOpen(!modalIsOpen);
                }}
                className="flex flex-col items-center h-[20vh] rounded-md cursor-pointer justify-center border"
              >
                <AiOutlinePlus />
                <p>Add new Address</p>
              </div>
            </div>
          ) : showPage == 3 ? (
            <div className="px-[1vw] md:px-[10vw]">
              <p className="text-lg font-bold md:mb-2 cursor-pointer hover:text-websiteBlue transition-all">
                consciousleap Products
              </p>
              <hr />
              <div className="h-[50vw] md:h-[10vw] overflow-y-auto">
                {cart?.cartData.map((e, i) => {
                  console.log(e);
                  return (
                    <div
                      className="md:h-[6vw] flex items-center border-b"
                      key={i}
                    >
                      <Image
                        src={e?.images[0]}
                        width={100}
                        height={100}
                        alt="Tshirt"
                        className="h-[15vw] md:h-[5vw] w-[15vw] md:w-[5vw] object-cover object-center"
                      />
                      <p className="ml-1 md:ml-2 font-semibold">{e?.name}</p>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div className="mt-3 mb-2 flex md:flex-row flex-col items-center justify-between">
                <p className="text-sm md:text-lg font-bold cursor-pointer hover:text-websiteBlue transition-all">
                  Choose Delivery Type
                </p>
                <div className="flex items-center">
                  {["Home Delivery", "Local Pickup"].map((e, i) => {
                    return (
                      <p
                        key={i}
                        className={`px-4 md:px-6 mr-4 border py-1 md:mt-0 mt-2 md:py-2 cursor-pointer ${
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
                    value={order?.localPickup}
                    onChange={(e) => {
                      setOrder({ ...order, localPickup: e.target.value });
                    }}
                    placeholder="Select your nearest Pickup point"
                    className="outline-none border px-3 py-2 md:w-[21vw] rounded-sm mt-2"
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <div className="flex md:flex-row flex-col-reverse px-[1vw] md:px-[5vw] mb-5 items-start justify-between">
              <div className="md:w-[65.5%]">
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
                <div className="px-[4vw] py-5 grid gap-5 grid-cols-2 md:grid-cols-3">
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
              <div className="w-full md:mt-0 md:mb-0 mb-4 md:w-[31.5%]">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold cursor-pointer hover:text-websiteBlue transition-all">
                    Summary
                  </p>
                  <p className="bg-websiteBlue px-3 text-xs rounded w-fit text-white mt-0 py-0.5">
                    {cart?.cartData?.length} Items
                  </p>
                </div>
                <hr className="my-2" />
                <div>
                  <div className="font-bold flex items-center border-b border-b-black pb-1 mb-2 justify-between">
                    <p className="mt-0">Product</p>
                    <p className="mt-0">Total</p>
                  </div>
                  {cart?.cartData.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center border-b pb-1 mb-1.5 justify-between"
                      >
                        <p className="mt-0 flex items-center">
                          {e?.name}
                          <IoIosClose color="#000" className="mx-1" />
                          <span className="text-black">{e?.quantity}</span>
                        </p>
                        <p className="mt-0">INR{e?.price * e?.quantity}</p>
                      </div>
                    );
                  })}
                  <div className="font-bold flex text-black items-center border-y py-1 mt-3 justify-between">
                    <p className="mt-0">Subtotal</p>
                    <p className="mt-0">
                      INR
                      {cart?.cartData?.reduce(
                        (acc, item) => acc + item?.price * item?.quantity,
                        0
                      )}
                    </p>
                  </div>
                  <div className="font-bold flex text-black items-center border-b py-1 mt-1 justify-between">
                    <p className="mt-0">Tax</p>
                    <p className="mt-0 font-light">
                      INR
                      {cart?.cartData?.reduce(
                        (acc, item) => acc + item?.price * item?.quantity,
                        0
                      ) * 0.18}
                    </p>
                  </div>
                  <div className="font-bold flex text-black items-center border-b py-1 mt-1 justify-between">
                    <p className="mt-0">Total Shipping </p>
                    <p className="mt-0 font-light">INR0</p>
                  </div>
                  <div className="font-bold flex text-black items-center border-b py-1 mt-1 justify-between">
                    <p className="mt-0">Total </p>
                    <p className="mt-0">
                      INR{" "}
                      {cart?.cartData?.reduce(
                        (acc, item) => acc + item?.price * item?.quantity,
                        0
                      ) *
                        0.18 +
                        cart?.cartData?.reduce(
                          (acc, item) => acc + item?.price * item?.quantity,
                          0
                        )}
                    </p>
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
          <div className="flex md:flex-row flex-col items-center justify-between">
            <button
              onClick={(e) => {
                history.push("/conscious-store");
              }}
              className="bg-websiteBlue text-white px-8 py-2 rounded-md md:w-fit w-full mt-3"
            >
              Return to Shop
            </button>
            <button
              onClick={(e) => {
                setShowPage(showPage + 1);
              }}
              className="bg-websiteBlue text-white px-8 py-2 rounded-md md:w-fit w-full mt-3"
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

const Block = ({ data }) => {
  let { cart } = useContext(Context);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(data?.quantity);
  }, [data]);

  const setMainQuantity = (quantity) => {
    let tempData = cart?.cartData;
    let item = tempData.find((obj) => obj._id === data?._id);
    let index = tempData?.indexOf(item);
    if (index !== -1) {
      tempData[index] = { ...tempData[index], quantity };
      cart?.setCartData([...tempData]);
    }
  };

  return (
    <>
      <div
        className="md:h-[7vw] md:hidden border-b mb-2"
        style={{ gridTemplateColumns: "24% 15% 15% 15% 15% 15% 15%" }}
      >
        <div className="flex items-center w-full justify-start">
          <Image
            src={data?.images[0]}
            width={100}
            height={100}
            alt="Tshirt"
            className="w-[23vw] md:w-[5vw] h-[23vw] md:h-[5vw] object-cover object-center"
          />
          <p className="mt-2 font-semibold">{data?.name}</p>
        </div>
        <p className="text-center px-[4vw] font-extrabold flex items-center justify-between text-[17px]">
          <span className="text-sm">Price:</span>
          <span>INR{data?.price * quantity}</span>
        </p>
        <p className="text-center px-[4vw] font-extrabold flex items-center justify-between text-[17px]">
          <span className="text-sm">Tax:</span>
          <span>INR{data?.price * quantity * (18 / 100)}</span>
        </p>
        <div className="flex items-center justify-between px-[4vw] mt-2">
          <span className="text-sm font-extrabold">Quantity:</span>
          <div className="mt-0 ml-3 flex justify-end items-end">
            <span
              onClick={(e) => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  setMainQuantity(quantity - 1);
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
                setMainQuantity(quantity + 1);
              }}
              className="px-3 cursor-pointer rounded-full bg-gray-100 text-2xl"
            >
              +
            </span>
          </div>
        </div>
        <p className="text-center flex items-center justify-between px-[4vw] mt-2 font-extrabold text-[17px] text-websiteBlue">
          <span className="text-sm">Total price:</span>
          <span>
            INR{data?.price * quantity * (18 / 100) + data?.price * quantity}
          </span>
        </p>
        <div className="flex items-center justify-between pb-[3vw] px-[4vw] mt-3">
          <span className="text-sm">Remove:</span>
          <CiTrash
            className="p-2 bg-gray-300 rounded-full text-white cursor-pointer"
            size={35}
          />
        </div>
      </div>
      <div
        className="h-[7vw] border-b mb-2 hidden md:grid flex items-center"
        style={{ gridTemplateColumns: "24% 15% 15% 15% 15% 15% 15%" }}
      >
        <div className="flex items-center justify-center">
          <Image
            src={tshirt}
            alt="Tshirt"
            className="w-[5vw] h-[5vw] object-cover object-center"
          />
          <p className="mt-2 font-semibold">{data?.name}</p>
        </div>
        <p className="text-center font-extrabold text-[17px]">
          INR{data?.price * quantity}
        </p>
        <p className="text-center font-extrabold text-[17px]">
          INR{data?.price * quantity * (18 / 100)}
        </p>
        <div className="mt-0 ml-3 flex justify-center items-center">
          <span
            onClick={(e) => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
                setMainQuantity(quantity - 1);
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
              setMainQuantity(quantity + 1);
            }}
            className="px-3 cursor-pointer rounded-full bg-gray-100 text-2xl"
          >
            +
          </span>
        </div>
        <p className="text-center font-extrabold text-[17px] text-websiteBlue">
          INR{data?.price * quantity * (18 / 100) + data?.price * quantity}
        </p>
        <div className="flex items-center justify-center">
          <CiTrash
            onClick={(e) => {
              let temp = cart?.cartData?.filter((e) => e?._id != data?._id);
              cart?.setCartData([...temp]);
            }}
            className="p-2 bg-gray-300 rounded-full text-white cursor-pointer"
            size={35}
          />
        </div>
      </div>
    </>
  );
};

export default CartPage;
