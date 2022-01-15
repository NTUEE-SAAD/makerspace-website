import { Input, DatePicker, Checkbox, Form, Typography } from "antd";
import { useState } from "react";
import moment from "moment";

const ReservationForm = (props) => {
  const { formRef } = props;

  const { TextArea } = Input;
  const onFinish = (value) => {
    console.log("Success:", value);
  };

  function onChange(value, dateString) {
    console.log("Formatted Selected Time: ", value.format());
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [useNTUMail, setUseNTUMail] = useState(false);
  const [id, setId] = useState("");
  const [privateMail, setPrivateMail] = useState("");
  const [date, setDate] = useState(moment().endOf("day").fromNow());
  const onUseNTUMail = () => {
    setUseNTUMail(!useNTUMail);
    console.log(!useNTUMail);
  };

  const handleChange = (setState) => {
    return (e) => {
      setState(e.target.value);
      console.log(e.target.value);
    };
  };

  return (
    
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
          label="User"
          name="user"
          rules={[{ required: true, message: "User Info required!" }]}
        >
          <Input.Group>
            <Form.Item
              label="Name"
              name={["user", "name"]}
              noStyle
              rules={[{ required: true, message: "Name required!" }]}
            >
              <Input placeholder="Name " />
            </Form.Item>
            <Form.Item
              label="Student ID"
              name={["user", "ID"]}
              noStyle
              rules={[{ required: true, message: "Student ID required!" }]}
            >
              <Input
                placeholder="Student ID"
                value={id}
                onChange={handleChange(setId)}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="Date"
          name="Date"
          rules={[{ required: true, message: "Reservation Date Required" }]}
        >
          <DatePicker
            value={moment().format()}
            format="YYYY-MM-DD"
            onChange={onChange}
          />
        </Form.Item>
        {/* <Form.Item {...formItemLayout} label="Publish Date">
          {getFieldDecorator("publishDate", {
            initialValue: moment(),
            rules: [
              {
                type: "object",
                required: false,
                message: "Please input publishDate",
                whitespace: true,
              },
            ],
          })(<DatePicker />)}
        </Form.Item> */}

        <Form.Item
          label="Purpose"
          name="purpose"
          rules={[{ required: true, message: "Purpose Required" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Email" name="email">
          
            <Checkbox onChange={onUseNTUMail} checked={useNTUMail}>
              Use NTU Mail
            </Checkbox>
            <Form.Item label="Email" name='name' noStyle>
              <Input
                placeholder="email"
                value={useNTUMail ? id + "@ntu.edu.tw" : privateMail}
                onChange={
                  useNTUMail ? onUseNTUMail : handleChange(setPrivateMail)
                }
              />
            </Form.Item>

            <Typography.Text type="secondary">
              Fill in to receive Reservation Token via email
            </Typography.Text>
        </Form.Item>
      </Form>
  );
};

export default ReservationForm;
