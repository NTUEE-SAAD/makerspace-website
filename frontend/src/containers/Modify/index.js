import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { request } from "../../instance";

export const Modify = () => {
  const [pinCode, setPinCode] = useState("");
  const [date, setDate] = useState("");
  const handlePinChange = (pinCode) => {
    console.log(pinCode);
    setPinCode(pinCode);
  };
  const handleFull = async () => {
    return await request({
      method: "PUT",
      url: "/instrument/reservation",
      data: {
        id: pinCode,
        date: date,
      },
    });
  };
  setDate("1642176969653");
  useEffect(() => {
    if (pinCode.length === 6) handleFull();
  });

  return (
    <>
      <ReactCodeInput
        id="pinCode"
        isValid={true}
        fields={6}
        onChange={handlePinChange}
        value={pinCode}
      />
    </>
  );
};
