"use client";
import Image from "next/image";

const Blog2 = () => {
  return (
    <div className="mx-auto w-[90vw] md:w-[70vw] py-[1vw]">
      <Image
        src={"/blog 3/1.jpg"}
        width={100}
        height={100}
        alt="Person placing phone away in a serene nature setting, symbolizing digital detox."
        className="mx-auto rounded-md w-full"
      />
      <div className="px-[3vw] md:px-[8vw] mt-5">
        <h1 className="text-2xl mt-4 font-bold text-websiteBlue gradientHover cursor-pointer">
          The Rising Necessity for Digital Detox
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] p-2">
          {" "}
          <div className="mb-5">
            <h6 className="text-lg ">By- Sagrikaa Rastogi</h6>
            <p className="text-sm ">Counselling Psychologist</p>
          </div>{" "}
          <h6 className="text-xl font-semibold mb-1">
            Stimulating the Mind and the Reasons Behind It
          </h6>
          <p>
            In an age, when everyone is connected to each other more than ever
            before, it is easy to feel imprisoned by the more irritating aspects
            of the world we live in, which include the incessant dings and pings
            of notifications, the perpetual feed of news, and lastly, the
            never-ending scrolling on social media. Howbeit, technology has
            improved people&apos;s lives in many ways, it has also to a large
            extent increased the cases of anxiety, stress, and burnout. For
            this, the idea of &quot;digital cleansing&quot; is emerging fast in
            many societies, a term that is becoming extremely popular as an
            increasing number of people as well as mental health practitioners
            appreciate the merits of taking a break from the modern means of
            communications.
            <br /> To the surprise of many, the notion of digital detox does not
            focus on violence-prone or self-destructive ways of unsubscribing:
            simply it means limiting access to online communication devices and
            environments for certain periods of time to reduce psychological
            pressure and restore cognitive resources. In this piece, we will
            look at how and why digital detox should be done regularly and how
            it affects positively ones mental wellness.
          </p>
          <div className="mt-5">
            <h4 className="text-2xl font-semibold">
              Why is Digital Detox Necessary?
            </h4>{" "}
            <Image
              src={"/blog 3/2.jpg"}
              width={100}
              height={100}
              alt="Infographic showing the effects of excessive digital use, such as anxiety and sleep disruption"
              className="mx-auto rounded-md w-full"
            />
            <p className="px-2">
              Data from surveys indicate that the average individual spends four
              to six hours daily accessing the internet, most of which includes,
              social networks, emails as well as newsfeeds. Persistent seclusion
              in front of the screen does not, in any event, only bear the
              physical consequences of straining the eyes, but it bears
              consequences on our mental health as well. In relation to this,
              greater physical uses of communication technologies have been
              associated with more depression, anxiety and sleeping disorders.
              <br />
              With the advancement of the digital revolution in India, the
              number of active smartphone users has also increased. A report
              from{" "}
              <span
                onClick={() => {
                  window.open("https://www.statista.com/", "__blank");
                }}
                className="text-blue-400 cursor-pointer underline"
              >
                Link
              </span>{" "}
              states that the nation will have one billion smartphone users by
              the year 2026. Such an increase in consumption highlights a need
              to better understand how to bring equilibrium between the virtual
              and the real.
            </p>{" "}
            <h4 className="text-2xl font-semibold mt-4 mb-2">
              The Mental Health Toll of Constant Connectivity
            </h4>{" "}
            <Image
              src={"/blog 3/3.jpg"}
              width={100}
              height={100}
              alt="Split image contrasting stressed person with notifications and a relaxed person reading."
              className="mx-auto rounded-md w-full mb-3"
            />
            <p className="px-2">
              And let&apos;s not shy away from the truth about this. We scroll
              down Facebook or Instagram, feel that everyone except us is having
              a happier life than we do, or we feel the constant need to be
              available and responding regardless if we actually want to. Such
              distraction can elicit feelings of inadequacy, isolation, and even
              worse – burnout. This is how it manifests in us:
            </p>{" "}
            {[
              {
                title: "Anxiety and Stress",
                value:
                  "FOMO is a flesh and blood condition and thanks to the endless cycle of updates, posting and messaging, it becomes real. The need to keep pace results in clinical stressing and anxiety due to the pressure that usually accompanies such situations, partly because of the focus on depicting idyllic lives online.",
              },
              {
                title: "Sleep Disruption",
                value:
                  "One of the reasons behind this situation is the more time you spend in front of the computer screen at night; the more difficulty you will face sleeping due to your body not producing sufficient melatonin hormone. In the clinical research done by the www.ncbi.nlm.nih.gov, there was found that blue light which comes from the various screens before going to bed alters our circadian clocks hence making it difficult to sleep and stay asleep.",
              },
              {
                title: "Impaired Attention and Effectiveness",
                value:
                  "There’s always something notifying you, and alternation between tasks decreases efficiency. Dedication is hard to solidify, and when it does, it negatively impacts the quality of work and depletes the individual.",
              },
            ].map((e, i) => {
              return (
                <div key={i} className="px-2.5 mt-6">
                  <p className="font-semibold mb-1 inline mr-2">{e?.title}:</p>
                  {e?.value}
                </div>
              );
            })}{" "}
            <h4 className="text-2xl font-semibold mt-4 mb-2">
              How Digital Detox Can Help
            </h4>{" "}
            <Image
              src={"/blog 3/4.jpg"}
              width={100}
              height={100}
              alt="Circular diagram showing benefits of digital detox like better sleep and improved focus."
              className="mx-auto rounded-md w-full mb-3"
            />
            <p className="px-2">
              Entering into a digital silence period can be beneficial to one at
              the moment and also later. Here is what works:
            </p>
          </div>
          <div>
            {[
              {
                title: "Relief from Anxiety or Stress",
                para: "There is a huge detoxing effect from the excessive use of social media, and digital devices allow more focus on mental planes. It is easy to cut down stress hormones when there are no recurrent online demands to keep up with people. The social media tools are simply a hindrance to one’s focus, and people tend to enjoy them even when they are stressing out trying to nestle in, hence the notifications causing distress.",
              },
              {
                title: "Better Sleep",
                para: "Turning off various devices within an hour before retiring to sleep can bring great changes in sleep patterns. Sleep definitely improves when bright lights are avoided for some time before sleeping. The brain needs refreshing supine states free from active thoughts and barrage of informational queue which is what a digital detox would help in achieving.<br/> To learn more about sleep hygiene and their effects on your mental well-being, visit https://www.sleepfoundation.org/",
              },
              {
                title: "Enhanced Concentration and Work Efficiency",
                para: "It has been noticed that once you go off the grid for a certain period of time, even if it is a few hours in a day, everything begins to look a lot clearer in a way. This is because the consistent annoyance of emails, messages and any subject notifications is no longer there, giving the person?s mind the ability to ring fenced solely on the predetermined task and as such get better results and enjoy their work. <br/>For more on increasing focus and productivity go to https://positivepsychology.com/",
              },
              {
                title: "More Meaningful In-Person Relationships",
                para: "Our ability to stay connected at all times has its own disadvantages, and one of them is the declining important personal interactions with other people. During a digital detox, one is able to work on the formation of interpersonal relations that have been neglected, such as quality time with one’s relatives or even active participation in gatherings. That is good for your emotional support which is crucial when it comes to mental health.",
              },
            ].map((e, i) => {
              return (
                <div key={i} className="px-2.5 mt-6">
                  <h6 className="text-xl font-semibold mb-1">
                    {i + 1}. {e?.title}
                  </h6>
                  {e?.para?.split("<br/>")?.map((el, i) => {
                    const urlRegex = /(https?:\/\/[^\s]+)/g;
                    const parts = el.split(urlRegex);

                    return (
                      <p className="px-2 mt-1" key={i}>
                        {parts.map((part, index) =>
                          urlRegex.test(part) ? (
                            <a
                              href={part}
                              key={index}
                              className="text-blue-600 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {part.includes("www.sleepfoundation.org")
                                ? "Sleep Better, For the Journey Ahead"
                                : "Become a Positive Psychology Professional"}
                            </a>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div>
            <h4 className="text-2xl font-semibold mt-4 mb-2">
              Practical Tips for a Successful Digital Detox:
            </h4>{" "}
            <Image
              src={"/blog 3/5.jpg"}
              width={100}
              height={100}
              alt="Checklist-style graphic with digital detox tips like screen-free zones and self-care."
              className="mx-auto rounded-md w-full mb-3"
            />
            <p className="px-2">
              Taking a break from technology does not imply that you have to do
              away with technology completely. However, the aim is to look for
              moderation that promotes health. The following are useful actions
              to consider.
            </p>
            {[
              {
                title: "Screen Time Management Techniques",
                para: "Most smartphones are manufactured with various built-in gadgets for monitoring screen time and screen protectors among other features. Create limits of how much time you will spend on those social media, news Application even work emails in a day. Once you hit the limit, take it as a signal that it is time to stop and take a rest or engage in other activities.",
              },
              {
                title: "Set Up “No-Screen” Zones",
                para: "Establish certain timelines of the day or places within the room where mobile, tablets or other computers will not be used.Well! It might mealtimes, family time or during the last hour before bedtime. Such little pauses aid to diminish excess thinking hence make one more focused.",
              },
              {
                title: "Have a Screen Free Weekend",
                para: "It is advisable to declare one weekend in a month as a digital detox weekend. This time can be used going back into the wild, spending time on the activities that you love or doing nothing at all. After this type of weekend, you will be ready for the working week feeling positive and clear.",
              },
              {
                title:
                  "Cut Out Technology and Do Something for Yourself Instead",
                para: "Instead of surfing the internet for hours during breaks, fill that time up with doing good for oneself. It can be any beneficial practice such as meditating, writing in the journal or walking which improve the condition of mind in a way that phonic activities cannot. <br/> To find additional options for self-care, see https://www.mentalhealth.org.uk/",
              },
            ].map((e, i) => {
              return (
                <div key={i} className="px-2.5 mt-6">
                  <h6 className="text-xl font-semibold mb-1">
                    {i + 1}. {e?.title}
                  </h6>
                  {e?.para?.split("<br/>")?.map((el, i) => {
                    const urlRegex = /(https?:\/\/[^\s]+)/g;
                    const parts = el.split(urlRegex);

                    return (
                      <p className="px-2 mt-1" key={i}>
                        {parts.map((part, index) =>
                          urlRegex.test(part) ? (
                            <a
                              href={part}
                              key={index}
                              className="text-blue-600 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {part.includes("https://www.mentalhealth.org.uk/")
                                ? "Everyone deserves good mental health"
                                : "Become a Positive Psychology Professional"}
                            </a>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="px-2.5">
            <h6 className="text-xl font-semibold mb-1 mt-6">
              Conclusion: Give Priority to Digital Detox In Your Mental Health
              Care Regimen
            </h6>
            <p className="px-2 mt-1">
              Digital detox is no longer an optional use; it becomes imperative
              in today’s over saturated information age. While it may not come
              as a surprise that we live and function in a world awash with
              technology, it is equally imperative to bear in mind that
              sometimes the simplest remedy is to switch off, take a rest from
              the gadget, recharge your mind and better your emotional
              well-being. <br />
              <br />
              If battling with the disconcerting sounds from the surrounding,
              begin with baby steps. Establish daily or weekly or bi-weekly
              detox days and observe changes in concentration as well as the
              quality of work done. Easy to understand. moderate use of
              technology can not only change your mindset but also your way of
              perceiving the world. <br />
              <br /> It is known that way too many people tend to neglect their
              mental health, and therefore a digital detox should be quite
              beneficial in restoring your state of balance and wellness.
            </p>
            <p className="px-2 mt-1">
              Such a situation should be dealt with without delay. May it be
              your organization that will take the steps to end the stigma and
              discrimination of mental health issues in the workplace thus
              providing an appropriate environment for employees to develop
              professionally and personally.
            </p>{" "}
            <Image
              src={"/blog 3/6.jpg"}
              width={100}
              height={100}
              alt="Motivational graphic of a person meditating, promoting digital detox."
              className="mx-auto rounded-md w-full mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
