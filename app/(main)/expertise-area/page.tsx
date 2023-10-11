"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import image from "@/(main)/Assets/AreaExpertise.jpg";

const ExpertiseArea = () => {
  const [data, setData] = useState();
  return (
    <div>
      <Image src={image} alt="Area expertise" className="w-8/12 mx-auto" />
    </div>
  );
};

export default ExpertiseArea;
