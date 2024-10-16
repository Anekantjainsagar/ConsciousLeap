"use client";
import { useEffect } from "react";
import ReactGA from "react-ga";

const GoogleAnalytics = () => {
  let TRACKING_ID = "G-S9TJGS7CP3";

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID, {
      debug: true, // Enable debug mode
    });
    console.log("Google Analytics Initialized");

    // Log initial page view
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(
      "Page View Logged:",
      window.location.pathname + window.location.search
    );
  }, []);

  return null;
};

export default GoogleAnalytics;
