import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import myInfo from "../data/EN_portfolioData";

export const dataContext = createContext();

const initialState = { ...myInfo };

export const writeLocalStorage = (data, key) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
const readLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getInitialDataFromLcStorage = (key) => {
  const Data = readLocalStorage(key);
  if (Data) {
    return Data;
  } else return initialState;
};

const DataContext = ({ children }) => {
  const [data, setData] = useState(getInitialDataFromLcStorage("info"));
  const [language, setLanguage] = useState(false);
  const [mode, setMode] = useState(false);

  const postData = async (veri) => {
    await axios
      .post("https://reqres.in/api/users", veri)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("sunucu hatası : ", err);
      });
  };

  useEffect(() => {
    postData(data);
  }, []);

  return (
    <dataContext.Provider
      value={{ data, setData, language, setLanguage, mode, setMode }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContext;
