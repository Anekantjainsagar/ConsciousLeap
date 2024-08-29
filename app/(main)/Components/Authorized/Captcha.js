import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ captchaRef }) => {
  return (
    <ReCAPTCHA
      className="recaptcha my-2"
      sitekey={"6Ldyj4knAAAAAJPvb8sjKBv2VxS19xMTHkHc63Ho"}
      ref={captchaRef}
    />
  );
};

export default Captcha;
