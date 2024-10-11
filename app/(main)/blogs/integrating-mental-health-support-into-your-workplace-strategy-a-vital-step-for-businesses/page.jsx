"use client";
import Image from "next/image";

const Blog2 = () => {
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
          Integrating Mental Health Support into Your Workplace Strategy: A
          Vital Step for Businesses
        </h1>
        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
        <div className="text-[17px] p-2">
          <p>
            In a today&apos;s fast evolving work setup, making the mental health
            supportive feature is not an interest but critical part of the
            overall strategy. It should be understood that employee&apos;s
            mental health is not only an individual related problem but also a
            problem that is related to business. There are several work hazards
            that manager, employee and others in similar positions have to deal
            with. The workplace is no longer the just the place to get the work
            done; it is rather an environment where workers spend almost all
            their entire time working with pressures that can either build up or
            destroy their mental health.
          </p>
          <div className="mt-5">
            <h4 className="text-2xl font-semibold">
              Why Mental Health in the Workplace?
            </h4>{" "}
            <Image
              src={"/blog 1/Picture2.jpg"}
              width={100}
              height={100}
              alt="Blog"
              className="mx-auto rounded-md w-full"
            />
            <p className="px-2">
              India has one of the most and fastest growing manpower in the
              world, however, there is very little or no provisions made for
              mental health assistance in organisations. The WHO has reported a
              huge loss resulting from depression and anxiety, estimated to cost
              countries $1 trillion every year. To make matters more
              aggravating, the Indian Journal of Occupational and Environmental
              Medicine undertook a survey and established that approximately
              42.5% of people working in India&apos;s corporate offices were
              under stress or mental anxiety.
            </p>
            <p className="px-2 mt-1">
              {" "}
              Businesses are beginning to realize that protecting the health of
              their personnel&apos;s mind is not just an ethical issue but an
              issue of business concern. As more attention is given to mental
              health issues and the work environment is changing after the
              pandemic, companies are seeking new ways to bring in mental health
              support within their operations. Here&apos;s how your business can
              put stress on mental well-being without compromising on the
              healthier, happier workforce.
            </p>
          </div>
          <div>
            {[
              {
                title: "Formulate a Mental Health Policy",
                para: "First and foremost, mental health should be at the core of the company’s sentiments toward its workers. It is very important to prepare a mental health policy that clearly brings out the mental health challenges that the employees are offered help with. This document should outline the organization’s policy on mental health, the resources it has in place, and how employees could access these resources without being stigmatized or reprimanded. <br/> A mental health policy serves to promote and encourage open discourse concerning the mental wellness of employees at work. Such policies help in dispelling the resource limitations as regard to help seeking behaviour of the employees, in that even the employees who are not in crisis know how to use resources and seek help early on.",
                img: "/blog 1/Picture3.jpg",
              },
              {
                title: "Offer Mental Health Training for Managers",
                para: "In the majority of companies, managers are the first handlers of situations whenever an employee has a problem. It is extremely beneficial to have managers trained to notice mild but potentially serious issues. They could assist employees before the situation deteriorates and help the employees utilize professional help as needed.<br/>It should be such training as would help the learners to develop skills to build rapport with their workmates through appreciation and proper understanding of what listening entails. Managers will also be educated on how to utilize the organizations formatted mental health services to redirect employees.<br/>To explore various types of methods to improve staffs mental health, visit: https://www.mind.org.uk/workplace/mental-health-at-work/taking-care-of-your-staff/",
              },
              {
                title: "Promote Work-Life Balance",
                img: "/blog 1/Picture4.jpg",
                para: "According to an InLine study in India about 46 % of the Indian employees are over enthusiastic about their work which leads to work stress and eventually burnout. To counter this, it’s critical to promote culture which encourages a work life balance. Support open working hours, support employees to take breaks and help understand that rest is a wing of performance.<br/>You might consider allowing remote working, something that has been embraced following the pandemic. This gives employees the freedom to fulfill their work obligations and at the same time be able to take care of other aspects of their lives. The ideal position where both the work time and the personal one has been optimized goes a long way in overall mental safety.<br/>For further reading on work-life balance strategies, check out https://www.worklifebalance.com.",
              },
              {
                title:
                  "Help in Treatment Mental Health Issues When and Where They Arise",
                img: "/blog 1/Picture5.jpg",
                para: "To bolster mental health in the workplace, one of the most effective measures would be to allow employees to engage with licenced therapists or psychologists. A lot of organizations have a program called the Employee Assistance program (EAP) to extend such counselling services to employees who have stress, anxiety or other personal problems. There is increasing interest toward online therapy due to a growing demand by employees who would like to stay at home but wanting to withdraw emotionally.<br/>In India, for example, where tendencies to promote such services boom and tamer, discretion is therefore the better part of valour. It might be a good public or corporate health strategy to work with professional or internet-based mental health counsellors who provide effective, easy and safe treatment. These resources help employees to overwhelm the problem of social discrimination of their organization that obviously exists.<br/>To understand how virtual mental health services are growing, you can refer to https://www.umassglobal.edu/news-and-events/blog/virtual-therapy-revolutionizing-mental-health-treatment",
              },
              {
                title:
                  "Make Mental Health a Part of Regular Life Otherwise It Is Just Neglected",
                img: "/blog 1/Picture6.jpg",
                para: "Stigmatism is one of the most common reasons as to why people avoid seeking mental health assistance especially in workplace settings.<br/>Encourage Mental Health PR throughout the company by creating regular sessions, such as workshops, webinars, or focusing on mental health days. Organizations can invite professionals to discuss awareness about mental health, self-care, and ways of coping with stress and other factors. These initiatives will aid in breaking the stigma related to mental health issues and therefore promote more help-seeking behavior by the employees.<br/>For further guidance on organizing mental health workshops, see https://www.mhanational.org/workplace.",
              },
              {
                title: "Suggest Building Peer Support Networks",
                img: "/blog 1/Picture7.jpg",
                para: "Creating a peer support network helps employees to be able to provide support for one another during difficult periods. There are instances where employees may prefer discussing their mental health issues with coworkers rather than managers. Facilitating peer support helps build a community while also promoting a work environment that places mental illness as one of the key concerns.<br/>You can further choose to appoint some “peer level health managers” or “wellness champions” from among your employees. These people will provide informal assistance to those employees who wish to reach out about mental health issues further enhancing the wellbeing support structure in the workplace.",
              },
              {
                title: "Evaluate and Manage Employee Well-being",
                para: "Finally, there is no way the management will escape carrying out wellness checks on how employees are feeling. This can be through distributing sent questionnaires mean or through the voice call mean without revealing identity to conduct mental health check-ups or through physical interaction either with co-workers or with professionals specializing in HR or mental health. With such data acquired from the employees, employers will be able to know the pattern where most employees fall to in order to be in position to devise other new strategies that will help improve employee wellbeing.<br/>Keeping track of these patterns supports the evaluation of the outcomes of your mental wellness activities. For instance, when dissatisfied employees begin burning out, that is the time to intervene by moderating workloads, initiating time off procedures, or providing additional resources to counter stress.",
              },
              {
                title:
                  "The necessity of mental health and psychologists at the workplace",
                para: "With the recent happenings and in the current scenario - it is very much essential to have mental health space and psychologists especially in the corporate setups - as mental health is related to both personal and professional lives too.<br/>Concerns related to work stress, productivity, work life balance, work motivation, conflict resolution, dealing with psychological, emotional, organizational related mental health issues in employees and helping them in psychological health aspects.<br/>A Foundational training will be provided to the employees and the new joiners. This training is an introduction about mental health importance and how psychologists can help in providing counselling. ",
              },
              {
                title: "Encouraging mental health leave policies",
                para: "The agenda is to eradicate the stigma around mental health. Mental health is as important as physical health. Both mental and physical health are interconnected. <br/>Companies must provide counselling to the employees in need. Mental health awareness to be introduced and encouraged in the corporate setups. A mental health leave policy can be a day or two (in a month) declared as an off day to the employees to take care of their well - being and mental health needs. This concept enriches the holistic well-being and wellness concept of the employees.<br/>In conclusion, a happy employee means a happy workplace.",
              },
            ].map((e, i) => {
              return (
                <div key={i} className="px-2.5 mt-6">
                  <h6 className="text-xl font-semibold mb-1">
                    {i + 1}. {e?.title}
                  </h6>
                  {e?.img && (
                    <Image
                      src={e?.img}
                      width={100}
                      height={100}
                      alt="Blog"
                      className="mx-auto rounded-md w-full"
                    />
                  )}
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
                              {part.includes("www.mind.org.uk")
                                ? "Mental Health at Work"
                                : part.includes("www.umassglobal.edu")
                                ? "University of Massachusetts Global"
                                : part.includes("worklifebalance")
                                ? "Work Life Balance"
                                : "Mental Health America"}
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
            <h6 className="text-xl font-semibold mb-1 mt-6">Conclusions</h6>
            <p className="px-2 mt-1">
              Achievement of goals with operational and commercial aspects of
              filling the internal client responsibilities is now integrated
              with the performance of a new mission – the mental health
              assistance to the employees. Such employees are able to commit
              themselves to the firm, perform optimally, and enhance the culture
              of the firm positively. In India, where the mental health as an
              issue has been finding traction, taking the ownership of the
              problem will position your organisation as a leader and enable
              building a more active and healthier workforce.
            </p>
            <p className="px-2 mt-1">
              Such a situation should be dealt with without delay. May it be
              your organization that will take the steps to end the stigma and
              discrimination of mental health issues in the workplace thus
              providing an appropriate environment for employees to develop
              professionally and personally.
            </p>{" "}
            <Image
              src={"/blog 1/Picture8.jpg"}
              width={100}
              height={100}
              alt="Blog"
              className="mx-auto rounded-md w-full"
            />
          </div>
          <div className="px-2.5 mt-3">
            <h6 className="text-lg">Sagrikaa Rastogi</h6>
            <p className="text-sm">Counselling Psychologist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
