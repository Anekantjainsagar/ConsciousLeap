import { Comfortaa } from "next/font/google";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import State from "@/Context/State";
import Footer from "./Components/Footer";

const inter = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <State>
        <body className={inter.className}>
          <div className="w-full h-full flex items-start">
            <Sidebar />
            <div className="w-[85vw]">
              <Navbar />
              <div className="p-4">{children}</div>
              <Footer />
            </div>
          </div>
        </body>
      </State>
    </html>
  );
}
