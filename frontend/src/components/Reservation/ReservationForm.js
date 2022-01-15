import {
  Input,
  DatePicker,
  Checkbox,
  Form,
  Typography,
  Space,
  Tooltip,
  Select,
  Button,
} from "antd";
import { useState } from "react";
import React from "react";
import moment from "moment";

const { Option } = Select;

export const ReservationForm = (props) => {
  const { formRef } = props;

  const [id, setId] = useState("");
  const [useNTUMail, setUseNTUMail] = useState(false);
  const [privateMail, setPrivateMail] = useState("");
  const handleChange = (setState) => {
    return (e) => {
      setState(e.target.value);
      console.log(e.target.value);
    };
  };
  const onUseNTUMail = () => {
    setUseNTUMail(!useNTUMail);
    console.log(!useNTUMail);
  };

  const onFinish = (value) => {
    console.log("Success:", value);
  };

  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      ref={formRef}
    >
      <Form.Item
        label="User"
        name="user"
      >
        <Input.Group compact>
          <Form.Item
            name={["user", "name"]}
            noStyle
            rules={[{ required: true, message: "Name required" }]}
          >
            <Input placeholder="Input Name" />
          </Form.Item>
          <Form.Item
            name={["user", "id"]}
            noStyle
            rules={[{ required: true, message: "student ID required" }]}
          >
            <Input placeholder="Input Student ID" />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item label="Email">
        <>
          <Checkbox onChange={onUseNTUMail} checked={useNTUMail}>
            Use NTU Mail
          </Checkbox>
          <Form.Item label="Email" name={["Email", "name"]} noStyle>
              <Input
                placeholder="email"
                // value={useNTUMail ? id + "@ntu.edu.tw" : privateMail}
                value = "lll"
                onChange={
                  useNTUMail ? onUseNTUMail : handleChange(setPrivateMail)
                }
              />
            </Form.Item>
          <Typography.Text type="secondary">
            Fill in to receive Reservation Token via email
          </Typography.Text>
        </>
      </Form.Item>
    </Form>
  );
};
