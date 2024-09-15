import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Row,
  Col,
  notification,
  Spin,
  Typography,
} from "antd";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router";
import log from "loglevel";
import { signIn } from "../apiInstances/authApi";
import "../styles/LoginScreen.css"; // Import the CSS file for custom styles

const { Text } = Typography;

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [api, contextHolder] = notification.useNotification();
  const [isSpinning, setSpinning] = useState(false);

  const navigate = useNavigate();

  const authenticateUser = async () => {
    setSpinning(true);
    try {
      const response = await signIn(username, password);
      if (response?.token) {
        localStorage.setItem("token", response.token);
        api.success({ message: "User Login Success" });
        navigate("/category");
      }
    } catch (error) {
      log.error(`User login failed with username - ${username}: ${error}`);
      api.error({ message: "User Login Failed!" });
    } finally {
      setSpinning(false);
    }
  };

  return (
    <Spin tip="Loading" size="large" spinning={isSpinning}>
      <div className="main-div-wrapper">
        {contextHolder}
        <Card title={<h1 className="login-title">Farm Fresh Online</h1>} bordered={false} className="login-card">
          <Input
            size="large"
            placeholder="Email"
            prefix={<UserOutlined />}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <Input.Password
            className="login-input"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="primary"
            block
            className="login-btn"
            onClick={authenticateUser}
          >
            Log-In
          </Button>
          <Row className="login-footer">
            <Col span={15}>
              <Text>Don't have an account?</Text>
            </Col>
            <Col span={9}>
              <Button type="link" block onClick={() => navigate("/user-register")}>
                Sign-Up
              </Button>
            </Col>
          </Row>
          <Button type="link" block>
            Forgot Password?
          </Button>
        </Card>
      </div>
    </Spin>
  );
};

export default LoginScreen;
