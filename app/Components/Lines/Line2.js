"use client";
import React, { useEffect } from "react";
import line from "@/app/Assets/Lines/Lines-02.png";
import Image from "next/image";

const Line2 = () => {
  return (
    <div className="py-16 md:py-20 overflow-hidden">
      <Image src={line} alt="Line" className="animate" />
    </div>
  );
};

export default Line2;
