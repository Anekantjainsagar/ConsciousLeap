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
  description:
    "consciousleap was founded keeping in mind our soul purpose of holistically improving the quality of life by elevating and expanding our collective Conscious awareness through mindful healing and positive well-being.",
  keywords: [
    "mental health",
    "therapy",
    "depression treatment",
    "mental health therapist",
    "mental therapy",
    "therapy near me mental health",
    "mental health therapy near me",
    "therapy sessions",
    "mental health counseling",
    "mental therapy near me",
    "best therapists near me",
    "talk therapy",
    "good therapist near me",
    "psychotherapist near me",
    "individual therapy",
    "mental health awareness",
    "mental wellbeing",
    "my mental health",
    "mental health and wellness",
    "positive mental health",
    "mental health and well being",
    "mental illness therapy",
    "mental health mental health",
    "therapy therapist",
    "healing therapist",
    "mental health and therapy",
    "therapy individual",
    "mental health programmes",
    "therapist therapy",
    "psychologist near me",
    "mental health services",
    "psychotherapist",
    "counseling near me",
    "mental health counseling near me",
    "mental health awareness month",
    "mental illness",
    "mental disorder",
    "behavioral therapy",
    "mental mental health",
    "psychiatric",
    "psychological therapy",
    "mental",
    "mental wellness",
    "counselling psychologist near me",
    "behavioral psychologist",
    "mental health issues",
    "mental disorders list",
    "mental health disorders",
    "signs of mental illness",
    "mental health problems",
    "mental illnesses list",
    "mental health disorders list",
    "mental illness symptoms",
    "causes of mental illness",
    "good mental well being",
    "mental health mental",
    "causes of mental health",
    "mental health and mental well being",
    "health and mental",
    "healing and therapy",
    "mental of health",
    "mental health what",
    "psychological disorders list",
    "mental health and awareness",
    "mental disorder symptoms",
    "common mental disorders",
    "illness",
    "psychological well being",
    "treatment of mental disorders",
    "common mental health disorders",
    "mental issues list",
    "mental illnesses and disorders",
    "mental conditions list",
    "common mental illnesses",
    "clinical depression",
    "depression help",
    "major depressive disorder treatments",
    "mental problem",
    "major depressive disorder therapies",
    "psychological disorder",
    "psychiatric disorders list",
    "chronic depression",
    "mental wellness month",
    "treatment for depression and anxiety",
    "therapy for depression and anxiety",
    "all mental disorders list",
    "serious mental illness",
    "signs and symptoms of mental illness",
    "mdd treatment",
    "mental illness disorders",
    "mental disorder schizophrenia",
    "psychiatric illness",
    "treatment for mental health problems",
    "major depression treatment",
    "mental health diseases list",
    "causes of mental disorders",
    "anxiety depression treatment",
    "mental disorders and symptoms",
    "kinds of mental illness",
    "causes of mental health disorders",
    "common psychiatric disorders",
    "mental problems list",
    "depression and treatment",
    "signs of mental disorder",
    "mental illness disorders list",
    "psychological mental disorders",
    "kinds of mental disorder",
    "symptoms of psychiatric disorders",
    "depression and therapy",
    "mental illness problems",
    "common mental disabilities",
    "symptoms of psychological disorders",
    "mental health difficulties",
    "psychology problems",
    "causes of mental disability",
    "causes of mental health illness",
    "causes of psychiatric disorders",
    "common mental health illnesses",
    "common mental problems",
    "disease of mental illness",
    "explain mental illness",
    "issue mental health",
    "mental difficulties",
    "mental disorder disease",
    "mental health and disorders",
    "mental illness disease",
    "mental illness issues",
    "mental mood disorder",
    "popular mental disorders",
    "problem mental health",
    "signs and symptoms of mental disorder",
    "major depressive disorder cure",
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
      </Head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFGV5RM2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Loading />
        {children}
      </body>
    </html>
  );
}
