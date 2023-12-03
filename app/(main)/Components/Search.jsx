"use client";
import React from "react";
import Modal from "react-modal";
import image from "../Assets/subscribe.png";
import Image from "next/image";
import Context from "@/Context/Context";
import { AiOutlineClose } from "react-icons/ai";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

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

const Search = ({ modalIsOpen, setIsOpen }) => {
  const [search, setSearch] = React.useState("");
  const pathname = usePathname();
  const history = useRouter();
  const context = React.useContext(Context);

  function closeModal() {
    setIsOpen(false);
  }

  let nav = [
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
      route: "/join-us",
    },
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
    {
      name: "consciousleap Vendibles",
      route: "/conscious-store",
    },
    {
      name: "Oneness Vendibles",
      route: "/conscious-store",
    },
    {
      name: "Conscious Being",
      route: "/conscious-store",
    },
    {
      name: "Conscious Edibles",
      route: "/conscious-store",
    },
    {
      name: "Conscious Healing",
      route: "/conscious-store",
    },
    {
      name: "Conscious Kids",
      route: "/conscious-store",
    },
    {
      name: "Conscious Living",
      route: "/conscious-store",
    },
    {
      name: "Conscious Teens",
      route: "/conscious-store",
    },
    {
      name: "Conscious Travel",
      route: "/conscious-store",
    },
  ];

  return (
    <div className="z-50 relative">
      <Toaster />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <AiOutlineClose
          size={40}
          onClick={closeModal}
          className="absolute rounded-full bg-white px-2 cursor-pointer border z-20"
        /> */}
        <div className="rounded-3xl w-[70vw] md:w-[40vw] h-[25vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
          <div className="p-[3vw] md:p-[1vw] h-full w-full rounded-3xl bg-white flex flex-col items-center justify-between">
            <div className="rounded-full w-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
              <div className="flex flex-col h-full w-full rounded-full items-center justify-center bg-white">
                <input
                  type="search"
                  className="w-full outline-none rounded-full py-1 px-3"
                  autoFocus
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full h-[40vh] overflow-y-scroll">
              {nav
                .filter((e) => {
                  return e?.name?.toLowerCase().includes(search?.toLowerCase());
                })
                .map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="py-0.5 cursor-pointer mb-1"
                      onClick={(e) => {
                        setIsOpen(false);
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
                      {data?.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
