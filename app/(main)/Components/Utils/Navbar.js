"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import image from "../../Assets/logo.png";

import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { IoReorderThreeOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import Context from "@/Context/Context";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import user from "../../Assets/userLogo.png";

let nav = [
  {
    name: "consciousleap",
    items: [
      {
        name: "Home of oneness",
        route: "/",
      },
      {
        name: "Why consciousleap?",
        route: "/",
      },
      {
        name: "Communication Channels",
        route: "/",
      },
      {
        name: "How Does It Work?",
        route: "/",
      },
      {
        name: "Our Internationally Certified Therapists",
        route: "/",
      },
      {
        name: "Member Testimonials",
        route: "/",
      },
      {
        name: "Member Statistics",
        route: "/",
      },
      {
        name: "Collaborations and Initiatives",
        route: "/",
      },
      {
        name: "consciousleap Blog",
        route: "/",
      },
      {
        name: "Join consciousleap",
        route: "/",
      },
    ],
  },
  {
    name: "Therapy",
    items: [
      {
        name: "Our Mindful Therapists",
        route: "/therapy",
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
        route: "/therapy/register",
      },
    ],
  },
  {
    name: "consciousleap for Business",
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
        name: "consciousleap Vendibles",
        route: "",
      },
      {
        name: "Oneness Vendibles",
        route: "",
      },
      {
        name: "conscious Being",
        route: "",
      },
      {
        name: "conscious Edibles",
        route: "",
      },
      {
        name: "conscious Healing",
        route: "",
      },
      {
        name: "conscious Kids",
        route: "",
      },
      {
        name: "conscious Living",
        route: "",
      },
      {
        name: "conscious Teens",
        route: "",
      },
      {
        name: "conscious Travel",
        route: "",
      },
    ],
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  let history = useRouter();
  const { login } = useContext(Context);
  const [showHover, setShowHover] = useState({
    login: false,
    user: false,
    cart: false,
    search: false,
  });

  return (
    <div>
      <div className="fixed top-0 left-0 w-[100vw] bg-white z-50">
        {/* TopBar */}
        {/* <div className="flex justify-end items-center border-b py-1 pr-0 md:pr-4 font-light text-sm text-lightGrey">
          {isLogin ? (
            <>
              <div
                onClick={(e) => {
                  history.push("/user/dashboard");
                }}
                className="px-3 cursor-pointer border-r gradientHover"
              >
                Member Dashboard
              </div>
              <div
                onClick={(e) => {
                  setIsLogin(false);
                  deleteCookie("token");
                  history.push("/");
                }}
                className="px-3 cursor-pointer gradientHover"
              >
                Logout
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div> */}
        {/* Navbar Desktop*/}
        <div className="py-4 px-3 hidden md:flex justify-between items-center">
          <Image
            src={image}
            alt="Logo"
            className="w-[25vw] cursor-pointer"
            onClick={(e) => {
              history.push("/");
            }}
          />
          <div className="flex items-center w-1/2 justify-between text-lg font-light">
            <Navi showNav={showNav} setShowNav={setShowNav} />
          </div>
          <div className="flex items-center">
            <div className="relative">
              <div>
                {showHover?.login || showHover?.user ? (
                  <p className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                    {showHover?.user ? (
                      <span className="mr-2">Dashboard</span>
                    ) : null}
                  </p>
                ) : (
                  <p className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                    {showHover?.user ? (
                      <span className="mr-2">Login/Register</span>
                    ) : null}
                  </p>
                )}
              </div>
              <div>
                {getCookie("token") ? (
                  <div className="border-2 p-0.5 rounded-full mr-3 border-websiteBlue hover:scale-110 transition-all">
                    <Image
                      src={user}
                      onMouseEnter={(e) => {
                        setShowHover({ ...showHover, user: true });
                      }}
                      onMouseOut={(e) => {
                        setShowHover({ ...showHover, user: true });
                      }}
                      onMouseLeave={(e) => {
                        setShowHover({ ...showHover, user: false });
                      }}
                      alt="User"
                      className="w-[2vw] cursor-pointer"
                      onClick={(e) => {
                        history.push("/user/dashboard");
                      }}
                    />
                    {/* <svg
                      onMouseEnter={(e) => {
                        setShowHover({ ...showHover, user: true });
                      }}
                      onMouseOut={(e) => {
                        setShowHover({ ...showHover, user: true });
                      }}
                      onMouseLeave={(e) => {
                        setShowHover({ ...showHover, user: false });
                      }}
                      className="cursor-pointer"
                      onClick={(e) => {
                        history.push("/user/dashboard");
                      }}
                      width="67"
                      height="67"
                      viewBox="0 0 67 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M48.9865 42.6514V42.7056L48.9235 42.6604L48.9865 42.6514ZM17.7705 43.3548C18.8298 43.3548 18.6312 43.5623 20.1083 43.2041C20.6603 43.0702 21.8333 42.7067 22.2128 42.6575C23.2923 42.5174 24.2935 42.158 25.3121 41.8615C26.0232 41.6545 28.3524 41.8505 29.01 41.9617C31.44 42.3726 33.8571 43.2209 36.2257 43.943C36.5621 44.0455 36.8891 44.1454 37.2355 44.2315C39.5431 44.8057 41.8195 45.2403 44.2394 44.8292C44.6148 44.7654 45.0017 44.7003 45.3154 44.6067C45.488 44.5553 45.6377 44.5166 45.8151 44.4573C46.0121 44.3915 46.1328 44.3371 46.287 44.2799C47.2135 43.9359 48.6585 44.3766 51.5298 42.2732C51.6843 42.1599 51.7545 42.0509 51.908 41.9481C51.7439 42.6524 50.407 44.0418 49.7127 44.5136C49.5509 44.6236 49.4443 44.672 49.2791 44.7833C48.213 45.5017 46.2 45.9501 44.9276 45.9503C44.6377 45.9503 44.5723 46.0224 44.3357 46.0082C44.0688 45.9919 44.2802 45.9471 43.6847 45.9516C41.8389 45.9654 39.723 45.2296 37.95 44.7614L35.8462 44.106C34.5612 43.6878 32.756 43.1924 31.452 42.982C29.802 42.7157 28.0186 42.6483 26.3761 42.9797L24.2288 43.5915C22.2606 44.2498 20.6198 44.8127 18.6535 43.8784C18.3903 43.7534 17.9157 43.553 17.7705 43.3548ZM51.908 41.9481V41.8941L51.9712 41.9391L51.908 41.9481ZM29.6185 41.0826C32.1065 41.0826 34.6419 41.7922 36.9152 42.5501C37.1497 42.6284 37.3945 42.6913 37.6596 42.7796C38.1638 42.9477 38.6639 43.0819 39.1465 43.2403L41.4627 43.8456C41.7307 43.8985 42.0154 44.004 42.3322 44.004V44.058C39.7794 44.058 37.9959 43.4585 35.7312 42.8145C33.765 42.2554 32.2597 41.6281 30.0472 41.1948C29.8878 41.1636 29.7371 41.1578 29.6185 41.0826ZM15.4983 38.5398C15.4983 38.121 15.471 38.24 15.5523 37.8906C15.6116 37.9758 15.5517 37.8107 15.6286 38.0308C15.951 38.9546 15.7441 38.6127 16.3004 39.6852L16.7333 40.3344C16.817 40.446 16.8765 40.5382 16.9712 40.6375C17.5671 41.2617 18.8278 42.2121 19.5557 42.2728V42.3809C18.6531 42.3809 18.2298 42.5987 17.0191 42.1584C16.3509 41.9156 16.2941 41.8923 16.086 41.3604L15.7475 40.4546C15.7138 40.3335 15.694 40.1863 15.672 40.0974C15.567 39.6743 15.4983 39.0476 15.4983 38.5398ZM34.9746 23.6621C37.1879 23.6621 39.3603 24.0501 41.0541 24.6156C41.8994 24.8979 42.7841 25.2122 43.5769 25.6093L46.8369 27.5971L47.8838 28.7683L49.1269 30.6091C49.1858 30.705 49.2351 30.7878 49.2854 30.8833C49.3476 31.0012 49.3707 31.0625 49.4276 31.1739C49.5231 31.3611 49.6152 31.5165 49.7115 31.7556L50.3509 33.5507C50.702 34.9071 50.833 36.0203 50.5879 37.4903C50.5742 37.5722 50.555 37.7289 50.5344 37.8156C50.5023 37.9515 50.4741 37.9753 50.4521 38.1118L49.8341 39.8742C49.7853 39.9713 49.7601 40.0326 49.7081 40.1269L49.0624 41.1041C48.807 41.4551 48.474 41.8522 48.131 42.1205C48.0282 42.2008 48.0265 42.1831 47.9177 42.286C47.8033 42.3943 47.8122 42.3899 47.6778 42.4788C46.5979 43.193 46.4198 43.3548 45.1996 43.3548C43.0288 43.3548 41.2082 42.8377 39.2808 42.2945C38.641 42.1143 38.0823 41.9151 37.4708 41.724L33.8168 40.6714C31.5131 40.0891 28.9969 39.8815 26.6755 40.4658C26.2057 40.5839 25.8695 40.6959 25.4187 40.8321L24.0499 41.0863C23.4942 41.1971 21.7409 41.8027 21.5095 41.784L20.1578 41.5085C18.0121 40.7874 16.8471 39.5796 16.3945 37.2109C16.2973 36.702 16.242 35.4305 16.3396 34.9989C16.4728 34.4099 17.4574 32.9434 17.8394 32.4413C17.9546 32.2899 18.0444 32.152 18.164 32.0085L19.9795 29.9828C20.0218 29.9337 20.0333 29.9176 20.0817 29.8685C20.1834 29.7657 20.1797 29.7827 20.2915 29.6997L21.818 28.3589C21.975 28.2338 22.1148 28.1378 22.2833 28.0126C22.4574 27.8832 22.593 27.7987 22.7571 27.6748L23.723 27.0179C23.9097 26.9085 24.0361 26.8216 24.2184 26.7017C25.0141 26.1781 26.8354 25.3541 27.7722 25.0078C30.0245 24.1751 32.2938 23.6621 34.9746 23.6621ZM48.9865 42.6514C49.0419 42.5686 49.7508 41.7996 50.1876 41.1475C51.2622 39.5435 51.7767 37.2184 51.6379 35.3475C51.6043 34.8945 51.3384 33.4558 51.189 33.0373L50.7177 31.669C50.9684 31.8527 51.7224 33.3457 51.8729 33.6517L52.1961 34.4106C52.47 35.0461 52.6223 35.807 52.7412 36.5165C52.9229 37.6011 52.9081 37.8727 52.8281 38.973C52.798 39.3873 51.8994 40.6346 51.5704 40.9614L51.0282 41.447C50.8215 41.635 50.6779 41.7742 50.4257 41.9266C50.0281 42.1667 49.4613 42.5409 48.9865 42.6514ZM50.6636 31.5608H50.7177L50.6727 31.624L50.6636 31.5608ZM50.6636 31.5608H50.6096L50.6547 31.4977L50.6636 31.5608ZM17.9328 30.7493L17.9489 30.7654C17.9479 30.7643 17.9274 30.7547 17.9328 30.7493ZM18.095 30.587V30.6412L18.032 30.5961L18.095 30.587ZM22.7477 24.4195L20.2083 26.5869C20.1999 26.5941 20.1875 26.6044 20.1792 26.6118L19.0441 27.8032C19.0369 27.8117 19.0263 27.8236 19.0191 27.8322L18.7443 28.1525C18.6231 28.3186 18.5065 28.388 18.3863 28.5519L17.8794 29.2352C17.3228 30.0326 16.9588 30.4982 16.5168 31.3892C16.4235 31.5777 16.3559 31.6902 16.2723 31.902C15.8352 33.009 15.6524 33.3779 15.446 34.5924C15.4042 34.8387 15.4348 34.6799 15.3454 34.8705L14.6443 37.3071C14.5162 38.2086 14.5872 38.7376 14.6325 39.5679C14.6593 40.0578 14.8056 40.4472 14.9032 40.8662C14.6274 40.6815 14.1572 39.9784 14.015 39.6444C13.8217 39.1904 13.8388 39.3187 13.6475 38.7135C13.6092 38.5924 13.5863 38.5778 13.5529 38.4294C13.5199 38.2831 13.5146 38.225 13.4831 38.0664C13.4318 37.8086 13.4196 37.6204 13.3838 37.3C13.2485 36.0865 13.4504 34.7796 13.9069 33.6484C13.9624 33.5108 13.9904 33.4416 14.0255 33.3341L14.1629 33.0387C14.2172 32.925 14.2288 32.8545 14.289 32.732C14.3486 32.6107 14.3739 32.5661 14.4346 32.4446C14.6829 31.9466 15.4025 30.8092 15.7587 30.3606L16.0972 29.9416C16.1044 29.9332 16.1152 29.9214 16.1225 29.9129C16.1298 29.9044 16.1402 29.8922 16.1474 29.8837L17.5966 28.3032C17.7049 28.1945 17.6907 28.1568 17.7928 28.0665C17.8871 27.9829 17.927 27.9705 18.0279 27.869L19.6003 26.4657C19.7657 26.3342 19.9344 26.2174 20.0971 26.097C20.7298 25.6291 21.4822 25.0691 22.1704 24.7078C22.3861 24.5947 22.5155 24.4736 22.7477 24.4195ZM22.9101 24.3112V24.2573L22.9732 24.3023L22.9101 24.3112ZM41.5747 23.7704L41.5909 23.7865C41.5899 23.7854 41.5694 23.7758 41.5747 23.7704ZM18.095 30.587C18.1386 30.4243 18.5997 29.8227 18.7294 29.6524L21.0031 27.1111C21.2075 26.9055 21.3671 26.8026 21.5705 26.5966C21.703 26.4625 21.7384 26.4626 21.8681 26.3532C22.7562 25.604 23.6305 24.9018 24.6397 24.3098C25.6962 23.6899 26.5592 23.1548 27.7713 22.6806L28.9477 22.2338C29.7672 21.912 30.309 21.8853 31.1877 21.823C31.3903 21.8086 31.4018 21.7675 31.673 21.7672C32.3138 21.7666 32.4185 21.7171 32.7001 21.7124C33.354 21.7013 34.9127 21.8374 35.6719 21.937C35.9488 21.9732 36.3061 22.0394 36.5934 22.0973C37.5062 22.2809 38.2678 22.4788 39.1199 22.7627L40.6909 23.3557C40.8364 23.4238 40.9262 23.4492 41.0705 23.5171L41.4125 23.7162C41.2697 23.7043 38.5755 22.9013 37.3015 22.8499L33.8904 22.7403L30.7864 23.1529C29.6876 23.3725 28.5833 23.6907 27.6237 24.0476C27.3971 24.132 27.1749 24.2245 26.9204 24.3182L25.5393 24.9389C25.2299 25.0629 25.1213 25.1547 24.8577 25.2851C23.9494 25.7351 23.1819 26.2433 22.358 26.7889L19.6234 29.0316L18.095 30.587ZM36.327 21.0653C39.3094 21.0653 41.5064 21.8279 43.7315 22.6957L45.0727 23.3561C45.1968 23.4247 45.2719 23.4505 45.3986 23.5171L46.0431 23.9005C46.9317 24.4967 47.0922 24.5125 48.1358 25.3784L49.7035 26.7863L51.0969 28.4226L52.107 29.9551C52.5167 30.6612 52.7466 31.2258 53.0449 31.9929C53.542 33.2712 53.6392 34.5605 53.6392 35.9971H53.5851C53.5851 35.9334 53.5445 35.6813 53.5271 35.5682L53.314 34.8076C53.034 33.8234 52.5789 32.919 52.0811 32.037C51.6313 31.2401 51.4101 30.9801 50.8575 30.2309L46.8085 26.2188L45.4552 25.0836C44.8755 24.6457 44.2998 24.2082 43.667 23.8421C41.352 22.5024 39.8268 21.8713 37.215 21.2594C36.935 21.1938 36.6314 21.1194 36.327 21.1194V21.0653ZM12.4146 36.3217C12.4146 37.5174 12.5414 38.561 12.9764 39.655C13.2137 40.252 13.8615 41.2588 14.2979 41.6336L14.4455 41.7566C14.7733 42.033 15.6296 42.5509 15.7221 42.6439C16.1495 43.0737 16.2003 43.7075 17.951 44.5809C18.5137 44.8615 19.1047 45.0876 19.7499 45.2166C19.8486 45.2363 20.056 45.2837 20.1079 45.2913C22.5116 45.6402 25.5612 43.6794 28.6988 43.6794C30.1302 43.6794 31.447 43.8799 32.8109 44.22L36.4556 45.282C40.3148 46.5704 44.8923 47.7623 48.8417 46.0771L49.9054 45.5181C50.3122 45.2658 50.6729 44.9549 51.0381 44.6489L51.84 43.8278L52.6206 42.6607C52.6549 42.5984 52.6971 42.5081 52.7288 42.4442C52.769 42.3633 52.7958 42.3083 52.8394 42.2303C53.001 41.9419 53.0787 41.6329 53.2241 41.3167L53.5322 40.3262C53.5663 40.1083 53.6006 40.0065 53.6512 39.7962C53.7004 39.5915 53.6889 39.4951 53.7785 39.2741C54.0404 38.6271 54.2582 38.0104 54.4011 37.3C54.5643 36.4894 54.662 34.8214 54.5092 34.0993C54.4006 33.5865 54.38 33.2147 54.2034 32.6195C54.0375 32.0598 53.9001 31.3873 53.6176 30.8792L53.293 30.1759C53.2449 30.0706 53.2371 30.0727 53.1976 30.0007L52.3091 28.5088C52.2162 28.3725 52.1947 28.3653 52.102 28.229L51.4307 27.3314C51.2705 27.128 51.1303 26.9794 50.9589 26.7752L49.567 25.354C49.5552 25.3435 49.5196 25.3153 49.5076 25.3052C49.4991 25.2979 49.4864 25.288 49.4778 25.2809C49.4691 25.2736 49.4574 25.263 49.4487 25.2558L48.8652 24.7573C48.1109 24.1097 47.2867 23.5311 46.4262 23.0306L45.1099 22.2911C44.8664 22.1562 44.6592 22.0914 44.4069 21.9661C41.8311 20.6869 38.3931 20.0914 35.5696 20.0914C33.7881 20.0914 31.7596 20.3655 30.2067 20.8419C29.362 21.1012 28.5369 21.1894 27.7044 21.4234C27.5211 21.4748 27.3618 21.5066 27.1906 21.5587C26.1482 21.8764 25.0372 22.1905 24.0462 22.6883C23.8934 22.765 23.7613 22.8035 23.5943 22.8856C23.3112 23.0249 23.0693 23.15 22.8018 23.2834L20.8526 24.4178C20.6809 24.5179 20.6279 24.5708 20.4651 24.6796C19.9799 25.0039 19.4983 25.3247 19.0557 25.7048C18.3844 26.2813 17.7389 26.8046 17.1078 27.4357L14.8165 30.0677C14.7154 30.2072 14.6687 30.2839 14.5692 30.4155C13.6432 31.6413 12.9805 33.1384 12.6186 34.6323C12.5817 34.7846 12.5562 35 12.5183 35.1812C12.4516 35.5014 12.4146 35.927 12.4146 36.3217Z"
                        fill="#4961AC"
                      />
                    </svg> */}
                  </div>
                ) : (
                  <AiOutlineUser
                    onMouseEnter={(e) => {
                      setShowHover({ ...showHover, login: true });
                    }}
                    onMouseOut={(e) => {
                      setShowHover({ ...showHover, login: true });
                    }}
                    onMouseLeave={(e) => {
                      setShowHover({ ...showHover, login: false });
                    }}
                    onClick={(e) => {
                      history.push("/user/login");
                    }}
                    className="text-websiteBlue border-websiteBlue p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
                    size={35}
                  />
                )}
              </div>
            </div>
            <div className="relative">
              {showHover?.search ? (
                <p className="absolute -bottom-7 pr-3 left-1/2 -translate-x-1/2">
                  Search
                </p>
              ) : null}
              <AiOutlineSearch
                onMouseEnter={(e) => {
                  setShowHover({ ...showHover, search: true });
                }}
                onMouseOut={(e) => {
                  setShowHover({ ...showHover, search: true });
                }}
                onMouseLeave={(e) => {
                  setShowHover({ ...showHover, search: false });
                }}
                onClick={(e) => {
                  history.push("/therapy");
                }}
                className="text-pinkishRed border-pinkishRed p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
                size={35}
              />
            </div>
            <div className="relative">
              {showHover?.cart ? (
                <p className="absolute -bottom-7 right-3">Cart</p>
              ) : null}
              <AiOutlineShoppingCart
                onMouseEnter={(e) => {
                  setShowHover({ ...showHover, cart: true });
                }}
                onMouseOut={(e) => {
                  setShowHover({ ...showHover, cart: true });
                }}
                onMouseLeave={(e) => {
                  setShowHover({ ...showHover, cart: false });
                }}
                className="text-oceanGreen border-oceanGreen p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
                size={35}
              />
            </div>
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
        <div className={`${showNav ? "md:hidden block my-2" : "hidden"}`}>
          <div className="flex flex-col text-lg font-light">
            <Navi showNav={showNav} setShowNav={setShowNav} />
          </div>
          <div className="ml-4 flex items-center">
            <AiOutlineUser
              onClick={(e) => {
                history.push("/user/login");
              }}
              className="text-websiteBlue border-websiteBlue p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={35}
            />
            <AiOutlineSearch
              onClick={(e) => {
                history.push("/therapy");
              }}
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
        className={`md:my-[7vw] ${!showNav ? "my-[24vw]" : "my-[73vw]"}`}
      ></div>
    </div>
  );
};

const Navi = ({ showNav, setShowNav }) => {
  return nav.map((e) => {
    return (
      <NavItems e={e} key={e?.name} showNav={showNav} setShowNav={setShowNav} />
    );
  });
};

const NavItems = ({ e, showNav, setShowNav }) => {
  const [hover, setHover] = useState(false);
  const history = useRouter();
  const pathname = usePathname();
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
      <div
        className="blueHover cursor-pointer flex z-40 items-center md:mb-0 mb-1.5"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          setHover(!hover);
        }}
      >
        {e?.name}
        <AiOutlineDown className="ml-1 mt-1" size={15} />
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          setHover(!hover);
        }}
        className={`absolute ${
          !hover ? "hidden" : "block"
        } bg-white text-xs w-[55vw] md:w-[13vw] px-3 rounded-md z-50 top-8 md:top-7 shadow-lg shadow-darkGrey`}
      >
        <div className="mt-2 bg-transparent"></div>
        {e?.items.map((data, i) => {
          return (
            <p
              className="mb-[13px] text-darkGrey blueHover cursor-pointer z-50"
              key={i}
              onClick={(e) => {
                const element = document.getElementById(
                  data?.name?.replaceAll(" ", "")?.toLowerCase()
                );
                if (data?.route) {
                  if (pathname != data?.route) {
                    history.push(data.route);
                  }
                }
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
            >
              {data?.name.slice(0, 25) +
                (data?.name?.length > 25 ? "...." : "")}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
