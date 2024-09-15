import React from 'react';
import {
    HomeFilled,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: 1,
        icon: <HomeFilled/>,
        label: `Home`,
      }
]

const Sidebar = () => {
    
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" style={{marginTop:"7vh"}} defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
          backgroundColor:"#F8F8F8"
        }}
      >

      </Layout>
    </Layout>
  );
};
export default Sidebar;