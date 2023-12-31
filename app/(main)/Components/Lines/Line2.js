"use client";
import React, { useEffect } from "react";
import line from "../../Assets/Lines/Lines-02.png";
import Image from "next/image";

const Line2 = () => {
  return (
    <div className="py-16 md:py-20 w-full overflow-hidden">
      <Image src={line} alt="Line" className="animate w-full" />
    </div>
  );
};

export default Line2;
