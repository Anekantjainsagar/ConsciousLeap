"use client";
import React from "react";
import BootstrapCarousel from "./Components/BootstrapCarousel";
import Line1 from "./Components/Lines/Line1";
import Whyconsciousleap from "./Components/WhyConsciousLeap";
import Line2 from "./Components/Lines/Line2";
import Drawer from "./Components/Drawer";
import CommunicationChannels from "./Components/CommunicationChannels";
import HowItWorks from "./Components/HowItWorks";
import CertifiedTherapist from "./Components/CerifiedTherapist";
import MembersTestimonials from "./Components/MembersTestimonials";
import MindfulTherapist from "./Components/MindfulTherapist";
import RegisterBlock from "./Components/RegisterBlock";
import GlobalPresence from "./Components/GlobalPresence";
import ClientTestimonials from "./Components/ClientTestimonials";
import MemberStatistics from "./Components/MemberStatistics";
import ConsciousleapBlog from "./Components/ConsciousLeapBlog";
import ConsciousStore from "./Components/ConsciousStore";
import { useEffect } from "react";
import ReactModal from "./modal";
import Head from "next/head";
import Context from "@/Context/Context";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";

const Home = () => {
  const { bussinessShow } = React.useContext(Context);
  useEffect(() => {
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
      <ReactModal />
      <BootstrapCarousel />
      <Line1 />
      <Whyconsciousleap />
      <button
        className="bg-websiteBlue text-white px-5 py-2"
        onClick={(e) => {
          let email = prompt("Email?");
          console.log(email);
          if (email) {
            axios
              .post(`${BASE_URL}/login/send-test-mail`, {
                email: email,
              })
              .then((res) => {
                alert(res.data);
              });
          }
        }}
      >
        Button
      </button>
      <Line2 />
      <Drawer />
      <Line2 />
      <CommunicationChannels />
      <Line2 />
      <HowItWorks />
      <Line2 />
      <CertifiedTherapist />
      <Line2 />
      <MembersTestimonials />
      <MindfulTherapist />
      <Line2 />
      <MemberStatistics />
      <Line2 />
      <GlobalPresence />
      <Line2 />
      <ClientTestimonials />
      <Line2 />
      <ConsciousStore />
      <ConsciousleapBlog />
      <Line2 />
      <RegisterBlock />
    </div>
  );
};

export default Home;
