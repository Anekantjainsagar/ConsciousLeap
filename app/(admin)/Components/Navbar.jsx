import Image from "next/image";
import React from "react";
import logo from "@/(main)/Assets/notes-bg.png";
import { BiWorld } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-white py-1.5 border-b">
      <div className="bg-gray-200 p-2 rounded-full">
        <BiWorld size={20} />
      </div>
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="w-[3vw] mr-2" />
        <div className="flex flex-col items-start text-xs">
          <p className="text-newBlue font-bold">Consciousleap</p>
          <p className="mt-0">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
