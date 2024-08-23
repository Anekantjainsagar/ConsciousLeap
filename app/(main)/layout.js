import Navbar from "./Components/Utils/Navbar";
import Footer from "./Components/Utils/Footer";
import GoogleAnalytics from "./Components/GoogleTagManager";

export default function RootLayout({ children }) {
  return (
    <section lang="en">
      <Navbar />
      <GoogleAnalytics>{children}</GoogleAnalytics>
      <Footer />
    </section>
  );
}
