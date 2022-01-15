import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import { StaffPage } from "./SraffPage";
import { message } from "antd";
import { instance } from "../../instance";
const asyncHandler = require("express-async-handler");
const LOCALSTORAGE_KEY = "save-me";

export const Staff = () => {
  const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);
  const [signedIn, setSignedIn] = useState(false);
  const [me, setMe] = useState(savedMe || "");
  const [password, setPassword] = useState("");
  const checkPassword = async (password, me) => {
    try {
      const {
        data: { data },
      } = await instance.post("/staff/signin", {
        name: me,
        password: password,
      });
      return data;
    } catch (error) {
      const data = JSON.stringify(error.response.data.data);
      return data;
    }
  };

  useEffect(() => {
    if (signedIn) {
      localStorage.setItem(LOCALSTORAGE_KEY, me);
    }
  }, [signedIn]); // useEffect(func, change_var)

  const handleLogin = async () => {
    const remember = await instance.get("/staff/signin");
    console.log(remember.data);
    if (remember.data.data === "success") {
      setSignedIn(true);
    }
  };
  handleLogin();
  const displayStatus = (payload) => {
    if (payload.msg) {
      const { type, msg } = payload;
      const content = {
        content: msg,
        duration: 0.5,
      };
      switch (type) {
        case "success":
          message.success(content);
          break;
        case "error":
        default:
          message.error(content);
          break;
      }
    }

    setSignedIn(true);
  };

  return (
    <div className="App">
      {signedIn ? (
        <StaffPage />
      ) : (
        <SignIn
          me={me}
          setMe={setMe}
          setSignedIn={setSignedIn}
          displayStatus={displayStatus}
          password={password}
          setPassword={setPassword}
          checkPassword={checkPassword}
        />
      )}
    </div>
  );
};
