import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components"
const StyledSignIn = styled.div`
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

`
const SignIn = ({
  me,
  setMe,
  setSignedIn,
  displayStatus,
  password,
  setPassword,
}) => {
  return (
    <>
    <StyledSignIn>
      <div className="App-title">
        <h1>Staff Sign In</h1>
      </div>
      <Input.Search
        prefix={<UserOutlined />}
        value={me}
        enterButton="Sign In"
        onChange={(e) => setMe(e.target.value)}
        placeholder="Enter your name"
        size="large"
        sytle={{ width: 300, margin: 50 }}
        onSearch={(name) => {
          if (!name) {
            displayStatus({
              type: "error",
              msg: "Missing user name",
            });
          } else if (!password) {
            displayStatus({
              type: "error",
              msg: "Missing password",
            });
          } else {
            setSignedIn(true);
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
    </StyledSignIn>
    </>
  );
};

export default SignIn;
