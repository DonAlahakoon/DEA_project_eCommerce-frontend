import React from 'react';
import { Layout, Row, Col, Typography, Button } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const logOutUser = () => {
    localStorage.clear();
    window.location.assign("/")
  };

function AppBar({ onCreateCategory }) {
  return (
    <Header position="fixed" style={{ background: '#4CAF50', margin: 0, borderBottomLeftRadius:'20px', borderBottomRightRadius:'20px' }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={3} style={{ margin: 0,color: '#fff' }}>
            Fresh Farm Online
          </Title>
        </Col>
        <Col>
          <Button style={{backgroundColor:"#fff", color:"#4CAF50"}} type="primary" onClick={logOutUser}>
            Log Out
          </Button>
        </Col>
      </Row>
    </Header>
  );
}

export default AppBar;
