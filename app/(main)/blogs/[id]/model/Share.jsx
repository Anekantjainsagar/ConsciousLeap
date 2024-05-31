"use client";
import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import whatsapp from "@/(main)/Assets/blog-icons/whatsapp.png";
import instagram from "@/(main)/Assets/blog-icons/instagram.png";
import linkedin from "@/(main)/Assets/blog-icons/linkedin.png";
import facebook from "@/(main)/Assets/blog-icons/facebook.png";
import twitter from "@/(main)/Assets/blog-icons/twitter.png";
import Image from "next/image";

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

const ShareModel = ({ showSubscribe, setShowSubscribe }) => {
  const pathname = usePathname();
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
      >
        <div className="w-[85vw] md:w-[32vw] bg-white border rounded-md h-fit py-3 px-5">
          <div className="flex items-center justify-between">
            <h1 className="text-websiteBlue text-lg font-normal">Share</h1>
            <AiOutlineClose
              size={20}
              onClick={closeModal}
              className="cursor-pointer"
            />
          </div>
          <div className="w-full h-[1px] my-1 bg-gray-300"></div>
          <div className="flex items-center my-3 justify-between">
            <Image
              src={whatsapp}
              alt="Images"
              className="w-[9vw] md:w-[4vw] h-[9vw] md:h-[4vw] cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://wa.me/send?text=${
                    "https://consciousleap.co" + pathname
                  }`,
                  "_blank"
                );
              }}
            />
            {/* <Image
              src={instagram}
              alt="Images"
              className="w-[9vw] md:w-[4vw] h-[9vw] md:h-[4vw] p-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://www.instagram.com/?url=${
                    "https://consciousleap.co" + pathname
                  }`,
                  "_blank"
                );
              }}
            /> */}
            <Image
              src={linkedin}
              alt="Images"
              className="w-[9vw] md:w-[4vw] h-[9vw] md:h-[4vw] p-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${
                    "https://consciousleap.co" + pathname
                  }`,
                  "_blank"
                );
              }}
            />
            <Image
              src={facebook}
              alt="Images"
              className="w-[9vw] md:w-[4vw] h-[9vw] md:h-[4vw] p-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${
                    "https://consciousleap.co" + pathname
                  }`,
                  "_blank"
                );
              }}
            />
            <Image
              src={twitter}
              alt="Images"
              className="w-[9vw] md:w-[4vw] h-[9vw] md:h-[4vw] p-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://twitter.com/intent/tweet?url=${
                    "https://consciousleap.co" + pathname
                  }`,
                  "_blank"
                );
              }}
            />
          </div>
          <div className="border-gray-300 px-2.5 py-2 border rounded-md mt-3 flex items-center">
            <p className="w-9/12 line-clamp-1 mr-4">
              {"https://consciousleap.co" + pathname}
            </p>
            <button
              onClick={(e) => {
                navigator.clipboard.writeText(
                  "https://consciousleap.co" + pathname
                );
                toast.success("Copied successfully");
                setShowSubscribe(false);
              }}
              className="bg-websiteBlue w-3/12 text-white px-4 py-1 rounded-md"
            >
              Copy
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShareModel;
