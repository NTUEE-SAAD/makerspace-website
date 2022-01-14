import { Modal, Input, DatePicker, Checkbox, Form, Button } from "antd";
import { useState } from "react";

const ReservationForm = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Student ID"
        name="student ID"
        rules={[{ required: true, message: "Please input your Student ID!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Use NTU Mail"
        name="use NTU Mail"
      >
        <Checkbox />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReservationForm;
