import BootstrapCarousel from "./Components/Carousel";
import Line1 from "./Components/Lines/Line1";
import WhyConsciousLeap from "./Components/WhyConsciousLeap";
import Line2 from "./Components/Lines/Line2";
import Drawer from "@/app/Components/Drawer";
import CommunicationChannels from "./Components/CommunicationChannels";
import HowItWorks from "./Components/HowItWorks";
import CertifiedTherapist from "./Components/CerifiedTherapist";
import Testimonials from "./Components/Testimonials";
import MindfulTherapist from "./Components/MindfulTherapist";
import RegisterBlock from "./Components/RegisterBlock";

const page = () => {
  return (
    <div>
      <BootstrapCarousel />
      <Line1 />
      <WhyConsciousLeap />
      <Line2 />
      <Drawer />
      <Line2 />
      <CommunicationChannels />
      <Line2 />
      <HowItWorks />
      <Line2 />
      <CertifiedTherapist />
      <Line2 />
      <Testimonials />
      <MindfulTherapist />
      <Line2 />
      <RegisterBlock />
    </div>
  );
};

export default page;
