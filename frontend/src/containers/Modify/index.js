import {
  Row,
  Col,
  Typography,
  DatePicker,
  TimePicker,
  Divider,
  Button,
} from "antd";
import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import { request } from "../../instance";
import moment from "moment";

export const Modify = () => {
  const [pinCode, setPinCode] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handlePinChange = async (newPin) => {
    console.log(newPin);
    setPinCode(newPin);
    if (newPin.length === 6) {
      const res = await handleFull();
      console.log(res);
      if (res === "uuid not found") {
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
    <div style={{ width: "70%", margin: "7vh auto" }}>
      <Row gutter={[16, 64]}>
        <Typography.Title>更改預約記錄</Typography.Title>
      </Row>
      <Row gutter={[16, 32]} justify="center" align="middle">
        <Col span={5}>
          <Typography.Title level={3}>預約更改代碼</Typography.Title>
        </Col>
        <Col span={10} align="center">
          <ReactCodeInput
            id="pinCode"
            isValid={true}
            fields={6}
            onChange={handlePinChange}
            value={pinCode}
            touch={() => console.log("touch")}
          />
        </Col>
        <Col span={5}></Col>
      </Row>
      <Row gutter={[16, 24]}>
        <Divider />
      </Row>
      <Row gutter={[16, 60]} justify="center" align="middle">
        <Col span={5}>
          <Typography.Title level={3}>新預約時間</Typography.Title>
        </Col>
        <Col span={10} align="center">
          <DatePicker
            defaultValue={date}
            format={"YYYY-MM-DD"}
            style={{ width: "40%", margin: "0 10% 1vh 10%" }}
          />
          <TimePicker
            defaultValue={moment()}
            format={"hh:mm"}
            style={{ width: "40%", margin: "1vh 10% 0 10%" }}
          />
        </Col>
        <Col span={5}></Col>
      </Row>
      <Row gutter={[16, 24]} justify="center">
        <Button type="primary">送出</Button>
      </Row>
    </div>
  );
};
