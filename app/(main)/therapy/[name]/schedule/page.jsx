"use client";
import Context from "@/Context/Context";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import React from "react";
import MemberConsent from "./memberConsent";
import toast, { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";

const customStyles = {
  overlay: { zIndex: 50 },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
  },
};

const Schedule = ({ params }) => {
  const [checked, setChecked] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { login } = React.useContext(Context);
  const [form, setForm] = React.useState({
    name: "",
    address: "",
    emergency: {
      name: "",
      phone: "",
    },
  });

  React.useEffect(() => {
    setForm({ ...form, name: login?.name });
  }, [login]);

  React.useEffect(() => {
    axios
      .post(`${BASE_URL}/consent/check`, {
        id: login?._id,
      })
      .then((res) => {
        setIsOpen(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Toaster />
      <MemberConsent
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        id={params.name}
      />
      <div className="w-[40vw] flex flex-col items-center mx-auto border p-5 rounded-md border-websiteBlue">
        <h1 className="text-2xl text-websiteBlue">Member Consent Form</h1>
        <div className="h-[1px] w-8/12 my-3 bg-websiteBlue"></div>
        <div className="w-full">
          <h3 className="text-websiteBlue text-lg">Introduction:</h3>
          <div className="mt-1">
            I,{" "}
            <input
              type="text"
              value={form?.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              className="border px-2 rounded-md font-semibold text-black outline-none mx-1"
              placeholder="Your Name"
            />
            hereby grant my informed consent to participate in telemental health
            services provided by Coleco Well-being OPC Pvt. Ltd. This form outlines
            important information regarding the nature of telemental health
            services and my rights and responsibilities as a client.
          </div>
          <h3 className="text-websiteBlue text-lg mt-4">
            Understanding Telemental Health:
          </h3>
          <div className="mt-1">
            Telemental health involves the delivery of clinical healthcare
            services through technology-assisted means, connecting a
            practitioner and a client situated in different locations.
          </div>
          <h3 className="text-websiteBlue text-lg mt-4">
            Key Points to Acknowledge:
          </h3>
          <div>
            {[
              {
                point: "1. Right to Withdraw Consent:",
                value:
                  "I understand that I have the right to withdraw consent at any time without affecting my entitlement to future care, services, or program benefits.",
              },
              {
                point: "2. Risks and Benefits:",
                value:
                  "I acknowledge that there are risks, benefits, and consequences associated with telemental health, including technology failures, interruptions, breaches of confidentiality, and limited ability to respond to emergencies.",
              },
              {
                point: "3. Confidentiality:",
                value:
                  "All information disclosed within sessions and written records about those sessions are confidential and may not be disclosed without written authorization, except where permitted and/or required by law.",
              },
              {
                point: "4. Emergency Situations:",
                value:
                  "I agree to provide accurate emergency contact information and understand that in case of immediate concern for my safety, the therapist may need to contact emergency services or a designated emergency contact.",
              },
              {
                point: "5. Technical Difficulties:",
                value:
                  "In the event of technical difficulties during a session, I shall end and restart the session.",
              },
              {
                point: "6. Client Rights and Responsibilities:",
                value:
                  "I understand my rights and responsibilities as a client.",
              },
              {
                point: "7. Records and Documentation:",
                value:
                  "I understand that the therapist may keep records related to my treatment. These records will be securely maintained and not shared without my written consent.",
              },
              {
                point: "8. Termination of Therapy:",
                value:
                  "I have the right to terminate therapy at any time and for any reason. The therapist may also recommend termination if they believe it is in my best interest.",
              },
              {
                point: "9. Emergency Contact Information:",
                value:
                  "I agree to provide my location at the beginning of each session and designate an emergency contact person for life-threatening emergencies.",
              },
            ].map((e, i) => {
              return (
                <div key={i} className="mt-2">
                  <h6 className="text-websiteBlue font-medium">{e?.point}</h6>
                  <p>{e?.value}</p>
                </div>
              );
            })}
            <p className="mt-3">In case of an emergency, my location is:</p>
            <div>
              <input
                type="text"
                value={form?.address}
                onChange={(e) => {
                  setForm({ ...form, address: e.target.value });
                }}
                placeholder="Address"
                className="w-full outline-none border py-0.5 px-3 rounded-md mt-2"
              />
              <p className="my-1">
                and my emergency contact person’s name, address, and phone:
              </p>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Name"
                  value={form?.emergency?.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      emergency: { ...form.emergency, name: e.target.value },
                    });
                  }}
                  className="px-2 py-0.5 outline-none border rounded-md w-[49%]"
                />
                <input
                  type="text"
                  value={form?.emergency?.phone}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      emergency: { ...form.emergency, phone: e.target.value },
                    });
                  }}
                  placeholder="Phone Number"
                  className="px-2 py-0.5 outline-none border rounded-md w-[49%]"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-websiteBlue font-medium">Client Signature:</h1>
            <div className="flex items-center justify-between">
              <input
                type="text"
                value={form?.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                placeholder="Your Name"
                className="border w-[49%] font-semibold text-black outline-none px-2 py-0.5 rounded-md"
              />
              <p className="font-semibold text-black">
                Date : {new Date(Date.now()).toString().slice(4, 16)}
              </p>
            </div>
            <div className="flex mt-2 items-start cursor-pointer">
              <input
                type="checkbox"
                onChange={(e) => {
                  setChecked(!checked);
                }}
                value={checked}
                id="check"
                name="check"
                className="mt-1.5 mr-1"
              />
              <label htmlFor="check" className="cursor-pointer">
                By providing my consent, I affirm that I have read and
                understood the above information.
              </label>
            </div>
            <button
              onClick={(e) => {
                if (checked) {
                  if (
                    !form?.name ||
                    !form?.address ||
                    !form?.emergency?.name ||
                    !form?.emergency?.phone
                  ) {
                    toast.error("Please fill all the details");
                  } else {
                    axios
                      .post(`${BASE_URL}/consent`, {
                        ...form,
                        token: getCookie("token"),
                      })
                      .then((res) => {
                        if (res.status == 200) {
                          toast.success("Submitted successfully");
                          setIsOpen(true);
                        }
                      })
                      .catch((err) => {
                        {
                          console.log(err);
                        }
                      });
                  }
                } else {
                  toast.error("Please read the terms and conditions");
                }
              }}
              className="text-white bg-websiteBlue px-6 py-1 font-semibold mx-auto block mt-5 mb-5 rounded-md"
            >
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
