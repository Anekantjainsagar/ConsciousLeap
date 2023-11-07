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
  const [areaOfExpertise, setAreaOfExpertise] = useState();
  const [speaksFilter, setSpeaksFilter] = useState();
  const [therapistFilters, setTherapistFilters] = useState({
    search: "",
    expertise: [],
    speaks: [],
  });
  const [therapistSort, setTherapistSort] = useState();
  const [therapistsData, setTherapistsData] = useState([]);
  const [questionnaire, setQuestionnaire] = useState({
    age: "",
    problem: "",
    answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
  const [fourtyMinMeet, setFourtyMinMeet] = useState(true);
  const [joinUsShow, setJoinUsShow] = useState("JOIN");
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [showPopUpId, setShowPopUpId] = useState("");

  const getTherapistsData = () => {
    axios
      .get(
        `${BASE_URL}/therapist/get-all-therapists?search=${
          therapistFilters?.search
        }&speaks=${JSON.stringify(
          therapistFilters?.speaks
        )}&expertise=${JSON.stringify(therapistFilters?.expertise)}`
      )
      .then((response) => {
        setTherapistsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTherapistsData();
  }, [therapistFilters]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/therapist/get-area-of-expertise`)
      .then((res) => {
        setAreaOfExpertise(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/therapist/get-speaks`)
      .then((res) => {
        setSpeaksFilter(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (getCookie("token")?.length > 1) {
      setIsLogin(true);
    }
    if (getCookie("therapist_token")?.length > 1) {
      setIsTherapistLogin(true);
    }
  }, [pathname]);

  const getUser = () => {
    axios
      .post(`${BASE_URL}/login/get-user`, {
        token: getCookie("token"),
      })
      .then((res) => {
        setLogin(res?.data);
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

  let therapistFilter = {
    areaOfExpertise,
    speaksFilter,
    therapistFilters,
    setTherapistFilters,
    therapistsData,
  };

  return (
    <Context.Provider
      value={{
        login,
        user,
        setUser,
        isLogin,
        setIsLogin,
        getUser,
        therapists,
        therapistFilter,
        questionnaire,
        setLogin,
        setQuestionnaire,
        fourtyMinMeet,
        setFourtyMinMeet,
        therapistSort,
        setTherapistSort,
        joinUsShow,
        setJoinUsShow,
        showSubscribe,
        setShowSubscribe,
        showPopUpId,
        setShowPopUpId,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
