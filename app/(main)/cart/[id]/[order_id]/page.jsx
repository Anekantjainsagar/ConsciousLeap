"use client";
import React, { useContext, useState, useEffect } from "react";
import { CiDeliveryTruck, CiMap } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import Context from "@/Context/Context";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import { useRouter } from "next/navigation";

const CartPage = ({ params }) => {
  let showPage = parseInt(params.id);
  const history = useRouter();
  let orderId = params.order_id;
  const [orderStatus, setOrderStatus] = useState();
  const { login } = useContext(Context);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/user/get_order`, { id: orderId })
      .then((response) => {
        setOrderStatus(response.data);
      });
  }, []);

  return (
    <div className="py-[4vw] px-[5vw]">
      <div className="flex items-end justify-end mb-2 w-full">
        <button
          onClick={(e) => {
            history.push("/cart/1");
          }}
          className="bg-websiteBlue px-14 py-2 rounded-md font-semibold text-white"
        >
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
            } flex flex-col font-semibold items-center cursor-pointer justify-center`}
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
        <div className="min-[1040px]:px-[3vw] mt-[3vw]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl pt-3 text-center font-extrabold hover:text-websiteBlue transition-all cursor-pointer">
              Thank You for Your Order!
            </h1>
            <p className="mt-2 mb-1 text-center">
              A copy or your order summary has been sent to{" "}
              <span className="text-websiteBlue">{login?.email}</span>
            </p>
            <div className="w-11/12 md:w-8/12 mt-5">
              <h1 className="text-xl md:text-start text-center font-bold">
                Order Details
              </h1>
              <p className="pt-1 pb-2 md:text-start text-center md:text-base text-sm font-extrabold cursor-pointer">
                Ordered on {new Date(orderStatus?.date).toString().slice(4, 24)}{" "}
                | Order #{orderStatus?._id?.toUpperCase()}
              </p>
              <div className="flex md:flex-row flex-col border p-4 rounded-lg items-start justify-between">
                <div className="md:w-[25%] md:mb-0 mb-3">
                  <p className="font-extrabold">Shipping Address</p>
                  <p className="mt-0">{login?.name}</p>
                  <p className="mt-0">
                    {orderStatus?.address?.address +
                      ", " +
                      orderStatus?.address?.city +
                      ", " +
                      orderStatus?.address?.state +
                      ", " +
                      orderStatus?.address?.country +
                      ", " +
                      orderStatus?.address?.postal}
                  </p>
                </div>
                <div className="md:w-[20%] md:mb-0 mb-3">
                  <p className="font-extrabold">Payment Method</p>
                  <p className="mt-0">{orderStatus?.mode}</p>
                </div>
                <div className="md:w-[30%] w-full">
                  <div className="font-bold flex text-black items-center pb-0.5 justify-between">
                    <p className="mt-0">Item(s) Subtotal</p>
                    <p className="mt-0">
                      INR{" "}
                      {orderStatus?.products
                        ?.reduce(
                          (acc, item) => acc + item?.price * item?.quantity,
                          0
                        )
                        .toFixed(2)}
                    </p>
                  </div>
                  <div className="font-bold flex text-black items-center pb-0.5 justify-between">
                    <p className="mt-0">Tax</p>
                    <p className="mt-0 font-light">
                      INR{" "}
                      {(
                        orderStatus?.products?.reduce(
                          (acc, item) => acc + item?.price * item?.quantity,
                          0
                        ) * 0.18
                      ).toFixed(2)}
                    </p>
                  </div>
                  <div className="font-bold flex text-black items-center pb-0.5 justify-between">
                    <p className="mt-0">Total Shipping </p>
                    <p className="mt-0 font-light">INR 0</p>
                  </div>
                  <div className="font-bold flex text-black items-center pb-0.5 justify-between">
                    <p className="mt-0">Grand Total </p>
                    <p className="mt-0">
                      INR{" "}
                      {(
                        orderStatus?.products?.reduce(
                          (acc, item) => acc + item?.price * item?.quantity,
                          0
                        ) *
                          0.18 +
                        orderStatus?.products?.reduce(
                          (acc, item) => acc + item?.price * item?.quantity,
                          0
                        )
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse items-center justify-center border mt-5">
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push("/conscious-store");
              }}
              className="bg-websiteBlue text-white px-8 py-2 rounded-md md:w-fit w-full mt-3"
            >
              Return to Conscious Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
