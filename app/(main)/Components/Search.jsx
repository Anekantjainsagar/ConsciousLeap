"use client";
import React from "react";
import Modal from "react-modal";
import Context from "../../Context/Context";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

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
      name: "Subscribe",
      route: "/",
      desc: "Subscribe to our curated offers and mindful blogs delivered to your inbox",
    },
    {
      name: "Member Registration",
      route: "/user/register",
      desc: "Embark on a transformative journey by registering as a new member with consciousleap and join our mindful community",
    },
    // {
    //   name: "User Dashboard",
    //   route: "/user/dashboard",
    // },
    // {
    //   name: "Therapist Dashboard",
    //   route: "/therapy/dashboard",
    // },
    {
      name: "Home of oneness",
      route: "/",
      desc: "ConsciousLeap: Elevating life quality through mindful healing and expanding collective conscious awareness.",
    },
    {
      name: "Why consciousleap?",
      route: "/",
      desc: "Choose consciousleap for a transformative journey toward mindful well-being, embracing inclusivity, breaking barriers, and fostering collective healing",
    },
    {
      name: "Communication Channels",
      route: "/",
      desc: "Our communication channels consisting of various leading virtual meeting platforms.",
    },
    {
      name: "How Does It Work?",
      route: "/",
      desc: "Complete a brief questionnaire, and we'll match you with a therapist tailored to your needs. Alternatively, browse and choose from our diverse range of mindful therapists.",
    },
    {
      name: "Our Internationally Certified Therapists",
      route: "/",
      desc: "Our Therapists have attained international certification through diverse modalities, bridging cultural divides to provide globally recognized mental health support.",
    },
    {
      name: "Member Testimonials",
      route: "/",
      desc: "Here's what our members say about their experiences with Therapy at consciousleap.",
    },
    {
      name: "Member Statistics",
      route: "/",
      desc: "A Glimpse into Our Member Statistics and Community Dynamics",
    },
    {
      name: "Collaborations and Initiatives",
      route: "/",
      desc: "We commit 10% of our profits to champion a meaningful cause, aiming to restore faith in humanity. Charitable institutes, non-profits, and NGOs sharing our values are invited to register for collaboration.",
    },
    {
      name: "Conscious Blogs",
      route: "/",
      desc: "Our blogs are  a reflection of our mindful journey at consciousleap.",
    },
    {
      name: "Join consciousleap",
      route: "/join-us",
      desc: "We're expanding thoughtfully and invite you to join us in making a positive impact on the world.",
    },
    {
      name: "Our Mindful Therapists",
      route: "/therapy",
      desc: `Meet the cornerstone of consciousleap- our "Mindful Therapists"`,
    },
    {
      name: "Book a session",
      route: "/therapy",
      desc: `Meet the cornerstone of consciousleap- our "Mindful Therapists"`,
    },
    {
      name: "Vandita Sharma",
      route: "/therapy/6539f748f7996e4f13c2e6fd",
      desc: "Clinical Psychologist, RCI Registered ",
    },
    {
      name: "Sagrikaa Rastogi",
      route: "/therapy/6539f479f7996e4f13c2e64d",
      desc: "Counselling Psychologist",
    },
    {
      name: "Parnika Sharma",
      route: "/therapy/6539f59bf7996e4f13c2e68b",
      desc: "Clinical Psychologist, RCI Registered ",
    },
    {
      name: "Merlin Joseph",
      route: "/therapy/6539f82af7996e4f13c2e724",
      desc: "Counselling Psychologist",
    },
    {
      name: "Bhumikka Rao",
      route: "/therapy/6539f61ef7996e4f13c2e6d9",
      desc: "Psychologist, PhD Psychology ",
    },
    {
      name: "Ashwini K",
      route: "/therapy/6560ae14e37b4250c368c9ff",
      desc: "Wellbeing Counselor ",
    },
    {
      name: "Akanksha Sharma",
      route: "/therapy/6560ada4e37b4250c368c9df",
      desc: "Clinical Psychologist, RCI Registered ",
    },
    {
      name: "Areas of Expertise",
      route: "/expertise-area",
      desc: "Various aspects of mental health that consciousleap provides comprehensive assistance for ",
    },
    {
      name: "Questionnaire",
      route: "/questionnaire",
      desc: "Assess your mental resilience with our mindful questionnaire.",
    },
    {
      name: "Register as a Therapist",
      route: "/therapy/register",
      desc: "Become a part of our team to Mindful Therapists to enhance the quality of life & to save the lives through impactful sharing of knowledge and expertise. ",
    },
    {
      name: "Why consciousleap for Business?",
      route: "/bussiness",
      desc: "consciousleap aims to supports employees in managing their holistic health and wellbeing concerns in a more mindful and individually tailored manner",
    },
    {
      name: "Our Global Clients",
      route: "/bussiness",
      desc: "consciousleap is the preferred choice of many valued clients for workplace well-being and enhanced organizational performance.",
    },
    {
      name: "Client Testimonials",
      route: "/bussiness",
      desc: "Discover firsthand experiences with consciousleap for Business through the words of our satisfied clients",
    },
    {
      name: "Schedule a Call",
      route: "/bussiness",
      desc: "Reach out to us for an in-depth demonstration of our capabilities and discover how consciousleap can create a holistic impact.",
    },
    {
      name: "consciousleap Vendibles",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Oneness Vendibles",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Being",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Edibles",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Healing",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Kids",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Living",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Teens",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Travel",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Conscious Travel",
      route: "/conscious-store",
      desc: "At consciousleap, we don't just believe; we act. With Coscious Store we aim to create a positive impact, striving not only to sustain but to mindfully thrive for the well-being of future generations.",
    },
    {
      name: "Terms of Use",
      route: "/privacy/terms",
      desc: "Before utilizing our service, kindly review these terms of service attentively.",
    },
    {
      name: "Cookies Policy",
      route: "/privacy/cookies-policy",
      desc: "consciousleap uses essential cookies for site functionalit & to analyze and personalize your visit",
    },
    {
      name: "Privacy Policy",
      route: "/privacy/policies",
      desc: "Our Privacy Policy outlines our approach to gathering & utilizing your information while using the service, elucidating your privacy rights and legal protections",
    },
    {
      name: "Refund, Rescheduling and Cancellation Policy",
      route: "/privacy/refund",
      desc: "Our Rescheduling, Refund, and Cancellation Policy is crafted with your convenience in mind, offering transparency and flexibility",
    },
  ];

  return (
    <div className="z-50 relative">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="rounded-3xl w-[90vw] min-[900px]:w-[50vw] min-[1040px]:w-[40vw] h-[80vw] min-[900px]:h-[40vw] min-[1040px]:h-[25vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
          <div className="p-[3vw] md:p-[1vw] h-full w-full rounded-3xl bg-white flex flex-col items-center justify-between">
            <div className="rounded-full w-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
              <div className="flex flex-col h-full w-full rounded-full items-center justify-center bg-white">
                <input
                  type="search"
                  className="w-full outline-none rounded-full py-1 px-3"
                  autoFocus
                  placeholder="Search here"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full h-[78vw] min-[900px]:h-[38vw] min-[1040px]:h-[23vw] overflow-y-scroll">
              {[...nav, ...context?.productM?.productData?.products]
                .filter((e) => {
                  return e?.name?.toLowerCase().includes(search?.toLowerCase());
                })
                .map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="py-1 cursor-pointer mb-2 flex items-center"
                      onClick={(e) => {
                        setIsOpen(false);
                        if (data?.price) {
                          history.push(`/conscious-store/${data?._id}`);
                        } else {
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
                        }
                      }}
                    >
                      <AiOutlineSearch
                        className="text-newBlue border border-newBlue rounded-full p-1"
                        size={33}
                      />
                      <div className="ml-4">
                        <p className="text-[15px] font-medium text-newBlue">
                          {data?.name}
                        </p>
                        {data?.desc && (
                          <p className="-mt-1 md:text-[12px] text-[6px]">
                            {data?.desc?.slice(0, 60) +
                              (data?.desc?.length > 60 ? "..." : "")}
                          </p>
                        )}
                        {data?.price && (
                          <p className="-mt-0.5 md:text-[12px] text-[6px]">
                            INR {data?.price}
                          </p>
                        )}
                      </div>
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
