import { Input, message, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { instance } from "../instance";
const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 500px;
  margin: auto;
  .App-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .App-title h1 {
    margin: 0;
    margin-right: 20px;
    font-size: 3em;
  }

  .App-messages {
    width: 100%;
    height: 300px;
    background: #eeeeee52;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    overflow: auto;
  }
`;
const { Option } = Select;

const SignUp = ({}) => {
  const [me, setMe] = useState("");
  const [password, setPassword] = useState("");
  const [day1, setDay1] = useState("");
  const [time1, setTime1] = useState("");
  const [day2, setDay2] = useState("");
  const [time2, setTime2] = useState("");

  const signUpPassword = async (password, me, day1, time1, day2, time2) => {
    try {
      const {
        data: { data },
      } = await instance.post("/staff/signup", {
        name: me,
        password: password,
        time: [
          { day: day1, time: time1 },
          { day: day2, time: time2 },
        ],
      });
      return data;
    } catch (error) {
      const data = JSON.stringify(error.response.data.data);
      return data;
    }
  };
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
    <>
      <StyledSignUp>
        <div className="App-title">
          <h1>Staff Sign Up</h1>
        </div>
        <div>
          <Select placeholder="Day1" onChange={(e) => setDay1(e)}>
            <Option value="Mon">Mon</Option>
            <Option value="Tue">Tue</Option>
            <Option value="Wed">Wed</Option>
            <Option value="Thru">Thry</Option>
            <Option value="Fri">Fri</Option>
          </Select>
          <Select placeholder="Time1" onChange={(e) => setTime1(e)}>
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
            <Option value="D">D</Option>
          </Select>
          <Select placeholder="Day2" onChange={(e) => setDay2(e)}>
            <Option value="Mon">Mon</Option>
            <Option value="Tue">Tue</Option>
            <Option value="Wed">Wed</Option>
            <Option value="Thru">Thry</Option>
            <Option value="Fri">Fri</Option>
          </Select>
          <Select placeholder="Time2" onChange={(e) => setTime2(e)}>
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
            <Option value="D">D</Option>
          </Select>
        </div>
        <Input.Search
          prefix={<UserOutlined />}
          value={me}
          enterButton="Sign Up"
          onChange={(e) => setMe(e.target.value)}
          placeholder="Enter your name"
          size="large"
          sytle={{ width: 300, margin: 50 }}
          onSearch={async (me) => {
            if (!me || !password || !day1 || !time1 || !day2 || !time2) {
              displayStatus({
                type: "error",
                msg: "Missing user name,password, and duty time",
              });
            } else {
              const message = await signUpPassword(
                password,
                me,
                day1,
                time1,
                day2,
                time2
              );
              if (message !== "success") {
                displayStatus({
                  type: "error",
                  msg: message,
                });
              } else {
                displayStatus({
                  type: "success",
                  msg: "signed up success, please sign in",
                });
              }
            }
          }}
        ></Input.Search>
        <Input.Password
          prefix={<LockOutlined />}
          value={password}
          enterButton="Sign In"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          size="large"
          sytle={{ width: 300, margin: 50 }}
        ></Input.Password>
        <Link to="/staff/">Sign In</Link>
      </StyledSignUp>
    </>
  );
};

export default SignUp;
