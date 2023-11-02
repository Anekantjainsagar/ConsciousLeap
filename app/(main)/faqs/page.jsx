"use client";
import React, { useState } from "react";

const FAQS = () => {
  const faqData = [
    {
      question: "What is consciousleap?",
      answer:
        "consciousleap is a mindful online service provider of mental health-related services for adolescents, adults, couples, and families via Tele-Therapy. We also give businesses mindful insights on mental health-related support services. In addition to the above, consciousleap hosts a mindful Conscious Store where we only cater to sourcing and providing locally produced, organic, environmentally friendly, sustainable goods.",
    },
    {
      question: "How does it work?",
      answer:
        "consciousleap has three primary verticals as follows:\n\nTele-Therapy for mindful mental health-related services for Adolescents, Adults, Couples, and Families (B2C).\nconsciousleap for Business provides mindful insights on mental health-related support services to Businesses (B2B).\nConscious Store solely caters to sourcing and providing locally produced, organic, environmentally friendly, sustainable goods (E-commerce)",
    },
    {
      question: "Where is consciousleap based?",
      answer: "consciousleap is currently based in Estonia and India.",
    },
    {
      question:
        "What are the qualifications and credentials of the therapists?",
      answer:
        "Our therapists at consciousleap are highly qualified professionals with relevant degrees and certifications in their respective fields. They have undergone rigorous training and possess expertise in various therapeutic approaches. We ensure that our therapists meet the necessary licensing requirements and maintain ethical standards in their practice.",
    },
    {
      question: "Can I request a specific therapist?",
      answer:
        "Yes, at consciousleap, we understand the importance of a good therapeutic fit. While we provide a matching process to help you find a therapist based on your preferences and needs, you can also request a specific therapist if you have one in mind.",
    },
    {
      question: "Are there any group therapy options available?",
      answer:
        "No, at consciousleap, we do not currently offer group therapy options. We primarily focus on providing individual therapy sessions to address the specific needs of our clients. However, we continually evaluate our services and aim to introduce group therapy options in the future. Please stay updated with our website and announcements for any changes or additions to our services.",
    },
    {
      question: "How long does it take to connect with a Therapist?",
      answer:
        "At consciousleap, we aim to connect you with our Therapist in no time. You can either take a step-by-step approach to get matched to the right therapist by answering a simple questionnaire, or you can skip step 1 and choose from a range of Therapists to begin your mindful well-being journey.",
    },
    {
      question: "How often should I schedule therapy sessions?",
      answer:
        "The frequency of therapy sessions can vary depending on individual needs and goals. It is typically recommended to start with weekly sessions to establish a therapeutic relationship and work on addressing your concerns. As progress is made, sessions may be reduced to biweekly or monthly appointments. Ultimately, the frequency of sessions is determined collaboratively between you and your therapist, based on your progress and ongoing needs.",
    },
    {
      question: "What languages are supported for therapy sessions?",
      answer:
        "At consciousleap, we strive to provide therapy services in multiple languages to cater to diverse populations. Currently, we offer therapy sessions in English, Hindi, and other Indian regional languages. We are continuously working to expand our language offerings to accommodate more individuals.",
    },
    {
      question: "Are the therapy sessions confidential?",
      answer:
        "Yes, confidentiality is of utmost importance to us. Our therapists adhere to strict ethical guidelines and maintain the privacy and confidentiality of all client information shared during therapy sessions.",
    },
    {
      question: "How do I communicate with my Therapist?",
      answer:
        "Depending on your Therapist, you can communicate through your Dashboard (Preferred) or via Phone, email, or WhatsApp.",
    },
    {
      question: "How do I change my Therapist?",
      answer:
        "As our mindful member, you can change your Therapist at any time if you’re unsatisfied with the experience. You can log in to your account member dashboard to rate your current Therapist and choose a new Therapist.",
    },
    {
      question: "How do I provide feedback or review my therapy experience?",
      answer:
        "We highly value your feedback and encourage you to share your thoughts about your therapy experience with us. You can provide feedback or review your therapy experience through our member dashboard. We also welcome any suggestions or comments that can help us improve our services and better meet your needs.",
    },
    {
      question: "How do I reschedule my session?",
      answer:
        "We have mindfully designed our member dashboard, which empowers you to schedule and reschedule sessions with the click of a button. Please refer to our rescheduling, refund and cancellation policy for more details.",
    },
    {
      question: "Can I book therapy sessions for someone else?",
      answer:
        "Yes, you can book therapy sessions for someone else, such as a family member or a loved one. However, we recommend obtaining their consent and involving them in the process to ensure their willingness to participate in therapy.",
    },
    {
      question: "Is there a cancellation policy for sessions?",
      answer:
        "Yes, we have a cancellation policy in place. We understand that unforeseen circumstances may arise that require you to cancel or reschedule a session. We kindly request that you provide at least 24 hours' notice for cancellations or rescheduling to avoid any cancellation fees. Please refer to our cancellation policy for more details. Please refer to our rescheduling, refund and cancellation policy for more details.",
    },
    {
      question: "Minimum age requirements?",
      answer:
        "At consciousleap, we understand that mental health-related issues can affect us all, regardless of age. However, you must be at least 12 years or older and represented by a Parent or Guardian to avail of our services.",
    },
    {
      question:
        "What is the process for reporting any issues or concerns about a therapist?",
      answer:
        "If you have any issues or concerns about your therapist, we take them seriously and want to address them promptly. You can contact our support team via email or phone to report any concerns you may have. We will investigate the matter thoroughly and take appropriate action to ensure the quality and safety of our services. Your well-being and satisfaction are our top priorities.",
    },
    {
      question: "How do I register as a Therapist?",
      answer:
        "Registering as a Therapist is a simple 2 step process:\n\nStep 1: Sign-up as a Therapist and upload your Resume\nStep 2: Schedule a Call to review and confirm your details. Once complete, you will be added as a Therapist.",
    },
    {
      question: "How do I deregister as a Therapist?",
      answer:
        "We’re truly heartbroken to see you go. Could you help us understand why you decided to go and if there’s anything we can do to change your mind?",
    },
    {
      question: "How does Tele-Therapy work?",
      answer:
        "Tele-Therapy can happen through your preferred platforms, such as Zoom, Meet, or Teams, where our Therapists will conduct online therapy sessions in the comfort and convenience of your home, office, outdoor, or mobile device. However, highly recommend a quieter place with a stable internet connection for smooth interaction.",
    },
    {
      question: "What about face-to-face, in-person or 1:1 Therapy?",
      answer:
        "We currently don’t have any 1:1, i.e., face-to-face in-person sessions. However, we’re working on a few tie-ups to make this happen in the near future.",
    },
    {
      question: "How do I proceed with Tele-Therapy?",
      answer:
        "Here are your steps to proceed with Tele-Therapy:\nStep 1: Sign-up as a Member\nStep 2: Proceed with our Questionnaire\nStep 3: Connect with an assigned Therapist or skip",
    },
    {
      question: "How can I pay?",
      answer:
        "You can pay using your preferred mode of payment, i.e., via debit card, credit card, Google Pay, Samsung Pay, Apple Pay, or Paytm, as all of the above payment options are available.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "There are no hidden fees other than the ones stated at the time of payment.",
    },
    {
      question: "What’s the session duration?",
      answer: "Each session lasts for 60 minutes.",
    },
    {
      question: "What about my privacy?",
      answer:
        "Your right to privacy is paramount to us as we undertake all the precautionary measures to ensure your confidentiality through our strict non-disclosure agreement and privacy policy statement.",
    },
    {
      question: "What is a Conscious Store?",
      answer:
        "Our conscious store solely caters to locally sourced goods and provides locally produced, organic, environmentally friendly, and sustainable goods.",
    },
    {
      question: "What is your Conscious Store return policy?",
      answer:
        "It’s ok to change your mind, as we have a 14 days return policy for non-perishable goods.",
    },
    {
      question: "How can I claim my session?",
      answer:
        "We’re currently in talks with the concerned providers and will update you via our newsletters, blog posts, and social media once we receive an update.",
    },
    {
      question: "What is oneness?",
      answer:
        "I’m glad you asked; I am your ever-mindful companion in your well-being journey at consciousleap. Feel free to write to me at oneness@consciousleap.co or chat via our oneness Chatbot, and I’ll mindfully revert.",
    },
    {
      question: "Is there an App I can download?",
      answer: "Yes, we have an iOS and an Android App details as follows:",
    },
    {
      question: "How can I register as a vendor?",
      answer:
        "We’re always looking to partner with individuals and businesses who share the same passion, mission, and vision as we do. Please reach out to us via business@consciousleap.co.",
    },
  ];

  return (
    <div className="w-7/12 mx-auto py-5">
      {faqData?.map((e, i) => {
        return <Block key={i} data={e} index={i} />;
      })}
    </div>
  );
};

const Block = ({ data, index }) => {
  const [showBlock, setShowBlock] = useState(false);
  const lines = data?.answer.split("\n");

  return (
    <div className="mb-5 shadow-md shadow-gray-200 px-3 py-2 text-lg">
      <p
        className={`hover:bg-websiteBlue py-1 hover:text-white px-3 rounded-sm cursor-pointer ${
          showBlock ? "bg-websiteBlue text-white" : ""
        }`}
        onClick={(e) => {
          setShowBlock(!showBlock);
        }}
      >
        {index + 1}. {data?.question}
      </p>
      <div className={`px-3 ${showBlock ? "block mt-1" : "hidden"}`}>
        {lines?.map((e, i) => {
          return (
            <p key={i} className="mt-0">
              {e}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FAQS;
