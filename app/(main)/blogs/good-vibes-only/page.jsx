import Image from "next/image";
import React from "react";
import blog from "../../Assets/Blogs/6.jpg";

const Blog2 = () => {
  return (
    <div className="mx-auto w-[70vw] py-[1vw]">
      <Image src={blog} alt="Blog" className="mx-auto" />
      <div className="px-[8vw]">
        <h1 className="text-2xl mt-4 font-bold hover:text-websiteBlue cursor-pointer">
          Moving away from the "good vibes only approach"
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] px-2 py-2">
          The "good vibes only" approach, also known as “toxic positivity”, is a
          popular mantra or philosophy that encourages people to focus only on
          positive thoughts, emotions, and experiences, and to avoid anything
          that might bring them down or create negative energy. This approach
          suggests that by focusing solely on positivity, individuals can
          attract more positive experiences into their lives and improve their
          overall well-being.
          <br /> You might have witnessed toxic positivity in various forms
          like-
          <br />
          <p className="ml-4">
            1. Just stay positive <br /> 2. Everything happens for a reason
            <br />
            3. Look at the bright side
            <br /> 4. Happiness is a choice. Just choose to be on the positive
            side!{" "}
          </p>
          <br /> The idea behind the "good vibes only" approach is that positive
          energy attracts positive energy, and that by maintaining a positive
          mindset, individuals can manifest positive outcomes in their lives.
          This approach can be seen in various forms, from social media posts
          that promote positivity to self-help books and seminars that encourage
          people to cultivate a positive attitude and mindset.
          <br />
          However, while focusing on positivity can be beneficial in many ways,
          it's important to acknowledge and validate the full range of human
          emotions and experiences. Emotions like sadness, frustration, and
          anger are a natural part of the human experience, and suppressing or
          ignoring them can be harmful in the long run. A more balanced approach
          that acknowledges both positive and negative emotions and experiences
          can promote emotional wellbeing and growth. <br /> The "good vibes
          only" approach can be harmful in a lot of ways:
          <div className="ml-4 mt-0">
            <br /> It can invalidate negative emotions: Emotions like sadness,
            anger, frustration, and anxiety are a natural part of the human
            experience. Telling someone to "just think positive" or to "get over
            it" can make them feel like their emotions are not valid or that
            they are doing something wrong by
            <br /> 1. feeling them.
            <br /> It can lead to suppression of emotions: By constantly pushing
            for positive emotions, people may feel pressure to suppress negative
            emotions, which can lead to emotional repression and
            <br />
            2. psychological distress.
            <br /> It can create a toxic positivity culture: When people are
            constantly encouraged to maintain a positive attitude, it can create
            a culture where people feel pressure to put on a happy face, even
            when they are struggling. This can be especially harmful in
            situations where people are dealing <br /> 3. with trauma, grief, or
            other difficult experiences.
            <br /> It can discourage growth and learning: Growth and learning
            often come from difficult experiences and challenges. By constantly
            seeking out positive experiences and avoiding <br /> 4. negative
            ones, people may miss out on opportunities for growth and learning.
          </div>
          <br /> <br /> Overall, while positivity and optimism can be beneficial
          in many ways, it's important to acknowledge and validate the full
          range of human emotions and experiences. A more balanced approach that
          acknowledges both positive and negative emotions and experiences can
          promote emotional wellbeing and growth.
        </div>
      </div>
    </div>
  );
};

export default Blog2;
