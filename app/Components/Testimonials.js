"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap, { Power2, ScrollTrigger } from "gsap/all";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  let testimonialsHeading = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline.fromTo(
      testimonialsHeading.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: testimonialsHeading.current,
          start: "top 70%",
          end: "top 40%",
        },
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1
        ref={testimonialsHeading}
        className="mb-2 text-3xl font-light gradientHover cursor-pointer"
      >
        Member Testimonials
      </h1>
      <p className="mb-24">
        Considering the importance and impact of mental health, we spared no
        thought to keep it simple, impactful, and flexible all at once.
      </p>
      {/* <BootstrapCarousel /> */}
    </div>
  );
};

// export function BootstrapCarousel() {
//   let bootstrap = [img1, img2, img3, img4, img5];
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <div className="custom-carousel-container">
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         {bootstrap.map((item) => (
//           <Carousel.Item key={item} interval={1000}>
//             <Image src={item} alt="Slide" />
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

export default Testimonials;
