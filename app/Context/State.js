"use client";
import React, { useEffect, useState } from "react";
import Context from "./Context";
import { usePathname } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/Utils/urls";
import { getCookie } from "cookies-next";

const B2BState = (props) => {
  const pathname = usePathname();

  const [login, setLogin] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    original: "",
    otp: "",
  });
  const [isTherapistLogin, setIsTherapistLogin] = useState(false);
  const [therapist, setTherapist] = useState();

  useEffect(() => {
    if (getCookie("token")?.length > 1) {
      setIsLogin(true);
    }
    if (getCookie("therapist_token")?.length > 1) {
      setIsTherapistLogin(true);
      console.log(getCookie("therapist_token"));
    }
  });

  const getUser = () => {
    axios
      .post(`${BASE_URL}/login/get-user`, {
        token: getCookie("token"),
      })
      .then((res) => {
        setLogin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTherapist = () => {
    axios
      .post(`${BASE_URL}/therapist/get-therapist`, {
        token: getCookie("therapist_token"),
      })
      .then((res) => {
        setTherapist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isLogin) {
      getUser();
    }
    if (isTherapistLogin) {
      getTherapist();
    }
  }, [isLogin, isTherapistLogin]);

  let therapists = {
    therapist,
    getTherapist,
    isTherapistLogin,
    setIsTherapistLogin,
  };

  return (
    <Context.Provider
      value={{ login, user, setUser, isLogin, setIsLogin, getUser, therapists }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
