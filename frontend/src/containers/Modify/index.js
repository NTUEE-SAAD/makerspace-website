import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { request } from "../../instance";

export const Modify = () => {
  const [pinCode, setPinCode] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const handlePinChange = async (e) => {
    console.log(e);
    setPinCode(e);
    if (pinCode.length === 6) {
      console.log(666);
      const res = await handleFull();
      console.log(res);
      if (res.message === "uuid not found") {
        console.log("uuid not found");
        setStatus("id not found");
      }
    }
  };
  const handleFull = async () => {
    try {
      setPinCode("");
      await request({
        method: "PUT",
        url: "/instrument/reservation",
        data: {
          id: pinCode,
          date: "1642176969653",
        },
      });
      return "success";
    } catch (e) {
      return "uuid not found";
    }
  };

  return (
    <>
      <ReactCodeInput
        id="pinCode"
        isValid={true}
        fields={6}
        onChange={(e) => {
          handlePinChange(e);
        }}
        value={pinCode}
      />
      <label>{status !== undefined && status}</label>
    </>
  );
};
