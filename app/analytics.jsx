// lib/analytics.js
import ReactGA from "react-ga";

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};
