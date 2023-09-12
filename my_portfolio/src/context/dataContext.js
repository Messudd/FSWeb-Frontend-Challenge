import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import myInfo from "../data/EN_portfolioData";

export const dataContext = createContext();

const initialState = { ...myInfo };
const modeInitial = false;

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

// #############  LOCAL STORAGE DARK MODE ################

export const writeModeLocalStorage = (mode, val) => {
  return localStorage.setItem(val, JSON.stringify(mode));
};
const readModeLocalStorage = (val) => {
  return JSON.parse(localStorage.getItem(val));
};

const getModeFromLcStorage = (val) => {
  const mode = readModeLocalStorage(val);
  if (mode) {
    return mode
  } else return modeInitial;
};

//#########################################################

const DataContext = ({ children }) => {
  const [data, setData] = useState(getInitialDataFromLcStorage("info"));
  const [language, setLanguage] = useState(false);
  const [mode, setMode] = useState(getModeFromLcStorage('mode'));
  const [formData , setFormData] = useState({
    name: '',
    surname: '',
    email : '',
    topic: '',
    comment: ''
  })

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
      value={{ data, setData, language, setLanguage, mode, setMode ,formData, setFormData }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContext;
