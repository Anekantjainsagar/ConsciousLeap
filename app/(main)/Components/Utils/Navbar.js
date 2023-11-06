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
import { deleteCookie, setCookie } from "cookies-next";
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
              {showHover?.login || showHover?.user ? (
                <p className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                  <span className="mr-2">
                    {showHover?.user ? "Dashboard" : ""}
                  </span>
                  <span className="mr-2">{showHover?.login ? "Login/Register" : ""}</span>
                </p>
              ) : null}
              {login?._id ? (
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
      <p
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
      </p>
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
