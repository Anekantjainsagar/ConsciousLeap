import Image from "next/image";
import React from "react";
import blog from "../../Assets/Blogs/2.jpg";

const Blog2 = () => {
  return (
    <div className="mx-auto w-[90vw] md:w-[70vw] py-[1vw]">
      <Image src={blog} alt="Blog" className="mx-auto rounded-md" />
      <div className="px-[3vw] md:px-[8vw]">
        <h1 className="text-2xl mt-4 font-bold text-websiteBlue gradientHover cursor-pointer">
          Open-mindedness - and why it matters!
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <p className="text-[17px] px-2 py-2">
          Are you a person who is willing to try new things? Do you feel
          comfortable when others share their opinions and views much better
          than you? Are you eager to take advantage of the best that others have
          to offer? All of this, and much more, makes you receptive. You are the
          one who is adaptable, objective, and neutral in your thoughts and
          actions.
          <br />
          <br />
          Let’s learn the various aspects of being an open-minded person in this
          short elaborate blog!!
          <br />
          <br />
          <b>Open-minded – Meaning</b>
          <br />
          <br />
          Open-mindedness is a positive character trait. It enables all those
          who use it to think rationally and critically for drawing unbiased
          conclusions.
          <br />
          <br />
          The capacity to accept and give thought to novel and divergent
          viewpoints from one&apos;s own is referred to as being open-minded.
          They remain adaptable to all those concepts that help in critical
          thinking and creative decision-making.
          <br />
          <br />
          Research shows that your personality traits (patterns of thinking,
          feeling, and behaving) not only change your outlook on life but also
          change the way you perceive reality at work, and how you relate with
          family, friends, and romantic partners.
          <br />
          <br />
          Lets jump to the main part..
          <br />
          <b>Why is open-mindedness important?</b>
          <br />
          <br />
          <p>Many things can be benefited from having an open mind.</p>
          <p className="ml-4">
            Open minded behaviour assists to weigh down tension. Your life is no
            longer weighed down by
            <li>pointless conflicts.</li>
            <li>You&apos;ll always feel more contentment and peace.</li>
            <li>
              There will be so much to learn and experience all around you.
            </li>
            <li>More buddies will be added in your social sphere.</li>
            <li>
              You won&apos;t be affected by any limited biases or viewpoints
              anymore.
            </li>
            <li>
              Open mindedness allows thoughtful thinking and stops you to jump
              into conclusions
            </li>
          </p>
          <br />
          <br />
          <b>The following are some benefits of being open-minded:</b>
          <br />
          <br />
          <p className="ml-4">
            <li>Brings openness to change.</li>
            <li>
              Employees adapt to new ideas and techniques when old ways do not
              work any more
            </li>
            <li>
              Flexible employees who share ideas and accept their mistakes
              quickly.
            </li>
            <li>Teamwork gets better with an open-minded attitude</li>
            <p>
              Conflict resolution becomes easy since employees already possess
              the spirit of cooperation and
            </p>
            <li>
              Conflict resolution becomes easy since employees already possess
              the spirit of cooperation and adjustment.
            </li>
            <li>
              Willingness to learn, explore, innovate new things increases
              amongst the staff members
            </li>
          </p>
          <br />
          <br />
          <b>Summing Up from our side….</b>
          <br />
          <br />
          <p>
            Open-mindedness is a positive personality trait to have. You look at
            other people’s situations, consider them unbiased and then draw
            desired conclusions.
          </p>
          <br />
          <br />
          <p>
            It enables you to face life&apos;s challenges with courage while
            keeping you safe from manipulation. You lead a life on your terms.
          </p>
          <br />
          <br />
          Practice open-mindedness to shift your perspective. By learning new
          ways to make your life more awesome, you not only grow but also
          inspire your co-workers and loved ones to become better versions of
          themselves.
        </p>
      </div>
    </div>
  );
};

export default Blog2;
