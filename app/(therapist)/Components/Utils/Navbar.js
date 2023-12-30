"use client";
import React, { useContext } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import image from "@/(main)/Assets/sagrika.jpeg";
import Link from "next/link";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import { deleteCookie } from "cookies-next";

const Navbar = ({ showLeftBar, setShowLeftBar }) => {
  const [showNav, setShowNav] = React.useState(false);
  const router = useRouter();
  const { therapists } = useContext(Context);

  return (
    <di>
      <div className="flex w-full justify-between bg-white items-center px-3 md:px-7 py-3 border sticky top-0 right-0 z-30">
        <div className="flex items-center">
          <HiMenuAlt1
            size={25}
            className="cursor-pointer md:block hidden"
            onClick={(e) => {
              setShowLeftBar(!showLeftBar);
            }}
          />
          {/* <Link href={"/"} target="_blank"> */}
          <BiWorld
            size={35}
            onClick={(e) => {
              router.push("/");
              therapists.setIsTherapistLogin(false);
              deleteCookie("therapist_token");
            }}
            className="md:ml-5 p-2 rounded-full cursor-pointer bg-gray-200"
          />
          {/* </Link> */}
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={(e) => {
            setShowNav(!showNav);
          }}
        >
          <Image
            src={
              therapists?.therapist?.photo?.length > 1
                ? therapists?.therapist?.photo
                : image
            }
            alt="Image"
            width={1000}
            height={1000}
            className="w-[10vw] md:w-[3vw] h-[10vw] md:h-[3vw] object-cover object-center rounded-full mr-3"
          />
          <div>
            <p>{therapists?.therapist?.name}</p>
            <p className="-mt-0.5 text-sm text-gray-400">Therapist</p>
          </div>
        </div>
      </div>
      <div
        className={`${
          showNav ? "block" : "hidden"
        } absolute top-16 md:top-20 right-1 md:right-10 z-50 bg-white w-[35vw] md:w-[10vw] rounded-lg`}
      >
        <div
          onClick={(e) => {
            router.push("/therapy/dashboard");
          }}
          className="px-3 py-1 flex items-center cursor-pointer hover:bg-blue-gray-600 hover:text-white transition-all rounded-lg"
        >
          <AiOutlineUser className="mr-1" />
          Profile
        </div>
        <div
          onClick={(e) => {
            router.push("/therapy/edit-profile");
          }}
          className="px-3 py-1 flex items-center cursor-pointer hover:bg-blue-gray-600 hover:text-white transition-all rounded-lg"
        >
          <AiOutlineUser className="mr-1" />
          Edit Profile
        </div>
        <div
          onClick={(e) => {
            router.push("/");
            therapists.setIsTherapistLogin(false);
            deleteCookie("therapist_token");
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
