"use client";
import React from "react";
import Modal from "react-modal";
import image from "./Assets/subscribe.png";
import Image from "next/image";
import Context from "@/Context/Context";
import { AiOutlineClose } from "react-icons/ai";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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

const ReactModal = () => {
  const { showSubscribe, setShowSubscribe } = React.useContext(Context);
  const [email, setEmail] = React.useState("");

  function closeModal() {
    setShowSubscribe(false);
  }

  return (
    <div className="z-50 relative">
      <Toaster />
      <Modal
        isOpen={showSubscribe}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AiOutlineClose
          size={40}
          onClick={closeModal}
          className="absolute rounded-full right-5 top-5 bg-white px-2 cursor-pointer border z-20"
        />
        <Image
          src={image}
          alt={"Image"}
          className="w-[100vw] min-[600px]:w-[70vw] min-[1040px]:w-[40vw]"
        />
        <div className="flex items-center md:text-base text-xs flex-col justify-center h-full w-full absolute top-0 left-0">
          <p className="text-center">
            Subscribe to our curated offers
            <br />
            and mindful blogs delivered to your inbox
          </p>
          <p className="text-websiteBlue">#NoSpamPledge</p>
          <div className="flex items-center justify-center mt-2 md:mt-4 w-8/12">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border outline-none px-3 py-[7px] rounded-tl-md rounded-bl-md focus:border-websiteBlue"
              placeholder="Your Email Address"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post(`${BASE_URL}/user/subscribe`, {
                    email,
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      toast.success("Your subscription is mindfully added!");
                      setEmail("");
                      closeModal();
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="bg-websiteBlue px-4 py-2 text-white rounded-tr-md rounded-br-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
