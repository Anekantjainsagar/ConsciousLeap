import Image from "next/image";
import React from "react";

const LoadPage = () => {
  return (
    <div className="flex items-center justify-center absolute top-0 left-0 z-50 bg-white w-[100vw] h-[100vh]">
      <Image
        alt="Loader"
        src={"/Loader.gif"}
        width={1000}
        height={1000}
        className="w-[400px] h-[400px]"
      />
    </div>
  );
};

export default LoadPage;
