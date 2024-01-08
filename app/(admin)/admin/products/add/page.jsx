"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    discountPrice: "",
    size: [],
    fabric: [],
    quantity: "",
  });
  const [fabric, setFabric] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-2 cursor-pointer gradientHover w-fit text-newBlue">
        Add New Product
      </h1>
      <div className="px-3">
        <input
          type="text"
          value={product?.name}
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
          }}
          className="px-3 border w-full outline-none py-1 rounded-md mb-4"
          placeholder="Enter Product Name"
        />
        <div className="mb-4 grid grid-cols-3 items-center gap-x-4">
          <input
            type="number"
            value={product?.discountPrice}
            onChange={(e) => {
              setProduct({ ...product, discountPrice: e.target.value });
            }}
            className="px-3 border w-full outline-none py-1 rounded-md"
            placeholder="Enter Original Price"
          />{" "}
          <input
            type="number"
            value={product?.price}
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
            className="px-3 border w-full outline-none py-1 rounded-md"
            placeholder="Enter Price After Discount"
          />
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={product?.quantity}
              className="px-3 border outline-none py-1 rounded-md"
              placeholder="Quantity"
              onChange={(e) => {
                setProduct({ ...product, quantity: e.target.value });
              }}
            />
            <p>
              Discount Percentage:{" "}
              <span
                className={`${
                  parseInt(
                    ((product?.discountPrice - product?.price) /
                      product?.discountPrice) *
                      100
                  ) > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {product?.price && product?.discountPrice
                  ? parseInt(
                      ((product?.discountPrice - product?.price) /
                        product?.discountPrice) *
                        100
                    )
                  : 0}
                %
              </span>
            </p>
          </div>
        </div>
        <textarea
          rows="5"
          className="outline-none mb-4 border w-full px-3 rounded-md py-2"
          placeholder="Enter the Description"
        ></textarea>
        <div className="grid grid-cols-2 gap-x-4 items-center mb-4">
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={size}
              onChange={(e) => {
                setSize(e.target.value);
              }}
              placeholder="Enter the size"
              className="px-3 border w-full outline-none mr-3 py-1 rounded-md"
            />
            <button
              onClick={(e) => {
                if (size) {
                  setProduct({ ...product, size: [...product?.size, size] });
                  setSize("");
                }
              }}
              className="w-4/12 bg-newBlue text-white py-1 rounded-md"
            >
              Add New
            </button>
          </div>
          <div className="flex items-center">
            {product?.size?.map((e) => {
              return (
                <p
                  key={e}
                  className="mt-0 px-3 border py-0.5 mr-5 rounded-md relative"
                >
                  <AiOutlineClose
                    className="absolute -top-3 -right-3 border bg-red-500 cursor-pointer text-white rounded-full p-1"
                    size={18}
                    onClick={(event) => {
                      let temp = product?.size;
                      temp = temp.filter((val) => {
                        return e != val;
                      });
                      setProduct({ ...product, size: temp });
                    }}
                  />
                  {e}
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 items-center mb-4">
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={fabric}
              onChange={(e) => {
                setFabric(e.target.value);
              }}
              placeholder="Enter the febric"
              className="px-3 border w-full outline-none mr-3 py-1 rounded-md"
            />
            <button
              onClick={(e) => {
                if (fabric) {
                  setProduct({
                    ...product,
                    fabric: [...product?.fabric, fabric],
                  });
                  setFabric("");
                }
              }}
              className="w-4/12 bg-newBlue text-white py-1 rounded-md"
            >
              Add New
            </button>
          </div>
          <div className="flex items-center">
            {product?.fabric?.map((e) => {
              return (
                <p
                  key={e}
                  className="mt-0 px-3 border py-0.5 mr-5 rounded-md relative"
                >
                  <AiOutlineClose
                    className="absolute -top-3 -right-3 border bg-red-500 cursor-pointer text-white rounded-full p-1"
                    size={18}
                    onClick={(event) => {
                      let temp = product?.fabric;
                      temp = temp.filter((val) => {
                        return e != val;
                      });
                      setProduct({ ...product, fabric: temp });
                    }}
                  />
                  {e}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
