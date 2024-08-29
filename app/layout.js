import "./globals.css";
import { Comfortaa } from "next/font/google";
import State from "@/Context/State";
import Loading from "./loading";
import Head from "next/head";

const inter = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "consciousleap - Best Therapists for mental health",
  description:
    "consciousleap was founded keeping in mind our soul purpose of holistically improving the quality of life by elevating and expanding our collective Conscious awareness through mindful healing and positive well-being.",
  keywords: [
    "mental health",
    "therapy",
    "depression treatment",
    // (The rest of your keywords remain unchanged)
  ],
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFGV5RM2');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <State>
        <body className={inter.className}>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TFGV5RM2"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Loading />
          {children}
        </body>
      </State>
    </html>
  );
}
