import { Comfortaa } from "next/font/google";
import State from "@/Context/State";

const inter = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <State>
      <div className={inter.className}>{children}</div>
    </State>
  );
}
