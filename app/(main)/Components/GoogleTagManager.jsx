"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

const GoogleAnalytics = ({ children }) => {
  const router = useRouter();
  let TRACKING_ID = "G-KM2XCR8FBW";

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <>{children}</>;
};

export default GoogleAnalytics;
