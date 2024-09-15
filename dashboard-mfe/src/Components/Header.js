import React from "react";
import { Layout, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item key="profile" icon={<UserOutlined />}>
      Profile
    </Menu.Item>
    <Menu.Item key="logout" icon={<LogoutOutlined />}>
      Logout
    </Menu.Item>
  </Menu>
);

const DashboardHeader = () => {
  return (
    <Header className="dashboard-header">
      <div className="header-content">
        <Dropdown menu={userMenu} trigger={['click']}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default DashboardHeader;
