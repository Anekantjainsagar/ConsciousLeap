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
import Search from "../Search";
import { IoReorderThreeOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import Context from "../../../Context/Context";
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
        name: "Conscious Blogs",
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
        route: "/bussiness",
      },
      {
        name: "Our Global Clients",
        route: "/bussiness",
      },
      {
        name: "Client Testimonials",
        route: "/bussiness",
      },
      {
        name: "Schedule a Call",
        route: "/bussiness",
      },
    ],
  },
  // {
  //   name: "Conscious Store",
  //   route: "/conscious-store",
  // },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  let history = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { login, therapists } = useContext(Context);
  const [showHover, setShowHover] = useState({
    login: false,
    user: false,
    cart: false,
    search: false,
  });

  return (
    <div>
      <Search modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className="fixed top-0 left-0 w-[100vw] bg-white z-50">
        <div className="py-4 px-5 hidden md:flex justify-between items-center">
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
                <p className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                  {showHover?.user ? (
                    <span className="mr-2">Dashboard</span>
                  ) : null}
                  {showHover?.login ? (
                    <span className="mr-2">Login/Register</span>
                  ) : null}
                </p>
              </div>
              <div>
                {login?._id ? (
                  <>
                    <div className="border-2 min-[768px]:w-[5vw] min-[768px]:h-[5vw] min-[900px]:w-[4vw] min-[900px]:h-[4vw] min-[1000px]:w-[4vw] min-[1000px]:h-[4vw] min-[1100px]:w-[3.5vw] min-[1100px]:h-[3.5vw] min-[1300px]:w-[3vw] min-[1300px]:h-[3vw] min-[1500px]:w-[2.5vw] min-[1500px]:h-[2.5vw] min-[1650px]:w-[2.3vw] min-[1650px]:h-[2.3vw] min-[2000px]:w-[2vw] min-[2000px]:h-[2vw] min-[2200px]:w-[1.7vw] min-[2200px]:h-[1.7vw] min-[2600px]:w-[1.5vw] min-[2600px]:h-[1.5vw] rounded-full mr-3 flex items-center justify-center border-websiteBlue hover:scale-110 transition-all">
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
                        className="p-1.5 object-contain cursor-pointer"
                        onClick={(e) => {
                          history.push("/user/dashboard");
                        }}
                      />
                    </div>
                  </>
                ) : therapists?.therapist?._id ? (
                  <>
                    <div className="border-2 min-[768px]:w-[5vw] min-[768px]:h-[5vw] min-[900px]:w-[4vw] min-[900px]:h-[4vw] min-[1000px]:w-[4vw] min-[1000px]:h-[4vw] min-[1100px]:w-[3.5vw] min-[1100px]:h-[3.5vw] min-[1300px]:w-[3vw] min-[1300px]:h-[3vw] min-[1500px]:w-[2.5vw] min-[1500px]:h-[2.5vw] min-[1650px]:w-[2.3vw] min-[1650px]:h-[2.3vw] min-[2000px]:w-[2vw] min-[2000px]:h-[2vw] min-[2200px]:w-[1.7vw] min-[2200px]:h-[1.7vw] min-[2600px]:w-[1.5vw] min-[2600px]:h-[1.5vw] rounded-full mr-3 flex items-center justify-center border-websiteBlue hover:scale-110 transition-all p-0.5">
                      <Image
                        src={therapists?.therapist?.photo}
                        width={1000}
                        height={1000}
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
                        className="object-cover object-center w-fit h-fit aspect-square rounded-full cursor-pointer"
                        onClick={(e) => {
                          history.push("/therapy/dashboard");
                        }}
                      />
                    </div>
                  </>
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
                  setIsOpen(!modalIsOpen);
                }}
                className="text-pinkishRed border-pinkishRed p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
                size={35}
              />
            </div>
            {/* <div className="relative">
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
                onClick={(e) => {
                  history.push("/cart/1");
                }}
                className="text-oceanGreen border-oceanGreen p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
                size={35}
              />
            </div> */}
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
            {login?._id ? (
              <>
                <div className="border-2 w-[10vw] min-[500px]:w-[8vw] min-[580px]:w-[6.3vw] h-[10vw] min-[500px]:h-[8vw] min-[580px]:h-[6.3vw] rounded-full mr-3 flex items-center justify-center border-websiteBlue hover:scale-110 transition-all">
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
                    className="p-1.5 object-contain cursor-pointer"
                    onClick={(e) => {
                      history.push("/user/dashboard");
                    }}
                  />
                </div>
              </>
            ) : therapists?.therapist?._id ? (
              <>
                <div className="border-2 w-[10vw] min-[500px]:w-[8vw] min-[580px]:w-[6.3vw] h-[10vw] min-[500px]:h-[8vw] min-[580px]:h-[6.3vw] rounded-full mr-3 flex p-1 items-center justify-center border-websiteBlue hover:scale-110 transition-all">
                  <Image
                    src={therapists?.therapist?.photo}
                    width={1000}
                    height={1000}
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
                    className="object-cover object-center w-fit h-fit aspect-square rounded-full cursor-pointer"
                    onClick={(e) => {
                      history.push("/therapy/dashboard");
                    }}
                  />
                </div>
              </>
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
            <AiOutlineSearch
              onClick={(e) => {
                setIsOpen(!modalIsOpen);
              }}
              className="text-pinkishRed border-pinkishRed p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={35}
            />
            {/* <AiOutlineShoppingCart
              onClick={(e) => {
                history.push("/cart/1");
              }}
              className="text-oceanGreen border-oceanGreen p-1 border-2 mr-3 rounded-full hover:scale-110 cursor-pointer transition-all"
              size={35}
            /> */}
          </div>
        </div>
      </div>
      <div
        className={`md:my-[7vw] ${!showNav ? "my-[18vw]" : "my-[73vw]"}`}
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
  const context = useContext(Context);
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
        className="blueHover cursor-pointer min-[1700px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base min-[1050px]:text-[12px] min-[768px]:text-[8px] min-[800px]:text-[9px] text-sm flex z-40 items-center md:mb-0 mb-1.5"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (!e?.items) {
            history.push(e?.route);
          }
          setHover(!hover);
        }}
      >
        {e?.name}
        {e?.items && <AiOutlineDown className="ml-1 mt-1" size={15} />}
      </div>
      {e?.items && e?.name != "consciousleap for Business" && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => {
            setHover(!hover);
          }}
          className={`absolute ${
            !hover ? "hidden" : "block"
          } bg-white text-xs w-[55vw] md:w-[14vw] px-3 rounded-md z-50 top-8 md:top-7 shadow-lg shadow-darkGrey`}
        >
          <div className="-mt-3 bg-transparent pt-6"></div>
          {e?.items.map((data, i) => {
            return (
              <p
                className="mb-[13px] text-darkGrey blueHover cursor-pointer z-50 max-[1050px]:text-[11px]"
                key={i}
                onClick={(e) => {
                  const element = document.getElementById(
                    data?.name?.replaceAll(" ", "")?.toLowerCase()
                  );
                  context.setBussinessShow(
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
      )}
      {e?.items && e?.name == "consciousleap for Business" && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => {
            setHover(!hover);
          }}
          className={`absolute ${
            !hover ? "hidden" : "block"
          } bg-white text-xs w-[55vw] md:w-[14vw] px-3 rounded-md z-50 top-8 md:top-7 shadow-lg shadow-darkGrey`}
        >
          <div className="-mt-3 bg-transparent pt-6"></div>
          <p className="mb-[13px] text-transparent bg-clip-text bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen cursor-pointer z-50 text-base max-[1050px]:text-[15px]">
            Coming Soon...
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
