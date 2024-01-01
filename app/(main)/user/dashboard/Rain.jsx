"use client";
import React, { useEffect } from "react";

const makeItRain = () => {
  document.querySelector(".rain.front-row").innerHTML = "";
  document.querySelector(".rain.back-row").innerHTML = "";

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    // Your existing makeItRain function logic here
    const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    increment += randoFiver;

    // Add a new raindrop with various randomizations to certain CSS properties
    drops += `<div class="drop" style="left: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                </div>`;

    backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                      <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                      <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                    </div>`;
  }

  document.querySelector(".rain.front-row").innerHTML = drops;
  document.querySelector(".rain.back-row").innerHTML = backDrops;
};

const Rain = ({ showRain, setShowRain }) => {
  useEffect(() => {
    makeItRain();
  }, []);

  useEffect(() => {
    if (showRain) {
      setTimeout(() => {
        setShowRain(false);
      }, 5000);
    }
  }, [showRain]);

  return (
    <div
      className={`${
        showRain ? "block" : "hidden"
      } rain-animation overflow-hidden back-row-toggle z-50 splat-toggle`}
    >
      <div className="rain front-row"></div>
      <div className="rain back-row"></div>
    </div>
  );
};

export default Rain;
