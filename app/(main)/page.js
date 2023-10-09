import BootstrapCarousel from "./Components/Carousel";
import Line1 from "./Components/Lines/Line1";
import Whyconsciousleap from "./Components/Whyconsciousleap";
import Line2 from "./Components/Lines/Line2";
import Drawer from "./Components/Drawer";
import CommunicationChannels from "./Components/CommunicationChannels";
import HowItWorks from "./Components/HowItWorks";
import CertifiedTherapist from "./Components/CerifiedTherapist";
import MembersTestimonials from "./Components/MembersTestimonials";
import MindfulTherapist from "./Components/MindfulTherapist";
import RegisterBlock from "./Components/RegisterBlock";
import GlobalPresence from "./Components/GlobalPresence";
import ClientTestimonials from "./Components/ClientTestimonials";
import MemberStatistics from "./Components/MemberStatistics";
import ConsciousleapBlog from "./Components/ConsciousLeapBlog";
import ConsciousStore from "./Components/ConsciousStore";

const Home = () => {
  return (
    <div>
      <BootstrapCarousel />
      <Line1 />
      <Whyconsciousleap />
      <Line2 />
      <Drawer />
      <Line2 />
      <CommunicationChannels />
      <Line2 />
      <HowItWorks />
      <Line2 />
      <CertifiedTherapist />
      <Line2 />
      <MembersTestimonials />
      <MindfulTherapist />
      <Line2 />
      <MemberStatistics />
      <Line2 />
      <GlobalPresence />
      <Line2 />
      <ClientTestimonials />
      <Line2 />
      <ConsciousStore />
      <ConsciousleapBlog />
      <Line2 />
      <RegisterBlock />
    </div>
  );
};

export default Home;