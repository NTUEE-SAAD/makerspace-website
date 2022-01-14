import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import { StaffPage } from "./SraffPage";
import { message } from "antd";
import instance from "../../instance"

const LOCALSTORAGE_KEY = "save-me";

export const Staff = () => {
  const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);
  const [signedIn, setSignedIn] = useState(false);
  const [me, setMe] = useState(savedMe || "");
  const [password, setPassword] = useState("");
  const checkPassword = async(password, me) => {
    const {data} = await instance.post("/staff/signin", {"signInName": me, "signInPassword": password},)
    console.log("here", data)
    return data
  };

  useEffect(() => {
    if (signedIn) {
      localStorage.setItem(LOCALSTORAGE_KEY, me);
    }
  }, [signedIn]); // useEffect(func, change_var)

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
