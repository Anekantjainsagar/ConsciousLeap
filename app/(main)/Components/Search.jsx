"use client";
import React from "react";
import Modal from "react-modal";
import image from "../Assets/logoPng.png";
import Image from "next/image";
import Context from "@/Context/Context";
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
      name: "Subscribe",
      route: "/",
    },
    {
      name: "Member Registration",
      route: "/user/register",
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
    },
    {
      name: "Book a session",
      route: "/therapy",
    },
    {
      name: "Vandita Sharma",
      route: "/therapy/6539f748f7996e4f13c2e6fd",
      desc: "I am a clinical psychologist and a mindfulness therapist. I practice psychotherapy and mindfulness-based interventions, which does wonders to lead a meaningful life.",
    },
    {
      name: "Sagrikaa Rastogi",
      route: "/therapy/6539f479f7996e4f13c2e64d",
      desc: "A Counseling Psychologist with experience in facilitating adolescents and young adults for self growth, anxiety, personality disorders, relationship concerns in addition to other mental health related concerns.",
    },
    {
      name: "Parnika Sharma",
      route: "/therapy/6539f59bf7996e4f13c2e68b",
      desc: "My aim is to provide people with a space to express themselves in a non-judgmental environment, gain insights regarding their behaviour and equip them with tools to help cope with various stressors in life.",
    },
    {
      name: "Merlin Joseph",
      route: "/therapy/6539f82af7996e4f13c2e724",
      desc: "In my practice, I believe that the effectiveness of therapy relies on the individual's willingness to makes changes in their lives. Embracing an eclectic approach, I aim to create a supportive environment that nurtures personal growth and development for my clients.",
    },
    {
      name: "Bhumikka Rao",
      route: "/therapy/6539f61ef7996e4f13c2e6d9",
      desc: "Just like my name, Bhumikka, which means role, I play the role of a friendly guide and an efficient confidant to help many young minds of our society to grow and nurture in their journey of life. ",
    },
    {
      name: "Ashwini K",
      route: "/therapy/6560ae14e37b4250c368c9ff",
      desc: "A well trained, trauma informed, culturally sensitive qualified psychologist, specializing in Clinical Psychology. An empath who aims to create safe therapeutic space for her clients.",
    },
    {
      name: "Akanksha Sharma",
      route: "/therapy/6560ada4e37b4250c368c9df",
      desc: "Hi! I am Akanksha, I am a Psychotherapist and a Clinical Psychologist. I believe that all of us deserve a space where we can be free to express our most painful thoughts and feelings.",
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
    {
      name: "Conscious Travel",
      route: "/conscious-store",
    },
    {
      name: "Terms of Use",
      route: "/privacy/terms",
    },
    {
      name: "Cookies Policy",
      route: "/privacy/cookies-policy",
    },
    {
      name: "Privacy Policy",
      route: "/privacy/policies",
    },
    {
      name: "Refund, Rescheduling and Cancellation Policy",
      route: "/privacy/refund",
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
        <div className="rounded-3xl w-[90vw] md:w-[40vw] h-[80vw] md:h-[25vw] mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
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
            <div className="w-full h-[40vh] overflow-y-scroll">
              {nav
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
                      <Image
                        src={image}
                        alt="Image"
                        className="w-[14vw] md:w-[4vw]"
                      />
                      <div className="ml-4">
                        <p className="text-base md:text-lg font-medium text-newBlue">
                          {data?.name}
                        </p>
                        {data?.desc && (
                          <p className="-mt-1 md:text-base text-xs">
                            {data?.desc?.slice(0, 40) +
                              (data?.desc?.length > 40 ? "..." : "")}
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
