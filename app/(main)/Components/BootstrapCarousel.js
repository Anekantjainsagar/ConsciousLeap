"use client";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import frame1 from "../Assets/carousel/Frame 1.jpg";
import frame2 from "../Assets/carousel/Frame 2.jpg";
import frame3 from "../Assets/carousel/Frame 3.jpg";
import frame4 from "../Assets/carousel/Frame 4.jpg";
import frame5 from "../Assets/carousel/Frame 5.jpg";
import { useRouter } from "next/navigation";

export default function BootstrapCarousel() {
  const history = useRouter();

  let swiperInstance;

  const handleMouseEnter = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{
          interval: 3000,
          disableOnInteraction: true,
        }}
        cssMode={true}
        id="homeofoneness"
        onSwiper={(swiper) => (swiperInstance = swiper)}
      >
        <SwiperSlide
          className="relative overflow-hidden"
          onClick={(e) => {
            history.push("/faqs");
          }}
        >
          <h1 className="absolute opacity-0 font-bold mac:text-4xl text-[10px] md:text-2xl top-[15%] md:top-[33.5%] left-[13%] md:left-[19.5%]">
            &ldquo;Home of oneness&rdquo;
          </h1>
          <p className="absolute opacity-0 top-[43%] left-[13%] md:left-[17%] text-[6px] mac:text-3xl md:text-lg w-[26%] md:w-[20%] z-50">
            <span className="font-bold">consciousleap</span> was founded keeping
            in mind our soul purpose of holistically improving the quality of
            life by elevating and expanding our collective Conscious awareness
            through mindful healing and positive well-being. <br />
            <span className="text-websiteBlue cursor-pointer">Learn More</span>
          </p>
          <Image src={frame2} alt="Frame 1" className="cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide
          className="relative overflow-hidden"
          onClick={(e) => {
            history.push("/faqs");
          }}
        >
          <h1 className="absolute opacity-0 font-bold text-[10px] mac:text-4xl md:text-2xl top-[7%] md:top-[25%] left-[18%] md:left-[22%]">
            Our Motto
          </h1>
          <p className="absolute opacity-0 top-[34%] md:top-[34%] left-[13%] md:left-[17%] text-[6px] mac:text-3xl md:text-lg w-[28%] md:w-[20%] z-50">
            At <span className="font-bold">consciousleap</span>, we perceive and
            act subjectively, not objectively, without judgement. We believe all
            beings are divine, with varying degrees of Conscious awareness.
            <br />
            <span className="text-websiteBlue cursor-pointer">Learn More</span>
          </p>
          <Image src={frame5} alt="Frame 1" className="cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide
          className="relative overflow-hidden"
          onClick={(e) => {
            history.push("/faqs");
          }}
        >
          <h1 className="absolute opacity-0 font-bold text-[10px] md:text-2xl mac:text-4xl top-[9%] md:top-[28%] left-[25%] md:left-[29%]">
            Our Values
          </h1>
          <p className="absolute opacity-0 top-[38%] left-[24%] md:text-start text-center mac:text-3xl text-[6px] md:text-lg w-[20%] z-10">
            To bring about a holistic well-being culture with an inclusive
            outlook and mindful approach to mental well-being.
            <br />
            <span className="text-websiteBlue cursor-pointer">Learn More</span>
          </p>
          <Image src={frame3} alt="Frame 1" className="cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide
          className="relative overflow-hidden"
          onClick={(e) => {
            history.push("/faqs");
          }}
        >
          <h1 className="absolute opacity-0 font-bold text-[10px] md:text-2xl top-[6%] mac:text-4xl md:top-[24%] left-[17%] md:left-[21.5%]">
            Our Mission
          </h1>
          <p className="absolute opacity-0 top-[34%] md:top-[34%] left-[16%] md:left-[16%] mac:text-3xl text-[6px] md:text-lg w-[24%] md:w-[21%] z-10">
            To transcend all barriers within and without that separate us from
            us through expert introspection towards a common goal of{" "}
            <span className="font-bold">oneness</span>.<br />
            <span className="text-websiteBlue cursor-pointer">Learn More</span>
          </p>
          <Image src={frame4} alt="Frame 1" className="cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide
          className="relative overflow-hidden"
          onClick={(e) => {
            history.push("/faqs");
          }}
        >
          <h1 className="absolute opacity-0 font-bold text-[10px] md:text-2xl top-[8%] md:top-[25%] left-[23%] mac:text-4xl md:left-[26.5%]">
            Our Vision
          </h1>
          <p className="absolute opacity-0 top-[35%] md:top-[36%] left-[21%] text-[6px] md:text-lg w-[20%] text-3xl z-10">
            To bring about a collective healing transformation through a
            profound culture of <span className="font-bold">oneness</span>.
            <br />
            <span className="text-websiteBlue cursor-pointer">Learn More</span>
          </p>
          <Image src={frame1} alt="Frame 1" className="cursor-pointer" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
