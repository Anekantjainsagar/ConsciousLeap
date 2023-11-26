import Image from "next/image";
import React from "react";
import blog from "../../Assets/Blogs/sustain.jpg";

const Blog = () => {
  return (
    <div className="mx-auto w-[90vw] md:w-[70vw] py-[1vw]">
      <Image src={blog} alt="Blog" className="mx-auto" />
      <div className="px-[3vw] md:px-[8vw]">
        <h1 className="text-2xl mt-4 w-fit font-bold text-websiteBlue gradientHover cursor-pointer">
          Sustainability: An Essential Pathway to a Brighter Future
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] px-2 py-2">
          <p className="font-bold">Introduction</p> In today&apos;s rapidly changing
          world, the concept of sustainability has become increasingly
          important. But what exactly does it mean, and why is it crucial for
          our future? Sustainability refers to the responsible and balanced use
          of resources to meet our present needs without compromising the
          ability of future generations to meet their own needs.
          <br />
          <br /> <p className="font-bold">
            The Importance of Sustainability
          </p>{" "}
          Sustainability is essential because it addresses the urgent need to
          protect our environment, conserve resources, and foster social and
          economic well-being. By adopting sustainable practices, we can
          mitigate climate change, reduce pollution, and preserve biodiversity.
          Moreover, sustainability encourages the development of innovative
          solutions that improve efficiency and reduce waste. It promotes
          responsible consumption and production patterns, ensuring that
          resources are used wisely and equitably. Additionally, sustainable
          development promotes social equity, ensuring that everyone has access
          to education, healthcare, and a decent standard of living. <br />
          <br />
          <p className="font-bold">Sustainable Practices</p> To achieve
          sustainability, we must incorporate sustainable practices into all
          aspects of our lives. This includes adopting renewable energy sources,
          reducing waste through recycling and composting, promoting sustainable
          agriculture, conserving water, and implementing efficient
          transportation systems. Moreover, sustainable practices extend to
          businesses and industries, where responsible production, fair trade,
          and ethical practices are crucial. <br />
          <br />
          <p className="font-bold">Conclusion</p>
          Sustainability is not an option but a necessity for our planet&apos;s
          survival. By embracing sustainable practices, we can create a world
          where future generations can thrive and flourish. Let us embark on
          this transformative journey together.
        </div>
      </div>
    </div>
  );
};

export default Blog;
