import { Comfortaa } from "next/font/google";
import State from "@/Context/State";

const inter = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <State>
        <body className={inter.className}>{children}</body>
      </State>
    </html>
  );
}
