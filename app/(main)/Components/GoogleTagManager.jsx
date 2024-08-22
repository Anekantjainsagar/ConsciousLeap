import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Create the script element for Google Analytics
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-5SMJLE8MGE";
    script.async = true;
    document.head.appendChild(script);

    // Create the inline script to configure Google Analytics
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5SMJLE8MGE');
    `;
    document.head.appendChild(inlineScript);

    // Clean up the scripts when the component unmounts
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return null; // This component does not render anything
};

export default GoogleAnalytics;
