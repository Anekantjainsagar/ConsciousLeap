import Image from "next/image";
import React from "react";
import image from "@/Assets/AreaExpertise.jpg";

const page = () => {
  return (
    <div>
      <Image src={image} alt="Area expertise" className="w-8/12 mx-auto" />
    </div>
  );
};

export default page;
