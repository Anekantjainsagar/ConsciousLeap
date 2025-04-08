import React from "react";

const Slider = ({ val }) => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-[#4EC1BA] text-2xl md:text-3xl font-bold mb-2 md:mb-4">
        {val}/16
      </p>
      <div className="flex items-center justify-between gap-2 md:gap-4">
        {Array.from({ length: 16 }, (_, i) => i + 1).map((_, idx) => {
          return (
            <div
              key={idx}
              className={`h-[4px] md:h-[5px] w-full ${
                idx + 1 < val ? "bg-newParrotGreen" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
