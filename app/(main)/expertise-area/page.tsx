"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import image from "@/(main)/Assets/AreaExpertise.jpg";

import image1 from "@/(main)/Assets/slide-icons/1.png";
import gsap from "gsap/all";

const ExpertiseArea = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  let expertiseData = [
    {
      name: "Neurodevelopmental Disorders",
      para: "Neurodevelopmental disorders are a group of conditions that emerge during the developmental period. They typically appear early in a child's life, even before they start school, and are characterized by developmental deficits that impact personal, social, academic, or occupational functioning. These deficits can range from specific learning or executive function limitations to broader impairments in social skills or intelligence.",
      tiles: [
        "Intellectual disability",
        "Autism Spectrum Disorder",
        "Attention-Deficit/Hyperactivity Disorder",
        "Learning Disorders",
      ],
      paraTiles: [
        "Delayed developmental milestones",
        " Impaired social interaction",
        "Communication difficulties",
        "Repetitive behaviors or restricted interests:",
        "Sensory sensitivities",
        "Executive function deficits",
        "Learning difficulties",
      ],
      paraHeading:
        "Common symptoms of neurodevelopmental disorders may include:",
    },
    {
      name: "Schizophrenia spectrum Disorders",
      para: "Schizophrenia spectrum disorder is a complex and chronic mental health condition that affects a person’s thoughts, perceptions, emotions, and behavior. It is characterized by a range of symptoms and can vary in severity and presentation among individuals. Schizophrenia spectrum and other psychotic disorders encompass conditions such as schizophrenia, other psychotic disorders, and schizotypal personality disorder. These disorders are characterized by abnormalities in one or more of the following five domains:",
      paraTiles: [
        "Delusions",
        "Hallucinations",
        "Disorganized thinking (speech)",
        "Grossly disorganized or abnormal motor behavior",
        "Negative symptoms",
      ],
      tiles: ["Delusion", "Schizophrenia"],
    },
    {
      name: "Bipolar Disorder",
      para: "Bipolar disorders, are a group of mood disorders characterized by recurring episodes of manic and depressive states. Here are some key aspects of bipolar disorders:",
      paraTiles: [
        "Bipolar I Disorder",
        "Bipolar II Disorder",
        "Cyclothymic Disorder",
        "Manic Episodes",
        "Depressive Episodes",
      ],
      tiles: ["Bipolar I", "Bipolar II"],
    },
    {
      name: "Depressive Disorders",
      para: "Depressive disorder, also known as major depressive disorder (MDD), is a common mental health condition characterized by persistent feelings of sadness, loss of interest or pleasure in activities, and a range of other emotional and physical symptoms. Depressive disorder can manifest with varying severity levels, ranging from mild to severe, depending on the number and intensity of symptoms and the impact on daily functioning.",
      paraHeading: "Some of its major symptoms are-",
      paraTiles: [
        "Depressed mood most of the day, nearly every day.",
        "Diminished interest or pleasure in nearly all activities.",
        "Significant weight loss or gain, or changes in appetite.",
        "Insomnia or hypersomnia (excessive sleepiness) nearly every day.",
        "Observable physical restlessness or slowed movements).",
        "Fatigue or loss of energy.",
        "Feelings of worthlessness or excessive guilt.",
      ],
      tiles: ["Depression", "Pre-menstrual Dysphoric Disorder"],
    },
    {
      name: "Anxiety Disorders",
      para: "Anxiety disorders are a group of mental health conditions characterized by excessive and persistent feelings of fear, worry, and anxiety that significantly impact daily functioning. Anxiety disorders share common symptoms that are characterized by excessive fear, worry, and anxiety. Some key symptoms associated with anxiety disorders:",
      paraTiles: [
        "Excessive worry or anxiety",
        "Restlessness or feeling on edge",
        "Fatigue",
        "Difficulty concentrating",
        "Irritability",
        "Muscle tension",
        "Sleep disturbances",
        "Exaggerated startle response",
        "Avoidance behaviors",
        " Physical symptoms",
      ],
      tiles: [
        "Separation Anxiety Disorder",
        "Selective Mutism",
        "Social Anxiety Disorder",
        "Panic Disorder",
        "Agoraphobia",
        "Generalized Anxiety Disorder",
      ],
    },
    {
      name: "Obsessive Compulsive and Related Disorders",
      para: "Obsessive-Compulsive and Related Disorders, are a group of mental health conditions characterized by repetitive thoughts, urges, or behaviors that cause significant distress and interfere with daily functioning. Some common symptoms associated with Obsessive- Compulsive and Related Disorders:",
      paraTiles: [
        "Obsessions",
        "Compulsions",
        "Preoccupation with Appearance",
        "Difficulty Discarding",
        "Hair-Pulling or Skin-Picking",
        "These symptoms can significantly impact a person's daily life and cause distress.",
      ],
      tiles: [
        "Obsessive Compulsive Disorder",
        "Body Dysmorphic Disorder",
        "Hoarding Disorder",
      ],
    },
    {
      name: "Trauma- and Stressor-Related Disorders",
      para: "Trauma- and Stressor-Related Disorders, encompass a group of mental health conditions that are triggered by exposure to traumatic or stressful events. These disorders are characterized by various psychological and behavioral symptoms. Some common symptoms associated with Trauma- and Stressor-Related Disorders:",
      paraTiles: [
        "Re-experiencing the traumatic event",
        "Avoidance and numbing",
        "Negative alterations in mood and cognition",
        "Hyperarousal and heightened reactivity",
        "Disturbances in attachment and relationships",
      ],
      tiles: [
        "Post-traumatic Stress Disorder",
        "Acute Stress Disorder",
        "Adjustment Disorder",
        "Reactive Attachment Disorder",
      ],
    },
    {
      name: "Dissociative Disorder",
      para: "Dissociative Disorders, involve disruptions or alterations in consciousness, memory, identity, or perception. These disorders are characterized by a disconnection or detachment from one's thoughts, feelings, memories, or sense of self.",
      tiles: [
        "Dissociative Identity Disorder",
        "Dissociative Amnesia",
        "Depersonalization/Derealization Disorder",
      ],
    },
    {
      name: "Somatic Symptom and Related Disorders",
      para: "Somatic Symptom and Related Disorders, involve physical symptoms that are accompanied by excessive thoughts, feelings, or behaviors related to the symptoms. These disorders are characterized by a significant focus on bodily symptoms and their impact on daily life.",
      tiles: [
        "Somatic Symptom Disorder",
        "Illness Anxiety Disorder",
        "Conversion Disorder",
        "Factitious Disorder",
      ],
    },
    {
      name: "Feeding and Eating Disorders",
      para: "Feeding and Eating Disorders, encompass a range of conditions characterized by abnormal eating behaviors and disturbances in one's relationship with food. Feeding and eating disorders are characterized by a persistent disturbance of eating or eating-related behavior that results in the altered consumption or absorption of food and that significantly impairs physical health or psychosocial functioning",
      tiles: [
        "Avoidant/Restrictive Food Intake Disorder",
        "Anorexia Nervosa",
        "Bulimia Nervosa",
        "Binge-Eating Disorder",
      ],
    },
    {
      name: "Sleep-Wake Disorders",
      para: "Sleep-Wake Disorders, involve disturbances in sleep patterns that result in significant distress or impairment in daily functioning. r. Individuals with these disorders typically present with sleep-wake complaints of dissatisfaction regarding the quality, timing, and amount of sleep. Resulting daytime distress and impairment are core features shared by all of these sleep-wake disorders.",
      tiles: [
        "Insomnia",
        "Circadian Rhythm Sleep-Wake Disorders",
        "Nightmare Disorder",
        "Restless Legs Syndrome",
      ],
    },
    {
      name: "Sexual Dysfunctions",
      para: "Sexual Dysfunctions, involve persistent difficulties in sexual desire, arousal, or response that cause significant distress or interpersonal difficulties. Sexual dysfunctions encompass a diverse range of disorders that are characterized by significant disruptions in an individual's sexual response or ability to experience sexual pleasure. It is possible for a person to experience multiple sexual dysfunctions concurrently. In such instances, all of the relevant dysfunctions should be diagnosed and addressed.",
      tiles: [
        "Delayed Ejaculation",
        "Erectile Disorder",
        "Female Orgasmic Disorder",
        "Penetration Disorder",
      ],
    },
    {
      name: "Gender Dysphoria",
      para: "Gender Dysphoria, refers to the distress that arises from a discrepancy between an individual' assigned gender at birth and their gender identity",
      tiles: [
        "Gender Dysphoria in Children",
        "Gender Dysphoria in Adolescents",
      ],
    },
    {
      name: "Disruptive, Impulse-Control and Conduct Disorders",
      para: "Disruptive, Impulse-Control, encompass a range of behavioral disorders characterized by problems with self-control and engaging in behaviors that violate the rights of others or societal norms. These disorders are expressed through behaviors that infringe upon the rights of others (e.g., aggression, property destruction) or lead to significant conflicts with societal norms and authority figures. The underlying causes of these self-control difficulties can vary widely across the disorders in this chapter and among individuals within a particular diagnostic category.",
      tiles: [
        "Oppositional Defiant Disorder",
        "Intermittent Explosive Disorder",
        "Conduct Disorder",
        "Antisocial Personality Disorder",
      ],
    },
    {
      name: "Substance-Related and Addictive Disorders",
      para: "Substance-Related and Addictive Disorders, encompass a range of conditions involving the misuse or dependence on substances that have addictive properties.",
      tiles: [
        "Alcohol Use and addiction Disorder",
        "Alcohol Withdrawal",
        "Caffeine-Related Disorders",
        "Cannabis Use Disorder",
        "Tobacco Use Disorder",
        "Gambling Disorder",
      ],
    },
    {
      name: "Personality Disorders",
      para: "A personality disorder is an enduring pattern of inner experience and behavior that deviates markedly from the expectations of the individual's culture, is pervasive and inflexible, has an onset in adolescence or early adulthood, is stable over time, and leads to distress or impairment. Personality Disorders, are characterized by enduring patterns of thoughts, emotions, and behaviors that deviate from cultural expectations and lead to significant distress or impairment in various areas of functioning.",
      tiles: [
        "Paranoid Personality Disorder",
        "Borderline Personality Disorder",
        "Histrionic Personality Disorder",
        "Narcissistic Personality Disorder",
        "Avoidant Personality Disorder",
        "Dependent Personality Disorder",
      ],
    },
    {
      name: "Relational Problems",
      para: "Close relationships, particularly intimate adult partnerships and parent/caregiver-child relationships, play a crucial role in the well-being of individuals involved. These relationships can have a range of effects on health outcomes, varying from being beneficial and protective to having no significant impact or even being harmful. In severe cases, these close relationships may involve maltreatment or neglect, resulting in significant medical and psychological consequences for the affected individual. A relational problem may come to the attention of healthcare professionals either as the primary reason for seeking healthcare or as a factor that influences the course, prognosis, or treatment of the individual's mental or other medical condition.",
      tiles: [
        "Parent-Child Relational Problem",
        "Sibling Relational Problem",
        "Child Affected by Parental Relationship Distress",
        "Relationship Distress With Spouse or Intimate Partner",
        "Disruption of Family by Separation or Divorce",
        "Child Maltreatment and Neglect Problems",
      ],
    },
    {
      name: "Problems Related to the Social Environment",
      para: `This category is used to address difficulties in adapting to life-cycle transitions, which may be the primary focus of clinical attention or have an impact on the individual's treatment or prognosis. Examples of such transitions include entering or completing school, leaving parental control, getting married, starting a new career, becoming a parent, adjusting to an "empty nest" after children leave home, and retiring.`,
      tiles: [
        "Phase of Life Problem",
        "Social Exclusion or Rejection",
        "Target of (Perceived) Adverse Discrimination or Persecution",
      ],
    },
  ];
  const [data, setData] = useState(expertiseData[0]);

  return (
    <div>
      <Image src={image} alt="Area expertise" className="md:w-8/12 mx-auto" />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-y-4 py-[6vw]">
          {expertiseData.map((e, i) => {
            return (
              <RoundBlock
                key={i}
                data={e}
                setData={setData}
                i={i}
                clicked={i === openIndex}
                openIndex={openIndex}
                onToggle={handleToggle}
              />
            );
          })}
        </div>
        <div
          id="BlockId"
          className="rounded-lg md:mx-auto w-11/12 md:w-6/12 h-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]"
        >
          <div className="bg-white rounded-lg w-full h-full px-6 py-5">
            <p className="text-center text-websiteBlue text-2xl font-extrabold">
              {data?.name}
            </p>
            <p className="mt-4 text-darkGrey text-sm">{data?.para}</p>
            <div className="text-darkGrey text-sm mt-4">
              <p>{data?.paraHeading}</p>
              <div>
                {data?.paraTiles?.map((e, i) => {
                  return (
                    <div key={e}>
                      {i + 1}. {e}
                    </div>
                  );
                })}
                <div className="grid md:grid-cols-2 gap-y-4 mt-6">
                  {data?.tiles?.map((e, i) => {
                    return (
                      <div
                        className="rounded-full w-11/12 h-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[1.5px]"
                        key={i}
                      >
                        <div className="bg-white rounded-full w-full h-full flex justify-center items-center py-2 px-6 text-center">
                          {e}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoundBlock = ({ data, setData, i, clicked, onToggle, openIndex }) => {
  let name = data?.name?.toLowerCase().replaceAll(" ", "").replaceAll("-", "");

  let imageId = name + "image";
  let paraId = name + "para";

  useEffect(() => {
    if (typeof window != "undefined" && window.innerWidth < 550) {
      if (openIndex != i) {
        let val = parseInt(
          document.getElementById(imageId).style.transform.slice(10, 11)
        );

        if (val != 0) {
          gsap.fromTo(`#${imageId}`, { x: 300 }, { x: 0 });
          gsap.fromTo(`#${paraId}`, { x: -50 }, { x: 0 });
        }
      } else {
        gsap.fromTo(`#${imageId}`, { x: 0 }, { x: 300 });
        gsap.fromTo(`#${paraId}`, { x: 0 }, { x: -50 });
      }
    } else {
      if (openIndex != i) {
        let val = parseInt(
          document.getElementById(imageId).style.transform.slice(10, 11)
        );

        if (val != 0) {
          gsap.fromTo(`#${imageId}`, { x: 164 }, { x: 0 });
          gsap.fromTo(`#${paraId}`, { x: -50 }, { x: 0 });
        }
      } else {
        gsap.fromTo(`#${imageId}`, { x: 0 }, { x: 168 });
        gsap.fromTo(`#${paraId}`, { x: 0 }, { x: -50 });
      }
    }
  }, [openIndex]);

  return (
    <div
      onClick={(e) => {
        let element = document.getElementById("BlockId");
        onToggle(i);
        setData(data);
        if (typeof window != "undefined" && window.innerWidth < 550) {
          if (!clicked) {
            gsap.fromTo(`#${imageId}`, { x: 0 }, { x: 300 });
            gsap.fromTo(`#${paraId}`, { x: 0 }, { x: -50 });
          } else {
            gsap.fromTo(`#${imageId}`, { x: 300 }, { x: 0 });
            gsap.fromTo(`#${paraId}`, { x: -50 }, { x: 0 });
          }
        } else {
          if (!clicked) {
            gsap.fromTo(`#${imageId}`, { x: 0 }, { x: 168 });
            gsap.fromTo(`#${paraId}`, { x: 0 }, { x: -50 });
          } else {
            gsap.fromTo(`#${imageId}`, { x: 164 }, { x: 0 });
            gsap.fromTo(`#${paraId}`, { x: -50 }, { x: 0 });
          }
        }
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }}
      className="rounded-full w-[90%] md:w-[92%] cursor-pointer h-full mx-auto bg-gradient-to-r from-websiteBlue via-pinkishRed to-oceanGreen p-[2px]"
    >
      <div
        className="bg-white rounded-full w-full h-full p-2 md:p-2 grid items-center"
        style={{ gridTemplateColumns: "20% 80%" }}
      >
        <Image
          src={image1}
          id={imageId}
          alt="Image"
          className={`${
            !clicked ? "bg-newBlue" : "bg-gray-500"
          } p-2 w-4/6 md:w-full h-fit rounded-full`}
        />
        <p className="text-sm text-darkGrey text-center" id={paraId}>
          {data?.name}
        </p>
      </div>
    </div>
  );
};

export default ExpertiseArea;
