import {
  Row,
  Col,
  Typography,
  DatePicker,
  TimePicker,
  Divider,
  Button,
  message,
} from "antd";
import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import { request } from "../../instance";

export const Modify = () => {
  const [pinCode, setPinCode] = useState("");
  const [datetime, setDatetime] = useState(new Date().toISOString());

  const setDate = (value) => {
    const time = datetime.split("T")[1];
    const date = value.format().split("T")[0];
    setDatetime(`${date}T${time}`);
  };

  const setTime = (value) => {
    const time = value.format().split("T")[1];
    const date = datetime.split("T")[0];
    setDatetime(`${date}T${time}`);
  };

  const handlePinChange = (newPin) => {
    setPinCode(newPin);
  };

  const handleSubmit = async () => {
    try {
      await request({
        method: "PUT",
        url: "/instrument/reservation",
        data: {
          id: pinCode,
          date: new Date(datetime).getTime(),
        },
      });
      message.success("時段更改成功");
    } catch (e) {
      message.error("預約id不存在或預約已過期");
    }
  };

  return (
    <div style={{ width: "70%", margin: "7vh auto" }}>
      <Row gutter={[16, 64]}>
        <Typography.Title>更改預約記錄</Typography.Title>
      </Row>
      <Row gutter={[16, 32]} justify="center" align="middle">
        <Col span={5}>
          <Typography.Title level={3}>預約id</Typography.Title>
        </Col>
        <Col span={10} align="center">
          <ReactCodeInput
            id="pinCode"
            isValid={true}
            fields={6}
            onChange={handlePinChange}
            value={pinCode}
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
            onChange={setDate}
            format={"YYYY-MM-DD"}
            style={{ width: "80%", marginBottom: "1vh" }}
          />
          <TimePicker
            onChange={setTime}
            format={"HH:mm"}
            style={{ width: "80%", marginTop: "1vh" }}
          />
        </Col>
        <Col span={5}></Col>
      </Row>
      <Row gutter={[16, 24]} justify="center">
        <Button type="primary" onClick={handleSubmit}>
          送出
        </Button>
      </Row>
    </div>
  );
};
