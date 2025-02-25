import Navbar from "./Components/Utils/Navbar";
import Footer from "./Components/Utils/Footer";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PS1GHQGHRV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PS1GHQGHRV');
            `,
          }}
        ></script>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
