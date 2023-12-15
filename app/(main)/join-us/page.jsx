"use client";
import Image from "next/image";
import React, { useState } from "react";

import joinUs from "../Assets/joinus/Mask group.png";
import volunteer from "../Assets/joinus/volunteer.png";
import partners from "../Assets/joinus/partners.png";
import Line2 from "../Components/Lines/Line2";

import img2 from "../Assets/registerTherapist/join2.png";
import img4 from "../Assets/registerTherapist/join4.png";
import img6 from "../Assets/registerTherapist/join6.png";
import img10 from "../Assets/registerTherapist/join10.png";
import img11 from "../Assets/registerTherapist/join11.png";
import img12 from "../Assets/registerTherapist/join12.png";

import circle from "../Assets/bg-member.png";
import Context from "@/Context/Context";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import toast, { Toaster } from "react-hot-toast";

const JoinConsciousleap = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const { joinUsShow } = React.useContext(Context);
  let registerData = [
    { image: img2, title: "Virtual", desc: "Work from anywhere." },
    {
      image: img4,
      title: "Promising",
      desc: "Career opportunities at consciousleap.",
    },
    { image: img6, title: "Incentivized", desc: "Performance Bonus." },
    { image: img10, title: "Recognition", desc: "Get awarded." },
    { image: img11, title: "Supportive", desc: "Mindful work-family." },
    { image: img12, title: "International", desc: "Heal the world." },
  ];

  React.useEffect(() => {
    const element = document.getElementById(joinUsShow);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div className="pt-[3vw]">
      <Toaster />
      <h1
        id="JOIN"
        className="text-websiteBlue font-extrabold text-3xl md:text-5xl text-center"
      >
        Join consciousleap
      </h1>
      <p className="w-9/12 md:w-[50%] mx-auto text-center mt-3">
        We’re mindfully growing and would love to rope you in to help us improve
        the world. <br />
        Please email your resume to{" "}
        <span className="text-websiteBlue">hr@consciousleap.co</span>
      </p>
      <Image src={joinUs} alt="Join us" className="w-full mt-[5vw]" />
      <h1 className="text-websiteBlue mt-[6vw] font-extrabold text-3xl md:text-5xl text-center">
        Mindful Advantages
      </h1>
      <p className="w-9/12 md:w-[50%] mx-auto text-center mt-3">
        We at consciousleap believe in empowering our core team with a multitude
        of advantages to foster a collaborative and innovative environment where
        growth, creativity, and success thrive.
      </p>
      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 min-[1040px]:grid-cols-6 mt-7 px-[5vw] md:px-[2vw] gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-9">
        {registerData.map((e, i) => {
          return <FlipCard data={e} key={i} />;
        })}
      </div>
      <Line2 />
      <h1
        id="VOLUNTEER"
        className="text-websiteBlue font-extrabold text-3xl md:text-5xl text-center"
      >
        Become a Volunteer
      </h1>
      <p className="w-9/12 md:w-[50%] mx-auto text-center mt-3">
        We truly value your interest in making a mindful impact by Volunteering
        at consciousleap. <br />
        Please email your resume to{" "}
        <span className="text-websiteBlue">hr@consciousleap.co</span>
        <br />
        by stating Volunteer in the subject and a brief reason stating your
        interests in the email body.
      </p>
      <Image src={volunteer} alt="Join us" className="w-full mt-[3vw]" />
      <Line2 />
      <h1
        id="PARTNER"
        className="text-websiteBlue font-extrabold text-3xl md:text-5xl text-center"
      >
        Partner with consciousleap
      </h1>
      <p className="w-9/12 md:w-[50%] mx-auto text-center mt-3">
        At consciousleap, we believe in mindful coexistence, where we care about
        our individual and collective impact on the environment. If you share
        the same values, please get in touch with us.{" "}
      </p>
      <Image src={partners} alt="Join us" className="w-full mt-[3vw]" />
      <div className="px-[4vw] py-[2vw]">
        <h1 className="text-3xl text-websiteBlue font-bold">
          What Sets Us Apart?
        </h1>
        <p className="text-lg mt-5 mb-7">
          At Conscious Store, we mindfully curate cultural diversity and
          inclusivity through Artists, Brands, Products, and Makers from all
          over India who prioritize people and the planet in their practices.
        </p>
        <h1 className="text-3xl text-websiteBlue font-bold">
          Calling all Conscious Heroes: Here’s what we’re looking for
        </h1>
        <div className="text-lg mt-3 mb-4">
          <li>
            Locally produced goods that are free from plastic, organic, or
            chemical-free.
          </li>
          <li>
            Conscious goods that are crafted using natural or plant-based
            materials.
          </li>
          <li>Naturally sourced ingredients for your goods.</li>
          <li>
            Goods that are designed as alternatives to single-use plastic.
          </li>
          <li>Conscious, eco-friendly, ethical, or sustainable practices.</li>
          <li>
            Fair-trade practices with internationally accepted standards for
            fair wages and working conditions.
          </li>
          <li>
            Artisans, individuals from low-income groups, diverse backgrounds,
            or rural communities across India.
          </li>
          <li>
            Women-run or women-founded or employ at least 20% of women in its
            workforce.
          </li>
        </div>
        <h1 className="text-3xl text-websiteBlue font-bold">
          Join our Conscious Community: Here’s how you can sell with
          consciousleap
        </h1>
        <p className="text-lg mt-5 mb-3">Our onboarding process is as below:</p>
        <div className="text-lg">
          <p className="mt-6 font-medium">
            {" "}
            1. <span className="text-websiteBlue">Conscious Partnering</span> -
            To begin your Conscious journey with us, kindly complete our
            Conscious Application Form as the first step towards a Conscious
            Community. It’s a brief form to gather essential information about
            you, your product, your brand, or your idea.semibold
          </p>
          <p className="mt-6 font-medium">
            {" "}
            2. <span className="text-websiteBlue">Conscious Unveiling</span> -
            Upon submitting the Conscious Partner Application Form, we will
            mindfully assess the information provided and reach out to you to
            comprehensively understand your motives, principles, production
            methods, packaging practices, and product catalog.
          </p>
          <p className="mt-6 font-medium">
            {" "}
            3. <span className="text-websiteBlue"> Conscious Curation</span> -
            Upon mindfully reviewing your product details, we will shortlist and
            compile a list of products that align well with our audience,
            curation standards, motto, mission, vision, and values.
          </p>
          <p className="mt-6 font-medium">
            {" "}
            4. <span className="text-websiteBlue">Conscious Compliance</span> -
            To ensure Conscious compliance, we may request samples of each SKU
            before onboarding you. Please dispatch the demo samples in their
            original packaging, as you would provide them to your customers.
            It&apos;s important to note that these samples may undergo rigorous
            testing and will not be returned to you, regardless of whether or
            not the product is accepted onto our platform. Additionally, you can
            include any certifications or product quality/ component
            certifications that you possess to substantiate the authenticity of
            your claims. This information will greatly assist us in making a
            Conscious decision.
          </p>
          <p className="mt-6 font-medium">
            {" "}
            5. <span className="text-websiteBlue">Conscious Testing</span> -
            Prior to featuring any products on our Conscious Store, we make it a
            point to mindfully test each and everyone of them. Our primary
            objective is to provide our customers with only the finest options
            available. This dedication drives us to conduct thorough testing,
            ensuring that our team evaluates everything before it is made
            available to our valued customers.
          </p>
          <p className="mt-6 font-medium">
            {" "}
            6. <span className="text-websiteBlue">Conscious Onboarding </span> -
            Upon approving your product, we will request some essential business
            information from you to verify your KYC (Know Your Customer) details
            and complete your registration as a Conscious seller with us.
          </p>
          <p className="mt-6 font-medium">
            If you’re curious and want to know more about our product selection
            process please fill out the short form below and we will revert back
            to you.
          </p>
        </div>
      </div>
      <div className="w-full min-[900px]:11/12 min-[1040px]:w-2/3 h-fit md:h-[45vh] flex items-center justify-center mt-[10vw] mb-[10vw] mx-auto relative">
        <Image
          src={circle}
          alt="Circle"
          className="absolute top-1/2 md:block hidden -translate-y-1/2 w-[100vw] z-10"
        />
        <div className="flex md:h-full flex-col justify-center items-center w-full">
          <h1 className="font-bold text-xl md:text-3xl mb-4 text-websiteBlue">
            We&apos;d love to hear from you
          </h1>
          <input
            className="mb-4 border px-4 py-1 outline-none rounded-sm w-6/12"
            type="text"
            value={user?.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            placeholder="Name"
          />
          <input
            className="mb-4 border px-4 py-1 outline-none rounded-sm w-6/12"
            type="text"
            value={user?.company}
            onChange={(e) => {
              setUser({ ...user, company: e.target.value });
            }}
            placeholder="Company Name"
          />
          <input
            className="mb-4 border px-4 py-1 outline-none rounded-sm w-6/12"
            type="email"
            placeholder="Work Email"
            value={user?.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input
            className="mb-4 border px-4 py-1 outline-none rounded-sm w-6/12"
            type="text"
            placeholder="Contact"
            value={user?.phone}
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }}
          />
          <input
            className="mb-4 border px-4 py-1 outline-none rounded-sm w-6/12"
            type="text"
            placeholder="Message"
            value={user?.message}
            onChange={(e) => {
              setUser({ ...user, message: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              axios
                .post(`${BASE_URL}/user/partners`, { ...user })
                .then((res) => {
                  if (res.status == 200) {
                    toast.success("Submitted successfully");
                    setUser({
                      name: "",
                      email: "",
                      company: "",
                      phone: "",
                      message: "",
                    });
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            className="bg-websiteBlue text-white py-2 w-1/2 rounded-md font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const FlipCard = ({ data }) => {
  return (
    <div className="rounded-lg w-full h-fit bg-gradient-to-tr from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
      <div className="h-full w-full rounded-lg items-center justify-center bg-white flex flex-col">
        <div className="flip-card-special">
          <div className="flip-card-inner-special">
            <div className="flip-card-front-special rounded-lg flex justify-center items-center">
              <Image src={data?.image} alt={img2.src} className="md:w-6/12" />
            </div>
            <div className="flip-card-back-special px-5 flex rounded-lg flex-col justify-center items-center">
              <h1 className="text-websiteBlue text-2xl font-medium">
                {data?.title}
              </h1>
              <p className="text-darkGrey text-xl font-light">{data?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinConsciousleap;
