"use client";
import { useEffect } from "react";
import ReactGA from "react-ga";

const GoogleAnalytics = () => {
  ReactGA.initialize("G-5SMJLE8MGE");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return null; // This component does not render anything
};

export default GoogleAnalytics;
