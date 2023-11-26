import Image from "next/image";
import React from "react";
import blog from "../../Assets/Blogs/green.jpg";

const Blog = () => {
  return (
    <div className="mx-auto w-[90vw] md:w-[70vw] py-[1vw]">
      <Image src={blog} alt="Blog" className="mx-auto" />
      <div className="px-[3vw] md:px-[8vw]">
        <h1 className="text-2xl mt-4 w-fit font-bold text-websiteBlue gradientHover cursor-pointer">
          Green Credit Programme: A step towards a better future
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] px-2 py-2">
          The Government of India has launched the Green Credit Programme to
          combat climate change and promote sustainable living. This voluntary
          market mechanism incentivizes individuals, organizations, and
          industries for their environment-friendly actions through the issuance
          and trading of Green Credits. The programme aims to create a mass
          movement called &apos;LiFE&apos; (Lifestyle for Environment) based on
          conservation and traditional values. <br />
          <br />
          The Green Credit Programme has two goals. Firstly, it establishes a
          market-based mechanism that provides incentives for positive
          environmental actions, contributing to the vision of "Mission Life."
          Secondly, it aims to foster a sustainable and environmentally
          conscious society. <br />
          <br />
          The programme will be implemented in phases, starting with activities
          such as tree plantation, water conservation, sustainable agriculture,
          waste management, and more. Specific thresholds and measurement
          parameters will ensure fairness and transparency in generating and
          issuing Green Credits. Accredited verifiers will independently verify
          actions and issue credits.
          <br />
          <br /> A Steering Committee will oversee the programme&apos;s governance,
          and the Indian Council of Forestry Research and Education will act as
          the Administrator. All stakeholders&apos; participation is crucial, and
          voluntary demand for Green Credits will be encouraged nationwide.
          Entities registered for Accredited Compensatory Afforestation can also
          register under the programme.
          <br />
          <br /> The Green Credit Programme has the potential to drive positive
          behavioral changes by encouraging environmentally friendly practices.
          With phased implementation, diverse activities, and transparency, it
          holds great promise in the fight against climate change. <br />
          <br />
          Aligned with India&apos;s domestic and global vision for LiFE, the
          programme promotes environmentally sustainable practices by
          incentivizing actions and mobilizing additional resources.
          <br />
          <br /> In conclusion, the Green Credit Programme is a commendable step
          towards sustainability and climate change mitigation. By fostering
          responsible environmental actions, it encourages a healthier and more
          sustainable future at various levels.
        </div>
      </div>
    </div>
  );
};

export default Blog;
