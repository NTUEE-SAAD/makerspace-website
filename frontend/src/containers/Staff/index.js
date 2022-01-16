import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import { StaffPage } from "./SraffPage";
import { message } from "antd";
import { request } from "../../instance";
const LOCALSTORAGE_KEY = "save-me";

export const Staff = () => {
  const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);
  const [signedIn, setSignedIn] = useState(false);
  const [me, setMe] = useState(savedMe || "");
  const [password, setPassword] = useState("");

  const checkPassword = async (password, me) => {
    try {
      const { data } = await request({
        method: "post",
        url: "/staff/signin",
        data: {
          name: me,
          password: password,
        },
      });
      return data;
    } catch (error) {
      const data = JSON.stringify(error);
      return data;
    }
  };

  useEffect(() => {
    if (signedIn) {
      localStorage.setItem(LOCALSTORAGE_KEY, me);
    }
  }, [signedIn, me]);

  const handleLogin = async () => {
    const { message } = await request({ method: "GET", url: "/staff/signin" });
    //console.log(remember.data);
    if (message === "success") {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  };

  useEffect(() => {
    handleLogin();
  });

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
  };

  return (
    <div className="App">
      {signedIn ? (
        <StaffPage name={me} />
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
