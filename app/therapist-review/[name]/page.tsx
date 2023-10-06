import Image from "next/image";
import React from "react";
import image from "../../Assets/sagrika.jpeg";

const TherapistReview = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full w-2/12 bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]">
        <div className="flex h-full w-full rounded-full items-center justify-center bg-white">
          <Image src={image} alt="Photo of girl" className="rounded-full" />
        </div>
      </div>
      <h1 className="text-darkGrey text-2xl font-semibold mt-1 mb-4">
        Sagrika Rastogi
      </h1>
      <div className="w-9/12 mt-2">
        {[
          "On a scale of 1 to 5, how would you rate the therapist's ability to create a positive and supportive environment during your sessions?",
          "How knowledgeable and informed did you find the therapist to be about your specific concerns or issues? Please rate their level of expertise on a scale of 1 to 5.",
          "Did the therapist's calm demeanor and presence contribute to your overall comfort and ability to open up during the sessions? Please share your thoughts on their ability to create a calming atmosphere, using a scale of 1 to 5.",
        ].map((e) => {
          return (
            <div key={e} className="mb-4 font-light">
              <p className="text-darkGrey">{e}</p>
              <select
                name="rating"
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
          );
        })}
      </div>
      <div className="w-9/12">
        <h1 className="text-xl mt-4 font-light text-center">
          Feel free to share anything about your session experience.
        </h1>
        <input
          type="text"
          placeholder="Feedback"
          className="w-full mt-1 p-2 outline-none border text-darkGrey border-lightGrey rounded-md"
        />
      </div>
      <button className="bg-websiteBlue px-16 py-2 mt-3 text-white rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default TherapistReview;
