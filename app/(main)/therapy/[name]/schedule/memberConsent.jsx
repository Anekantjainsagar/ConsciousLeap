import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import image from "../../../Assets/subscribe.png";
import logo from "../../../Assets/notes-bg.png";
import Image from "next/image";
import Context from "@/Context/Context";
import { AiOutlineClose } from "react-icons/ai";
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

const MemberConsent = ({ modalIsOpen, setIsOpen, id }) => {
  const history = useRouter();
  const [user, setUser] = useState();
  const { therapistFilter, showPopUpId, setFourtyMinMeet } =
    useContext(Context);

  useEffect(() => {
    const therapist = therapistFilter?.therapistsData?.find(
      (e) => e?._id == id
    );
    setUser(therapist);
  }, [therapistFilter?.therapistsData]);

  const closeModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className="z-50 relative">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AiOutlineClose
          size={40}
          onClick={closeModal}
          className="absolute rounded-full right-5 top-5 bg-white px-2 cursor-pointer border z-20"
        />
        <Image src={image} alt={"Image"} className="w-[100vw] md:w-[35vw]" />
        <div className="flex items-center md:text-base text-xs flex-col justify-center h-full w-full absolute top-0 left-0">
          <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-lg md:text-2xl text-websiteBlue">
              Please Choose a Service:
            </h1>
            <div className="h-[1px] w-6/12 bg-gray-500 mb-2 md:mb-4 mt-2"></div>
            <div
              className="bg-white hover:shadow-md hover:scale-105 shadow-gray-50 transition-all mb-3 flex cursor-pointer items-center justify-between rounded-md text-websiteBlue w-[70vw] md:w-[26vw] px-4 py-2 md:text-lg"
              onClick={(e) => {
                setFourtyMinMeet(false);
                history.push(
                  `/therapy/${
                    id ? id : showPopUpId?.meeting_url?._id
                  }/schedule/appoint`
                );
              }}
            >
              <div className="flex items-center">
                <Image src={logo} alt="Logo" className="w-[2.35vw] mr-1.5" />
                <p>Online Therapy (40 Mins)</p>
              </div>
              <p className="mt-0">
                ₹{" "}
                {user?.meeting_url?.price
                  ? user?.meeting_url?.price
                  : showPopUpId?.meeting_url?.price}
              </p>
            </div>
            <div className="h-[1px] w-11/12 bg-gray-500 my-1 "></div>
            <div
              className="bg-white hover:shadow-md hover:scale-105 shadow-gray-50 transition-all flex cursor-pointer items-center justify-between rounded-md text-websiteBlue w-[70vw] md:w-[26vw] px-4 py-2 md:text-lg"
              onClick={(e) => {
                setFourtyMinMeet(true);
                history.push(
                  `/therapy/${
                    id ? id : showPopUpId?.meeting_url?._id
                  }/schedule/appoint`
                );
              }}
            >
              <div className="flex items-center">
                <Image src={logo} alt="Logo" className="w-[2.35vw] mr-1.5" />
                <p>Online Therapy (60 Mins)</p>
              </div>
              <p className="mt-0">
                ₹{" "}
                {user?.full_meeting_url?.price
                  ? user?.full_meeting_url?.price
                  : showPopUpId?.full_meeting_url?.price}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MemberConsent;
