import Image from "next/image";
import React from "react";
import blog from "../../Assets/Blogs/5.jpg";

const Blog2 = () => {
  return (
    <div className="mx-auto w-[70vw] py-[1vw]">
      <Image src={blog} alt="Blog" className="mx-auto" />
      <div className="px-[8vw]">
        <h1 className="text-2xl mt-4 font-bold text-websiteBlue gradientHover cursor-pointer">
          Surprising Ways to Get Motivated!
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] px-2 py-2">
          Motivation is a powerful but elusive beast. It is sometimes very easy
          to become motivated, and you find yourself caught up in a whirlwind of
          excitement. Sometimes it&apos;s nearly impossible to figure out how to
          motivate yourself, and you&apos;re stuck in a death spiral of
          procrastination.
          <br />
          <br />
          <b>What Is Motivation and How Does It Work?</b>
          <br />
          <br />
          Motivation is defined by scientists as your general willingness to do
          something. It is the collection of psychological forces that compel
          you to act.
          <br />
          <br />
          It is sometimes easier to change than it is to stay the same. Every
          choice has a cost, but when we are motivated, the inconvenience of
          action is easier to bear than the pain of remaining the same. We reach
          a mental tipping point, usually after weeks of procrastination and in
          the face of an impending deadline, where it becomes more painful not
          to do the work than to do it.
          <br />
          <br />
          Many people struggle to find the motivation they require to achieve
          their desired goals because they devote too much time and energy to
          other aspects of the process. If you want to make it easier to find
          motivation and get started, automating the early stages of your
          behavior can help.
          <br />
          <br />
          <b>A few steps on how to be motivated-</b>
          <br />
          <br />
          Willpower has a limit. Motivation keeps on changing. When you least
          expect it, inspiration can strike and leave you stranded just when you
          need it most.
          <br />
          <br />
          Whatever you choose to refer to it as—motivation, willpower,
          inspiration, or your muse—you must continually refresh and feed it.
          <br />
          <br />
          <li>
            <b>FORMULATE A ROUTINE-</b>
            <br />
            You may think that performing the same task repeatedly, day after
            day, seems not only very monotonous but also incredibly
            constricting. But you&apos;d be totally mistaken. The routine has a
            life of its own. It turns into a holy place and moment that is
            frequently just as significant as your intended activity.
          </li>
          <br />
          <br />
          <li>
            <b>SET UP REWARDS-</b>
            <br />
            There is undoubtedly something you have wanted. Create a reward
            promise to yourself if you do some important tasks in a timely
            manner you’ll reward yourself with something you have always wanted.
            After you have momentum, your normal motivation will start to flow.
          </li>
          <br />
          <br />
          <li>
            <b>SET A GOAL TO BEAT THE CLOCK-</b>
            <br />
            When I have trouble getting motivated, I give myself manageable
            assignments with definite deadlines. I feel wonderful after the
            first several completions, which makes me want more. Put up three or
            four chores that can be completed in 10 minutes and press on.
          </li>
          <br />
          <br />
          <li>
            <b> KINDLY UPON YOURSELF-</b>
            <br />
            Living a happy, healthy, and less stressful life requires you to be
            kind to yourself. Yet it can also serve as inspiration! You may be
            inspired to pursue your goals when you are at ease.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
