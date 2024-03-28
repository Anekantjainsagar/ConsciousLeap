import Navbar from "./Components/Utils/Navbar";
import Footer from "./Components/Utils/Footer";

export default function RootLayout({ children }) {
  return (
    <section lang="en">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
