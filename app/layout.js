import "./globals.css";
import { Comfortaa } from "next/font/google";
import State from "@/Context/State";
import Head from "next/head";
import Loading from "./loading";

const inter = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "consciousleap - Best Therapists for mental health",
  description: "consciousleap was founded keeping in mind our soul purpose of holistically improving the quality of life by elevating and expanding our collective Conscious awareness through mindful healing and positive well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />{" "}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />{" "}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <State>
        <body className={inter.className}>
          <Loading />
          {children}
        </body>
      </State>
    </html>
  );
}
