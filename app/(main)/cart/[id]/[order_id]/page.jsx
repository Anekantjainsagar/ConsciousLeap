"use client";
import React, { useContext, useState, useEffect } from "react";
import { CiDeliveryTruck, CiMap } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import Context from "@/Context/Context";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";

const CartPage = ({ params }) => {
  let showPage = parseInt(params.id);
  let orderId = params.order_id;
  const [orderStatus, setOrderStatus] = useState();
  const { login } = useContext(Context);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/user/get_order`, { id: orderId })
      .then((response) => {
        setOrderStatus(res.data);
      });
  }, []);

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
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl pt-3 font-extrabold hover:text-websiteBlue transition-all cursor-pointer">
              Thank You for Your Order!
            </h1>
            <p className="mt-2 mb-12">
              A copy or your order summary has been sent to{" "}
              <span className="text-websiteBlue">{login?.email}</span>
            </p>
            <div className="w-8/12 mx-auto">
              <h1 className="text-lg font-bold mb-2">Order Summary</h1>
              <div className="grid grid-cols-2">
                {[
                  {
                    name: "Order date",
                    value: new Date(orderStatus?.date).toString(),
                  },
                  { name: "Order status", value: "Pending" },
                  { name: "Name", value: login?.name },
                  {
                    name: "Total order amount",
                    value: orderStatus?.products?.reduce(
                      (acc, item) =>
                        acc +
                        (item?.price * item?.quantity +
                          item?.price * item?.quantity * (18 / 100)),
                      0
                    ),
                  },
                  {
                    name: "Email",
                    value: login?.email,
                  },
                  {
                    name: "Shipping",
                    value: "Flat shipping rate",
                  },
                  {
                    name: "Shipping address",
                    value:
                      orderStatus?.address?.address +
                      ", " +
                      orderStatus?.address?.city +
                      ", " +
                      orderStatus?.address?.state +
                      ", " +
                      orderStatus?.address?.country +
                      ", " +
                      orderStatus?.address?.postal,
                  },
                  {
                    name: "Payment method",
                    value: orderStatus?.mode,
                  },
                ].map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="w-11/12 break-words mt-1 mx-auto px-2 py-1 border-b flex items-center justify-between"
                    >
                      <p className="font-extrabold mt-0 w-6/12">{e?.name}:</p>
                      <p className="mt-0 w-6/12">{e?.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <h1 className="text-2xl pt-20 pb-5 font-extrabold hover:text-websiteBlue transition-all cursor-pointer">
              Order Code: {orderStatus?._id}
            </h1>
            <div className="w-8/12">
              <h1 className="text-lg font-bold mb-2">Order Details</h1>
              <div>
                <div
                  className="grid pb-1 border-b"
                  style={{ gridTemplateColumns: "10% 30% 10% 25% 25%" }}
                >
                  <p className="text-center font-bold">#</p>
                  <p className="text-center font-bold">Name</p>
                  <p className="text-center font-bold">Quantity</p>
                  <p className="text-center font-bold">Delivery Type </p>
                  <p className="text-center font-bold">Price</p>
                </div>
                {orderStatus?.products.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="grid my-1.5"
                      style={{ gridTemplateColumns: "10% 30% 10% 25% 25%" }}
                    >
                      <p className="text-center mt-0">{i + 1}</p>
                      <p className="text-center mt-0">{e?.name}</p>
                      <p className="text-center mt-0">{e?.quantity}</p>
                      <p className="text-center mt-0">
                        {orderStatus?.localPickup?.length > 0
                          ? orderStatus?.localPickup
                          : "Home Delivery"}
                      </p>
                      <p className="text-center mt-0">
                        INR {e?.price * e?.quantity}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-[30%] mt-3 float-right">
                <div className="font-bold flex text-black items-center border-y py-1 mt-3 justify-between">
                  <p className="mt-0">Subtotal</p>
                  <p className="mt-0">
                    INR
                    {orderStatus?.products?.reduce(
                      (acc, item) => acc + item?.price * item?.quantity,
                      0
                    )}
                  </p>
                </div>
                <div className="font-bold flex text-black items-center border-b py-1 mt-1 justify-between">
                  <p className="mt-0">Tax</p>
                  <p className="mt-0 font-light">
                    INR
                    {orderStatus?.products?.reduce(
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
                    {orderStatus?.products?.reduce(
                      (acc, item) => acc + item?.price * item?.quantity,
                      0
                    ) *
                      0.18 +
                      orderStatus?.products?.reduce(
                        (acc, item) => acc + item?.price * item?.quantity,
                        0
                      )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
