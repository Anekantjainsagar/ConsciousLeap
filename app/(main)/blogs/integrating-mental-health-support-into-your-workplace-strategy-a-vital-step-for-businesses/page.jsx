"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Blog2 = () => {
  const history = useRouter();

  return (
    <div className="mx-auto w-[90vw] md:w-[70vw] py-[1vw]">
      <Image
        src={"/blog 1/Picture1.jpg"}
        width={100}
        height={100}
        alt="Blog"
        className="mx-auto rounded-md w-full"
      />
      <div className="px-[3vw] md:px-[8vw] mt-5">
        <h1 className="text-2xl mt-4 font-bold text-websiteBlue gradientHover cursor-pointer">
          Integrating Mental Health Support into Your Workplace Strategy:
          <br /> A Vital Step for Businesses
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] p-2">
          <div className="mb-5">
            <h6 className="text-lg ">By- Sagrikaa Rastogi</h6>
            <p className="text-sm ">Counselling Psychologist</p>
          </div>
          <p>
            I recently had an interaction with someone who said depression is
            nothing, it&apos;s just being marketed and on asking what made him
            believe this he said &quot;it&apos;s better to live in a world of
            capitalism” When I asked him about the recent EY case (
            <Link link="https://economictimes.indiatimes.com/news/company/corporate-trends/ey-india-employees-death-stirs-a-storm-around-high-stress-workplaces-and-mental-health/articleshow/113492646.cms?from=mdr" />
            ) of whether is it in the air or is it true? To which he said the
            case is true because a mother would never lie about her child and
            after an intense discussion with him, the one thing that I came
            across is he believes that mental health matters but to sound cool
            he said what he said to me in first place. It&apos;s sad that we
            live in a society where just too sound cool we deny our own health
            and I guess this happens with most of us.
            <br />
            <br />
            Ever since we were kids, the only thing that we were taught is that
            the only pathway to success is hard work but nobody taught us the
            definition of Hard work. Hard work is interpreted as working long
            hours, ignoring our own health, putting your personal and social
            life on hold and prioritizing work over everything but isn’t its
            misinterpretation of hard work. Hard work should be interpreted as
            giving your best and that shouldn’t require working long hours,
            Having a work – life balance.{" "}
            <Link link="https://www.mind.org.uk/information-support/tips-for-everyday-living/" />
            <Image
              src={"/blog 2/2.jpg"}
              width={100}
              height={100}
              alt="Blog"
              className="mx-auto rounded-md w-full"
            />
          </p>
          <div className="mt-8">
            <h4 className="text-2xl font-semibold">
              How to Achieve Work- Life Balance
            </h4>{" "}
            <Image
              src={"/blog 2/3.jpg"}
              width={100}
              height={100}
              alt="Blog"
              className="mx-auto rounded-md w-full"
            />
            <ul className="list-disc">
              <li className="mb-4">
                Learn to say no without guilt: Our brain is so ingrained with
                the definition of success that we don&apos;t set our boundaries
                and eventually our work becomes our life. The fear of being
                judged, missing opportunities is so real that we forget to set
                boundaries. Setting boundaries is tough as we live in a world
                where performance and productivity is only valued but setting
                boundaries is important and it can be anything such as taking a
                day off if your body resists doing work, cancelling on
                last-minute meetings and projects. (More on setting boundaries:{" "}
                <Link link="https://www.psychologytoday.com/intl/basics/boundaries" />
                )
              </li>
              <li className="mb-4">
                Practice Gratitude: We live in a world of competition and
                practicing gratitude can seem sometimes a practice that is made
                for privileged people but it&apos;s not. Practicing gratitude
                can help you shift your perspective from scarcity to abundance.
                Some of the simple gratitude practices that you can do is
                reflecting on the little joys in life, focusing on what&apos;s
                present instead of cribbing about what is not, taking a walk in
                nature, spending time with your loved ones.(Learn more about
                gratitude:{" "}
                <Link link="https://www.forbes.com/councils/forbescoachescouncil/2021/12/29/the-benefits-of-showing-gratitude-in-the-workplace/" />
                )
              </li>{" "}
              <Image
                src={"/blog 2/4.jpg"}
                width={100}
                height={100}
                alt="Blog"
                className="mx-auto rounded-md w-full mb-10"
              />
              <li className="mb-4">
                Maintain Work Life Balance: Your personal life shouldn&apos;t
                always take a backseat instead you should find ways where you
                can excel at work and in your personal life as well. Some of the
                ways can be making your to-do list for the day and trying to do
                focused work by blocking time, leveraging support, when
                necessary, which will help in managing your workload and
                prioritizing tasks that make a big difference. (Read more:{" "}
                <Link link="https://www.helpguide.org/wellness/career/mental-health-in-the-workplace" />
                )
              </li>{" "}
              <li className="mb-4">
                Seek Help: There has been a lot of stigma around mental health
                which makes us hesitant to ask for help but asking for help
                doesn&apos;t define you but it helps you become a better version
                of yourself, helps you understand yourself better and helps you
                manage your emotions. Research demonstrates that psychotherapy
                is effective for a variety of mental and behavioural health
                issues and across a spectrum of population groups. The average
                effects of psychotherapy are larger than the effects produced by
                many medical treatments.
              </li>{" "}
              <Image
                src={"/blog 2/5.jpg"}
                width={100}
                height={100}
                alt="Blog"
                className="mx-auto rounded-md w-full mb-10"
              />
            </ul>{" "}
            <h4 className="text-2xl font-semibold">What can Companies Do</h4>{" "}
            <Image
              src={"/blog 2/6.jpg"}
              width={100}
              height={100}
              alt="Blog"
              className="mx-auto rounded-md w-full"
            />{" "}
            <ul className="list-disc">
              <li className="mb-4">
                Flexible schedule at work: allowing employees to work flexible
                hours or giving them the option of remote work if part of their
                can be done from home as it will increase the productivity and
                will be cost effective as well. (More on benefits of flexible
                work:{" "}
                <Link link="https://www.forbes.com/sites/kalinabryant/2024/03/27/the-impact-of-flexible-work-and-the-importance-of-adapting-to-change/" />
                )
              </li>
              <li className="mb-4">
                Employee assistance programme: Every company should provide
                support to the employees to overcome any problem they’re facing
                or any kind of support they need. Attridge found that EAP use
                was associated with increased productivity, engagement and life
                satisfaction, and reduced absenteeism and workplace distress.
                (Learn about EAP:{" "}
                <Link link="https://www.betterup.com/blog/what-is-an-eap" />)
              </li>{" "}
              <li className="mb-4">
                Opportunities for Enjoyment: companies can try and make the work
                place a little comfortable for the employee by frequently
                organising events, trips or ice- breakers where the employees
                get to jell up with each other and add other workplace perks
                such as acknowledging the extra hard work put up the employee,
                encouraging the employee to take their health in consideration,
                sending thankyou and appreciation card to everyone.
              </li>{" "}
              <li className="mb-4">
                Range of Benefits: Companies can provide range of benefits to
                the employees such as by providing them with employee affordable
                health insurance plan and retirement plan as well. By making the
                process of a new comer smooth instead of making them feel like
                they have entered an unknown territory help them feel welcomed.
              </li>{" "}
              <li className="mb-4">
                Regular Check in with Supervisors: Companies can instruct the
                team leader of every department to have regular check ins with
                the employees where the supervisors can gauge the discussion of
                an employee is feeling, provide solutions to their problems and
                help them make a career plan for themselves.
              </li>{" "}
            </ul>{" "}
          </div>
          <p className="mt-1">
            The goal of a company should be to treat an employee at least as
            human if they can’t treat them as a family. it should not matter how
            many hours an employee is working as long as the tasks and
            responsibilities are fulfilled.
          </p>
          <p className="mt-4">
            There is lot of stigma around mental health and we’ve a long way to
            be able to build a world where mental health matters but The Anna
            Sebastion Perayi Tragedy (
            <Link link="https://www.thehindu.com/news/national/maharashtra/ey-employees-death-anna-wanted-to-work-for-un-and-who-she-wanted-to-explore-the-world-says-her-mother/article68700257.ece" />
            ) is waking call for us to understand that mental health matters as
            much as physical health does. Whenever you find yourself in a whirl
            of emotions, not able to regulate your emotions, have a hard time
            understanding your own self and strive to become a better version of
            yourself – don’t hesitate asking for help. Therapy does not make you
            look weak instead it helps you work on yourself like you
            consistently work on your physical health.
            <br />
            <br />
            We, at Consciousleap provide therapy services to all age groups in
            various areas such as anxiety, depression, self esteem issues.
            Behavioural issues, emotional regulation, resilience. To know more
            about us or book an appointment visit{" "}
            <Link link="https://consciousleap.co/" />
          </p>{" "}
          <Image
            src={"/blog 2/7.jpg"}
            width={100}
            height={100}
            alt="Blog"
            className="mx-auto rounded-md w-full mt-6"
          />
        </div>
      </div>
    </div>
  );
};

const Link = ({ link }) => {
  return (
    <span
      className="text-blue-500 cursor-pointer underline"
      onClick={() => {
        history.push(link);
      }}
    >
      {link}
    </span>
  );
};

export default Blog2;
