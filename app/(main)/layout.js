import Script from "next/script";
import Navbar from "./Components/Utils/Navbar";
import Footer from "./Components/Utils/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PS1GHQGHRV`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PS1GHQGHRV', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
