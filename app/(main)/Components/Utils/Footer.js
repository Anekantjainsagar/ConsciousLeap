"use client";
import React, { useState } from "react";
import youtube from "../../Assets/icons/youtube.png";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import linkedin from "../../Assets/icons/linkedin.png";
import whatsapp from "../../Assets/icons/whatsapp.png";
import twitter from "../../Assets/icons/twitter.png";
import pinterest from "../../Assets/icons/pinterest.png";
import Image from "next/image";
import Link from "next/link";

import playStore from "../../Assets/icons/googlePlay.png";
import appStore from "../../Assets/icons/appStore.png";

import logo from "../../Assets/logo.png";
import certified from "../../Assets/logoCertified.png";
import Line1 from "../Lines/Line1";
import { usePathname, useRouter } from "next/navigation";

import qr from "../../Assets/qr.png";

const Footer = () => {
  const [showQr, setShowQr] = React.useState(false);
  const pathname = usePathname();
  const history = useRouter();
  const [showIndiaAdd, setShowIndiaAdd] = useState(false);
  const [showEstoniaAdd, setShowEstoniaAdd] = useState(false);

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

  return (
    <>
      <Line1 />
      <div className="bg-white px-[8vw]">
        <div className="grid grid-cols-1 md:gap-y-0 gap-y-5 flex items-start md:grid-cols-5">
          {nav.map((e, i) => {
            return (
              <div
                key={i}
                className="flex flex-col md:items-start items-center md:justify-start justify-center"
              >
                <h1 className="text-websiteBlue text-lg md:text-sm mb-1">
                  {e?.name}
                </h1>
                {e?.items.map((data, i) => {
                  return (
                    <p
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
                      className="text-[13.5px] mb-1 font-light cursor-pointer hover:text-websiteBlue"
                    >
                      {data?.name}
                    </p>
                  );
                })}
              </div>
            );
          })}
          <div className="flex flex-col md:items-start items-center justify-center">
            <h1 className="text-websiteBlue text-sm mb-1">Contact Us</h1>
            <p
              onClick={(e) => {
                history.push("/faqs");
              }}
              className="text-[13.5px] mb-1 font-light cursor-pointer hover:text-websiteBlue"
            >
              FAQs
            </p>
            <p className="text-[13.5px] flex mb-1 font-light cursor-pointer hover:text-websiteBlue">
              Email:
              <br />
              oneness@conscousleap.co
            </p>
            <p className="text-[13.5px] relative flex items-end mb-1 font-light cursor-pointer hover:text-websiteBlue">
              WhatsApp for Business:
              <Image
                src={whatsapp}
                alt="Whatsapp"
                className="w-[10vw] md:w-[1.75vw] ml-2"
                onMouseEnter={(e) => {
                  setShowQr(!showQr);
                }}
                onMouseOut={(e) => {
                  setShowQr(!showQr);
                }}
                onMouseLeave={(e) => {
                  setShowQr(!showQr);
                }}
                onClick={(e) => {
                  setShowQr(!showQr);
                }}
              />
              <Image
                src={qr}
                alt="QR"
                className={`w-[20vw] md:w-[7vw] ${
                  showQr ? "block" : "hidden"
                } absolute right-[-20vw] md:right-[-8vw] bottom-0`}
              />
            </p>
            <div className="text-[13.5px] mb-1 text-start font-light cursor-pointer hover:text-websiteBlue">
              Address:
              <br />
              <div className="flex items-center">
                <span
                  onMouseEnter={(e) => {
                    setShowEstoniaAdd(true);
                  }}
                  onMouseOut={(e) => {
                    setShowEstoniaAdd(true);
                  }}
                  onMouseLeave={(e) => {
                    setShowEstoniaAdd(false);
                  }}
                >
                  Estonia
                </span>
                <div className="mx-2">|</div>
                <span
                  onMouseEnter={(e) => {
                    setShowIndiaAdd(true);
                  }}
                  onMouseOut={(e) => {
                    setShowIndiaAdd(true);
                  }}
                  onMouseLeave={(e) => {
                    setShowIndiaAdd(false);
                  }}
                >
                  India
                </span>
              </div>
              <span
                className={`${
                  !showEstoniaAdd ? "hidden" : "block text-darkGrey"
                }`}
              >
                Järvevana Tee 9, Tallinn, 11314, Estonia
              </span>
              <span
                className={`${
                  !showIndiaAdd ? "hidden" : "block text-darkGrey"
                }`}
              >
                A3 Sai Shraddha, Deonar, Mumbai 400088, India.
              </span>{" "}
            </div>
            <div className="flex items-center mt-1">
              {[
                {
                  image: youtube,
                  link: "https://www.youtube.com/@consciousleapco.",
                },
                {
                  image: instagram,
                  link: "https://www.instagram.com/consciousleapco/",
                },
                {
                  image: facebook,
                  link: "https://www.facebook.com/people/consciousleapco/100093011598223/?mibextid=ZbWKwL",
                },
                { image: twitter, link: "https://twitter.com/consciousleapco" },
                {
                  image: linkedin,
                  link: "https://www.linkedin.com/company/consciousleap-co/",
                },
              ].map((e) => {
                return (
                  <Link href={e?.link} key={e?.link} target="__blank">
                    <Image
                      src={e.image}
                      alt={e?.image.src}
                      className="mr-2.5 cursor-pointer transition-all hover:scale-125"
                      width={30}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center justify-start mt-10 md:mt-2.5">
              {[
                { image: playStore, link: "https://playstore.com/" },
                {
                  image: appStore,
                  link: "https://appstore.com/",
                },
              ].map((e) => {
                return (
                  <Link
                    href={e?.link}
                    key={e?.link}
                    target="__blank"
                    className="mr-2"
                  >
                    <Image
                      src={e?.image}
                      alt={e?.link}
                      className="w-[18vw] md:w-[5vw] hover:scale-110 transition-all"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end my-4">
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="border outline-none px-3 py-[7px] rounded-tl-md rounded-bl-md focus:border-websiteBlue"
              placeholder="Your Email Address"
            />
            <button className="bg-[#4961ac] px-4 py-2 text-white rounded-tr-md rounded-br-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center mt-5">
          <Image src={logo} alt="Logo" className="w-[75vw] md:w-[18vw]" />
          <div className="grid grid-cols-4 w-full md:w-[50%] py-2 md:py-0 items-start text-darkGrey font-light text-sm">
            <p
              className="text-start cursor-pointer mt-1.5 hover:text-websiteBlue transition-all"
              onClick={(e) => {
                history.push("/privacy/terms");
              }}
            >
              Terms of Use
            </p>
            <p
              className="text-start cursor-pointer hover:text-websiteBlue transition-all"
              onClick={(e) => {
                history.push("/privacy/cookies-policy");
              }}
            >
              Cookies Policy
            </p>
            <p
              className="text-start cursor-pointer hover:text-websiteBlue transition-all"
              onClick={(e) => {
                history.push("/privacy/policies");
              }}
            >
              Privacy Policy
            </p>
            <p
              className="text-start cursor-pointer hover:text-websiteBlue transition-all"
              onClick={(e) => {
                history.push("/privacy/refund");
              }}
            >
              Refund, Rescheduling and Cancellation Policy
            </p>
          </div>
          <Image
            src={certified}
            alt="Certified"
            className="w-[30vw] md:w-[9vw]"
          />
        </div>
        <p className="mt-3 mb-16 text-sm font-light">
          Copyright © 2023 consciousleap, all rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
