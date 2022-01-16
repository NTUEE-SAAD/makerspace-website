import { DatePicker, Input, Button, message, Row, Col } from "antd";
import { useState } from "react";
import { Text } from ".";

export const Leave = () => {
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

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [reason, setReason] = useState();

  function dateChange(date, dateString) {
    console.log(date, dateString);
    setDate(dateString);
  }

  function timeChange(time, timeString) {
    console.log(time, timeString);
    setTime(timeString);
  }

  function submit() {
    if (!time || !reason || !date) {
      displayStatus({
        type: "error",
        msg: "Please enter leave date, time, and reason",
      });
    } else {
      //something to the backend
      console.log("success");
      console.log(date, time, reason);
      setReason("");
    }
  }

  return (
    <div>
      <Text.SectionTitle.Black>管理員請假</Text.SectionTitle.Black>
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <DatePicker onChange={dateChange} />
          </Col>
          <Col span={6}>
            <DatePicker onChange={timeChange} picker="time" />
          </Col>
          <Col>
            <Input
              placeholder="Reason"
              onChange={(e) => setReason(e.target.value)}
            ></Input>
          </Col>
          <Button type="primary" onClick={submit}>
            提交
          </Button>
        </Row>
      </div>
    </div>
  );
};
