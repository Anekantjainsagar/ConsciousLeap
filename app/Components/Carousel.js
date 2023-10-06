"use client";
import img1 from "../Assets/carousel/Homeofoneness.jpg";
import img2 from "../Assets/carousel/OurMission.jpg";
import img3 from "../Assets/carousel/OurMotto.jpg";
import img4 from "../Assets/carousel/OurValues.jpg";
import img5 from "../Assets/carousel/OurVision.jpg";

import Image from "next/image";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function BootstrapCarousel() {
  let bootstrap = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="custom-carousel-container" id="homeofoneness">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item, i) => (
          <Carousel.Item key={i} interval={1000}>
            <Image src={item} alt="Slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
