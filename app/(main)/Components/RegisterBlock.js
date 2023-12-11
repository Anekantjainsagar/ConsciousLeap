"use client";
import gsap, { Power2, ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useContext } from "react";
import Line2 from "./Lines/Line2";
import { useRouter } from "next/navigation";
import Context from "../../Context/Context";

const RegisterBlock = () => {
  let registerTherapy = useRef();
  const history = useRouter();
  const { joinUsShow, setJoinUsShow } = useContext(Context);

  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let timeline = gsap.timeline();
  //   timeline.fromTo(
  //     registerTherapy.current,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: registerTherapy.current,
  //         start: "top 70%",
  //         end: "top 40%",
  //       },
  //       ease: Power2.easeInOut,
  //     }
  //   );
  // }, []);

  return (
    <>
      <div>
        <h1
          ref={registerTherapy}
          onClick={(e) => {
            setJoinUsShow("JOIN");
            history.push("/join-us");
          }}
          id="joinconsciousleap"
          className="mb-3 text-3xl font-light mx-auto w-fit gradientHover cursor-pointer"
        >
          Join consciousleap
        </h1>
        <p className="text-center mx-auto w-8/12 font-light">
          We’re mindfully growing and would love to rope you in to help us
          improve the world.{" "}
          <span
            className="text-websiteBlue cursor-pointer"
            onClick={(e) => {
              history.push("/faqs");
            }}
          >
            Learn More
          </span>
        </p>
      </div>
      <div>
        <h1
          ref={registerTherapy}
          onClick={(e) => {
            setJoinUsShow("VOLUNTEER");
            history.push("/join-us");
          }}
          className="mb-3 mt-16 text-3xl font-light mx-auto w-fit gradientHover cursor-pointer"
        >
          Become a Volunteer
        </h1>
        <p className="text-center mx-auto w-8/12 font-light">
          There is no greater good than the good of mankind, by volunteering at
          consciousleap you are mindfully changing the world one being at a
          time.{" "}
          <span
            className="text-websiteBlue cursor-pointer"
            onClick={(e) => {
              history.push("/faqs");
            }}
          >
            Learn More
          </span>
        </p>
      </div>
      <div>
        <h1
          ref={registerTherapy}
          onClick={(e) => {
            setJoinUsShow("PARTNER");
            history.push("/join-us");
          }}
          className="mb-3 mt-16 text-3xl font-light mx-auto text-center w-fit gradientHover cursor-pointer"
        >
          Partner with consciousleap
        </h1>
        <p className="text-center mx-auto w-8/12 font-light">
          At consciousleap we believe in mindful coexistence, where we care
          about our individual and collective impact on the environment. If you
          share the same values, please get in touch with us.{" "}
          <span
            className="text-websiteBlue cursor-pointer"
            onClick={(e) => {
              history.push("/faqs");
            }}
          >
            Learn More
          </span>
        </p>
      </div>
      <Line2 />
      <div>
        <h1
          ref={registerTherapy}
          onClick={(e) => {
            history.push("/therapy/register");
          }}
          className="mb-4 text-3xl font-light mx-auto w-fit gradientHover cursor-pointer"
        >
          Register as a Therapist
        </h1>
        <p className="text-center mx-auto w-8/12 font-light">
          By joining our mindful team of Therapists, you are not just profoundly
          improving the quality of life but are truly saving lives by sharing
          your knowledge and expertise with those who need it most.{" "}
          <span
            className="text-websiteBlue cursor-pointer"
            onClick={(e) => {
              history.push("/faqs");
            }}
          >
            Learn More
          </span>
        </p>
      </div>
    </>
  );
};

export default RegisterBlock;
