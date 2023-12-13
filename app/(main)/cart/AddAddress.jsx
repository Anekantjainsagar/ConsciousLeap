"use client";
import Context from "@/Context/Context";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useContext, useState } from "react";
import Modal from "react-modal";

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

const AddAddress = ({ modalIsOpen, setIsOpen }) => {
  const { getUser } = useContext(Context);
  const [address, setAddress] = useState({
    address: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    phone: "",
  });

  return (
    <div className="z-50 relative">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(!modalIsOpen);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="bg-white md:w-[20vw] w-[80vw] flex flex-col items-center p-3 rounded-md border">
          <h1 className="text-xl text-websiteBlue font-extrabold pb-3">
            Add new Address
          </h1>
          {[
            {
              name: "Address",
              value: address?.address,
              onchange: (e) => {
                setAddress({ ...address, address: e.target.value });
              },
            },
            {
              name: "Postal code",
              value: address?.postalCode,
              onchange: (e) => {
                setAddress({ ...address, postalCode: e.target.value });
              },
            },
            {
              name: "City",
              value: address?.city,
              onchange: (e) => {
                setAddress({ ...address, city: e.target.value });
              },
            },
            {
              name: "State",
              value: address?.state,
              onchange: (e) => {
                setAddress({ ...address, state: e.target.value });
              },
            },
            {
              name: "Country",
              value: address?.country,
              onchange: (e) => {
                setAddress({ ...address, country: e.target.value });
              },
            },
            {
              name: "Phone",
              value: address?.phone,
              onchange: (e) => {
                setAddress({ ...address, phone: e.target.value });
              },
            },
          ].map((e, i) => {
            return (
              <div key={i} className="flex items-center justify-between w-full">
                <input
                  className="w-full border px-3 py-0.5 mb-3 outline-none rounded-md"
                  type="text"
                  value={e?.value}
                  onChange={e?.onchange}
                  placeholder={e?.name}
                />
              </div>
            );
          })}
          <button
            onClick={(e) => {
              if (
                address?.address &&
                address?.city &&
                address?.postalCode &&
                address?.country &&
                address?.state &&
                address?.phone
              )
                axios
                  .post(`${BASE_URL}/user/add-address`, {
                    token: getCookie("token"),
                    address,
                  })
                  .then((response) => {
                    if (response.status === 200) {
                      setIsOpen(!modalIsOpen);
                      getUser();
                      setAddress({
                        address: "",
                        postalCode: "",
                        city: "",
                        state: "",
                        country: "",
                        phone: "",
                      });
                    }
                  });
            }}
            className="w-full bg-websiteBlue py-1 rounded-md text-white"
          >
            Add Address
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddAddress;
