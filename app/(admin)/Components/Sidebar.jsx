"use client";
import React, { useState } from "react";
import logo from "@/(main)/Assets/logo.png";
import Image from "next/image";
import { RiDashboardLine } from "react-icons/ri";
import {
  CiDeliveryTruck,
  CiLogout,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { FaBlogger, FaCircleNotch } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { deleteCookie } from "cookies-next";
import { MdOutlineEmail } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const history = useRouter();
  const data = [
    {
      name: "Dashboard",
      icon: <RiDashboardLine size={20} className="mr-2 pb-0.5" />,
      route: "/admin",
    },
    {
      name: "Therapists",
      icon: <FaUserDoctor size={20} className="mr-2 pb-0.5" />,
      sub: [
        {
          name: "All Therapists",
          route: "/admin/therapists",
        },
        {
          name: "Therapist Reviews",
          route: "/admin/therapists/reviews",
        },
      ],
    },
    {
      name: "Products",
      icon: <CiShoppingCart size={20} className="mr-2 pb-0.5" />,
      sub: [
        {
          name: "All Products",
          route: "/admin/products",
        },
        {
          name: "Add New Product",
          route: "/admin/products/add",
        },
      ],
    },
    {
      name: "Orders",
      icon: <CiDeliveryTruck size={20} className="mr-2 pb-0.5" />,
      route: "/admin/orders",
    },
    {
      name: "Users",
      icon: <CiUser size={20} className="mr-2 pb-0.5" />,

      sub: [
        {
          name: "All Users",
          route: "/admin/users",
        },
        {
          name: "Consent Forms",
          route: "/admin/consents",
        },
      ],
    },
    {
      name: "Blogs",
      icon: <FaBlogger size={20} className="mr-2 pb-0.5" />,
      sub: [
        {
          name: "All Blogs",
          route: "/admin/blogs",
        },
        {
          name: "Add New Blog",
          route: "/admin/blogs/add",
        },
      ],
    },
    // {
    //   name: "Questionnaire",
    //   icon: <FaQuestion size={20} className="mr-2 pb-0.5" />,
    //   // route: "/admin/questionnaire",
    //   sub: [
    //     {
    //       name: "All Questions",
    //       route: "/admin/questionnaire",
    //     },
    //     {
    //       name: "Add New Question",
    //       route: "/admin/questionnaire/add",
    //     },
    //   ],
    // },
    {
      name: "Schedule a Call",
      icon: <IoMdCall size={20} className="mr-2 pb-0.5" />,
      route: "/admin/schedule-call",
    },
    {
      name: "Partners",
      icon: <FaUserGroup size={20} className="mr-2 pb-0.5" />,
      route: "/admin/partners",
    },
    {
      name: "Collaboration",
      icon: <FaRegHandshake size={20} className="mr-2 pb-0.5" />,
      route: "/admin/collaboration",
    },
    {
      name: "Subscriptions",
      icon: <MdOutlineEmail size={20} className="mr-2 pb-0.5" />,
      route: "/admin/subscribe",
    },
  ];

  return (
    <div className="w-[15vw] h-[100vh] bg-[#141423] flex flex-col items-center px-2 py-2">
      <Image src={logo} alt={"Logo"} className="w-10/12" />
      <div className="w-full mt-2">
        {data?.map((e, i) => {
          return <NavItem e={e} key={i} />;
        })}
        <div
          onClick={(event) => {
            deleteCookie("admin_token");
            history.push("/");
          }}
          className={`font-bold hover:text-white transition-all py-2 hover:bg-gray-700 rounded-lg px-2 mb-0.5 cursor-pointer flex justify-between items-center ${
            pathname == "/logout" ? "text-white bg-gray-700" : "text-gray-400"
          }`}
        >
          <div className="items-center flex">
            <CiLogout size={20} className="mr-2 pb-0.5" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ e }) => {
  const history = useRouter();
  const pathname = usePathname();
  const [showBottom, setShowBottom] = useState(false);

  return (
    <>
      <div
        onClick={(event) => {
          if (e?.route) {
            history.push(e?.route);
          }
          setShowBottom(!showBottom);
        }}
        className={`font-bold hover:text-white transition-all py-2 hover:bg-gray-700 rounded-lg px-2 mb-0.5 cursor-pointer flex justify-between items-center ${
          pathname == e?.route ? "text-white bg-gray-700" : "text-gray-400"
        }`}
      >
        <div className="items-center flex">
          {e?.icon}
          {e?.name}
        </div>
        {e?.sub?.length > 0 && !showBottom && (
          <div className="">
            <AiOutlineRight />
          </div>
        )}
        {e?.sub?.length > 0 && showBottom && (
          <div className="">
            <AiOutlineDown />
          </div>
        )}
      </div>
      {e?.sub?.length > 0 &&
        showBottom &&
        e?.sub?.map((e, i) => {
          return <SubNavItem data={e} key={i} />;
        })}
    </>
  );
};

const SubNavItem = ({ data }) => {
  const pathname = usePathname();
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        if (data?.route) {
          history.push(data?.route);
        }
      }}
      className={`text-gray-400 font-bold hover:text-white transition-all py-2 hover:bg-gray-700 rounded-lg px-4 mb-0.5 cursor-pointer flex justify-between items-center pl-8 ${
        pathname == data?.route ? "text-white bg-gray-700" : "text-gray-400"
      }`}
    >
      <div className="items-center flex">
        <FaCircleNotch size={10} className="mr-2" />
        {data?.name}
      </div>
    </div>
  );
};

export default Sidebar;
