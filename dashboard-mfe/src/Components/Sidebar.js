import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Menu
      mode="vertical"
      defaultSelectedKeys={["dashboard"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="dashboard" icon={<DashboardOutlined />} onClick={() => navigate("/dashboard")}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="products" icon={<ShoppingCartOutlined />} onClick={() => navigate("/view-products")}>
        Products
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />} onClick={() => navigate("/profile")}>
        Profile
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
