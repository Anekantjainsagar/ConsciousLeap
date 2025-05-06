"use client";
import React, { Suspense, lazy } from "react";
// import BootstrapCarousel from "./Components/BootstrapCarousel";
import HeroSection from "./Components/HeroSection";
import Line1 from "./Components/Lines/Line1";
import Line2 from "./Components/Lines/Line2";
const Whyconsciousleap = lazy(() => import("./Components/WhyConsciousLeap"));
const Drawer = lazy(() => import("./Components/Drawer"));
const CommunicationChannels = lazy(() =>
  import("./Components/CommunicationChannels")
);
const HowItWorks = lazy(() => import("./Components/HowItWorks"));
const CertifiedTherapist = lazy(() => import("./Components/CerifiedTherapist"));
const MembersTestimonials = lazy(() =>
  import("./Components/MembersTestimonials")
);
const MindfulTherapist = lazy(() => import("./Components/MindfulTherapist"));
const RegisterBlock = lazy(() => import("./Components/RegisterBlock"));
const GlobalPresence = lazy(() => import("./Components/GlobalPresence"));
const ClientTestimonials = lazy(() =>
  import("./Components/ClientTestimonials")
);
const MemberStatistics = lazy(() => import("./Components/MemberStatistics"));
const ConsciousleapBlog = lazy(() => import("./Components/ConsciousLeapBlog"));
const ConsciousStore = lazy(() => import("./Components/ConsciousStore"));
import { useEffect } from "react";
import ReactModal from "./modal";
import Head from "next/head";
import Context from "@/Context/Context";
import { initGA } from "../analytics";

const Home = () => {
  const { bussinessShow } = React.useContext(Context);

  useEffect(() => {
    localStorage.setItem("login-history", "/user/dashboard");
    const element = document.getElementById(bussinessShow);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  useEffect(() => {
    // Execute the provided JavaScript code when the component mounts
    (function (I, L, T, i, c, k, s) {
      if (I.iticks) return;
      I.iticks = { host: c, settings: s, clientId: k, cdn: L, queue: [] };
      var h = T.head || T.documentElement;
      var e = T.createElement(i);
      var l = I.location;
      e.async = true;
      e.src = (L || c) + "/client/inject-v2.min.js";
      h.insertBefore(e, h.firstChild);
      I.iticks.call = function (a, b) {
        I.iticks.queue.push([a, b]);
      };
    })(
      window,
      "https://cdn-v1.intelliticks.com/prod/common",
      document,
      "script",
      "https://app.intelliticks.com",
      "Jpf3weRCe94WPCuMK_c",
      {}
    );
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      initGA("G-PS1GHQGHRV");
    }
  }, []);

  return (
    <div id="navbar">
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
	(function(I, L, T, i, c, k, s) {if(I.iticks) return;I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};var h = T.head || T.documentElement;var e = T.createElement(i);var l = I.location;e.async = true;e.src = (L||c)+'/client/inject-v2.min.js';h.insertBefore(e, h.firstChild);I.iticks.call = function(a, b) {I.iticks.queue.push([a, b]);};})(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'Jpf3weRCe94WPCuMK_c', {});
            `,
          }}
        ></script>
      </Head>
      {/* <ReactModal /> */}
      {/* <BootstrapCarousel /> */}
      <HeroSection />
      <Line1 />
      <Suspense>
        <Whyconsciousleap />
      </Suspense>
      <Line2 />
      <Suspense>
        <Drawer />
      </Suspense>
      <Line2 />{" "}
      <Suspense>
        <CommunicationChannels />
      </Suspense>
      <Line2 />{" "}
      <Suspense>
        <HowItWorks />
      </Suspense>
      <Line2 />{" "}
      <Suspense>
        <CertifiedTherapist />
      </Suspense>
      <Line2 />{" "}
      <Suspense>
        <MembersTestimonials />
        <MindfulTherapist />
      </Suspense>{" "}
      <Line2 />
      <Suspense>
        <MemberStatistics />
      </Suspense>
      <Line2 />{" "}
      <Suspense>
        <GlobalPresence />
        <Line2 />
        <ClientTestimonials />
        <Line2 />{" "}
      </Suspense>
      <Suspense>
        {/* <ConsciousStore /> */}
        <ConsciousleapBlog />
      </Suspense>
      <Line2 />{" "}
      <Suspense>
        <RegisterBlock />
      </Suspense>
    </div>
  );
};

export default Home;
