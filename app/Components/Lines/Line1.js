"use client";
import React, { useEffect } from "react";
import line from "../../Assets/Lines/Lines-01.png";
import Image from "next/image";

const Line1 = () => {
  return (
    <div className="py-8 md:py-12 overflow-hidden">
      <Image src={line} alt="Line" className="animate" />
    </div>
  );
};

export default Line1;
