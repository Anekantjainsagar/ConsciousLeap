"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import collab from "../Assets/collab.png";

const Collabrations = () => {
  const history = useRouter();

  return (
    <div>
      <h1 className="text-center text-websiteBlue text-4xl font-bold pt-6">
        Collaborations and Initiatives
      </h1>
      <p className="text-center px-[10vw] mt-4">
        At consciousleap, we pledge 10% of our net proceeds to support and
        contribute towards a more significant cause, a higher purpose to restore
        our faith in humanity. <br />
        If you are a Charitable Institute, Non-Profit Organization, or NGO that
        shares our beliefs and values, please register your details with us to
        collaborate.{" "}
        <span
          className="cursor-pointer text-websiteBlue"
          onClick={(e) => {
            history.push("/faqs");
          }}
        >
          Learn More
        </span>
      </p>
      <Image src={collab} className="w-full py-8" alt="COllab" />
      <h1 className="text-center text-websiteBlue text-4xl font-bold py-4">
        Let's Join Forces for a Conscious Change
      </h1>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/appQ1ka4OP4oOKLKS/shrC1puxuLWHPlpWV?backgroundColor=yellow"
        width="100%"
        height={"2500px"}
      ></iframe>
    </div>
  );
};

export default Collabrations;
