"use client";
import React, { useEffect, useState } from "react";
import Context from "./Context";
import { usePathname } from "next/navigation";
import axios from "axios";
import { BASE_URL, ML_URL } from "@/Utils/urls";
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
  const [array, setArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);
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
    answer: [
      { q1: 0 },
      { q2: 0 },
      { q3: 0 },
      { q4: 0 },
      { q5: 0 },
      { q6: 0 },
      { q7: 0 },
      { q8: 0 },
      { q9: 0 },
      { q10: 0 },
      { q11: 0 },
      { q12: 0 },
      { q13: 0 },
    ],
  });
  const [fourtyMinMeet, setFourtyMinMeet] = useState(true);
  const [joinUsShow, setJoinUsShow] = useState("JOIN");
  const [bussinessShow, setBussinessShow] = useState(
    "whyconsciousleapforbusiness?"
  );
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [showPopUpId, setShowPopUpId] = useState("");
  const [productData, setProductData] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [cartData, setCartData] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [deliveryType, setDeliveryType] = useState("Home Delivery");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [paymentMode, setPaymentMode] = useState("Cash on Delivery");
  const [orderStatus, setOrderStatus] = useState();
  const [ordersData, setOrdersData] = useState([]);
  const [productPage, setProductPage] = useState(1);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [mindfulMonth, setMindfulMonth] = useState(false);
  const [order, setOrder] = useState({
    address: "",
    localPickup: "",
    additional: "",
  });
  const [filledQuestionnaire, setFilledQuestionnaire] = useState(false);

  const getTherapistsData = () => {
    axios
      .get(
        `${BASE_URL}/therapist/get-all-therapists?search=${
          therapistFilters?.search
        }&speaks=${JSON.stringify([
          ...new Set(therapistFilters?.speaks),
        ])}&expertise=${JSON.stringify(therapistFilters?.expertise)}`
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

  useEffect(() => {
    if (login?.questionnaire?.backendAnswers) {
      axios
        .post(`${ML_URL}`, {
          user_data: login?.questionnaire?.backendAnswers,
        })
        .then((res) => {
          setRecommendations(res.data["top_ids"]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [login]);

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

  const getProducts = () => {
    axios
      .post(
        `${BASE_URL}/product/get-all?search=${productSearch}&page=${productPage}`
      )
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, [productSearch, productPage]);

  const productM = {
    getProducts,
    productData,
    productSearch,
    setProductSearch,
  };

  const cart = {
    cartData,
    setCartData,
    deliveryType,
    setDeliveryType,
    termsAndConditions,
    setTermsAndConditions,
    modalIsOpen,
    setIsOpen,
    paymentMode,
    setPaymentMode,
    order,
    setOrder,
    orderStatus,
    setOrderStatus,
  };

  const getBlogs = () => {
    axios
      .get(`${BASE_URL}/admin/get-blogs`)
      .then((res) => {
        setBlogs(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOrders();
    getBlogs();
    getTherapist();
  }, []);

  const getOrders = () => {
    axios
      .get(`${BASE_URL}/admin/get-orders`)
      .then((res) => {
        setOrdersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getRandomNumberArray() {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

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
        bussinessShow,
        setBussinessShow,
        productM,
        cart,
        getTherapist,
        blogs,
        getBlogs,
        getOrders,
        ordersData,
        array,
        setArray,
        getRandomNumberArray,
        setProductPage,
        productPage,
        showRecommendation,
        setShowRecommendation,
        recommendations,
        setMindfulMonth,
        mindfulMonth,
        setFilledQuestionnaire,
        filledQuestionnaire,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
