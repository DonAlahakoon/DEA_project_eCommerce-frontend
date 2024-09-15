import React, { Children, useEffect } from "react";
import {PlusCircleOutlined,AppstoreOutlined,LogoutOutlined,} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { USER_TYPES } from "../contants/contants";

const { Sider, Content } = Layout;

const getUserItems = (userType) => {
  const baseItems = [
    {
      key: 1,
      icon: <AppstoreOutlined />,
      label: `View Product`,
      link: "/view-products",
    },
    {
      key: 3,
      icon: <LogoutOutlined />,
      label: `Logout`,
      link: "/view-products",
      onClick: () => {
        logOutUser();
      },
    },
  ];

  switch (userType) {
    case USER_TYPES.SUPPLIER:
      return [
        ...baseItems,
        {
          key: 2,
          icon: <PlusCircleOutlined />,
          label: `Add Product`,
          link: "/addProducts",
        },
      ];
    default:
      return baseItems;
  }
};

const logOutUser = () => {
  localStorage.clear();
  window.location.assign("/")
};

const Sidebar = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sortByAscendingId = (array) => {
    return array.sort((itemPre, itemNext) => itemPre.key - itemNext.key);
  };

  const userType = localStorage.getItem("type");
  const items = sortByAscendingId(getUserItems(userType));

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          className="menu-style"
          style={{ marginTop: "7vh" }}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.key === 3 ? (
                <button className="logout-btn" onClick={() => logOutUser()}>Logout</button>
              ) : (
                <Link to={item.link}>{item.label}</Link>
              )}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
          backgroundColor: "#F8F8F8",
        }}
      >
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
