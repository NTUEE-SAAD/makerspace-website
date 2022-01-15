import { Input, DatePicker, Checkbox, Form, Button, Select } from "antd";
import { useEffect } from "react";
import { useReservation } from "./useReservation";
import { name, setName, email, setEmail, id, setId } from "./useReservation";

const ReservationForm = (props) => {
  const { formRef } = props;

  const onFinish = (value) => {
    console.log("Succesrs:", value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;

  useEffect(()=>{console.log(formRef.current)}, formRef.current);
  
  return (
    <>
      <Form
        ref={formRef}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
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
        <Form.Item label="Email Address" name="email">
          <Input.Group compact>
            <Select defaultValue="Use NTU Mail" dropdownMatchSelectWidth={false}>
              <Option value="Use NTU Mail">Use NTU Mail</Option>
              <Option value="Private Mail">Private Mail</Option>
            </Select>
            <Checkbox />
            <Input />
          </Input.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default ReservationForm;
