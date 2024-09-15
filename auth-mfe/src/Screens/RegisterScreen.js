import React, { useState } from "react";
import { Card, Input, Button, Row, Col, notification, Select, Modal, Spin, Typography } from "antd";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, MailOutlined, HomeOutlined, ShopOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import log from "loglevel";
import "../styles/RegisterScreen.css"; // Import custom CSS

const { Text } = Typography;

const RegisterScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [fullName, setFullName] = useState();
  const [userType, setUserType] = useState();
  const [companyName, setCompanyName] = useState();
  const [userOtp, setUserOtp] = useState();
  const [poolId, setPoolId] = useState();
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpinning, setSpinning] = useState(false);

  const navigate = useNavigate();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const saveUserDetails = async () => {
    setSpinning(false);
    const response = await saveUsersInDB(username, address, userType, fullName, companyName, poolId);
    if (response?.status === 201) {
      setSpinning(false);
    } else {
      setSpinning(false);
      log.error(`Error in saving details in the DB: $${response}`);
      api.error({ message: "User Saving in the DB Failed!" });
    }
  };

  const handleOk = async () => {
    setSpinning(true);
    const response = await userConfirmation(username, userOtp);
    if (response?.status === 200) {
      api.success({ message: "User Registration Success" });
      handleCancel();
      saveUserDetails();
      navigate("/");
    } else {
      setSpinning(false);
      api.error({ message: "User Registration Failed!" });
      log.error(`Error occurred while confirming the user by OTP: ${response}`);
      handleCancel();
    }
  };

  const registerUser = async () => {
    if (!username || !address || !userType || !fullName || !password) {
      api.error({ message: "Please fill in all required fields!" });
      return;
    }
    setSpinning(true);
    const response = await registerUserDetails(username, address, userType, fullName, companyName, password);
    if (response?.status === 201) {
      setPoolId(response?.data?.data?.userSub);
      setSpinning(false);
      showModal();
    } else {
      setSpinning(false);
      log.error(`User registration failed: ${response}`);
      api.error({ message: "User Registration Failed!" });
    }
  };

  const handleChange = (value) => setUserType(value);

  const SelectUserComponent = () => (
    <Card title={<h1>Select User Type</h1>} bordered={true} className="user-select-card">
      <Select
        className="user-select-dropdown"
        allowClear
        placeholder="Please select user type"
        onChange={handleChange}
        options={[
          { label: "Customer", value: "customer" },
          { label: "Supplier", value: "supplier" },
        ]}
      />
    </Card>
  );

  return (
    <Spin tip="Loading" size="large" spinning={isSpinning}>
      <div className="register-main-div">
        <Modal title="Confirm Your Email" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>An OTP has been sent to your provided email. Please enter the OTP below and click 'Ok'.</p>
          <Input placeholder="Enter OTP" onChange={(e) => setUserOtp(e.target.value)} />
        </Modal>
        {contextHolder}
        {userType === null ? (
          <SelectUserComponent />
        ) : (
          <Card
            title={<h1 className="register-title">Create a New Account</h1>}
            bordered={false}
            className="register-card"
          >
            <Select
              className="select-user-registration"
              placeholder="Please select user type"
              onChange={handleChange}
              defaultValue={userType}
              options={[
                { label: "Customer", value: "customer" },
                { label: "Supplier", value: "supplier" },
              ]}
            />
            {userType === "customer" ? (
              <>
                <Input
                  size="large"
                  className="input-style"
                  placeholder="Full Name"
                  prefix={<UserOutlined />}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                  size="large"
                  className="input-style"
                  placeholder="Email"
                  prefix={<MailOutlined />}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  size="large"
                  className="input-style"
                  placeholder="Address"
                  prefix={<HomeOutlined />}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </>
            ) : (
              <>
                <Input
                  size="large"
                  className="input-style"
                  placeholder="Company Name"
                  prefix={<ShopOutlined />}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <Input
                  size="large"
                  className="input-style"
                  placeholder="Email"
                  prefix={<MailOutlined />}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  size="large"
                  className="input-style"
                  placeholder="Address"
                  prefix={<HomeOutlined />}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </>
            )}
            <Input.Password
              className="password-input"
              placeholder="Input password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="primary" block className="register-btn" onClick={registerUser}>
              {userType === "customer" ? "Register Customer" : "Register Supplier"}
            </Button>
            <Row className="register-footer">
              <Col span={15}>
                <Text>Already have an account?</Text>
              </Col>
              <Col span={9}>
                <Button type="link" block onClick={() => navigate("/")}>
                  Sign-In
                </Button>
              </Col>
            </Row>
          </Card>
        )}
      </div>
    </Spin>
  );
};

export default RegisterScreen;
