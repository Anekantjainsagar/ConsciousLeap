"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../Assets/logo.png";

import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { IoReorderThreeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

let nav = [
  {
    name: "Consciousleap",
    items: [
      {
        name: "Home of oneness",
        route: "",
      },
      {
        name: "Why consciousleap?",
        route: "",
      },
      {
        name: "Communication Channels",
        route: "",
      },
      {
        name: "How Does It Work?",
        route: "",
      },
      {
        name: "Our Internationally Certified Therapists",
        route: "",
      },
      {
        name: "Member Testimonials",
        route: "",
      },
      {
        name: "Member Statistics",
        route: "",
      },
      {
        name: "Collaborations and Initiatives",
        route: "",
      },
      {
        name: "Consciousleap Blog",
        route: "",
      },
      {
        name: "Join Consciousleap",
        route: "",
      },
    ],
  },
  {
    name: "Therapy",
    items: [
      {
        name: "Our Mindful Therapists",
        route: "/therapists",
      },
      {
        name: "Areas of Expertise",
        route: "/expertise-area",
      },
      {
        name: "Questionnaire",
        route: "/questionnaire",
      },
      {
        name: "Register as a Therapist",
        route: "/therapists/register",
      },
    ],
  },
  {
    name: "Consciousleap for Business",
    items: [
      {
        name: "Why consciousleap for Business?",
        route: "",
      },
      {
        name: "Our Global Clients",
        route: "",
      },
      {
        name: "Client Testimonials",
        route: "",
      },
      {
        name: "Schedule a Call",
        route: "",
      },
    ],
  },
  {
    name: "Conscious Store",
    items: [
      {
        name: "Consciousleap Vendibles",
        route: "",
      },
      {
        name: "Oneness Vendibles",
        route: "",
      },
      {
        name: "Conscious Being",
        route: "",
      },
      {
        name: "Conscious Edibles",
        route: "",
      },
      {
        name: "Conscious Healing",
        route: "",
      },
      {
        name: "Conscious Kids",
        route: "",
      },
      {
        name: "Conscious Living",
        route: "",
      },
      {
        name: "Conscious Teens",
        route: "",
      },
      {
        name: "Conscious Travel",
        route: "",
      },
    ],
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  let history = useRouter();

  return (
    <div>
      <div className="fixed top-0 left-0 w-[100vw] bg-white z-10">
        {/* TopBar */}
        <div className="flex justify-end items-center border-b py-1 pr-0 md:pr-4 font-light text-sm text-lightGrey">
          <div
            onClick={(e) => {
              history.push("/user/login");
            }}
            className="px-3 cursor-pointer border-r gradientHover"
          >
            Login
          </div>
          <div
            onClick={(e) => {
              history.push("/user/register");
            }}
            className="px-3 cursor-pointer gradientHover"
          >
            Registration
          </div>
        </div>
        {/* Navbar Desktop*/}
        <div className="py-2 px-3 hidden md:flex justify-between items-center">
          <Image
            src={image}
            alt="Logo"
            className="w-[25vw] cursor-pointer"
            onClick={(e) => {
              history.push("/");
            }}
          />
          <div className="flex items-center w-1/2 justify-between text-lg font-light">
            <Navi />
          </div>
          <div className="flex items-center">
            <AiOutlineUser
              className="text-websiteBlue border-websiteBlue p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={40}
            />
            <AiOutlineSearch
              className="text-pinkishRed border-pinkishRed p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={40}
            />
            <AiOutlineShoppingCart
              className="text-oceanGreen border-oceanGreen p-1.5 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={40}
            />
          </div>
        </div>
        {/* Navbar Mobile */}
        <div className="py-2 px-3 w-[100vw] md:hidden flex justify-between items-center">
          <Image
            src={image}
            alt="Logo"
            className="w-[60vw]"
            onClick={(e) => {
              history.push("/");
            }}
          />
          <IoReorderThreeOutline
            size={35}
            onClick={(e) => {
              setShowNav(!showNav);
            }}
            className="border rounded-md px-0.5"
          />
        </div>
        <div className={`${showNav ? "block my-2" : "hidden"}`}>
          <div className="flex flex-col text-lg font-light">
            <Navi />
          </div>
          <div className="ml-4 flex items-center">
            <AiOutlineUser
              className="text-websiteBlue border-websiteBlue p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={35}
            />
            <AiOutlineSearch
              className="text-pinkishRed border-pinkishRed p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={35}
            />
            <AiOutlineShoppingCart
              className="text-oceanGreen border-oceanGreen p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={35}
            />
          </div>
        </div>
      </div>
      <div
        className={`md:my-[8vw] ${!showNav ? "my-[24vw]" : "my-[73vw]"}`}
      ></div>
    </div>
  );
};

const Navi = () => {
  return nav.map((e) => {
    return <NavItems e={e} key={e?.name} />;
  });
};

const NavItems = ({ e }) => {
  const [hover, setHover] = useState(false);
  const history = useRouter();
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="relative md:ml-0 ml-5"
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        setHover(!hover);
      }}
    >
      <p
        className="blueHover cursor-pointer flex items-center md:mb-0 mb-1.5"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          setHover(!hover);
        }}
      >
        {e?.name}
        <AiOutlineDown className="ml-1 mt-1" size={15} />
      </p>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          setHover(!hover);
        }}
        className={`absolute z-30 ${
          !hover ? "hidden" : "block"
        } bg-white text-xs w-fit px-3 rounded-md top-8 md:top-7 shadow-lg shadow-darkGrey break-keep`}
      >
        <div className="mt-2 bg-transparent"></div>
        {e?.items.map((data, i) => {
          return (
            <p
              className="mb-2.5 text-darkGrey blueHover cursor-pointer"
              key={i}
              onClick={(e) => {
                // console.log(e)
                history.push(data.route);
              }}
            >
              {data?.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
