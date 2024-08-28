import Navbar from "./Components/Utils/Navbar";
import Footer from "./Components/Utils/Footer";
import GoogleAnalytics from "./Components/GoogleTagManager";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* <GoogleAnalytics /> */}
      {children}
      <Footer />
    </>
  );
}
