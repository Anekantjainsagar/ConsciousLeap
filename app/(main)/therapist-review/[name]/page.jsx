"use client";
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import image from "../../Assets/sagrika.jpeg";
import { useRouter } from "next/navigation";
import Context from "@/Context/Context";
import axios from "axios";
import { getCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "@/Utils/urls";

const TherapistReview = ({ params }) => {
  const [review, setReview] = useState({
    positivenss: "Select Rating",
    knowledgable: "Select Rating",
    comfortability: "Select Rating",
    experience: "",
  });
  const history = useRouter();
  let id = params.name;
  const [user, setUser] = useState();
  const { therapistFilter } = useContext(Context);

  useEffect(() => {
    const therapist = therapistFilter?.therapistsData?.find(
      (e) => e?._id == id
    );
    setUser(therapist);
  }, [therapistFilter?.therapistsData]);

  const onSubmit = () => {
    console.log(review)
    if (
      review?.positivenss === "Select Rating" ||
      review?.knowledgable === "Select Rating" ||
      review?.comfortability === "Select Rating" ||
      review?.experience === ""
    ) {
      toast.error("Please fill all the details");
    } else {
      axios
        .post(`${BASE_URL}/therapist/review`, {
          token: getCookie("token"),
          therapistId: user?._id,
          ...review,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            setReview({
              positivenss: "Select Rating",
              knowledgable: "Select Rating",
              comfortability: "Select Rating",
              experience: "",
            });
            toast.success("Review added successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Toaster />
      <div className="rounded-full w-[60vw] md:w-[10vw] h-[60vw] md:h-[10vw] bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex h-full w-full p-1 rounded-full bg-white">
          <Image
            src={user?.photo}
            width={1000}
            height={1000}
            alt="Photo of girl"
            className="rounded-full object-cover object-center"
          />
        </div>
      </div>
      <h1 className="text-darkGrey text-2xl font-semibold mt-2 md:mt-1 mb-4">
        {user?.name}
      </h1>
      <div className="w-9/12 mt-2">
        <div className="mb-4 font-light">
          <p className="text-darkGrey">
            {
              "On a scale of 1 to 5, how would you rate the therapist's ability to create a positive and supportive environment during your sessions?"
            }
          </p>
          <select
            name="rating"
            value={review?.positivenss}
            onChange={(e) => {
              setReview({ ...review, positivenss: e.target.value });
            }}
            className="w-full mt-1 p-2 outline-none border text-darkGrey border-lightGrey rounded-md"
          >
            <option value="Select Rating">Select Rating</option>
            {[1, 2, 3, 4, 5].map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4 font-light">
          <p className="text-darkGrey">
            {
              "How knowledgeable and informed did you find the therapist to be about your specific concerns or issues? Please rate their level of expertise on a scale of 1 to 5."
            }
          </p>
          <select
            name="rating"
            value={review?.knowledgable}
            onChange={(e) => {
              setReview({ ...review, knowledgable: e.target.value });
            }}
            className="w-full mt-1 p-2 outline-none border text-darkGrey border-lightGrey rounded-md"
          >
            <option value="Select Rating">Select Rating</option>
            {[1, 2, 3, 4, 5].map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4 font-light">
          <p className="text-darkGrey">
            {
              "Did the therapist's calm demeanor and presence contribute to your overall comfort and ability to open up during the sessions? Please share your thoughts on their ability to create a calming atmosphere, using a scale of 1 to 5."
            }
          </p>
          <select
            name="rating"
            value={review?.comfortability}
            onChange={(e) => {
              setReview({ ...review, comfortability: e.target.value });
            }}
            className="w-full mt-1 p-2 outline-none border text-darkGrey border-lightGrey rounded-md"
          >
            <option value="Select Rating">Select Rating</option>
            {[1, 2, 3, 4, 5].map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="w-9/12">
        <h1 className="text-xl mt-4 font-light text-center">
          Feel free to share anything about your session experience.
        </h1>
        <input
          type="text"
          value={review?.experience}
          onChange={(e) => {
            setReview({ ...review, experience: e.target.value });
          }}
          placeholder="Feedback"
          className="w-full mt-1 p-2 outline-none border text-darkGrey border-lightGrey rounded-md"
        />
      </div>
      <button
        onClick={onSubmit}
        className="bg-websiteBlue px-16 py-2 mt-3 text-white rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default TherapistReview;
