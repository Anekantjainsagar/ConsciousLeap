// lib/analytics.js
import ReactGA from "react-ga";

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

export const logPageView = (url) => {
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
