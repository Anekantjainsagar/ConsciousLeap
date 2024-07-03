"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import collab from "../Assets/collab.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";

const Collabrations = () => {
  const history = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactPerson: "",
    contact: "",
    city: "",
    website: "",
    organisationType: "Charitable institute",
    registered: "Yes",
    mission: "",
    cause: "",
  });

  return (
    <div>
      <Toaster />
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
      <h3 className="text-center text-websiteBlue text-4xl font-bold py-4">
        Let&apos;s Join Forces for a Conscious Change
      </h3>
      <div className="w-[38vw] text-base mx-auto mt-10">
        <h3 className="text-black text-2xl font-semibold">
          Conscious Initiatives Form
        </h3>
        <p className="mt-1 mb-5">
          Welcome to consciousleap&apos;s Collaborations and Initiatives
          Registration! At consciousleap, we are committed to making a positive
          impact on society by dedicating 10% of our net proceeds to support and
          contribute towards significant causes. We firmly believe in a higher
          purpose that seeks to restore faith in humanity.
          <br />
          <br />
          If you represent a Charitable Institute, Non-Profit Organization, or
          NGO that shares our beliefs and values, we invite you to register your
          details with us to explore potential collaborations. By joining
          forces, we can create a collective force for good and drive positive
          change in the world.
          <br />
          <br />
          Please take a few moments to provide us with the necessary information
          about your organization and its mission. This will help us understand
          your goals, values, and areas of expertise, allowing us to identify
          opportunities for collaboration that align with our vision. Your
          participation in this registration process marks the first step
          towards building a meaningful partnership that can leave a lasting
          impact on the causes we care about deeply.
          <br />
          <br /> Thank you for your interest in collaborating with
          consciousleap. Together, let&apos;s make a conscious leap towards a
          better future!
        </p>
        <div>
          <div className="pt-8">
            <p className="text-black">Name of the organization *</p>
            <input
              type="text"
              value={form?.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            />
          </div>
          <div className="pt-8">
            <p className="text-black">Contact person&apos;s name *</p>
            <input
              type="text"
              value={form?.contactPerson}
              onChange={(e) => {
                setForm({ ...form, contactPerson: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            />
          </div>
          <div className="pt-8">
            <p className="text-black">Email *</p>
            <input
              type="text"
              value={form?.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            />
          </div>
          <div className="pt-8">
            <p className="text-black">Contact Number *</p>
            <input
              type="number"
              value={form?.contact}
              onChange={(e) => {
                setForm({ ...form, contact: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            />
          </div>
          <div className="pt-8">
            <p className="text-black">Where is the organization situated? *</p>
            <p className="text-sm">Mention the city and state.</p>
            <input
              type="text"
              value={form?.city}
              onChange={(e) => {
                setForm({ ...form, city: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            />
          </div>
          <div className="pt-8">
            <p className="text-black">Website URL</p>
            <input
              type="text"
              value={form?.website}
              onChange={(e) => {
                setForm({ ...form, website: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            />
          </div>
          <div className="pt-8">
            <p className="text-black">Organization type *</p>
            <select
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
              value={form?.organisationType}
              onChange={(e) => {
                setForm({ ...form, organisationType: e.target.value });
              }}
            >
              {["Charitable institute", "Non-Profit Organization", "NGO"].map(
                (e) => {
                  return (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  );
                }
              )}
            </select>
          </div>
          <div className="pt-8">
            <p className="text-black">
              Are you a registered and recognized organization in your country?
              *
            </p>
            <select
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
              value={form?.registered}
              onChange={(e) => {
                setForm({ ...form, registered: e.target.value });
              }}
            >
              {["Yes", "No"].map((e) => {
                return (
                  <option value={e} key={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="pt-8">
            <p className="text-black">
              Mission and Vision of the organization *
            </p>
            <textarea
              type="number"
              value={form?.mission}
              onChange={(e) => {
                setForm({ ...form, mission: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            ></textarea>
          </div>
          <div className="pt-8">
            <p className="text-black">
              Briefly describe the cause or higher purpose your organization is
              dedicated to *
            </p>
            <textarea
              type="number"
              value={form?.cause}
              onChange={(e) => {
                setForm({ ...form, cause: e.target.value });
              }}
              className="border w-full outline-none px-3 py-1 mt-2 rounded-md"
            ></textarea>
          </div>
          <button
            onClick={(e) => {
              if (
                form.name &&
                form.email &&
                form.contactPerson &&
                form.contact &&
                form.city &&
                form.organisationType &&
                form.registered &&
                form.mission &&
                form.cause
              ) {
                axios
                  .post(`${BASE_URL}/collab/add`, form)
                  .then((res) => {
                    if (res.status == 200) {
                      setForm({
                        name: "",
                        email: "",
                        contactPerson: "",
                        contact: "",
                        city: "",
                        website: "",
                        organisationType: "Charitable institute",
                        registered: "Yes",
                        mission: "",
                        cause: "",
                      });
                      toast.success("Response saved successsfully");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                toast.error("Please fill all the necessary details");
              }
            }}
            className="text-white py-1.5 w-full rounded-md bg-blue-500 mt-8"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collabrations;
