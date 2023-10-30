import Image from "next/image";
import React from "react";

import joinUs from "../Assets/joinus/Mask group.png";
import volunteer from "../Assets/joinus/volunteer.png";
import partners from "../Assets/joinus/partners.png";
import Line2 from "../Components/Lines/Line2";

const JoinConsciousleap = () => {
  return (
    <div className="pt-[3vw]">
      <h1 className="text-websiteBlue font-extrabold text-5xl text-center">
        Join consciousleap
      </h1>
      <p className="w-[50%] mx-auto text-center mt-3">
        We’re mindfully growing and would love to rope you in to help us improve
        the world. Please email your resume to{" "}
        <span className="text-websiteBlue">hr@consciousleap.co</span>
      </p>
      <Image src={joinUs} alt="Join us" className="w-full mt-[5vw]" />
      <h1 className="text-websiteBlue mt-[6vw] font-extrabold text-5xl text-center">
        Mindful Advantages
      </h1>
      <p className="w-[50%] mx-auto text-center mt-3">
        We at consciousleap believe in empowering our core team with a multitude
        of advantages to foster a collaborative and innovative environment where
        growth, creativity, and success thrive.
      </p>
      <div></div>
      <Line2 />
      <h1 className="text-websiteBlue font-extrabold text-5xl text-center">
        Become a Volunteer
      </h1>
      <p className="w-[50%] mx-auto text-center mt-3">
        We truly value your interest in making a mindful impact by Volunteering
        at consciousleap. Please email your resume to{" "}
        <span className="text-websiteBlue">hr@consciousleap.co</span>
        <br />
        by stating Volunteer in the subject and a brief reason stating your
        interests in the email body.
      </p>
      <Image src={volunteer} alt="Join us" className="w-full mt-[3vw]" />
      <Line2 />
      <h1 className="text-websiteBlue font-extrabold text-5xl text-center">
        Partner with consciousleap
      </h1>
      <p className="w-[50%] mx-auto text-center mt-3">
        At consciousleap, we believe in mindful coexistence, where we care about
        our individual and collective impact on the environment. If you share
        the same values, please get in touch with us.{" "}
        <span className="text-websiteBlue">Learn More</span>
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
        <p className="text-lg mt-3 mb-4">
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
        </p>
        <h1 className="text-3xl text-websiteBlue font-bold">
          Join our Conscious Community: Here’s how you can sell with
          consciousleap
        </h1>
        <p className="text-lg mt-5 mb-3">Our onboarding process is as below:</p>
        <div className="text-lg">
          <p className="mt-3 font-medium">
            {" "}
            1. <span className="text-websiteBlue">Conscious Partnering</span> -
            To begin your conscious journey with us, kindly complete our
            Conscious Application Form as the first step towards a Conscious
            Community. It’s a brief form to gather essential information about
            you, your product, your brand, or your idea.semibold
          </p>
          <p className="mt-3 font-medium">
            {" "}
            2. <span className="text-websiteBlue">Conscious Unveiling</span> -
            Upon submitting the Conscious Partner Application Form, we will
            mindfully assess the information provided and reach out to you to
            comprehensively understand your motives, principles, production
            methods, packaging practices, and product catalog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinConsciousleap;
