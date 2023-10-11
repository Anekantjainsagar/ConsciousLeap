"use client";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import image from "@/(main)/Assets/sagrika.jpeg";
import Link from "next/link";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Navbar = ({ showLeftBar, setShowLeftBar }) => {
  const [showNav, setShowNav] = React.useState(false);
  const router = useRouter();

  return (
    <di>
      <div className="flex justify-between bg-white items-center px-7 py-3 w-full border sticky top-0 right-0 z-30">
        <div className="flex items-center">
          <HiMenuAlt1
            size={25}
            className="cursor-pointer"
            onClick={(e) => {
              setShowLeftBar(!showLeftBar);
            }}
          />
          <Link href={"/"} target="_blank">
            <BiWorld
              size={35}
              className="ml-5 p-2 rounded-full cursor-pointer bg-gray-200"
            />
          </Link>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={(e) => {
            setShowNav(!showNav);
          }}
        >
          <Image
            src={image}
            alt="Image"
            className="w-[3vw] rounded-full mr-3"
          />
          <div>
            <p>Sagrika Rastogi</p>
            <p className="-mt-0.5 text-sm text-gray-400">Therapist</p>
          </div>
        </div>
      </div>
      <div
        className={`${
          showNav ? "block" : "hidden"
        } absolute top-20 right-10 z-50 bg-white w-[10vw] rounded-lg`}
      >
        <div
          onClick={(e) => {
            router.push("/therapists/dashboard");
          }}
          className="px-3 py-1 flex items-center cursor-pointer hover:bg-blue-gray-600 hover:text-white transition-all rounded-lg"
        >
          <AiOutlineUser className="mr-1" />
          Profile
        </div>
        <div
          onClick={(e) => {
            router.push("/");
          }}
          className="px-3 py-1 cursor-pointer flex items-center hover:bg-blue-gray-600 hover:text-white transition-all rounded-lg"
        >
          <AiOutlineLogout className="mr-1" />
          Logout
        </div>
      </div>
    </di>
  );
};

export default Navbar;
