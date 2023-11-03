import Image from "next/image";
import React from "react";
import blog from "../../Assets/Blogs/4.jpg";

const Blog2 = () => {
  return (
    <div className="mx-auto w-[70vw] py-[1vw]">
      <Image src={blog} alt="Blog" className="mx-auto" />
      <div className="px-[8vw]">
        <h1 className="text-2xl mt-4 font-bold text-websiteBlue gradientHover cursor-pointer">
          How Gratitude Makes You Happier !
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] px-2 py-2">
          Happiness can seem unattainable at times, especially during difficult
          times. But there is a surprisingly simple path to happiness, joy, and
          positivity:
          <br />
          <b>gratitude.</b>
          <br />
          <br />
          Gratitude is strongly and consistently associated with greater
          happiness in positive psychology research. Gratitude assists people in
          feeling more positive emotions, appreciating good experiences,
          improving their health, dealing with adversity, and developing strong
          relationships.
          <br />
          <br />
          <b>Ways to cultivate gratitude</b>
          <br />
          <br />
          Gratitude teaches people to appreciate what they have rather than
          always reaching for something new. It allows people to refocus on what
          they have rather than what they lack.
          <br />
          <br />
          Here are some ways to cultivate gratitude on a regular basis:
          <div className="ml-4 py-3">
            <li className="mb-3">
              <b>Send a thank-you note.</b>
              <br />
              Writing a thank-you letter or email expressing your enjoyment and
              appreciation for that person&apos;s impact on your life can make
              you happier and strengthen your relationship with that person.
            </li>
            <li className="mb-3">
              <b>Maintain a gratitude journal. </b>
              <br />
              Make it a habit to write down or share your thoughts about the
              gifts you&apos;ve received with a loved one every day.
            </li>
            <li className="mb-3">
              <b>Consider your blessings. </b>
              <br />
              Set aside some time each week to sit down and write about your
              blessings, reflecting on what went well or what you are thankful
              for. Be specific in your writing and consider the feelings you
              experienced when something good happened to you.
            </li>
          </div>
          That is not all.. Here are some findings that point to the
          psychological benefits of being grateful.
          <br />
          <br />
          <li>
            <b>Gratitude frees us from toxic emotions.</b>
            <br />
            Gratitude letter writing improves mental health by diverting
            attention away from toxic emotions like resentment and envy. When
            you write about how grateful you are to others and how much they
            have blessed your life, it may become much more difficult for you to
            dwell on your negative experiences.
          </li>
          <br />
          <li>
            <b>The benefits of gratitude take time to manifest.</b>
            <br />
            It&apos;s important to note that the advantages of gratitude writing
            for mental health develops gradually over time rather than all at
            once.
            <br />
            If you participate in a gratitude writing activity, don&apos;t be
            surprised if you don&apos;t feel significantly better right away. Be
            patient, and keep in mind that the benefits of gratitude may take
            some time to manifest.
            <br />
            <br />
            Chasing happiness is unlikely to bring you joy, but focusing on
            others, giving back to the community, and connecting with loved ones
            during memorable experiences do. However, being grateful as
            consciously and continuously as possible provides a path towards
            more positivity and contentment.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
